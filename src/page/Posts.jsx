import React from 'react'
import ArticleList from '../component/ArticleList'

const Posts = () => {
	return (
		<div
			style={{
				color: 'white',
				paddingTop: '48px',
				cursor: 'none',
				width: '80vw',
				marginInline: 'auto',
				maxWidth: '90rem',
			}}>
			<ArticleList
				title="应该用px，em还是rem？以及相关的距离单位"
				time="2022-07-18"
				id="PxRemEm"
			/>
			<ArticleList
				title="Test-首次用react做网站的一些总结"
				time="2022-08-18"
				id="PostOnlineTest"
			/>
			<ArticleList
				title="Test-个人项目预言"
				time="2022-09-18"
				id="PostOnlineTest"
			/>
		</div>
	)
}

export default Posts
