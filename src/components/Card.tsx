import { motion } from "framer-motion";
import { useState } from "react";


type CardProps = {
  quote: string;
};

const Card = ({ quote }: CardProps) => {

  const [ expand , setExpand ] = useState<boolean>(false)
  const textover = quote.length > 150 ? quote.slice(0, 150) + '...' : quote;
  
const Showmore = ()=>{
  setExpand(!expand)
}

  return (
    <motion.div
      className={`quote-card w-80 rounded-none bg-sky-400 text-gray-100 m-auto min-h-[24rem] font-semibold flex justify-center items-center px-3 relative overflow-hidden  ${expand ? 'h-[35rem] w-96' : 'h-[24rem]'} `}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["5%", "5%", "5%", "5%", "5%"], 
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    >
      <img src="/Logo_of_Twitter.svg"  className="h-16 w-16 rounded-full absolute left-[50%] top-3 transform -translate-x-1/2  transition-transform duration-500 ease-in-out" alt="" />



      <p className="m-auto text-2xl w-full text-center text-wrap">{
        expand ? quote : textover

        }
      
      {/* this is only when text is more than 150 char */}
      {/* showmore and showless logic */}
{ quote.length >150 && <span
onClick={Showmore}
className="text-gray-900 text-lg cursor-pointer border-b-2 border-gray-100">{expand ? "Show less":"Show more"}</span>}
      </p>
   

      <span className="text-gray-100 text-md font-thin absolute bottom-[4rem] left-2">Aug 1 2024</span>

      <div className="absolute bottom-0 left-0 h-[3.5rem] border-t-2 border-gray-100 w-full text-2xl font-semibold text-gray-800 flex justify-between px-3 items-center">
        <p className=" text-gray-900 text-xl font-medium">GitHub:</p>
        <a href="https://github.com/sanatrath123" target="_blank" rel="noopener noreferrer">
    <p className="cursor-pointer">@sanatrath123</p>
  </a>
      </div>
    </motion.div>
  );
};

export default Card;
