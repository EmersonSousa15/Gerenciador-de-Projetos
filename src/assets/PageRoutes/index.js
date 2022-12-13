import {Routes, Route} from 'react-router-dom';

import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Empresa from '../../pages/Empresa';
import Contato from '../../pages/Contato';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/company' element={<Empresa/>} />
            <Route path='/contact' element={<Contato/>} />
        </Routes>
    )
}
export default PageRoutes