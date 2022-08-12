import React from 'react'
import SliderContext from './SliderContext'
import { useContext } from 'react'

const CodeExampleText = ({ rem = false }) => {
	const { sliderValue } = useContext(SliderContext)

	return (
		<div className="code-example-text">
			{rem ? (
				<h1
					style={{
						fontSize: `${sliderValue * 16}px`,
					}}>
					h1字体大小1rem ({sliderValue * 16}px)
				</h1>
			) : (
				<h1
					style={{
						fontSize: `${sliderValue * 16}px`,
					}}>
					h1字体大小1em ({sliderValue * 16}px)
				</h1>
			)}
			{rem ? (
				<h2
					style={{
						fontSize: `${sliderValue * 16 * 0.5}px`,
					}}>
					h2字体大小0.5rem ({sliderValue * 16 * 0.5}px)
				</h2>
			) : (
				<h2
					style={{
						fontSize: `${sliderValue * 16 * 0.5}px`,
					}}>
					h2字体大小0.5em ({sliderValue * 16 * 0.5}px)
				</h2>
			)}
			{rem ? (
				<h3
					style={{
						fontSize: `${sliderValue * 16 * 0.4}px`,
					}}>
					h3字体大小0.4rem (
					{Math.round(sliderValue * 16 * 0.4 * 10) / 10}px)
				</h3>
			) : (
				<h3
					style={{
						fontSize: `${sliderValue * 16 * 0.5 * 0.4}px`,
					}}>
					h3字体大小0.4em (
					{Math.round(sliderValue * 16 * 0.5 * 0.4 * 10) / 10}px)
				</h3>
			)}
		</div>
	)
}

export default CodeExampleText
