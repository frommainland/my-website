import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const HarpersCollection = () => {
	const images = Array.from(Array(3).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Harper's Collection</h1>
					<p>A simple site for Harper's clay collection.</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>
							My kid loves to make clay toys, but it's hard to
							keep the physical creations without a proper
							container. Thanks to the easy access of documenting
							3D projects using just a camera, I can set up a
							simple site that displays more of Harper's little
							clay works than I could ever imagine.
						</p>
						<p>
							If you have some time, tap on the like buttons
							there. Actually, these will show on any user's
							screen when visiting this site. I didn't realize the
							implementation was so easy. 
						</p>
					</div>
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="Harper’s collection"
							Href="https://toybabe.netlify.app/"
							LinkText="https://toybabe.netlify.app/"
							Background="harpercollection-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/harpercollection${
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

export default HarpersCollection
