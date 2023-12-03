
interface HueObject {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

// type PossibleColors = 'black' | 'white';

// function getTextColor(backgroundColor:string): PossibleColors
// {
//   return "black";
// }

const Hue = (props: Props) => {

  // const backgroundColor: PossibleColors = props.hue.color as PossibleColors;
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.color }}
    >
      <p className={`text-2xl opacity-80`}>{props.hue.color}</p>


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
