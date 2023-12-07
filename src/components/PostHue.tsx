import { useState } from 'react'
import Hue from './Hue'

// where we input a new post and can see what it looks like

interface Props{
    addHue: (color:string)=> void;
    toggleLike?: (id?:number) => void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-col w-fit h-fit p-6 justify-evenly gap-8 border-2 rounded-2xl'>

        <div className='flex flex-col w-full p-4 gap-4' style={{backgroundColor: color}}>
            <input type="text" className='rounded p-2' name="hue" id="hue" defaultValue={'#'} onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className="btn bg-white text-cyan-950 p-2 rounded text-center">Post</a>
        </div>

        <div><Hue hue={{ color, username: "kaylee", likes: 3, isLiked: false, id: 0 }}/></div>

    </div>
  )
}

export default PostHue