import React from 'react'
import { motion } from 'framer-motion'

const linkColor = '#00AE65'

const ALink = ({ href, title, text }) => {
    return (
        <motion.span style={{ display: 'inline-block' }} whileHover={{ color: linkColor }}>
            <a style={{
                textDecoration: 'underline',
                fontWeight: 700
            }} href={href} title={title}>
                {text}
            </a>
        </motion.span >
    )
}

export default ALink