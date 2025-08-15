import { useState } from "react";
import Spotifyapi from "./Spotifyapi";

function Api({textarea}){

  console.log(import.meta.env)
   const [emotion, setemotion] = useState('');
        async function tokenValid(token,inputtext){
       
        const response = await fetch(
  "https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base",
  {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,   //The data is fetched not from internet but from my profile on hugging face which has a token 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: inputtext })   //{} are used to call variable in return here you can  directly use variable
  }                                               //input raw string no {}ok 
);
   
const array = await response.json();   // response.json() returns promise so use await 
// console.log(array);
const topEmotion = array[0][0].label;  //array gives nested array so used [][] 
 console.log(topEmotion);
  setemotion(topEmotion);

}

        

 /*  const[input,setinput] = useState('your day was')
  const handlechange = (event)=>{
    setinput(event.target.value);
 }*/

// const input = "its been a long a day i was bored and got happy when i was a puppy it was nice ";
   const hugtoken = import.meta.env.VITE_API_TOKEN;

  // tokenValid(hugtoken,textarea)
 const handleClick = ()=>{
   tokenValid(hugtoken,textarea)
 }

   return(
    <>
   {/* <form action="submit" >
        <input type="text" value={input} onChange={handlechange}
        className="bg-amber-50 p-4 " 
        row={20}
        column = {40} />
        </form>*/}

<button onClick={handleClick} className="bg-blue-800 p-3  rounded full text-bold text-lg text-white ">analyze the Text</button> 
<h1 className="text-2xl lg:text-3xl tracking-tighter "> AI emotion analysis :{emotion}</h1>
 
 <Spotifyapi emotion ={emotion} /> 
        </>
   )
}
export default Api;
