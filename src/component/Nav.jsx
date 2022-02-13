import { motion } from 'framer-motion'
import React, { useState } from 'react'
import './Nav.css'



const Nav = () => {

    const [tab, setTab] = useState(0)
    
    return (
        <div className='nav-wrap'>
            <motion.div className='nav-item-wrap' onClick={() => setTab(0)}>
                {tab === 0 && (
                    <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                )}
                <div className={tab === 0 ? "nav-text text-selected" : "nav-text"}>存档</div>
            </motion.div>
            <motion.div className='nav-item-wrap' onClick={() => setTab(1)}>
                {tab === 1 && (
                    <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                )}
                <div className={tab === 1 ? "nav-text text-selected" : "nav-text"}>记录</div>
            </motion.div>
            <motion.div className='nav-item-wrap' onClick={() => setTab(2)}>
                {tab === 2 && (
                    <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                )}
                <div className={tab === 2 ? "nav-text text-selected" : "nav-text"}>关于我</div>
            </motion.div>
        </div>
    )
}

export default Nav