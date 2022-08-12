import React from 'react'
import SliderContext from './SliderContext'
import { useContext } from 'react'

const Slider = ({ min, max, h4, p }) => {
	const { sliderValue } = useContext(SliderContext)
	const { slideToChange } = useContext(SliderContext)
	return (
		<div className="slider-wrap">
			<label htmlFor="slider" className="slider-text">
				<p>
					{sliderValue}
					{p}
				</p>
				<h4>{h4}</h4>
			</label>
			<input
				type="range"
				id="slider"
				min={min}
				max={max}
				value={sliderValue}
				onChange={(e) => slideToChange(e)}
			/>
		</div>
	)
}

export default Slider
