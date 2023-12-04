// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HueObject from "../HueObject";


interface Props {
  hue: HueObject;
}

const Hue = (props: Props) => {

  const r_num = Number("0x" + props.hue.color.slice(1, 3));
  const g_num = Number("0x" + props.hue.color.slice(3, 5));
  const b_num = Number("0x" + props.hue.color.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";
  

  // const backgroundColor: PossibleColors = props.hue.color as PossibleColors;
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color, color: text_color }}
    >
      <p className={`text-2xl opacity-80`}>{props.hue.color}</p>
      {/* <FontAwesomeIcon icon={faHeart} className="text-3xl" /> */}


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
