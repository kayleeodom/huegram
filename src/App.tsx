import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { SetStateAction, useEffect, useState } from 'react'
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
    const updatedHue = {
      ...hue,
      likes: isLiked ? hue.likes : Math.max(0, hue.likes),
      isLiked: isLiked,
    };

    return updatedHue;
  }

  return hue;
};

const updateLikesForHue = (isLiked: boolean, id?: number) => {
  let currentUserUpdated = false;

  setHues((prevHues) => {
    return prevHues.map((hue) => {
      if (hue.id === id && hue.username === currentUser.username) {
        const updatedHue = updateLikesForSingleHue(isLiked, hue);

        // Check if the post with username 'kodom' is being liked
        if (updatedHue.username === 'kodom' && updatedHue.isLiked !== hue.isLiked && !currentUserUpdated) {
          // Update likes for the current user only if it's a post by 'kodom'
          setCurrentUser((prevUser) => ({
            ...prevUser,
            likes: prevUser.likes + (isLiked ? 1 : -1),
          }));
          currentUserUpdated = true;
        }

        return updatedHue;
      }
      return hue;
    });
  });
};


// Search Section
const [searchText, setSearchText] = useState('');

// Filter hues based on the search text
const filteredHues = hues.filter((hue) =>
  hue.color.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <div className='flex bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 h-screen fixed'>
      <div className='flex flex-col'>
        <div className='fixed top-0 z-1 w-full'><Menu onSearchChange={(text: SetStateAction<string>) => setSearchText(text)}/></div>
        <div className=' mt-40 mr-24'><Main hues={filteredHues} addHue = {addNewHue} toggleLike = {toggleLikeForHue} likeHue={likeHue} unlikeHue={unlikeHue}/></div>

      </div>

      <div className='static right-0 pr-20 pt-12'><Profile currentUser={currentUser}/></div>
    </div>
  )
}

export default App
