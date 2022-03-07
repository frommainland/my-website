import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Stat({ name, number }) {
    return (
        <div className='stat-item'>
            <div className='stat-item-text'>{name}</div>
            <div className='stat-item-number'>{number}</div>
        </div>
    )
}

export default function Header() {

    const animateUp = { y: -10 }

    return (
        <div className='header'>
            <Link to='/work'>
                <div className='logo'>
                    <motion.div className='logo-phone' whileHover={animateUp}>
                        <div></div>
                    </motion.div>
                    <motion.div className='logo-web' whileHover={animateUp}>
                        <div></div>
                    </motion.div>
                    <motion.div className='logo-circle' whileHover={animateUp} />
                </div>
            </Link>
            <div className='stat'>
                <Stat name='项目' number='10' />
                <Stat name='文章' number='2' />
                <Stat name='个人' number='1' />
            </div>
        </div>
    )
}
