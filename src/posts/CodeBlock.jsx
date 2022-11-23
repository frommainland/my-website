import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import React from 'react'

const CodeBlock = ({ codestring }) => {
	return (
		<SyntaxHighlighter
			language="css"
			style={a11yDark}
			showLineNumbers="true"
			customStyle={{
				borderRadius: '5px',
				backgroundColor: '#001E3C',
				fontSize: 24,
				marginBottom: '2em',
				wordBreak: 'break-all',
				whiteSpace: 'pre-wrap',
			}}
			wrapLongLines={true}
		>
			{codestring}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
