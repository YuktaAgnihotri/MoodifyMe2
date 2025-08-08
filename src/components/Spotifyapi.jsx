import { useState,useEffect } from "react";
// pro tip if you directly call checkapi it will re-render on every change and we want it to change only with emotion so
//for asynchronus programming in react "useEffect is used" syntax useEffect(()=>{...},[event]) in this is it emotion
//and a try catch block is added to check api loading or not 

function Spotifyapi({emotion}){
//    const [songplay,setsong] = useState(null);
    // const [photo,setphoto] = useState(null);
    const [songs, setSongs] = useState([]);

 const clientId = import.meta.env.VITE_API_TOKEN2;

  useEffect(()=>{
    async function checkApi(emotion,clientId){
        try{
            const response = await fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&limit=5&tags=${emotion}&audioformat=mp31`)

            const data = await response.json();
             console.log(data);
          if(data.results && data.results.length>0){
          setSongs(data.results);
          }else{
            setSongs([]);
          }
        }catch(e){
            console.log("error fetching songs",e);
            setSongs([]);
        }
    }
    if(emotion){
        checkApi(emotion,clientId);
    }
   
},[emotion,clientId]);
   
//    const handlechange = ()=>{
//      checkApi(emotion,clientId);
//    }
  
//    const emotion = 'happy';
   
   
   return (
    <ul>
      {songs.map((item, index) => (
        <li key={index}>
          <h3 className="font-extrabold text-[25px] p-2 mt-4">{item.name} – {item.artist_name}</h3>
          <div className="flex flex-wrap w-full gap-10">
           <div className="w-full lg:w-1/2">
                <img  className="m-auto" src={item.album_image} alt="Album Cover" width={150} />
          <audio  className="m-auto" controls src={item.audio}>
            Your browser does not support the audio element.
          </audio>
           </div>
          </div>
         
        </li>
      ))}
    </ul>
  );
}

export default Spotifyapi;