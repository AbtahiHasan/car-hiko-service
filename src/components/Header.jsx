import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.svg'
import { BsHandbag, BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <header>
            <section className='ui-container flex justify-between items-center mt-3'>

            <Link to="/"><img className='h-[35px] md:h-[45px]' src={logo} alt="logo" /></Link>
            <nav>
                <ul className='flex gap-3 items-center'>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
                    <li><NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink></li>
                    <li><NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
                </ul>
            </nav>

            <ul className='flex gap-3 items-center'>
                <li><BsHandbag/></li>
                <li><BsSearch/></li>
                <li><Link className='btn-red-outline'>Appointment</Link></li>
            </ul>
            </section>
        </header>
    );
};

export default Header;