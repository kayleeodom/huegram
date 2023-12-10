// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import HueObject from '../HueObject'
import Hue from './Hue'
import PostHue from './PostHue'


interface Props {
  hues: HueObject[];
  addHue: (color:string) => void;
  toggleLike?: (id?:number) => void;
  likeHue: (id?: number) => void;
  unlikeHue: (id?: number) => void;
}

const Main = ({ hues, addHue, toggleLike, likeHue, unlikeHue }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [searchText] = useState('');
  
  const filteredHues = hues.filter((hue) =>
    hue.color.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    // Additional logic can be added here if needed
  }, [hues, searchText]);

  return (
    <div className='flex flex-row'>
      <div className='mt-[2rem] ml-14 fixed left-0'>
        <PostHue addHue={addHue} toggleLike={toggleLike} setIsLiked={setIsLiked} isLiked={isLiked}/>
      </div>

      <div className='flex flex-row ml-96 relative h-[36rem] flex-wrap max-w-screen-2xl justify-evenly p-8 gap-8 overflow-y-auto'>
        {[
          ...filteredHues
            .filter((hue) => hue.color.toLowerCase().includes(searchText.toLowerCase()))
            .map((hue) => (
              <Hue key={hue.id} hue={hue} toggleLike={toggleLike} likeHue={likeHue} unlikeHue={unlikeHue} isLiked={isLiked} />
            )),
          ...filteredHues
            .filter((hue) => !hue.color.toLowerCase().includes(searchText.toLowerCase()))
            .map((hue) => (
              <Hue key={hue.id} hue={hue} toggleLike={toggleLike} likeHue={likeHue} unlikeHue={unlikeHue} isLiked={isLiked} />
            )),
        ]}
      </div>

    </div>
  )
}

export default Main