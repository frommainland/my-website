import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavButtonContext } from '../context/NavButtonContext'
import './Nav.css'
import { smooth } from '../helper/easing'




const Nav = () => {

    const [tab, setTab] = useState(0)
    // const { articleClicked, setArticleClicked } = useContext(NavButtonContext)
    // const { projectClicked, setProjectClicked } = useContext(NavButtonContext)

    const { articleClicked } = useContext(NavButtonContext)
    const { projectClicked } = useContext(NavButtonContext)



    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <motion.div
                className='nav-wrap'
                animate={{
                    bottom: articleClicked || projectClicked ? -100 : 40
                }}
                transition={{
                    ease: smooth
                }}
            >
                <Link to='/work'>
                    <motion.div
                        className='nav-item-wrap'
                        onClick={() => {
                            setTab(0)
                        }}>
                        {tab === 0 && (
                            <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                        )}
                        <div className={tab === 0 ? "nav-text text-selected" : "nav-text"}>
                            存档
                        </div>
                    </motion.div>
                </Link>
                <Link to='/posts'>
                    <motion.div className='nav-item-wrap' onClick={() => setTab(1)}>
                        {tab === 1 && (
                            <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                        )}
                        <div className={tab === 1 ? "nav-text text-selected" : "nav-text"}>
                            记录
                        </div>
                    </motion.div>
                </Link>
                <Link to='/about'>
                    <motion.div className='nav-item-wrap' onClick={() => setTab(2)}>
                        {tab === 2 && (
                            <motion.div className='nav-underline' layoutId='nav-underline'></motion.div>
                        )}
                        <div className={tab === 2 ? "nav-text text-selected" : "nav-text"}>
                            关于我
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    )
}

export default Nav