import { motion } from "framer-motion";

type CardProps = {
  quote: string;
};

const Card = ({ quote }: CardProps) => {
    console.log("card rander" ,quote)
  return (
    <motion.div
      className="quote-card w-80 rounded-none bg-sky-400 text-gray-100 m-auto min-h-96 font-semibold flex px-3 relative overflow-hidden"
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
      <img src="public/Logo_of_Twitter.svg"  className="h-16 w-16 rounded-full absolute left-[50%] top-5 transform -translate-x-1/2  transition-transform duration-500 ease-in-out" alt="" />
      <p className="m-auto text-2xl w-full text-center text-wrap">{quote}</p>

      <span className="text-gray-100 text-md font-thin absolute bottom-[4.2rem] left-2">Aug 1 2024</span>

      <div className="absolute bottom-0 left-0 h-16 border-t-2 border-gray-100 w-full text-2xl font-semibold text-gray-800 flex justify-between px-3 items-center">
        <p className=" text-gray-900 text-xl font-medium">GitHub:</p>
<p className="cursor-pointer">@sanatrath123</p>
      </div>
    </motion.div>
  );
};

export default Card;
