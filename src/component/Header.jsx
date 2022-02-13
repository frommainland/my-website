import React from 'react'
import './Header.css'


function Stat({name, number}) {
    return (
        <div className='stat-item'>
            <div className='stat-item-text'>{name}</div>
            <div className='stat-item-number'>{number}</div>
        </div>
    )
}

export default function Header() {
    return (
        <div className='header'>
            <div className='logo'>杨硕的项目存档</div>
            <div className='stat'>
                <Stat name='项目' number='10'/>
                <Stat name='故事' number='2'/>
                <Stat name='个人' number='1'/>
            </div>
        </div>
    )
}
