import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

import './style.css';

const Footer = () => {
    return (
        <footer>
           <div className="social--medias">
                <div className="social--medias--icons">
                    <a href="https://github.com/EmersonSousa15">
                        <AiFillGithub/>
                    </a>
                </div>
                <div className="social--medias--icons">
                    <a href="https://www.linkedin.com/in/emerson-sousa-62387623b/">
                        <AiFillLinkedin/>
                    </a>
                </div>
           </div>
           <div className='credits'>
                <p>&copy; Emeson Sousa - 2022</p>
           </div>
        </footer>
    )
}

export default Footer;