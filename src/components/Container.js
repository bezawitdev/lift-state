import {useState , useEffect} from 'react';
import {getGiphy} from '../services/Constants';
import Map from "./Map";
import Input from './Input';
import Button from './Button'



function Container(){
    const[pic,setPic]=useState([])
    const[gif,setGif]=useState([])

    const giphyApi = async()=>{
    let res = await getGiphy(gif)
    console.log(res)
    
    setPic(()=>{
        let output=res.data.data;
        return output;
    })


    }
    console.log('pic',pic)
  

    return(
        <div>
        <div className='user'>
        <Input fun={(e)=>setGif(e.target.value)} />
        <Button onClick={giphyApi}/>
        </div>
        <div>
        <Map mapping={pic}/>
        </div>
        </div>
    )
}

export default Container
