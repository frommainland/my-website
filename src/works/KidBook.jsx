import './KidBook.css'
import ALink from '../component/ALink'
import VideoBookmark from '../component/VideoBookmark'

const KidBook = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>英文绘本阅读</h1>
					<p>在内容同质化的时候，怎样更好体现产品的价值？</p>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>背景</h3>
						<p>
							伴鱼绘本经过多年的发展已经成为国内儿童绘本类的头部产品，同时起到对其他学科产品的引流作用。但随着绘本内容同质化的增加，竞品营销及价格的冲击，用户增长率缓慢，且用户调研时也得到用户反馈的产品问题和建议。
						</p>
					</div>
					<div className="work-content-text">
						<h3>调研</h3>
						<p>
							根据以往的后台数据以及针对用户的调研问卷，总结成2种主要问题。
						</p>
						<ol>
							<li>
								产品上主要问题是在教研期待的学习需求与用户体验上的不匹配，很多教研上的设计没有让用户理解和使用后的正向反馈，使用户流失率增加。
							</li>
							<li>
								用户运营时仅注重在价格和会员购买，对于活动本身的绘本没有优化处理，导致使用时落差大，不利于口碑增加，使用户留存率降低。
							</li>
						</ol>
					</div>

					<div className="work-kidbook-research-grid">
						{/* 教研产品需求 */}
						<div className="work-Kidbook-research-wrap">
							<p>教研产品需求</p>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#F5F0DD',
								}}>
								<h3>绘本整体</h3>
								<ul>
									<li>
										精品绘本有交互，内容有故事，学习习题类型更多。教研老师根据每一个课本单独提出，更有学习针对性。名师讲解会根据绘本连接故事，更完整通顺。
									</li>
									<li>
										普通绘本没有互动，只有单词，学习习题只有选择题。机器批量出题。
									</li>
								</ul>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#F5F0DD',
								}}>
								<h3>听绘本</h3>
								<ul>
									<li>
										名师讲解和听绘本是可以合并的，根据家长和下朋友不同的需求自己操作
									</li>
								</ul>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#F5F0DD',
								}}>
								<h3>录绘本</h3>
								<ul>
									<li>
										录音是学习中输出的一种，通过输入绘本内容，加上输出加深学习的印象。
									</li>
									<li>
										长内容可以分为简版和全版，简版中可以通过教研老师把核心知识点整合，只录音核心知识点即可。
									</li>
								</ul>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#F5F0DD',
								}}>
								<h3>分享作品</h3>
								<ul>
									<li>
										家长用英文绘本的原因，自身不会英语教不了，家长凑热闹peer
										pressure。
									</li>
									<li>
										学习是螺旋形向上的，读绘本的时候可能当时不会有什么效果，但是一年之后英文就会不一样，可以对比。
									</li>
								</ul>
							</div>
						</div>

						{/* 设计产品体验 */}
						<div className="work-Kidbook-research-wrap">
							<p>设计体验问题</p>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#EFFFE2',
								}}>
								<h3>阅读前 - 详情页问题</h3>
								<ul>
									<li>
										精品绘本有交互，内容有故事，学习习题类型更多。教研老师根据每一个课本单独提出，更有学习针对性。名师讲解会根据绘本连接故事，更完整通顺。
									</li>
									<li>中间绘本信息区信息层级不清晰。</li>
									<li>绘本简介交互操作冗余。</li>
									<li>
										页面主操作不明确，底部常驻4个操作按钮。
									</li>
								</ul>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#EFFFE2',
								}}>
								<h3>阅读中 - 绘本内容页</h3>
								<ul>
									<li>阅读时视觉杂音过多，干扰阅读绘本。</li>
									<li>进度条无法快速切换阅读位置。</li>
									<li>绘本切换页面是否需要模拟翻书效果？</li>
								</ul>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#EFFFE2',
								}}>
								<h3>阅读后 - 绘本结束页</h3>
								<ul>
									<li>结束反馈不明确。</li>
									<li>
										信息层级不清晰，老师、绘本信息、标签、操作混合。
									</li>
									<li>标签样式与按钮样式易混淆。</li>
									<li>猜你喜欢不具有引导性和扩展性。</li>
								</ul>
							</div>
						</div>
						{/* 产品体验反馈 */}
						<div className="work-Kidbook-research-wrap">
							<p>产品体验反馈 </p>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#FBECE9',
								}}>
								<h3>分不清产品</h3>
								<p>“从主页到页面详情页没有明显区别。”</p>
								<p>“没有引导，不知道使用的重点在哪。”</p>
								<p>“我付的VIP会员，怎么有的书看不了？”</p>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#FBECE9',
								}}>
								<h3>阅读麻烦</h3>
								<p>
									“为什么不能竖屏看绘本？iPad上自动旋转很好”
								</p>
								<p>
									“每次看书都得从竖屏换成横屏，然后再转回竖屏，非常麻烦。”
								</p>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#FBECE9',
								}}>
								<h3>内容显示不完整</h3>
								<p>
									“你们书裁掉很多内容，跟我家纸质书上东西不一样。”
								</p>
								<p>
									“我手机iphone 8
									plus的，但是还有绘本显示全的地方，为什么文字裁了一半？”
								</p>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#FBECE9',
								}}>
								<h3>贝壳无价值</h3>
								<p>
									“我们做题得了那么多贝壳，有什么用啊？每次都弹出来。”
								</p>
								<p>
									“绘本后的游戏和绘本没什么关系，就是骗孩子赢贝壳。”
								</p>
							</div>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#FBECE9',
								}}>
								<h3>录音不会用</h3>
								<p>“点击录音然后点哪？”</p>
								<p>
									“孩子读不了那么长的句子，也不能跳过，一直卡着。”
								</p>
								<p>
									“智能纠音是骗人的，孩子读两遍不一样怎么还是一样的分数？”
								</p>
							</div>
						</div>

						{/* 开发框架问题 */}
						<div className="work-Kidbook-research-wrap">
							<p>开发框架问题</p>
							<div
								className="work-Kidbook-research-item-wrap"
								style={{
									backgroundColor: '#E2EEFF',
								}}>
								<h3>生产尺寸限制</h3>
								<p>
									根据前端后台的技术标准，插图只能绘制横向，比例为16:9的插图封面。其他尺寸比如1:1，2:1等尺寸无法全部显示。
								</p>
							</div>
						</div>
					</div>

					<hr />

					<div className="work-content-text">
						<h3>设计范围选择</h3>
						<p>
							对于新用户的增加和留存，绿色的节点内是新用户必经路径。只有在这部分逻辑和体验升级之后，后续会员内容以及其他商业化功能才能有转化率的提升。
						</p>
					</div>
					<div className="work-content-1Img">
						<img
							src={require('../image/work-kidbook-designScope.png')}
							alt="design scope"
						/>
					</div>
				</section>

				<section className="work-content-wrap">
					<h1>想法1</h1>
					<img
						src={require('../image/work-kidbook-sketch01.jpg')}
						alt="design sketch 1"
					/>
					<div className="work-content-text">
						<ul>
							<li>
								从上至下分类整理页面信息，减少操作按钮数量，突出主按钮。
							</li>
							<li>
								竖屏展示绘本页面，绘本文字与插图统一展示，仅强调老师播放状态。
							</li>
							<li>增加页面统览，通过缩略图快速找到页面。</li>
							<li>结合滑动浏览，绘本结尾处统一结束页。</li>
						</ul>
					</div>
				</section>

				<section className="work-content-wrap">
					<h1>想法2</h1>
					<img
						src={require('../image/work-kidbook-sketch02.jpg')}
						alt="design sketch 2"
					/>
					<div className="work-content-text">
						<ul>
							<li>
								绘本封面与内容视觉上分离，通过左右滑动快速浏览绘本所有页面。
							</li>
							<li>跳转新页面加载，用动画连接加载和绘本页面。</li>
							<li>左右滑动展示绘本，单击展示背面绘本文字。</li>
							<li>缩略图中区分封面与内容。</li>
						</ul>
					</div>
				</section>

				<section className="work-content-wrap">
					<h1>想法3</h1>
					<img
						src={require('../image/work-kidbook-sketch03.jpg')}
						alt="design sketch 3"
					/>
					<div className="work-content-text">
						<ul>
							<li>用手势左滑展示绘本文字。</li>
							<li>长按显示操作信息。</li>
							<li>倾斜手机显示全景绘本页面。</li>
						</ul>
					</div>
				</section>

				<hr />

				<section className="work-content-wrap">
					<h1>提案</h1>
					<h2>阅读前 - 绘本详情页升级</h2>
					<div className="work-kidbook-preposal work-kidbook-preposal-before">
						<img
							src={require('../image/work-kidbook-proposal01.png')}
							alt="design preposal 1"
						/>
						<div>
							<div className="work-kidbook-preposal-text">
								<h3>增加页面缩略图</h3>
								<p>首次更容易了解绘本故事和风格。</p>
							</div>
							<div className="work-kidbook-preposal-text">
								<h3>针对使用次数场景的区分</h3>
								<p>
									首次用户，多次用户以及商业化活动时用户时展示不同的按钮。
								</p>
							</div>
							<div className="work-kidbook-preposal-text">
								<h3>动态背景色</h3>
								<p>
									根据绘本封面自动生成不同背景色，与底部绘本信息视觉区分，易于浏览。
								</p>
							</div>
						</div>
					</div>
					<div className="work-kidbook-preposal work-kidbook-preposal-before">
						<img
							src={require('../image/work-kidbook-proposal02.png')}
							alt="design preposal 2"
						/>
						<div>
							<div className="work-kidbook-preposal-text">
								<h3>增加页面缩略图</h3>
								<p>首次更容易了解绘本故事和风格。</p>
							</div>
							<div className="work-kidbook-preposal-text">
								<h3>针对使用次数场景的区分</h3>
								<p>
									首次用户，多次用户以及商业化活动时用户时展示不同的按钮。
								</p>
							</div>
							<div className="work-kidbook-preposal-text">
								<h3>动态背景色</h3>
								<p>
									根据绘本封面自动生成不同背景色，吸引小朋友看绘本。
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="work-content-wrap">
					<h2>阅读中 - 简化操作，支持横竖屏展示</h2>
					<div className="work-kidbook-preposal work-kidbook-preposal-during">
						<div className="flex">
							<figure>
								<img
									src={require('../image/work-kidbook-proposal03-figure01.png')}
									alt="design prosolal 3 figure 1"
								/>
								<figcaption>加载提示</figcaption>
							</figure>
							<figure>
								<img
									src={require('../image/work-kidbook-proposal03-figure02.png')}
									alt="design prosolal 3 figure 2"
								/>
								<figcaption>页面操作与单页进度</figcaption>
							</figure>
							<figure>
								<img
									src={require('../image/work-kidbook-proposal03-figure03.png')}
									alt="design prosolal 3 figure 3"
								/>
								<figcaption>快速导航</figcaption>
							</figure>
						</div>
						<video
							width="100%"
							autoPlay
							loop
							playsInline
							muted
							src={require('../video/work-kidbook-proposal03-video01.webm')}
						/>
					</div>
					<div className="work-kidbook-preposal work-kidbook-preposal-during">
						<video
							width="100%"
							autoPlay
							loop
							playsInline
							muted
							src={require('../video/work-kidbook-proposal03-video02.webm')}
						/>
						<div>
							<div className="work-kidbook-preposal-text">
								<h3>横竖屏统一</h3>
								<ul>
									<li>
										进入绘本阅读页面时，默认所有操作按钮隐藏。
									</li>
									<li>
										根据自研绘本的内容生成对应的高度和切换动画。
									</li>
									<li>横竖屏交互操作的统一</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="work-content-wrap">
					<h2>阅读中 - 已有传统/自研绘本尺寸适配横竖屏</h2>
					<div className="work-kidbook-preposal work-kidbook-preposal-during">
						<div className="yellow">
							<figure>
								<img
									src={require('../image/work-kidbook-proposal04-figure01.jpg')}
									alt="old design screenshot 1"
								/>
								<img
									src={require('../image/work-kidbook-proposal04-figure02.jpg')}
									alt="old design screenshot 2"
								/>
								<figcaption>旧 ⋅ 人工修图，程序裁切</figcaption>
							</figure>
							<figure>
								<img
									src={require('../image/work-kidbook-proposal04-figure03.jpg')}
									alt="design prosolal 4 figure 3"
								/>
								<img
									src={require('../image/work-kidbook-proposal04-figure04.jpg')}
									alt="design prosolal 4 figure 4"
								/>
								<figcaption>
									新 ⋅ 保持画面细节, 程序适配
								</figcaption>
							</figure>
						</div>
						<div>
							<div className="work-kidbook-preposal-text">
								<h3>尽量还原原始绘本细节</h3>
								<p>
									由于之前的技术债，仅支持显示最大1440*960尺寸的图片。
								</p>
								<p>
									如果小于这个尺寸需要插画师手动填充缺失的部分，例
									- 左上 -《No, David》封面的左右都需要填充。
								</p>
								<p>
									如果大于尺寸，例 - 左下 - 《No,
									David》内页需要插画师或机器裁去‘不重要’的信息。
								</p>
								<p>
									和小朋友聊天，她/他们会记得大人觉得不重要的细节，“这里有一只蓝色蜡笔”，“窗户外边有一只白猫”，这也是读绘本一个好处，用自己的眼睛观察。同时，插画师在创作这些细节的时候，不是仅仅为了填充画面，这里有着他/她对故事，画面构成的想法，是作品的一部分。
								</p>
							</div>
						</div>
					</div>
					<div className="work-kidbook-preposal work-kidbook-preposal-during">
						<div className="grid">
							<img
								className="div1"
								src={require('../image/work-kidbook-proposal04-figure05.png')}
								alt="design prosolal 4 figure 3"
							/>
							<img
								className="div2"
								src={require('../image/work-kidbook-proposal04-figure06.png')}
								alt="design prosolal 4 figure 3"
							/>
							<img
								className="div3"
								src={require('../image/work-kidbook-proposal04-figure07.png')}
								alt="design prosolal 4 figure 3"
							/>
							<img
								className="div4"
								src={require('../image/work-kidbook-proposal04-figure08.png')}
								alt="design prosolal 4 figure 3"
							/>
							<img
								className="div5"
								src={require('../image/work-kidbook-proposal04-figure09.png')}
								alt="design prosolal 4 figure 3"
							/>
							<img
								className="div6"
								src={require('../image/work-kidbook-proposal04-figure10.png')}
								alt="design prosolal 4 figure 3"
							/>
						</div>
						<div>
							<div className="work-kidbook-preposal-text">
								<p>自研绘本比例</p>
								<div className="ratio-9-16 ratio">9:16</div>
							</div>
							<div className="work-kidbook-preposal-text">
								<p>传统绘本比例传统绘本比例</p>
								<div className="ratio-1-1 ratio">1:1</div>
								<div className="ratio-6-5 ratio">6:5</div>
								<div className="ratio-4-3 ratio">4:3</div>
							</div>
							<div className="work-kidbook-preposal-text">
								<h3>支持多样尺寸的横竖屏展示</h3>
								<p>
									目前我们经常使用的尺寸有以上四种。把这些不同尺寸的绘本在不同尺寸的设备上尽量完整的展示出来，同时给予插画师更多的尺寸选择，在创作时能把尺寸作为展示故事的一种元素。同时释放出大量插画人力，不再去“修补”不符合尺寸的插画，是一种双赢。
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="work-content-wrap">
					<h2>阅读中 - 简化操作，支持横竖屏展示</h2>
					<div className="work-kidbook-preposal work-kidbook-preposal-during">
						<div className="flex">
							<figure>
								<img
									src={require('../image/work-kidbook-proposal05-figure01.png')}
									alt="design prosolal 3 figure 1"
								/>
							</figure>
							<figure>
								<img
									src={require('../image/work-kidbook-proposal05-figure02.png')}
									alt="design prosolal 3 figure 2"
								/>
							</figure>
							<figure>
								<img
									src={require('../image/work-kidbook-proposal05-figure03.png')}
									alt="design prosolal 3 figure 3"
								/>
							</figure>
						</div>
						<div className="work-kidbook-preposal-text">
							<h3>承上启下的框架</h3>
							<ul>
								<li>
									固定尺寸页面，三个圆形按钮可根据手机陀螺仪读数滚动，底部THE
									END文字静止不动。吸引小朋友与其交互。
								</li>
								<li>
									扩展相关绘本阅读的信息，引导用户继续阅读。
								</li>
								<li>增加扩展性，可拖动展示更多相关阅读。</li>
							</ul>
						</div>
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
					<VideoBookmark
						Title="附录:英文绘本阅读流程20210609"
						Href="https://www.figma.com/file/Nn8waMBbh7xzunJF64MnFv/%E8%8B%B1%E6%96%87%E7%BB%98%E6%9C%AC%E9%98%85%E8%AF%BB%E6%B5%81%E7%A8%8B20210609?node-id=0%3A1"
						LinkText="https://www.figma.com/file/Nn8waMBbh7xzunJF64MnFv/%E8%8B%B1%E6%96%87%E7%BB%98%E6%9C%AC%E9%98%85%E8%AF%BB%E6%B5%81%E7%A8%8B20210609?node-id=0%3A1"
						Background="work-kidbook-site-thumbnail"
					/>
				</footer>
			</article>
		</div>
	)
}

export default KidBook
