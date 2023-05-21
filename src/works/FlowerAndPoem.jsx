import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const FlowerAndPoem = () => {
	const images = Array.from(Array(4).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>花与诗画和人</h1>
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
							<li>
								AnimatePresence在exit时不能顺利转场到其他页面
							</li>
							<li>不能在列表中快速选择和定位</li>
						</ul>
					</div>
					<div className="work-content-text">
						<p id="subtitle">花/诗/画/作者</p>
						<VideoBookmark
							Title="Google docs"
							Href="https://docs.google.com/spreadsheets/d/1-pIfz3W6ibBvDYuedBPVHs1HEXDj4HJQkn6BJKfSWrk/edit?usp=sharing"
							LinkText="https://docs.google.com/spreadsheets/d/1-pIfz3W6ibBvDYuedBPVHs1HEXDj4HJQkn6BJKfSWrk/edit?usp=sharing"
							Background="work-newJargon-thumbnail-1"
						/>
					</div>
					<div className="work-content-text">
						<p id="subtitle">项目链接</p>
						<VideoBookmark
							Title="flowersandpoems"
							Href="https://flowersandpoems.netlify.app"
							LinkText="https://flowersandpoems.netlify.app"
							Background="flowerandpoem-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/flowerandpoem${
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

export default FlowerAndPoem
