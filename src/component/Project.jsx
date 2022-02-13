import React from 'react'
import './YearProjectGroup.css'

export default function Project({name, company, tag1, tag2}) {
    return (
        <div className='project-wrapper'>
            <h1 className='project-name'>{name || 'hahahah'}</h1>
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