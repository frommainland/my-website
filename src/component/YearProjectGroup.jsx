import React from 'react'
import './YearProjectGroup.css'

function Project({ name, company, tag1, tag2 }) {
    return (
        <div className='project-wrapper'>
            <h1 className='project-name'>{name}</h1>
            <div className='project-info'>
                <h1 className='project-company'>{company}</h1>
                <div className='project-tagWrapper'>
                    <span className='project-tag'>{tag1}</span>
                    <span className='project-tag'>{tag2}</span>
                </div>
            </div>
        </div>
    )
}

export default function YearProjectGroup({ children, year }) {
    return (
        <div className='project-group-wrapper'>
            <h1 className='project-year'>{year}</h1>
            {children}
            {/* <Project name='森林里的响声' />
            <Project /> */}
            <div className='project-ending'></div>
        </div>
    )
}
