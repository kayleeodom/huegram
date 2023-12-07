// import kaylee from '/kaylee.jpg'
import { FaHeart } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import './Palette.css'


const Profile = () => {
  return (
    <div className='flex flex-col w-2/5 justify-evenly items-center text-white h-screen'>

      <div className='text-center items-center'>
        <div className="palette">
          <div style={{ backgroundColor: '#ff2299'}}></div>
          <div style={{ backgroundColor: '#ff2359'}}></div>
          <div style={{ backgroundColor: '#ff2789'}}></div>
          <div style={{ backgroundColor: '#ff2339'}}></div>
          <div style={{ backgroundColor: '#ff2689'}}></div>
          <div style={{ backgroundColor: '#ff3389'}}></div>
          <div style={{ backgroundColor: '#ff2385'}}></div>
          <div style={{ backgroundColor: '#ff6987'}}></div>
          <div style={{ backgroundColor: '#ff8887'}}></div>
        </div>
        <h1 className='text-2xl pt-2'>@kodom</h1>
      </div>

      <div className='text-center'>
        <p className='text-6xl'>89</p>
        <div className="flex flex-row items-center gap-2">
          <FaHeart />
          <h1 className='text-2xl'>Likes</h1>
        </div>
      </div>

      <div className='text-center'>
        <p className='text-6xl'>47</p>
        <div className="flex flex-row items-center gap-2">
          <FaHashtag />
          <h1 className='text-2xl'>Hues</h1>
        </div>
      </div>

    </div>
  )
}

export default Profile