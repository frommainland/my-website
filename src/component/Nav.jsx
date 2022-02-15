import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'



const Nav = () => {

    const [tab, setTab] = useState(0)

    return (
        <div className='nav-wrap'>
            <motion.div className='nav-item-wrap' onClick={() => setTab(0)}>
                {tab === 0 && (
                    <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                )}
                <div className={tab === 0 ? "nav-text text-selected" : "nav-text"}>
                    <Link to='/'>存档</Link>
                </div>
            </motion.div>
            <motion.div className='nav-item-wrap' onClick={() => setTab(1)}>
                {tab === 1 && (
                    <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                )}
                <div className={tab === 1 ? "nav-text text-selected" : "nav-text"}>
                    <Link to='/post'>记录</Link>
                </div>
            </motion.div>
            <motion.div className='nav-item-wrap' onClick={() => setTab(2)}>
                {tab === 2 && (
                    <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                )}
                <div className={tab === 2 ? "nav-text text-selected" : "nav-text"}>
                    <Link to='/about'>关于我</Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Nav