import React from 'react'

const PairingElement = ({ content }) => {
	return (
		<div className='constElement-wrap-flex'>
			{content.map((item, index) => {
				return (
					<div className="constElement-wrap" key={index}>
						<p>{item.p}</p>
						<h4>{item.h4}</h4>
					</div>
				)
			})}
		</div>
	)
}

export default PairingElement
