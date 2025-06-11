import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const CreateASpark = () => {
	const images = Array.from(Array(6).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Create a spark</h1>
					<p>Fun experiments when you click</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>
							I saw an website the other day. It was a simple site
							just clicking on the screen. And it was fun. So I
							want to use this as a single rule for the site I
							want to build. One click, one spark.
						</p>
					</div>
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Create A Spark"
							Href="https://create-sparks.vercel.app/"
							LinkText="https://create-sparks.vercel.app/"
							Background="createaspark-thumbnail"
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
								src={require('../video/cas-1.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
								style={{ marginBottom: 0 }}
							/>
							<video
								src={require('../video/cas-2.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
							/>
							<video
								src={require('../video/cas-3.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
							/>
                            <video
								src={require('../video/cas-4.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
								style={{ marginBottom: 0 }}
							/>
							<video
								src={require('../video/cas-5.mp4')}
								autoPlay
								muted
								loop
								playsInline
								width="100%"
							/>
							<video
								src={require('../video/cas-6.mp4')}
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

export default CreateASpark
