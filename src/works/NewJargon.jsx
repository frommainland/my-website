import React from 'react'
import './RumbleInTheJungle.scss'
import './NewJargon.scss'
import VideoBookmark from '../component/VideoBookmark'

const NewJargon = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>互联网词语</h1>
					<p>2022 - 个人项目1/3</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>这是2022年学习react做的第一个项目。</p>
						<p>
							设计上想做的是展示一个简单的短列表，让它更容易记住和有意思。
						</p>

						<p>开发上想做的是适配不同设备。</p>
						<p>
							先整理了自己感兴趣的14个词条，和朋友聊天后又继续加上了5个新词条以及他们的信息。想增加一个对每个词条匿名点赞的计数按钮，但是不会，准备放到下一个项目中去。
						</p>
					</div>
					<div className="work-content-img">
						<video
							autoPlay
							muted
							loop
							controls
							playsInline
							width={1024}>
							<source
								src={require('../video/work-newJargon1.webm')}
							/>
						</video>

						<video
							autoPlay
							muted
							loop
							controls
							playsInline
							width={1024}>
							<source
								src={require('../video/work-newJargon2.webm')}
							/>
						</video>
					</div>
					<div className="work-content-text">
						<p id="subtitle">词条链接</p>
						<VideoBookmark
							Title="Google docs"
							Href="https://docs.google.com/spreadsheets/d/1nwtlfO8MSayVPgvb67hYsOsrEmtXtteQm6i12JaWjCs/edit?usp=sharing"
							LinkText="https://docs.google.com/spreadsheets/d/1nwtlfO8MSayVPgvb67hYsOsrEmtXtteQm6i12JaWjCs/edit?usp=sharing"
							Background="work-newJargon-thumbnail-1"
						/>
					</div>
					<div className="work-content-text">
						<p id="subtitle">项目链接</p>
						<VideoBookmark
							Title="New Jargon"
							Href="https://new-jargon.netlify.app/"
							LinkText="https://new-jargon.netlify.app/"
							Background="work-newJargon-thumbnail-2"
						/>
					</div>
				</section>
			</article>
		</div>
	)
}

export default NewJargon
