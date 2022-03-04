import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavButtonContext } from '../context/NavButtonContext'
import './PostCloseButton.css'
import { motion } from 'framer-motion'
import { smooth, flow, bouncy } from '../helper/easing'

const PostCloseButton = () => {
    let navigate = useNavigate()
    const { articleClicked, setArticleClicked } = useContext(NavButtonContext)

    return (
        <motion.div
            className='post-close-button-layout-fix'
            animate={{
                bottom: articleClicked ? 112 : -72,
                transition: {
                    ease:flow
                }
            }}>
            <motion.div
                layout
                transition={{
                    ease: flow,
                }}
                whileHover={{
                    width: 108,
                    height: 108
                }}
                className='post-close-button-wrap'
                onClick={() => {
                    navigate('/posts')
                    setArticleClicked(false)
                }}>
                <motion.div layout>
                    <div className='post-close-button-stroke' />
                    <div className='post-close-button-stroke' />
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default PostCloseButton