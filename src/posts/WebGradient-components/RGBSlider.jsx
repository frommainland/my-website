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

const RGBSlider = ({ r, g, b, className, initValue }) => {
	const [x, setX] = useState(initValue)
	return (
		<div className="webgradient-slider">
			<div className={`${className} webgradient-gradient`}></div>
			<Input value={x} set={setX} min={0} max={255}></Input>
			<motion.div
				className="slider-anchor"
				style={{ x: `${(x / 255) * 100}%` }}
			>
				<motion.span
					style={{
						color: `rgb(${r - x}, ${g - x}, ${Math.abs(b - x)})`,
						fontWeight: 800,
						x: x < 255 / 2 ? 0 : '-100%',
						textAlign: x < 255 / 2 ? 'left' : 'right',
					}}
				>
					R:{r - x} <br /> G:{g - x} <br />
					B:{Math.abs(b - x)}
				</motion.span>
			</motion.div>
		</div>
	)
}

export default RGBSlider
