import { useRef,useState } from 'react'
import logo from './images/download1.jpg'
import Api from './Api';
function Main() {
     const[textarea,settextarea] = useState("Today's day was ..");
     const inputRef = useRef(null);
     const [image,setimage] = useState(null);
   

    const handlechange = (event)=>{
        settextarea(event.target.value)
    }
        
        
        const handleimage = ()=>{
        inputRef.current.click();
        }
       const handleimagechange =(event)=>{
        const file = event.target.files[0];
        console.log(file); 
        if(file){
            setimage(file);
        }

       };

  return (
    <div>
        <form className='md:flex gap-10 '>
            
            <div onClick={handleimage}>
            <label className='m-auto text-xl  p-3'>Picture of the day</label>
            <br/>
            {/* <img width={100} src={logo} alt='img' /> */}
             {image ?
                   <img 
                    className=' m-auto mb-10 h-auto w-full md:w-[60vw]   object-contain'
                    src={URL.createObjectURL(image)}
                     alt='img'
                     />  //to add image we have to add its url instead of using image from useState
            :<img 
            className=' m-auto mb-10 w-full h-[50vh] md:w-[30vw]  object-contain'
            src={logo} 
            width={500}
            alt='img' />}
            <input type='file' ref={inputRef} onChange={handleimagechange} style={{display:"none"}} id='image' name='imageupload'
           />
              
            </div>

         
         <textarea
         className='md:w-4/5 w-full h-[50vh] text-lg rounded'
         id="mytextarea"
         value={textarea}
         onChange={handlechange}
         style={{backgroundColor:'grey'}}
         placeholder='write anything you want '
         >

         </textarea>
     
        </form>

            <Api textarea={textarea} />
    </div>
    
  )
}

export default Main;
