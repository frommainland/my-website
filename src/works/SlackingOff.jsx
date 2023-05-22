import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const SlackingOff = () => {
	const images = Array.from(Array(5).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>摸鱼人</h1>
					<p>2023 - 个人项目</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>这是2023年学习react做的第一个项目。</p>
						<p>
							延续了2022年的思路：设计上想做的是展示一个简单的短列表，让它更容易记住和有意思。
						</p>
						<p>未解决的问题：</p>
						<ul>
							<li>不支持小尺寸屏幕</li>
						</ul>
					</div>
					<div className="work-content-text">
						<p id="subtitle">项目链接</p>
						<VideoBookmark
							Title="slackingoff"
							Href="https://slackingoff.netlify.app/"
							LinkText="https://slackingoff.netlify.app/"
							Background="slackingoff-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/slackingoff${
										item + 1
									}.webp`)}
									alt="website screenshot"
									key={i}
								/>
							)
						})}
					</div>
				</section>
			</article>
		</div>
	)
}

export default SlackingOff
