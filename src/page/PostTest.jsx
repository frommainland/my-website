import React from 'react'
import { useParams } from 'react-router-dom'

const PostTest = () => {
    const params = useParams()
    return (
        <div>{params.title}</div>
    )
}

export default PostTest