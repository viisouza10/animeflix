import axios from 'axios';
import cheerio from 'cheerio';
import Episodes from '../models/Episodes';
const keyThemovieDb = 'a90f0a1ea3df4d0b84213fc1170f6e81';
const language = 'pt-br';

class GenerateEPController {
  
  async store(req, res) {
    const {urlbase,id_anime} = req.body
    console.log(`url base ${urlbase}`)
    console.log(`id_animee ${id_anime}`)
    let urlNext;
    let temp = 1;
    let ep = 1;
    async function findEp(url){
      console.log(`temp${temp -1}   ==== ep${ep}`)
      console.log(`url${url}`)
      await axios.get(url).then(async crawlerRes =>{
        const $ = await cheerio.load(crawlerRes.data);
        urlNext = await $('.post-botoes ul li a')[2].attribs.href;
        if($('source')[0]){

          const url = await $('source')[0].attribs.src;
          
          
          
          
          await Episodes.update({
            url,
          },{
            where:{
              season_number:temp -1,
              episode_number:ep,
              id_themoviedb:id_anime
            }
          });
          ep++;
          await findEp(urlNext)
          if(urlNext  && urlNext != 'javascript:;') {
            
            
          }else{
            await findTemp(`${urlbase}-${temp}/`); 
          }
        }else{
          await findEp(urlNext)
        }
        
      }).catch(async err => {
        console.log(err)
        await findEp(url)
      })
      
    }
    
    async function findTemp(urltemp){
      await axios.get(urltemp).then(async crawlerTemp =>{
        temp++;
        ep = 1;
        const $ = await cheerio.load(crawlerTemp.data);
        const firsturl = await $('.episodios li a')[0].attribs.href;
        console.log(`firsturl${firsturl}`)
        if(firsturl)await findEp(firsturl);
        else return res.status(400).json({ message: 'fim4' })
      }).catch(err =>{
        return res.status(400).json({ message: 'fim3' })
      })
    }
    
    await findTemp(urlbase).catch(err =>   res.status(400).json({ message: 'fim5' }))
    // await findEp(url);




  }
}

module.exports = new GenerateEPController();
