import HueObject from "../HueObject";
import { FaHeart} from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";


interface Props {
  hue: HueObject,
  toggleLike?: (id?:number) => void
}

const Hue = ({hue, toggleLike}: Props) => {

  const r_num = Number("0x" + hue.color.slice(1, 3));
  const g_num = Number("0x" + hue.color.slice(3, 5));
  const b_num = Number("0x" + hue.color.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";

  const [isLiked, setIsLiked] = useState(hue.isLiked);

  const handleLikeClick = () => {
    toggleLike && toggleLike(hue.id)
    setIsLiked(!isLiked);
  }
  
// the individual cards themselves
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between"
      style={{ backgroundColor: hue.color, color: text_color }}
    >
      <div className="pt-2 flex p-3 justify-between">
        <p className={`text-2xl opacity-80`}>{hue.color}</p>
        <button className="text-2xl " onClick={handleLikeClick}>
          {isLiked ? <FaHeart/> : <FaRegHeart />}
        </button>
        {/* <div className="flex right-0">
        </div> */}
      </div>

      {/* <button onClick={ ()=> toggleLike(hue.id)}>Like/Unlike</button> */}

      {/* {hue.isLiked && <span>HEART</span>}
      {!hue.isLiked && <span>NO HEART</span>} */}

      {/* {hue.isLiked ? <span>HEART</span> : <span>NO HEART</span>} */}

      <div className="bg-black text-white flex  w-full text-center p-4 justify-between rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>
        <div className="flex flex-row">
          <p id="postLikes" className="text-xl pr-2">0</p>
          <div className="pt-2"><FaHeart /></div>
        </div>
      </div>
    </div>
  );
};

export default Hue;
