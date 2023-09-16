import { useState } from 'react';
import './header.scss';
import data from '../../data';
import { Link } from 'react-router-dom';

const Header=()=>{

    const [value, setValue] =useState('');

    const search=(e)=>{
        setValue(e.target.value);
    }

    return(
        <div className='header'>
            <div className="compass">
                <span>
                    Student
                </span>
                <div className='logo'>
                    
                </div>
                <span>
                    Compass
                </span>
            </div>
            <div className="searchBar">
                <div className='searchBox'>
                    <input type='search' className='search' onChange={search} placeholder='Search...'/>
                    <div className='searchIconBack'><div className='searchIcon'></div></div>
                </div>
                <div className='resultBoxCover' style={{height: value.length === 0 ? 0 : '200px'}}>
                    <div className='resultBox'>
                        {data
                        .filter((item)=>{
                            if(value === ''){
                                return
                            }
                            return item.title.toLowerCase().includes(value.toLowerCase())
                        })
                        .map((item)=>{
                            return (
                                <Link to={`/${item.url}`}>
                                    <div>{item.title}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Header;