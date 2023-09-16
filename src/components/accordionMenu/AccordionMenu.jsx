import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './accordionMenu.scss';

const AccordionMenu = ({closeMenu}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderSubMenu = (items) => {
    return (
      <ul className={`sub-menu ${activeIndex !== null ? 'open' : ''}`}>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} onClick={closeMenu}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderAccordionItem = (item, index) => {
    return (
      <div key={index}>
        <div className="accordion-header" onClick={() => handleClick(index)}>
          <h3>{item.title}</h3>
          <span className={`icon ${activeIndex === index ? 'active' : ''}`}>
            {activeIndex === index ? '-' : '+'}
          </span>
        </div>
        {item.subMenu && renderSubMenu(item.subMenu)}
      </div>
    );
  };

  const accordionItems = [
    {
      title: 'AP Exam',
      subMenu: [
        { title: 'APUSH', url: '/apUsh' },
        { title: 'AP Lang', url: '/apLang' },
        { title: 'AP Biology', url: '/apBio' },
        { title: 'AP English Literature', url: '/apLit' },
        { title: 'AP Chemistry', url: '/apChem' },
        { title: 'AP Physics C: Electricity and Magnetism', url: '/apPhyCE' },
        { title: 'AP Physics C: Mechanics', url: '/apPhyCM' },
        { title: 'AP Macroeconomics', url: '/apMacroeconomics' },
        { title: 'AP US government', url: '/apUSgov' },
        { title: 'AP Human Geography', url: '/apHuman' },
        { title: 'AP Statistics', url: '/apStat' },
        { title: 'AP Calculus AB', url: '/apCalcab' },
        { title: 'AP Calculus BC', url: '/apCalcbc' },
        { title: 'AP Chinese Language and Culture', url: '/apChinese' },
        { title: 'AP Spanish Language and Culture', url: '/apSpanishlang' },
        { title: 'AP Spanish Literature', url: '/apSpanishlit' },
        { title: 'AP Comparative Government and Politics', url: '/apComparative' },
        { title: 'AP French Language and Culture ', url: '/apFrench' },
        { title: 'AP Microeconomics', url: '/apMicro' },
        { title: 'AP Enviromental Science', url: '/apEnvir' },
        { title: 'AP Physics 2', url: '/apPhysics2' },
        { title: 'AP European History', url: '/apEuropean' },
        { title: 'AP World History', url: '/apWorld' },
      ],
    },
    {
      title: 'SAT Prep',
      subMenu: [
        { title: 'SAT English Reading and Writing', url: '/satEng' },
        { title: 'SAT Math', url: '/satMath' },
      ],
    },

    { title: 'ЕГЭ', url: '#' ,
    subMenu: [
    { title: 'Английский', url: '#' },
    { title: 'Русский', url: '#' },
    { title: 'Математика', url: '#' }
    ]
  },
  ]

  return (
    <div className="accordion-menu">
      {accordionItems.map((item, index) => {
        return renderAccordionItem(item, index);
      })}
    </div>
  );
};

export default AccordionMenu;
