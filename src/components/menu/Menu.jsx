import './menu.scss';
import AccordionMenu from '../accordionMenu/AccordionMenu';
import hamburger from '../../assets/images/hamburger.png';
import x from  '../../assets/images/x.png';
import { useState } from 'react';



const Menu=()=>{

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className='hamburger'>
                <img src={isOpen ? x : hamburger} alt='x' className='menuToggle' onClick={()=>setIsOpen(prev=>!prev)} />
            </div>
            <div className='menu' style={{left: isOpen ? 0 : '-500px'}}>
                <div className="menuStyle">
                    <div className="menuTitle">
                        
                    </div>
                    <div className='menuOptions'>
                        <span>
                            Tests
                        </span>
                            <AccordionMenu closeMenu={()=>setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </>
        
    )

}

export default Menu;