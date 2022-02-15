import React from 'react'
import './YearProjectGroup.css'

export default function YearProjectGroup({ children, year }) {
    return (
        <div className='project-group-wrapper'>
            <h1 className='project-year'>{year}</h1>
            {children}
            <div className='project-ending'></div>
        </div>
    )
}
