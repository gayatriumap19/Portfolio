import profilePic from "../assets/gayatriProfile2.jpg"
import { HERO_CONTENT } from "../constants"

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img 
                            src={profilePic} 
                            alt="Gayatri Umap" 
                            className="w-150 h-130 object-cover border border-stone-900 rounded-xl profilePic"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl">Gayatri Umap</h2>
                        <span className="bg-gradient-to-r from-stone-300
                        to-stone-600 bg-clip-text text-3xl tracking-tight
                        text-transparent">Full Stack Developer</span>
                        <p className="my-2-max-w-lg py-6 text-xl leading-relaxed
                        tracking-tighter heroDes">
                            { HERO_CONTENT }
                        </p>

                        <a 
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm
                            text-stone-800 mb-10">
                                Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero