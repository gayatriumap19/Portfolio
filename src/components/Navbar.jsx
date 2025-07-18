import { FaGithub, FaLinkedin, FaSquare } from "react-icons/fa"
import logo from "../assets/gayatriLogo2.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
    return (
       <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src =  {logo} className="mx-2" width=
                {150} height={200} alt="Logo"/>
            </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a 
                href="https://www.linkedin.com/in/gayatri-umap/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin/>
            </a>

            <a 
                href="https://github.com/gayatriumap19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub/>
            </a>

            <a 
                href="https://x.com/GayatriUmap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <FaSquareXTwitter/>
            </a>
        </div>
       </nav>
    )
}

export default Navbar