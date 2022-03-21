import './VideoBookmark.css'
import React, { useContext } from 'react'
import { MouseContext } from '../context/MouseContext'


const VideoBookmark = ({ Title, Href, LinkText, Background }) => {
    // Background only for name of the image, no need for relative path, it is a workaround
    const { cursorChangeHandler } = useContext(MouseContext)

    return (
        <a href={Href} style={{
            textDecoration:'none'
        }}>
            <div className='about-video-bookmark'
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}>
                <img className='about-video-thumbnail' src={require(`../image/${Background}.jpg`)}
                />
                <div className='about-video-text-wrap'>
                    <p id='about-video-title'>{Title}</p>
                    <p id='about-video-linkText'>{LinkText}</p>
                </div>
            </div>
        </a>
    )
}

export default VideoBookmark