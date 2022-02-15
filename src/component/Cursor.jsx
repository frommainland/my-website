import './Cursor.css'
import useMousePosition from '../hook/useMousePosition'
import React, { useContext } from 'react'
import { MouseContext } from '../context/MouseContext'

const Cursor = () => {
    const { cursorType } = useContext(MouseContext)

    const { x, y } = useMousePosition()

    const svgPath = "M4.01925 18.7041L16.2291 18.7041L12.8695 22.0826C12.108 22.8465 11.6871 23.8654 11.6871 24.9483C11.6871 26.0309 12.108 27.0502 12.8695 27.8146C14.4413 29.3955 17.0013 29.3955 18.5739 27.8146L28.8163 17.5173C29.5795 16.7542 29.9995 15.736 29.9995 14.6499L29.9995 14.5564C29.9995 13.4733 29.5818 12.4566 28.8226 11.6939L18.5748 1.39228C17.8135 0.624192 16.8 0.200242 15.7203 0.200242C14.6421 0.200242 13.6279 0.624213 12.8724 1.38543C12.1089 2.15159 11.6865 3.17019 11.6865 4.25473C11.6865 5.33735 12.1062 6.35469 12.869 7.12316L16.2262 10.5L4.01854 10.5C1.80238 10.5 -0.000486824 12.3399 -0.000487022 14.6028C-6.12311e-05 16.8638 1.80282 18.704 4.01897 18.704L4.01925 18.7041Z"

    return (
        <>
            <div
                className={`cursor ${cursorType}`}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}>
                <svg className={`cursor-svg ${cursorType}`} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={svgPath} fill="#222222" />
                </svg>
            </div>
            <div
                className={`ring ${cursorType}`}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}></div>
        </>
    )
}




export default Cursor