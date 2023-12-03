//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'

function App() {

  const [hues, setHues] = useState([]);

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });


  useEffect( ()=>
  {
    fetch('./sampleData.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser.username, id: length+1 , likes:0};
      setHues( [newHue, ...hues ] );
  }

  return (
    <div className='flex bg-slate-800 h-screen'>
      {/* <Menu /> */}
      <div className='flex flex-col'>

        <div>
          <div className='flex flex-row justify-evenly p-4 mb-4 text-center border-b-4'>
            <h1 className='border-2 rounded-full text-2xl px-6 py-4 bg-white font-bold'>#</h1>
            <h1 className='text-5xl pt-2 font-bold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text'>HueGram</h1>
            <input type='search' placeholder='Search...' className='border-2 rounded-full px-20 py-4'></input>
          </div>
        </div>
        

        <Main hues={hues} addHue = {addNewHue} />
      </div>

      <Profile />
    </div>
  )
}

export default App
