import React from 'react'
import { useState, useEffect } from 'react'
import './CodeExample.scss'
import Slider from './Slider'

const CodeExample = ({ children, initValue }) => {
	const [sliderValue, setSliderValue] = useState(initValue)

	useEffect(() => {
		setSliderValue(initValue)
	}, [initValue])


	return (
		<div className="code-interactive">
			{children}

			{/* <Top />  element*/}
			{/* <div className="top">
				<div className="slider-wrap">
					<label htmlFor="slider" className="slider-text">
						<p>{sliderValue}px</p>
						<h4>字体大小</h4>
					</label>
					<input
						type="range"
						id="slider"
						min="12"
						max="60"
						value={sliderValue}
						onChange={(e) => setSliderValue(e.target.value)}
					/>
				</div>
				<div className="constElement-wrap">
					<p>¹ 1em / ² 24px</p>
					<h4>button padding</h4>
				</div>
			</div> */}

			{/* hr element */}
			{/* <hr /> */}

			{/* bottom element */}
			{/* <div className="bot">
				<button
					style={{
						padding: `${sliderValue}px`,
						fontSize: `${sliderValue}px`,
					}}>
					¹ 自适应按钮
				</button>
				<button
					style={{
						padding: `24px`,
						fontSize: `${sliderValue}px`,
					}}>
					² 固定padding按钮
				</button>
			</div> */}
		</div>
	)
}

export default CodeExample
