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
      const newHue = {color, username: currentUserObject.username, id: hues.length+1 , likes:0, isLiked:true};
      //updates
      const updatedUser = {
        ...currentUserObject,
        hues: [...currentUserObject.hues, newHue]
      }
      // const newHue = {color, username: currentUserObject.username, id: hues.length+1 , likes:0, isLiked:false};
      setCurrentUser(updatedUser)
      setHues( [newHue, ...hues ] );
  }

  const toggleLikeForHue = (id?: number) => {
    const hue = hues.find((h) => h.id === id);

    if (hue) {
      if (hue.isLiked) {
        unlikeHue(id);
      } else {
        likeHue(id);
      }
    }
  }

  const likeHue = (id?: number) => {
    updateLikesForHue(true, id);
  };
  
  const unlikeHue = (id?: number) => {
    updateLikesForHue(false, id);
  };
  
// Function to update the likes for a specific hue
const updateLikesForSingleHue = (isLiked: boolean, hue: HueObject) => {
  if (hue.isLiked !== isLiked) {
    return {
      ...hue,
      likes: isLiked ? hue.likes + 1 : Math.max(0, hue.likes - 1),
      isLiked: isLiked,
    };
  }
  return hue;
};

// Function to update likes for the current user
const updateLikesForCurrentUser = (isLiked: boolean) => {
  const increment = isLiked ? 1 : -1;

  const updatedUser = {
    ...currentUser,
    likes: currentUser.likes + increment,
  };

  setCurrentUser(updatedUser);
};

// Combined function to update likes for a specific hue and the current user
const updateLikesForHue = (isLiked: boolean, id?: number) => {
  const updatedHues = hues.map((hue) => {
    if (hue.id === id && hue.username === currentUser.username) {
      return updateLikesForSingleHue(isLiked, hue);
    }
    return hue;
  });

  updateLikesForCurrentUser(isLiked);

  setHues(updatedHues);
};


  return (
    <div className='flex bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 h-screen fixed'>
      <div className='flex flex-col'>
        <div className='fixed top-0 z-1 w-full'><Menu/></div>
        <div className=' mt-40 mr-56'><Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeForHue} likeHue={likeHue} unlikeHue={unlikeHue}/></div>

      </div>

      <div className='fixed right-0 pt-12'><Profile currentUser={currentUser} /></div>
    </div>
  )
}

export default App
