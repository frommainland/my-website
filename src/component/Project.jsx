import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MouseContext } from '../context/MouseContext'
import './Project.css'

export default function Project({ name, company, tag1, tag2, tag3, projectLink }) {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext)
    let nav = useNavigate()
    return (
        <Link to={`/Work/${projectLink}`}>
            <motion.div
                className='project-wrapper'
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => {
                    cursorChangeHandler("")
                }}>
                <h1 className='project-name'>{name || '未命名'}</h1>
                <div className='project-info'>
                    <h1 className='project-company'>{company || '未命名'}</h1>
                    <div className='project-tagWrapper'>
                        <span
                            className='project-tag'
                            style={{
                                background: `${tag1 === '网站' ? '#A259FF'
                                    : tag1 === 'APP' ? '#09CF82'
                                        : tag1 === '体验优化' ? '#FFEAA0'
                                            : tag1 === '咨询' ? '#FFB1C0'
                                                : tag1 === '从无到有' ? '#76CAFF'
                                                    : '#ADB3BC'}`
                            }}>
                            {tag1 || '未命名'}
                        </span>
                        {tag2 && (
                            <span
                                className='project-tag'
                                style={{
                                    background: `${tag2 === '网站' ? '#A259FF'
                                        : tag2 === 'APP' ? '#09CF82'
                                            : tag2 === '体验优化' ? '#FFEAA0'
                                                : tag2 === '咨询' ? '#FFB1C0'
                                                    : tag2 === '从无到有' ? '#76CAFF'
                                                        : '#ADB3BC'}`
                                }}>
                                {tag2}
                            </span>
                        )}
                        {tag3 && (
                            <span
                                className='project-tag'
                                style={{
                                    background: `${tag3 === '网站' ? '#A259FF'
                                        : tag3 === 'APP' ? '#09CF82'
                                            : tag3 === '体验优化' ? '#FFEAA0'
                                                : tag3 === '咨询' ? '#FFB1C0'
                                                    : tag3 === '从无到有' ? '#76CAFF'
                                                        : '#ADB3BC'}`
                                }}>
                                {tag3}
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link >
    )
}