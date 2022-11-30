import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const LastNameSlang = () => {
	const images = Array.from(Array(5).keys())

	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>有根底</h1>
					<p>2022 - 个人项目2/3</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>这是2022年学习react做的第二个项目。</p>
						<p>
							设计上想做的是展示一个简单的短列表，让它更容易记住和有意思。
						</p>

						<p>
							最开始的内容是东北土匪黑话中姓氏的黑话和白话。后来陆陆续续把土匪大概的历史和规矩整理了进去。
						</p>
						<p>未解决的问题：</p>
						<ul>
							<li>
								对图片即时取出主要颜色并转化成贴纸颜色很慢，只能改为手动存到json
							</li>
							<li>视差滚动时页面会变卡，不会优化性能</li>
							<li>没有匿名点赞，不会serverless database</li>
						</ul>
					</div>
					<div className="work-content-text">
						<p id="subtitle">东北话姓氏整理</p>
						<VideoBookmark
							Title="Google docs"
							Href="https://docs.google.com/spreadsheets/d/1ErwDmyatqgnPq63GgH-WR3Z-ji_1Yg0nN-6KmmNOzr0/edit?usp=sharing"
							LinkText="https://docs.google.com/spreadsheets/d/1ErwDmyatqgnPq63GgH-WR3Z-ji_1Yg0nN-6KmmNOzr0/edit?usp=sharing"
							Background="work-newJargon-thumbnail-1"
						/>
					</div>
					<div className="work-content-text">
						<p id="subtitle">项目链接</p>
						<VideoBookmark
							Title="last name slang"
							Href="https://lastnameslang.netlify.app"
							LinkText="https://lastnameslang.netlify.app"
							Background="last-name-slang-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/last-name-slang${
										item + 1
									}.jpg`)}
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

export default LastNameSlang

// ${index + 1}.jpg
