import React, { useState } from 'react'
import Hue from './Hue'

// where we input a new post and can see what it looks like

interface Props{
    addHue: (color:string)=> void;
    toggleLike?: () => void;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
    isLiked: boolean
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('#')
    const maxLength = 7; // desired length

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Check if the input value exceeds the max length
      let inputValue = event.target.value;

      // Remove '#' from the input value before checking length
      if (inputValue.startsWith('#')) {
        inputValue = inputValue.substring(1);
      }

      // Check if the input value exceeds the maximum length
      if (inputValue.length <= maxLength) {
        setColor(`#${inputValue}`);
      }
    }

    const handlePostClick = () => {
      props.addHue(color);
      if (props.toggleLike) {
        props.toggleLike();
      }
      // Use the provided isLiked prop if available, otherwise default to true
      props.setIsLiked(props.isLiked !== undefined ? props.isLiked : true);
    };

  return (
    <div className='flex flex-col w-fit h-fit p-6 justify-evenly gap-8 border-2 rounded-2xl'>

        <div className='flex flex-col w-full p-4 gap-4' style={{backgroundColor: color}}>
            <input type="text" className='rounded p-2' name="hue" id="hue" maxLength={maxLength} value={color} onChange={handleChange}/>
            <a href="#" onClick={handlePostClick} className="btn bg-white text-cyan-950 p-2 rounded text-center">Post</a>
        </div>

        <div><Hue hue={{ color, username: "kodom", likes: 0, isLiked: false, id: 0}} isLiked={props.isLiked} toggleLike={props.toggleLike}/></div>

    </div>
  )
}

export default PostHue