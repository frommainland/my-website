import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const RadiantCanvas = () => {
	const images = Array.from(Array(6).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Radiant canvas</h1>
					<p>Convert image to shapes</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>
							A small tool to generate different shapes based on
							image’s brightness.
						</p>
					</div>
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Radiant canvas"
							Href="https://radiantcanvas.netlify.app/"
							LinkText="https://radiantcanvas.netlify.app/"
							Background="radiantcanvas-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/radiantcanvas${
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

export default RadiantCanvas
