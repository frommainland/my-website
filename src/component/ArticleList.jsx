import React, { useContext } from 'react'
import './ArticleList.css'
import { motion } from 'framer-motion'
import { MouseContext } from '../context/MouseContext'


const ArticleList = ({ title, time }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext)
    return (
        <motion.div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            className='article-list-wrap'
            whileHover={{
                backgroundColor: 'rgba(255, 255, 255, .1)'
            }}>
            <h1 className='article-title'>{title}</h1>
            <h1 className='article-time-stamp'>{time}</h1>
        </motion.div>
    )
}

export default ArticleList