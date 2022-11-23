import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Input({ value, min, max, set }) {
	return (
		<input
			value={value}
			type="range"
			min={min}
			max={max}
			onChange={(e) => set(parseFloat(e.target.value))}
		/>
	)
    
}

const HSLSlider = ({}) => {
	const [x, setX] = useState(0)
	return (
		<div className="webgradient-slider">
			<div
				className={`webgradient-ygb-gradient webgradient-gradient`}
			></div>
			<Input value={x} set={setX} min={0} max={180}></Input>
			<motion.div
				className="slider-anchor"
				style={{ x: `${(x / 180) * 100}%` }}
			>
				<motion.span
					style={{
						color: `hsl(${60 + x}, 100%, 50%)`,
						fontWeight: 800,
						x: x < 180 / 2 ? 0 : '-100%',
						textAlign: x < 180 / 2 ? 'left' : 'right',
					}}
				>
					H:{60 + x} <br /> S:100% <br />
					L:50%
				</motion.span>
			</motion.div>
		</div>
	)
}

export default HSLSlider
