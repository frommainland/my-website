import React from 'react'
import { useState } from 'react'
import chroma from 'chroma-js'
import { motion } from 'framer-motion'
import CodeBlock from '../CodeBlock'

const Chroma = () => {
	const [value, setValue] = useState(2)
	const [colorMode, setColorMode] = useState('rgb')
	const yellow = '#FFFF00'
	const blue = '#0000FF'
	const newColors = chroma.scale([yellow, blue]).mode(colorMode).colors(value)
	const colorModeButton = ['rgb', 'hsl', 'hcl', 'lab']

	return (
		<div className="chroma-tool-wrap">
			<h3>
				1. 选择颜色: <code>#FFFF00</code> <code>#0000FF</code>
			</h3>
			<div className="chroma-colors">
				{newColors.map((item, i) => {
					return <div key={i} style={{ backgroundColor: item }}></div>
				})}
			</div>
			<h3>2. 选择中间颜色个数：{value}</h3>
			<div className="webgradient-slider">
				<input
					value={value}
					type="range"
					min={2}
					max={10}
					onChange={(e) => setValue(parseFloat(e.target.value))}
				/>
			</div>
			<h3>3. 选择色彩模式 (选择2个以上中间颜色)</h3>
			<div className="chroma-colormode">
				{colorModeButton.map((item, i) => {
					return (
						<motion.p
							key={i}
							onClick={() => setColorMode(item)}
							style={{
								borderColor:
									colorMode === item ? '#a0a0a0' : '#373737',
								color: colorMode === item ? 'white' : '#848484',
							}}
							whileHover={{
								scale: 1.05,
							}}
							whileTap={{
								scale: 0.95,
							}}
						>
							{item}
						</motion.p>
					)
				})}
			</div>
			<h3>4. 复制css参数</h3>
			<CodeBlock
				codestring={`.gradient {
	background: linear-gradient(
		to right,
	    ${newColors}
	);
}`}
			/>
		</div>
	)
}

export default Chroma
