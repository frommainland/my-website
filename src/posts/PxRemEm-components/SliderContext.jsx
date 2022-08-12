import { createContext, useState, useEffect } from 'react'

const SliderContext = createContext()

export function SliderProvider({ children, initValue }) {
	const [sliderValue, setSliderValue] = useState(initValue)

	useEffect(() => {
		setSliderValue(initValue)
	}, [initValue])

	const slideToChange = (e) => {
		setSliderValue(e.target.value)
	}

	return (
		<SliderContext.Provider value={{ sliderValue, slideToChange }}>
			{children}
		</SliderContext.Provider>
	)
}

export default SliderContext
