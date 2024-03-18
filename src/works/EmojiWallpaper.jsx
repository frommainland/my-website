import React from 'react'
import './RumbleInTheJungle.scss'
import VideoBookmark from '../component/VideoBookmark'

const EmojiWallpaper = () => {
	const images = Array.from(Array(3).keys())
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>🖼️ wallpaper</h1>
					<p>emoji wallpaper generator</p>
				</header>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<p>
							Emoji wallpapers can be customized to suit your
							preferences, drawing inspiration from Apple's
							wallpapers and the visually appealing layouts
							created by mathematics.
						</p>
					</div>
					<div className="work-content-text">
						<p id="subtitle">Project Link</p>
						<VideoBookmark
							Title="emoji wallpaper"
							Href="https://emojiwallpaper.vercel.app/"
							LinkText="https://emojiwallpaper.vercel.app/"
							Background="emojiwallpaper-thumbnail"
						/>
					</div>
					<div className="work-content-img">
						{images.map((item, i) => {
							return (
								<img
									src={require(`../image/emojiwallpaper${
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

export default EmojiWallpaper
