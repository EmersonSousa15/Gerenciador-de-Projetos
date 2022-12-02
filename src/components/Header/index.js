import {BsCoin} from 'react-icons/bs';

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <BsCoin />

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
            </ul>
        </header>
    )
}

export default Header;