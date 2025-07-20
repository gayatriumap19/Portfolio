// import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa"
// import { SiMysql, SiCplusplus } from "react-icons/si";
// import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

// const Technologies = () => {
//     return (
//         <div className="pb-24">
//             <h2 className="my-20 text-center text-4xl">Technologies</h2>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//                 <div className="p-4">
//                     <SiCplusplus className="text-7xl text-[#5c85d6]" />
//                 </div>
//                 <div className="p-4">
//                     <SiJavascript className="text-7xl text-yellow-400" />
//                 </div>
//                 <div className="p-4">
//                     <SiHtml5 className="text-7xl text-orange-600" />
//                 </div>
//                 <div className="p-4">
//                     <SiCss3 className="text-7xl text-blue-500" />
//                 </div>
//                 <div className="p-4">
//                     <SiMongodb className="text-7xl text-green-500" />
//                 </div>
//                 <div className="p-4">
//                     <SiExpress className="text-7xl text-gray-400" />
//                 </div>
//                 <div className="p-4">
//                     <RiReactjsLine className="text-7xl text-cyan-500" />
//                 </div>
//                 <div className="p-4">
//                     <FaNodeJs className="text-7xl text-green-600" />
//                 </div>
//                 <div className="p-6">
//                     <SiMysql className="text-7xl text-[#00758F]" />
//                 </div>
//             </div>
//         </div>
//     ); 
// };

// export default Technologies;





import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const techIcons = [
  {
    icon: <SiCplusplus className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #0057FF, #9900FF)",
  },
  {
    icon: <SiJavascript className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #f7df1e, #fca311)",
  },
  {
    icon: <SiHtml5 className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #e44d26, #ff6f61)",
  },
  {
    icon: <SiCss3 className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #264de4, #0f2027)",
  },
  {
    icon: <SiMongodb className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #4db33d, #2c6e49)",
  },
  {
    icon: <SiExpress className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #333333, #111111)",
  },
  {
    icon: <RiReactjsLine className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #61dafb, #007cf0)",
  },
  {
    icon: <FaNodeJs className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #68a063, #004d00)",
  },
  {
    icon: <SiMysql className="text-white w-10 h-10" />,
    bg: "linear-gradient(135deg, #00758F, #005377)",
  },
];

const Technologies = () => {
  return (
    <div className="pb-24 px-6 lg:px-20">
      <h2 className="my-20 text-center text-4xl font-semibold">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center lg:m-40">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="w-24 h-24"
            whileHover={{ rotateY: 180 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <div
              className="w-full h-full flex items-center justify-center clip-hexagon"
              style={{ background: tech.bg }}
            >
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
