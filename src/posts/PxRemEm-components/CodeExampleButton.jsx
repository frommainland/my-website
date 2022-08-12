import React from 'react'
import SliderContext from './SliderContext'
import { useContext } from 'react'

const CodeExampleButton = ({attr, text}) => {
	const { sliderValue } = useContext(SliderContext)
	return (
		<button
			style={{
				padding: attr ? `${sliderValue}px` : `24px`,
				fontSize: `${sliderValue}px`,
			}}>
			{text}
		</button>
	)
}

export default CodeExampleButton
