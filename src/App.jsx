
import './App.css'
import Api from './components/Api'
import Main from './components/madeform'
import Spotifyapi from './components/Spotifyapi'
function App() {

  return (
   <div className='w-full h-full ' >
   <h1 
    className='m-auto bg-blue-400  p-5   mt-[-21px] text-5xl  md:text-5xl font-extrabold tracking-tighter font-family: var(--font-serif) rounded bg-gradient-to-r from-pink-500 to-purple-900 text-transparent bg-clip-text'>Moodify Me </h1>
    <p className='text-netural-200 text-sm tracking-wide mt-[-10px] mb-10 font-bold mb-10'>Snap  write feel the vibe ~ </p>
    <Main/>
   <Spotifyapi/>
   </div>
  )
}

export default App
