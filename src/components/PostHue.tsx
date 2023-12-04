import { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void;
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-row w-4/5 p-4 justify-evenly gap-8 border-dashed border-4'>

        <div className='flex flex-col w-2/5 p-4 gap-4 border-4 justify-evenly' style={{backgroundColor: color}}>
            <input type="text" name="hue" id="hue" onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className="btn bg-white text-cyan-950 text-center">Post</a>
        </div>

        <div>
          <Hue hue={ {color, username:"kaylee", likes:3, isLiked: false, id:0}} />
        </div>


    </div>
  )
}

export default PostHue