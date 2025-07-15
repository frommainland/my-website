import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const HarperDrawings = () => {
	const images = Array.from(Array(3).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Harper drawings</h1>
					<p>
						A site to store drawings Harper drawn before 8 years old
					</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Harper’s drawing"
							Href="https://drawingbabe.vercel.app/"
							LinkText="https://drawingbabe.vercel.app/"
							Background="harpersdrawings-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/harpersdrawing_${item}.webp`)}
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

export default HarperDrawings
