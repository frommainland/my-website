import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const Warkday = () => {
	// const images = Array.from(Array(3).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Warkday</h1>
					<p>Track ideas, projects & routines. Data stays local.</p>
				</header>
				·
				<section className="work-content-wrap">
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Warkday"
							Href="https://warkday.vercel.app/"
							LinkText="https://warkday.vercel.app/"
							Background="warkday-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{/* {images.map((item, i) => {
							return (
								<img
									src={require(
										`../image/warkday_${item}.webp`,
									)}
									alt="website screenshot"
									key={i}
								/>
							)
						})} */}
						<video
							src={require('../video/warkday_1.mp4')}
							autoPlay
							muted
							loop
							playsInline
							width="100%"
						/>
						<video
							src={require('../video/warkday_2.mp4')}
							autoPlay
							muted
							loop
							playsInline
							width="100%"
						/>
					</div>
				</section>
			</article>
		</div>
	)
}

export default Warkday
