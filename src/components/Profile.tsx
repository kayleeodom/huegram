// import kaylee from '/kaylee.jpg'
import { FaHeart } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import './Palette.css'
import UserObject from "../UserObject";

// interface ProfileProps {
//   currentUser: UserObject;
//   addNewHue: (color: string) => void;
// }

const Profile = ({currentUser}: {currentUser: UserObject}) => {
  if (!currentUser) {
    return <p>Loading...</p>
  }

  const renderPalette = () => {
    return (
      <div className="palette">
        {currentUser.hues.map((hue, index) => (
          <div key={index} style={{ backgroundColor: hue.color }}></div>
        ))}
      </div>
    );
  };

  return (
    <div className='flex flex-col w-35% justify-evenly items-center text-white h-screen'>
      <div className='text-center items-center'>
        {renderPalette()}
        <h1 className='text-2xl pt-2'>@{currentUser.username}</h1>
      </div>

      <div className='text-center'>
        <p className='text-6xl'>{currentUser.likes}</p>
        <div className="flex flex-row items-center gap-2">
          <div className="pt-1 text-2xl"><FaHeart /></div>
          <h1 className='text-3xl'>Likes</h1>
        </div>
      </div>

      <div className='text-center items-center'>
        <p className='text-6xl'>{currentUser.hues.length}</p>
        <div className="flex flex-row items-center gap-2">
          <div className="pt-1 text-2xl"><FaHashtag /></div>
          <h1 className='text-3xl'>hues</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile