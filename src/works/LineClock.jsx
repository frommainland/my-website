import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const LineClock = () => {
	const images = Array.from(Array(6).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Line clock</h1>
					<p>Beautiful digital clock for large screens</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>
							Inspired by Google IO 2016 countdown timer which I
							always wanted to know how it works. Now almost ten
							years later I think I have it and I can explore
							interesting ways to use it.
						</p>
					</div>
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Line clock"
							Href="https://line-clock.vercel.app/"
							LinkText="https://line-clock.vercel.app/"
							Background="lineclock-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
                                gap: '4em',
							}}
						>
							<video
								src={require('../video/lineClock-1.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
								style={{ marginBottom: 0 }}
							/>
							<video
								src={require('../video/lineClock-2.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
							/>
							<video
								src={require('../video/lineClock-3.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
							/>
						</div>
					</div>
				</section>
			</article>
		</div>
	)
}

export default LineClock
