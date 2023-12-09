import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'
import HueObject from './HueObject';
import UserObject from './UserObject';

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);
  const [currentUser, setCurrentUser] = useState<UserObject>({
    username:'',
    likes:0,
    hues: [],
  })

  useEffect( ()=>
  {
    fetch('./user.json')
    .then(res => res.json() )
    .then(data => setCurrentUser(data))
  }, [])

  useEffect( ()=>
  {
    fetch('./hues.json')
    .then( res => res.json() )
    .then( data => setHues(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
      // console.log(color)
      const currentUserObject = currentUser!
      const newHue = {color, username: currentUserObject.username, id: hues.length+1 , likes:0, isLiked:false};
      //updates
      const updatedUser = {
        ...currentUserObject,
        hues: [...currentUserObject.hues, newHue]
      }
      // const newHue = {color, username: currentUserObject.username, id: hues.length+1 , likes:0, isLiked:false};
      setCurrentUser(updatedUser)
      setHues( [newHue, ...hues ] );
  }

  const toggleLikeForHue = (id?:number) => 
  {
      // generate new array of hues with modified hue
      const newHues = [...hues]
      const hue = newHues.find((h) => h.id == id )
      if(hue){
        hue.isLiked = !hue.isLiked
        setHues( newHues )
        updateLikes(hue.isLiked)
      }
  }

  const updateLikes = (isLiked: boolean) => {
    const increment = isLiked ? 1 : -1;
    const updateLikes = hues.reduce((totalLikes, hue) => totalLikes + (hue.username === "kodom" && hue.isLiked ? increment : 0), currentUser.likes)
    const updatedUser = {...currentUser, likes: updateLikes}
    setCurrentUser(updatedUser)
  }

  return (
    <div className='flex bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 h-screen fixed'>
      <div className='flex flex-col'>
        <div className='fixed top-0 z-1 w-full'><Menu /></div>
        <div className=' mt-40 mr-56'><Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeForHue} updateLikes={updateLikes}/></div>

      </div>

      <div className='fixed right-0 pt-12'><Profile currentUser={currentUser}/></div>
    </div>
  )
}

export default App
