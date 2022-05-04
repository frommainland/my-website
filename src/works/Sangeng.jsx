import './RumbleInTheJungle.scss'
import './Sangeng.scss'

const Sangeng = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>三更</h1>
					<p>&#10022; 简单 </p>
					<p>&#10022; 高质量内容</p>
					<p>&#10022; 每天只更新三次</p>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-img">
						<div className="work-content-text">
							<p>
								手机上已经有很多阅读类的App，为什么还有做一个新的？
								很多人都会问到这个问题。因为我可以造新的轮子？
								因为我想做用户的阅读测试？
								还是因为我想做一个能够影响用户的产品？以上都是。
							</p>
							<p>
								我们已经开始在 Flipboard中国
								的首屏添加编辑精选的“专题”类文章，目的是更快的让用户看到“质量好”的内容，如果有这样的内容库，为什么不把它单独拿出来，让用户直接看到精华的内容？
							</p>
						</div>
						<figure>
							<img
								src={require('../image/work-sangeng-pv.png')}
								alt="daily pv in wechat mini program"
							/>
							<figcaption>
								Flipboard微信分享 三十天浏览量(pv)/小时
							</figcaption>
						</figure>
					</div>
				</section>

				<section>
					<div className="work-content-text">
						<h1>2015/07</h1>
						<p>底部常规tabs结构</p>
						<ul>
							<li>文章列表, 文章标题，分类，文章源</li>
							<li>时间提示，根据微信数据，分为每天三次</li>
							<li>仅显示七天内内容，鼓励用户每天使用</li>
							<li>
								在文章内可关注内容源 / 内容源仅显示当日所有内容
							</li>
							<li>七天内阅读数据整理</li>
						</ul>
					</div>
					<div className="work-sangeng-sketch">
						<img
							src={require('../image/work-sangeng-v1.png')}
							alt="design sketch v1"
						/>
					</div>
					<div className="work-sangeng-video">
						<video
							src={require('../video/work-sangeng-v1.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={443}
						/>
					</div>
				</section>
				<hr />
				<section>
					<div className="work-content-text">
						<h1>2015/08</h1>
						<p>去除底部tabs，简化成垂直feed。</p>
						<p>
							垂直滑动看文章要比底部tabs简化好多，但是感觉还能有空间提升。在文章底部显示内容源的文章不能保证和原文章的关联性。
						</p>
						<ul>
							<li>
								收藏，阅读历史，阅读数据，设置合并为顶部导航，下拉触发。减少导航显示几率，突出内容本身。
							</li>
							<li>修改时间选择</li>
							<li>添加功能：底部评论，来源，来源最新内容</li>
						</ul>
					</div>
					<div className="work-sangeng-sketch">
						<img
							src={require('../image/work-sangeng-v2.png')}
							alt="design sketch v2"
						/>
					</div>
					<div className="work-sangeng-video">
						<video
							src={require('../video/work-sangeng-v2.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={443}
						/>
					</div>
				</section>
				<hr />
				<section>
					<div className="work-content-text">
						<h1>2015/10</h1>
						<p>横向滑动，全屏文章展示</p>
						<ul>
							<li>
								左右切换与时间相关的一级信息，上下切换一级与二级信息
							</li>
							<li>扩大文章展示空间，不受更多的干扰</li>
							<li>去除内容源更多文章</li>
							<li>可以快速切换一周内不同天，时的文章</li>
						</ul>
					</div>
					<div className="work-sangeng-sketch work-sangeng-v3">
						<img
							src={require('../image/work-sangeng-v3-1.png')}
							alt="design sketch 3-1"
						/>
						<img
							src={require('../image/work-sangeng-v3-2.png')}
							alt="design sketch 3-2"
						/>
						<img
							src={require('../image/work-sangeng-v3-3.png')}
							alt="design sketch 3-3"
						/>
					</div>
					<div className="work-sangeng-video">
						<video
							src={require('../video/work-sangeng-v3.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={443}
						/>
					</div>
				</section>
				<footer>
					<div className="three-stars">
						&#8258;{' '}
						<span
							style={{
								transform: 'rotate(180deg)',
								display: 'inline-block',
							}}>
							&#8258;
						</span>{' '}
						&#8258;
					</div>
					<h3>后续</h3>
					<p>
						公司没有采纳这个提案，我记得做的方向是抓取短视频，推广到首页上，另外一个是卖广告，非常大众且能落地的方向，后来为了要独立改成了红板报，非常有时代感的名字，感觉是红色宣传大喇叭的意思。
					</p>
					<p>
						现在(2022年)名字前面带回了flipboard的，加上了“好物”tab卖东西，看来发展不错，流量整挺大。
					</p>
					<p>今天重新看，我还是喜欢这个设计。简单且吸引人。</p>
				</footer>
			</article>
		</div>
	)
}

export default Sangeng
