import './RumbleInTheJungle.scss'
import './FbRetouch.scss'

const FbRetouch = () => {
	const signInOld = [
		'1. 账号登录或新用户注册',
		'2. 新用户提供喜好/兴趣',
		'3. 根据喜欢/兴趣帮助用户直接订阅内容源',
		'4. App首页展示感兴趣的文章',
	]

	const exploreTop = [
		{ top: '二级页面', bot: '“最新内容推荐”' },
		{ top: '二级页面', bot: '“热门读者杂志”' },
	]

	const exploreBot = [
		{ top: '二级页面 - 顶部', bot: '“时尚与娱乐” - 杂志推广' },
		{ top: '二级页面 - 中部', bot: '“精选频道” - 频道推广' },
		{ top: '二级页面 - 底部', bot: '“热门来源” - 杂志推广' },
	]

	const newExploreT2Album = [' ', '单独杂志', ' ']
	const newExploreT2Fashion = [' ', '时尚 - 杂志', ' ']

	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Flipboard 体验优化</h1>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<div className="work-fbretouch-title">
							<span>2016/02</span>
							<span>Onboarding</span>
						</div>
						<p>
							后台得到的一些关于首页 home feed
							用户反馈：为什么有这么多的凤凰新闻？我想看别的（内容）怎么办？
							东西挺好，但是为什么这么少，能有更多的内容吗？朋友说你们是有质量的新闻，但是我感觉看到的其他差不太多，这是为什么怎么发现最热门的内容？反馈大致分为3类:
						</p>
						<ol>
							<li>
								抱怨新闻类刷屏
								<h3 className="tag">原因</h3>
								<h3>
									新闻类内容源，如凤凰新闻，中国日报中文网等更新频率高，新闻类的内容篇幅短，在
									home feed 中经常会淹没其他类型内容
								</h3>
								<h3 className="tag">解决</h3>
								<h3>1. 取消订阅新闻源</h3>
								<h3>2. 合理调低排序系数</h3>
							</li>
							<li>
								抱怨内容少
								<h3 className="tag">原因</h3>
								<h3>1. 订阅源少，内容源更新时间长</h3>
								<h3>
									2.
									用户误以为是新闻类App，选择兴趣之后无需更多操作，通过下拉刷新就可以得到更多内容
								</h3>
								<h3 className="tag">解决</h3>
								<h3>
									1. 强调 发现tab，用户在浏览 发现tab
									中发现更多感兴趣的内容.{' '}
								</h3>
								<h3>
									2. 展示产品模式，通过 关注 获取更多的新内容
								</h3>
							</li>
							<li>
								抱怨内容质量一般
								<h3 className="tag">原因</h3>
								<h3>
									1.
									新闻类文章刷屏，感兴趣的并且质量较高的文章出现比例小。
								</h3>
								<h3>2. 关注内容更新慢，没有订阅更多相似源。</h3>
								<h3 className="tag">解决</h3>
								<h3>1. 取消订阅新闻源，合理调低排序系数</h3>
								<h3>
									2. 增加推荐相似内容机制或在浏览 发现tab
									找到更多相似内容
								</h3>
							</li>
						</ol>
						<p>
							解决上面这些问题需要有比较完整的内容排序和推荐算法,
							这是一个相对长期的工程。如何在短时间内让新用户使用时提供更多个人的喜好信息来帮助数据排序和推荐？
						</p>

						<h3>
							“你们看新闻展示的形式很酷，但是我怎么看到更多的新闻？文章底下加号怎么用?
							”
						</h3>
						<p>
							很多我的朋友会问相似的问题，翻页很酷，然后就没有然后了。
							我想告诉他们我们和许多拥有高质量内容媒体合作，并且在不断添加新的内容源进入到产品中。阅读杂志只是我们内容源中很小的一部分，如果要快速查看今天的时政新闻，我建议使用新闻类的App，会更快速和容易。Flipboard是更个人化的阅读工具，不仅可以通过关注媒体源，而且通过关注用户创造的杂志会发现更多的阅读空间。
						</p>
						<p>
							如果你对字体设计感兴趣，除了正统媒体说的 helvetica
							好，也需要看到Erik Spiekermann 另外一层角度看
							helvetica 的不好， 正好有人就会创建这样一本关于
							helvetica
							各个角度的杂志，正好喜欢字体的你就会发现去阅读。可以想象各行各业，家居，时尚，汽车等都会有真正热爱的人去创建收集真正的有质量的文章，而不是传统编辑给你的“营养丰富”的标题党文章。
						</p>
						<p>
							如果新用户能够更好的理解到Flipboard的使用方法，是不是会减少或者解决之前的3类反馈？
						</p>
					</div>
					<div className="work-content-img">
						<h3>现有流程</h3>
						<div className="work-fbretouch-signin">
							{signInOld.map((item, index) => {
								return (
									<figure key={index}>
										<img
											src={require(`../image/work-fbretouch-signin-${
												index + 1
											}.jpg`)}
											alt={`current sign in flow ${
												index + 1
											}`}
										/>
										<figcaption>{item}</figcaption>
									</figure>
								)
							})}
						</div>
					</div>
					<div className="work-content-img">
						<h3>优化后流程</h3>
						<div className="work-sangeng-video">
							<video
								src={require('../video/work-fbretouch-signin.webm')}
								autoPlay
								muted
								loop
								playsInline
								width={443}
							/>
						</div>
					</div>
					<div className="work-content-text">
						<h3>新用户引导是否能解决以上的问题？</h3>
						<p>
							1. 用户选择5种或以上的兴趣后，进入App,
							直接推荐兴趣相关阅读/赞/评论最多的相关文章，不需要用户关注更多，下拉刷新会有更多相似文章的更新。修改前的流程在用户选择兴趣后直接帮助用户选择最热门内容源并且直接关注源，导致用户不能理解产品结构以及更新原理。修改后流程没有直接关注源，而是动态的把所有相似文章推送给用户，并且强调关注按钮，解释产品使用的原理，更好的让用户发现探索。
						</p>
						<p>
							2.
							用户选择5种或以上的兴趣后，进入App，系统会默认创建并用兴趣命名用户杂志，比如商业，摄影，设计等杂志。用户点击“+”收集文章时，很容易把文章分类到已经创建好的杂志中。修改前的流程只有创建新杂志，用户不理解杂志概念。
							修改后的流程让文章与杂志名产生关联性，让杂志的筛选文章的概念得到明确，并且鼓励用户填满自己感兴趣的空杂志，杂志的功能得到强调。
						</p>
						<h3>
							很多用户会不会不使用顶部的carousel获取产品信息，而直接点击注册？
						</h3>
						<p>
							会，但是总有一小部分用户会滑动扫描产品信息，所以页面之间的元素过渡动画很重要，这是用户体验产品的第一次，通过这些过渡告诉用户产品的完成质量很高。
						</p>
					</div>
				</section>

				<hr />

				<section className="work-content-wrap">
					<div className="work-content-text">
						<div className="work-fbretouch-title">
							<span>2016/03</span>
							<span>“发现”tab</span>
						</div>
						<h3>
							用户用Flipboard来阅读内容，无论是商业，家居还是娱乐，都能帮助自身的成长，精于自己的所长或者看见更广阔的世界。
						</h3>
						<p>
							我们不断的增加内容池，去满足更多用户兴趣的增长时，怎样帮助用户更好的选择到感兴趣的信息也变得同等的重要。无论是新用户在home
							feed中选中推荐的感兴趣的内容，或是已经可以阅读比较稳定的home
							feed内容的中低频用户，还是已经完善home
							feed的核心用户，都需要一个重新发现未知兴趣的方法，一个更好的结构和一个更易于内容浏览的产品设计。
						</p>
						<p>
							解决上面这些问题需要有比较完整的内容排序和推荐算法,
							这是一个相对长期的工程。如何在短时间内让新用户使用时提供更多个人的喜好信息来帮助数据排序和推荐？
						</p>
					</div>
					<div className="work-content-img">
						<h3>现有“发现”tab</h3>
						<div className="work-fbretouch-explore">
							<figure>
								<img
									src={require('../image/work-fbretouch-top-left-0.jpg')}
									alt="explore tab flow 1"
								/>
								<figcaption>一级页面 - 顶部</figcaption>
								<figcaption>“大家都在看”</figcaption>
							</figure>
							<div className="work-fbretouch-explore-top">
								{exploreTop.map((item, index) => {
									return (
										<figure key={index}>
											<img
												src={require(`../image/work-fbretouch-top-right-${index}.jpg`)}
												alt={`explore tab flow 1 ${
													index + 1
												}`}
											/>
											<figcaption>{item.top}</figcaption>
											<figcaption>{item.bot}</figcaption>
										</figure>
									)
								})}
							</div>
						</div>
						<div className="work-fbretouch-explore">
							<figure>
								<img
									src={require('../image/work-fbretouch-bot-left-0.jpg')}
									alt="explore tab flow 1"
								/>
								<figcaption>一级页面 - 底部</figcaption>
								<figcaption>“发掘更多精彩”</figcaption>
							</figure>
							<div className="work-fbretouch-explore-bot">
								{exploreBot.map((item, index) => {
									return (
										<figure key={index}>
											<img
												src={require(`../image/work-fbretouch-bot-right-${index}.jpg`)}
												alt={`explore tab flow 1 ${
													index + 1
												}`}
											/>
											<figcaption>{item.top}</figcaption>
											<figcaption>{item.bot}</figcaption>
										</figure>
									)
								})}
							</div>
						</div>
					</div>
					<div className="work-content-text">
						<h1>问题</h1>
						<h3>“大家都在看”</h3>
						<ol>
							<li>
								选择成本高。
								推荐杂志展示样式由方块图+杂志名称组成，用户能够得到杂志属性的有效信息少。用户只能通过背景图的质量和杂志名粗略判断杂志内容的质量，尝试每一本的杂志的成本变高。例:杂志三城记，最高推荐位，GIF背景图，用户进入后，“城市北京”50%以上为美食介绍，但是得到的赞数量，收集数量以及评论数量并没有明显提高，如果与二级推荐位杂志“深夜谈吃”相比较，无论是赞，收集，以及评论都要远超过“三城记”，可见“三城记”的背景GIF虽然吸引用户，但是吸引到太多不该吸引的用户，长期下去会增加用户的选择时间，降低推荐位模块的信任度。
							</li>
							<li>
								结构不开放。
								“大家都在看”模块以杂志为单位构成，兼容性低，不能灵活推荐其他类型的内容，比如用户，特殊文章，H5专题等
							</li>
						</ol>
						<h3>“发掘更多精彩”</h3>
						<ol>
							<li>
								非逻辑排序
								信息结构冲突，“最新内容推荐”，“热门读者杂志”与“新闻”，“商业”等内容分类栏目信息类型不同。“最新内容推荐”和“热门读者杂志”可以并入一个新模块。
							</li>
							<li>
								错误引导
								“最新内容推荐”和“热门读者杂志”的杂志展示样式复用了模块“大家都在看”，同样存在有效信息少的问题。“最新内容推荐”里的内容被收起，用户需要点击才能查看详细内容，由于没有视觉提示，用户不能在第一层级的页面判断是否模块有更新。“热门读者杂志”第二层级页面是一个有限的列表。列表只有3个类型且每个类型下只有3本杂志。这样不但不鼓励用户查看更多相似的杂志，同时给用户一个内容少的错误印象。
							</li>
							<li>
								分类信息混论
								“商业”等内容分类模块，信息结构:上部推荐位，中部“精选频道”，下部“热门来源”。上部推荐位，2种杂志展示方式和三栏展示杂志的z字形结构的会打断用户的视线流，影响用户得到信息的效率。中部“精选频道”在每本杂志上加上f的标志表示为Flipboard平台本身编辑。视觉上，在38*38的方形上加入更多的元素会让信息混乱，并且标志没有和杂志封面结合，降低了品牌的品质感。在“精选频道”突出展示Flipboard自身编辑的内容会和用户杂志，合作伙伴杂志产生竞争关系，不符合平台本身的属性。下部杂志列表让用户扫描信息的效率提高，但是用户不明白排序的方式，没有视觉提示信息的层级，用户只能根据杂志的名称去猜测杂志内容的质量。下部杂志头像形状不一致，没有解释方形和圆形头像的分别。
							</li>
						</ol>
					</div>
					<div className="work-content-img">
						<h1>新“发现”体验</h1>
						<p>
							经过几轮想法的迭代，我重新修改了新的信息结构以及相关的2级页面。
							我们相信这样的发现信息结构会帮助用户更好的发现更好的内容。
						</p>
						<div className="work-sangeng-video">
							<video
								src={require('../video/work-fbretouch-explore.webm')}
								autoPlay
								muted
								loop
								playsInline
								width={443}
							/>
						</div>
					</div>
					<div className="work-content-img">
						<h1>新“发现” 一级页面</h1>
						<div className="work-fbretouch-explore-new-t1">
							<figure>
								<img
									src={require('../image/work-fbretouch-explore-new-t1-0.jpg')}
									alt="explore tab flow 1"
								/>
								<figcaption>顶部</figcaption>
							</figure>
							<figure>
								<img
									src={require('../image/work-fbretouch-explore-new-t1-1.jpg')}
									alt="explore tab flow 1"
								/>
								<figcaption>底部</figcaption>
							</figure>
						</div>
						<div className="work-fbretouch-text-wrap">
							<h3>新用户</h3>
							<p>
								通过onboarding之后的新用户，在其首页得到的内容较少或不够准确反映出的自身兴趣的情况下，“今日推荐”可以帮助新用户容易找到更多的内容。如果用户在这些内容中关注杂志或者创建者，会正反馈到他的home
								feed中，增加使用可能性。
							</p>
						</div>

						<div className="work-fbretouch-text-wrap">
							<h3>中低频用户</h3>
							<p>
								中低频用户在本身home
								feed已经比较符合自己兴趣的情况下，“最新专题”可以帮助用户发现自身兴趣以外的潜在内容，用户，杂志。
							</p>
						</div>

						<div className="work-fbretouch-text-wrap">
							<h3>高频用户</h3>
							<p>
								“搜索”和“所有分类”可以帮助高级用户更快速精确的找到感兴趣的内容。
							</p>
						</div>

						<div className="work-fbretouch-text-wrap">
							<h3>信息范围</h3>
							<p>
								“今日推荐”中的内容是相互独立没有联系性的，“最新专题”中的内容是某个小范围内（如北京的川菜馆）的杂志经过整理，杂志之间存在相关，补充或相对立的关系，“所有分类”中的内容是更大范围内（如美食）所有杂志通过不同的过滤规则显示给用户。三个模块之间信息的范围逐渐增大和复杂化，适合不同的需求。
							</p>
						</div>
					</div>

					<div className="work-content-img">
						<h1>新“发现” 二级页面 - 今日热门</h1>
						<div className="work-fbretouch-explore-new-t1">
							<figure>
								<img
									src={require('../image/work-fbretouch-explore-new-t2-pop-0.jpg')}
									alt="explore tab flow 1"
								/>
								<figcaption>热门文章</figcaption>
							</figure>
							<figure>
								<img
									src={require('../image/work-fbretouch-explore-new-t2-pop-1.jpg')}
									alt="explore tab flow 1"
								/>
								<figcaption>热门用户</figcaption>
							</figure>
						</div>
						<p>
							复用home
							feed同样结构，根据热门程度排序，尽可能覆盖所有分类，让新用户和低中频用户快速了解当日热门的内容，增加关注兴趣源的几率。
						</p>
					</div>

					<div className="work-content-img">
						<h1>新“发现” 二级页面 - 最新专辑</h1>
						<div className="work-fbretouch-explore-album">
							<figure>
								<img
									src={require('../image/work-fbretouch-explore-new-t2-album-l-0.jpg')}
									alt="grouped magazine"
								/>
								<figcaption>杂志组</figcaption>
							</figure>
							<div className="work-fbretouch-album">
								{newExploreT2Album.map((item, index) => {
									return (
										<figure key={index}>
											<img
												src={require(`../image/work-fbretouch-explore-new-t2-album-r-${index}.jpg`)}
												alt={`independent magazine ${
													index + 1
												}`}
											/>
											<figcaption>{item}</figcaption>
										</figure>
									)
								})}
							</div>
						</div>
						<p>
							编辑手工整理和组织信息，可以推荐单独或一组杂志，用户，文章和合作伙伴。让用户快速了解某个领域，辅助用户发现新的兴趣。在有突发事件（波士顿恐怖袭击），长期热点（美国总统大选）时，编辑在时效性和工具上会有更多优势，
							帮助用户梳理新闻类内容的脉络。
						</p>
					</div>

					<div className="work-content-img">
						<h1>新“发现” 二级页面 - 分类 - 时尚</h1>
						<div className="work-fbretouch-explore-album">
							<figure>
								<img
									src={require('../image/work-fbretouch-explore-new-t2-fashion-l-0.jpg')}
									alt="grouped magazine"
								/>
								<figcaption>时尚 - 热门文章</figcaption>
							</figure>
							<div className="work-fbretouch-album">
								{newExploreT2Fashion.map((item, index) => {
									return (
										<figure key={index}>
											<img
												src={require(`../image/work-fbretouch-explore-new-t2-fashion-r-${index}.jpg`)}
												alt={`independent magazine ${
													index + 1
												}`}
											/>
											<figcaption>{item}</figcaption>
										</figure>
									)
								})}
							</div>
						</div>
						<div className="work-fbretouch-text-wrap">
							<h3>切换 - 热门文章</h3>
							<p>
								展示当日热门文章，新用户快速浏览内容，根据内容关注源，不需要深入某本杂志。中低频用户在已经关注分类中某些杂志之后，仍有机会发现更多的源。
							</p>
						</div>
						<div className="work-fbretouch-text-wrap">
							<h3>切换 - 杂志</h3>
							<p>
								所有杂志列表。“本周潜力”把新出现的质量好或好评的杂志浮到上层，让更多用户接触到并且对杂志本身起到反馈和推荐。对于刚接触某类（比如“时尚”）的用户，综合排行榜对了解"时尚"成本最小。“所有杂志”按照关注度排名，让用户自由选择感兴趣的杂志。
							</p>
						</div>
					</div>
					<div className="work-content-img">
						<h1>附录</h1>
						<div className="work-fbretouch-text-wrap">
							<h3>搜索功能</h3>
							<p>
								用户除了在发现模块下得到内容，搜索功能同样帮助用户主动发现更好的内容。由于搜索目前不能搜索文章，没有关键词(topic)功能，内容之间的联系是断裂的，所以暂时没有去大幅的修改搜索功能。我们深信关键词(topic)可以把内容切分的更加细致，更好的找到内容与内容的联系。Flipboard从最开始的关注内容，到把内容分类到十多个内容大类，到创建杂志功能，把内容大类切分成更细的下属类，到下个阶段单独文章的分类，以及相似文章的关联。
							</p>
							<p>Flipboard一直在帮助用户更好处理信息的分类。</p>
						</div>
					</div>
				</section>

				<hr />

				<section className="work-content-wrap">
					<div className="work-content-text">
						<div className="work-fbretouch-title">
							<span>2016/05</span>
							<span>“发现”tab</span>
						</div>
						<p>
							除了Flipboard标志性的翻页动画之外，你在使用Flipboard的时候，还有什么其他的印象？不知道你有没有注意到除了阅读，你可以收集文章，并且分类创建不同的杂志。杂志是Flipboard最根本的元件，使用这些元件把用户和文章，用户和杂志，杂志和文章连接在一起，形成兴趣的网络，更好的分类内容的信息。
						</p>
						<h3>那么问题来了，怎么告诉用户收集文章？</h3>
						<p>
							首先要有一个收集文章的入口，也就是常说的按钮，其次按钮和创建杂志的逻辑关系，也就是常说的按钮怎么用，最后创建杂志的闭环，就是常说的创建杂志好用又好玩。
						</p>
						<p>
							什么样子的图标是收集文章？剪刀，剪报成杂志，但是现在岁数小的人不会有剪报的经历，一切的内容都是数字化的，复制和黏贴。
						</p>
					</div>
					<div className="work-content-img">
						<h1>
							用户收集的时候不仅仅是收集图标，更应该是收集文章一系列的过程，这些打包在一起的东西，或许能让用户记住收集，记住产品。
						</h1>
						<img
							src={require(`../image/work-fbretouch-collect.png`)}
							alt={`flip icon sketches`}
						/>
						<div className="work-sangeng-video">
							<video
								src={require('../video/work-fbretouch-collect.webm')}
								autoPlay
								muted
								loop
								playsInline
								width={443}
							/>
						</div>
					</div>
				</section>
				<hr />
				<section className="work-content-wrap">
					<div className="work-content-text">
						<div className="work-fbretouch-title">
							<span>2016/07</span>
							<span>视觉规范</span>
						</div>
						<p>
							工作中无论是对现有产品体验的提升还是重新设计开发新的功能，通常下项目的时间进度会很紧张。有时在产品设计上并没有达成共识，在发布时我们只能寄期望与用户的反馈或者是发布之后某天夜深人静后突然想通的新结构，但是在大部分时间里，下一个功能已经出现在项目表上了，新的一轮设计开发又要开始。不难想到的结果是新的功能一层又一层叠在之前模糊松散的基础上，必然会有一天难以为继。
						</p>
						<p>
							FN是最近在忙的项目。FN很新，有很多的时间和资源去思考和确定FN设计的基础。好的基础对我来说是一套相对完整的系统，拥有这样系统的好处是对于开
							发，易于扩展和重复使用，对于用户，易于理解和使用新功能，并且保持产品和品牌的一致，对于设计，有源可循，设计师能保持在同样的语境下设计扩展产
							品。可能有人会认为系统的建立会限制创新本身，我却觉得恰恰在限制到创新的时候，已创建系统会提供可以摸得到的点去让设计突破，从而形成新的系统，这样才是一个动态不断进化的系统。
						</p>
					</div>
					<div className="work-content-img">
						<div className="work-fbretouch-text-wrap">
							<h3>基础语言</h3>
							<p>
								FN是文字阅读为主的应用，在整理过设计存档之后，对文字的阅读和颜色的定义对于用户使用产品最为重要，有了这个设计的基础语言之后，后续的板式，样式和方向就可以围绕它开始。
							</p>
						</div>
						<img
							src={require(`../image/work-fbretouch-typo.png`)}
							alt={`design system typography`}
						/>
					</div>
					<div className="work-content-img">
						<div className="work-fbretouch-text-wrap">
							<h3>内文节奏</h3>
							<p>
								阅读文章是每天被使用最多的功能，传统平面上使用的版式网格同样适用于数字阅读。创建出一个好的版式网格可以帮助用户更容易的阅读内容，更好的分离文章的信息结构以及更整齐的排列页内不同的元素。
							</p>
						</div>
						<img
							src={require(`../image/work-fbretouch-rhythm.png`)}
							alt={`design system rhythm`}
						/>
						<figure>
							<img
								src={require(`../image/work-fbretouch-responsive.png`)}
								alt={`design system rhythm`}
							/>
							<figcaption
								style={{ width: '50%', margin: '0 auto' }}>
								FN以中文内容为主，在确定使用苹方两个字重的基础上，以30像素行间距为基础网格，以rem为单位，衍生出标题，脚注等不同元素的样式。同时调整rem参数，在tablet和web端创建出统一的网格系统。
							</figcaption>
						</figure>
					</div>
					<div className="work-content-img">
						<div className="work-fbretouch-text-wrap">
							<h3>文章展示</h3>
							<p>
								文章卡片是内文内容的上一级，用户在快速扫读文章卡片之后才会确定是否阅读文章全文，所以创建了新的网格系统去处理图片和文字，中文和英文，以及图片相册和标题的关系帮助用户快速得到需要的信息。
							</p>
						</div>
						<img
							src={require(`../image/work-fbretouch-card-layout.png`)}
							alt={`design system card layout`}
						/>
						<img
							src={require(`../image/work-fbretouch-card-type.png`)}
							alt={`design system card type`}
						/>
					</div>

					<div className="work-content-img">
						<div className="work-fbretouch-text-wrap">
							<h3>杂志展示</h3>
							<p>
								杂志和文章卡片的集合，分为杂志卡，杂志组，以及杂志列去满足不同页面逻辑下的杂志元素的展示结果。
							</p>
						</div>
						<img
							src={require(`../image/work-fbretouch-mag-type.png`)}
							alt={`design system magazine type`}
						/>
					</div>

					<div className="work-content-img">
						<div className="work-fbretouch-text-wrap">
							<h3>设计整理</h3>
							<p>
								文字处理
								在一个通过阅读文字创造产品价值的产品中，字体选择和处理不但决定了使用的体验同时创造了产品品牌。苹方虽然有6种字重，但是对比度不足够大，总感到有欠缺。其次缺少更多视觉上尝试，不同字体的选择。英文与中文字体搭配时灰度不同，选择时更多考虑单独使用时数字，单独英文单词的感觉和FN的相关度。
							</p>
							<p>
								动画
								缺少经验记录和分析动画的选择，没有形成有效的系统。
							</p>
						</div>
					</div>
				</section>

				{/* <footer>
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
				</footer> */}
			</article>
		</div>
	)
}

export default FbRetouch
