import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const Kaleidoscope = () => {
	const images = Array.from(Array(3).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Kaleidoscope</h1>
					<p>
						A simple tool to create kaleidoscope wallpaper with your
						own choices and see it in motion with a different
						colored lens
					</p>
				</header>
				·
				<section className="work-content-wrap">
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Kaleidoscope"
							Href="https://kaleidoscope-nextjs.vercel.app/"
							LinkText="https://kaleidoscope-nextjs.vercel.app/"
							Background="kaleidoscope-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/kaleidoscope_${item}.webp`)}
									alt="website screenshot"
									key={i}
								/>
							)
						})}
						<video
							src={require('../video/kaleidoscope.mp4')}
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

export default Kaleidoscope
