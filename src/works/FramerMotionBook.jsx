import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const FramerMotionBook = () => {
	const images = Array.from(Array(4).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Framer motion book</h1>
					<p>personal framer motion reference book</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>
							Framer Motion, a beloved React animation library,
							works like magic to craft delightful user
							experiences through seamless animations. This
							reference book captures my learning journey, filled
							with syntax and snippets curated from the web.
						</p>
						<p>
							Dive in, explore, and enjoy the wisdom shared by
							online friendly designer and engineers.
						</p>
					</div>
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="framer motion book"
							Href="https://framer-motion-blog.vercel.app/"
							LinkText="https://framer-motion-blog.vercel.app/"
							Background="framermotionbook-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/framermotionbook${
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

export default FramerMotionBook
