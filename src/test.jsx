import React from 'react'

const test = ({ children, rest }) => {
	console.log(children)
	return <div rest={...rest}>test</div>
}

export default test
