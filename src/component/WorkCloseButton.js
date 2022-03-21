import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavButtonContext } from '../context/NavButtonContext'
// workclosebutton shares same css with postclosebutton, need time to consolidate these buttons into one
import './PostCloseButton.css'
import { motion } from 'framer-motion'
import { flow} from '../helper/easing'



const WorkCloseButton = () => {
    let navigate = useNavigate()
    const { projectClicked, setProjectClicked } = useContext(NavButtonContext)

    return (
        <motion.div
            className='post-close-button-layout-fix'
            animate={{
                bottom: projectClicked ? 52 : -72,
                transition: {
                    ease: flow
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
                    navigate('/work')
                    setProjectClicked(false)
                }}>
                <motion.div layout>
                    <div className='post-close-button-stroke' />
                    <div className='post-close-button-stroke' />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default WorkCloseButton