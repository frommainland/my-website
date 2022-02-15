import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [mousePosition, setMousePostion] = useState({ x: null, y: null })
    useEffect(() => {
        const mouseMoveHandler = (e) => {
            const { clientX, clientY } = e
            setMousePostion({ x: clientX, y: clientY })
        }
        document.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        mousePosition
    )
}

export default useMousePosition