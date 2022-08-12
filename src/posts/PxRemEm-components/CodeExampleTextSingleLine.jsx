import React from 'react'
import SliderContext from './SliderContext'
import { useContext } from 'react'
import useWindowSize from '../../hook/useWindowSize'

const CodeExampleTextSingleLine = ({ content, unit = '' }) => {
	const { sliderValue } = useContext(SliderContext)
	const { width, height } = useWindowSize()
	function roundedToFixed(input, digits) {
		let rounded = Math.pow(10, digits)
		return (Math.round(input * rounded) / rounded).toFixed(digits)
	}

	const vwStyle = {
		fontSize: `${(width / 100) * sliderValue}px`,
		lineHeight: '150%',
	}

	const vhStyle = {
		fontSize: `${(height / 100) * sliderValue}px`,
		lineHeight: '150%',
	}

	const chStyle = {
		width: `${sliderValue}ch`,
		fontSize: '24px',
		lineHeight: '150%',
	}

	return (
		<div className="code-example-text">
			{unit == 'vw' ? (
				<h1 style={vwStyle}>
					{content}
					{roundedToFixed((width / 100) * sliderValue, 1)}px&nbsp; (
					{sliderValue}
					{unit}) <br />
					当前浏览器宽度：{width}px
				</h1>
			) : unit == 'vh' ? (
				<h1 style={vhStyle}>
					{content}
					{roundedToFixed((height / 100) * sliderValue, 1)}px&nbsp; (
					{sliderValue}
					{unit}) <br />
					当前浏览器高度：{height}px
				</h1>
			) : (
				<h1 style={chStyle}>{content}</h1>
			)}
		</div>
	)
}

export default CodeExampleTextSingleLine
