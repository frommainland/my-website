import React from 'react'
import SliderContext from './SliderContext'
import { useContext } from 'react'

const TopCode = ({ children }) => {
	// const { sliderValue } = useContext(SliderContext)
	// const { slideToChange } = useContext(SliderContext)
	return <div className="top">{children}</div>
}

export default TopCode

// 原始代码 - children
{
	/* <div className="slider-wrap">
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
					onChange={(e) => slideToChange(e)}
				/>
			</div> */
}
{
	/* <div className="constElement-wrap">
				<p>¹ 1em / ² 24px</p>
				<h4>button padding</h4>
			</div> */
}
