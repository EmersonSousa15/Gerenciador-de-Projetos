import {BsCoin} from 'react-icons/bs';
import {Link} from 'react-router-dom';

import './style.css';

const Header = () => {
    return (
        <header>
            <div className='icon--header'>
                <BsCoin />
            </div>

            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/company'>Empresa</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </ul>
        </header>
    )
}

export default Header;