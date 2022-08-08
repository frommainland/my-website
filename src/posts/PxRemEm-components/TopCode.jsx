import React from 'react'

const TopCode = ({ sliderValue, setSliderValue }) => {
	return (
		<div className="top">
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
		</div>
	)
}

export default TopCode
