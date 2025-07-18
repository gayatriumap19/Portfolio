import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { SiMysql, SiCplusplus } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </div>
                <div className="p-4">
                    <SiExpress className="text-7xl text-gray-400" />
                </div>
                <div className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-600" />
                </div>
                <div className="p-6">
                    <SiMysql className="text-7xl text-[#00758F]" />
                </div>
                <div className="p-4">
                    <SiCplusplus className="text-7xl text-[#5c85d6]" />
                </div>
            </div>
        </div>
    ); 
};

export default Technologies;