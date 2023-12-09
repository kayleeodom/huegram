// import { useEffect, useState } from 'react'
import HueObject from '../HueObject'
import Hue from './Hue'
import PostHue from './PostHue'


interface Props {
    hues: HueObject[];
    addHue: (color:string) => void;
    toggleLike?: (id?:number) => void;
    updateLikes?: (isLiked: boolean) => void;
}

const Main = ({hues, addHue, toggleLike, updateLikes} : Props) => {
  // const [filteredHues, setFilteredHues] = useState<HueObject[]>(hues)

  // useEffect(() => {
  //   setFilteredHues(hues)
  // }, [hues])

  return (
    <div className='flex flex-row'>
      <div className='mt-[2rem] ml-14 fixed left-0'>
        <PostHue addHue={addHue}/>
      </div>

      <div className='flex flex-row ml-96 relative h-[36rem] flex-wrap max-w-screen-2xl justify-evenly p-8 gap-8 overflow-y-auto'>
        {hues.map( (hue) => (  
            <Hue hue={hue} toggleLike={toggleLike} updateLikes={updateLikes}/>
        ))}
      </div>

    </div>
  )
}

export default Main