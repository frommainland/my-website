import React, { useContext, useState } from 'react'
import './ArticleList.css'
import { motion } from 'framer-motion'
import { MouseContext } from '../context/MouseContext'
import { Link } from 'react-router-dom'
import { NavButtonContext } from '../context/NavButtonContext'



const ArticleList = ({ title, time, id }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext)
    const { articleClicked, setArticleClicked } = useContext(NavButtonContext)
    return (
        <Link to={`/posts/${id}`}>
            <motion.div
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                onClick={() => {
                    cursorChangeHandler("")
                    setArticleClicked(true)
                }}
                className='article-list-wrap'
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, .1)'
                }}>

                <h1 className='article-title'>{title}</h1>
                <h1 className='article-time-stamp'>{time}</h1>
            </motion.div>
        </Link>
    )
}

export default ArticleList