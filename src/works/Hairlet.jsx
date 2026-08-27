import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const Hairlet = () => {
	// const images = Array.from(Array(3).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Hairlet</h1>
					<p>
						Upload a selfie. Try new hairstyles. Find your future
						look.
					</p>
				</header>
				·
				<section className="work-content-wrap">
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Hairlet"
							Href="https://www.hairlet.space/"
							LinkText="https://www.hairlet.space/"
							Background="hairlet-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{/* {images.map((item, i) => {
							return (
								<img
									src={require(
										`../image/kaleidoscope_${item}.webp`,
									)}
									alt="website screenshot"
									key={i}
								/>
							)
						})} */}
						<video
							src={require('../video/hairlet_0.mp4')}
							autoPlay
							muted
							loop
							playsInline
							width="100%"
						/>
						<video
							src={require('../video/hairlet_1.mp4')}
							autoPlay
							muted
							loop
							playsInline
							width="100%"
						/>
						<video
							src={require('../video/hairlet_2.mp4')}
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

export default Hairlet
