import './PxRemEm.scss'
import CodeExample from './PxRemEm-components/CodeExample'
import TopCode from './PxRemEm-components/TopCode'
import Slider from './PxRemEm-components/Slider'
import PairingElement from './PxRemEm-components/PairingElement'
import CodeExampleButton from './PxRemEm-components/CodeExampleButton'
import CodeExampleText from './PxRemEm-components/CodeExampleText'
import CodeExampleTextSingleLine from './PxRemEm-components/CodeExampleTextSingleLine'

import ALink from '../component/ALink'

const PxRemEm = () => {
	return (
		<div className="post-container">
			<section className="post-header">
				<h1>应该用px，em还是rem？以及相关的距离单位</h1>
				<h3>2022-07-18</h3>
			</section>
			<section>
				<p>
					目前我使用这些单位的规则是： ¹ 字体大小使用<code>rem</code>
					；² 绝大部分的长度，宽度使用<code>em</code>和<code>%</code>
					；³ 尽量少用<code>px</code>
					，因为对设备适配和设计包容性不友好。下面是解释和可操作的例子。
				</p>
			</section>

			<hr />

			<section className="post-content">
				<h2>px</h2>
				<p className="bold">名词解释</p>
				<p>
					<code>px</code>是pixel的缩写，它是物理屏幕内最小的显示单位 -
					像素。
				</p>

				<article className="read-more">
					<div className="question-wrap">
						<h3 className="bold">软件和硬件的1px</h3>
						<h3>
							<code>1px</code>
							就是物理显示屏幕上的一个点，这个点不一定是方形的。但是把
							<code>1px</code>
							想像成方形可以和设计稿对应起来，毕竟ap设计就是画方块。
						</h3>
						<figure>
							<img
								src={require('../image/Post-iPhone_13Pro_Diamond_Pixels.png')}
								alt="iPhone 13 Pro Diamond Pixels"
							/>
							<figcaption>
								<h5>iPhone 13 Pro Max Diamond Pixels</h5>
							</figcaption>
						</figure>
					</div>

					<hr />

					<div className="question-wrap">
						<h3 className="bold">
							1px和1pt在iOS设备上的区别是什么？
						</h3>
						<h3>
							在用@1x尺寸设计的时候，<code>1px</code>和
							<code>1pt</code>是相等的。内容来自
						</h3>
						<ALink
							href="https://medium.com/hemisphereco/what-is-px-what-is-a-pt-what-is-dp-ecaefefa25a2"
							title="What is px? What is a pt? What is dp?"
							text="What is px? What is a pt? What is dp?"
						/>
					</div>
				</article>
			</section>

			<hr />

			<section className="post-content">
				<h2>em</h2>
				<p className="bold">名词解释</p>
				<p>相对距离单位，大小基于元素本身的字体大小。</p>
				<div className="code-example-wrap">
					<p className="bold">使用优点</p>
					<p>长宽距离可以与字体大小等比放大或缩小。</p>

					<CodeExample initValue={24}>
						<TopCode>
							<Slider min="12" max="60" p="px" h4="字体大小" />
							<PairingElement
								content={[
									{
										p: '¹ 1em / ² 24px',
										h4: 'button padding',
									},
								]}
							/>
						</TopCode>
						<hr />
						<CodeExampleButton attr={true} text="¹自适应按钮" />
						<CodeExampleButton text="²固定padding按钮" />
					</CodeExample>
				</div>
				<div className="code-example-wrap">
					<p className="bold">使用缺点</p>
					<p>
						与父元素叠加，产生叠加效果
						。越深层级的元素，尺寸缩放的越厉害。如例子中
						<code>h3</code>字体的大小。
					</p>
					<CodeExample initValue={2}>
						<TopCode>
							<Slider
								min="1"
								max="5"
								p="em"
								h4="h1 ( html {font-size:16px} )"
							/>
							<PairingElement
								content={[
									{
										p: '0.5em',
										h4: 'h2',
									},
									{
										p: '0.4em',
										h4: 'h3',
									},
								]}
							/>
						</TopCode>
						<hr />
						<CodeExampleText />
					</CodeExample>
				</div>
				<article className="read-more">
					<div className="question-wrap">
						<h3 className="bold">为什么叫做em？</h3>
						<h3>
							传统印刷里面用大写字母M的字块作为当前字体的大小(磅数)。
						</h3>
						<figure>
							<img
								src={require('../image/Post-traditional-printing.jpg')}
								alt="traditional printing"
							/>
							<figcaption>
								<h5>捡铅字</h5>
							</figcaption>
						</figure>
					</div>
				</article>
			</section>

			<hr />

			<section className="post-content">
				<h2>rem</h2>
				<p className="bold">名词解释</p>
				<p>
					<code>rem</code>是<code>html</code>
					标签中定义的字体大小，默认是16px。
				</p>
				<div className="code-example-wrap">
					<p className="bold">使用优点</p>
					<p>
						调整大小的总开关，不会产生叠加效果。对用户自己调节浏览器默认字大小的操作更友好。
					</p>
					<CodeExample initValue={2}>
						<TopCode>
							<Slider
								min="1"
								max="5"
								p="rem"
								h4="h1 ( html {font-size:16px} )"
							/>
							<PairingElement
								content={[
									{
										p: '0.5rem',
										h4: 'h2',
									},
									{
										p: '0.4rem',
										h4: 'h3',
									},
								]}
							/>
						</TopCode>
						<hr />
						<CodeExampleText rem={true} />
					</CodeExample>
				</div>
				<div className="code-example-wrap">
					<p className="bold">使用缺点</p>
					<p>数值大小固定，不能等比缩放。</p>
					<CodeExample initValue={24}>
						<TopCode>
							<Slider min="12" max="60" p="px" h4="字体大小" />
							<PairingElement
								content={[
									{
										p: '¹ 1em / ² 1rem',
										h4: 'button padding',
									},
								]}
							/>
						</TopCode>
						<hr />
						<CodeExampleButton
							attr={true}
							text="¹ 1em padding按钮"
						/>
						<CodeExampleButton text="² 1rem padding按钮" />
					</CodeExample>
				</div>
				<article className="read-more">
					<div className="question-wrap">
						<h3 className="bold">为什么浏览器默认字体是16px？</h3>
						<h3>
							90年代微软把印刷中正文字体在96ppi的分辨率下从12pt转换为16px。来源
							<ALink
								href="https://medium.com/@xtianmiller/your-body-text-is-too-small-5e02d36dc902"
								title="Why website body text should be bigger, and ways to optimize it."
								text="Your Body Text Is Too Small"
							/>
						</h3>
					</div>

					<hr />

					<div className="question-wrap">
						<h3 className="bold">
							默认16px作为设计系统中的一个字体大小token，有什么好处？
						</h3>
						<h3>
							16这个数字作为底数看起来和其他的数字很难有关联，但是从各个app设计组件中可以看到，大多数组件的spacing是以8作为基础token，也会用到更小4。所以在web设计中16px作为底数很容易和做出一个相关联字体大小的数组，在整体上定义整个设计的版式。来源
							<ALink
								href="https://spec.fm/specifics/8-pt-grid"
								title="Using multiples of 8 to define dimensions, padding, and margin of elements."
								text="8-Point Grid"
							/>
						</h3>
					</div>
				</article>
			</section>

			<hr />

			<section className="post-content">
				<h2>vh，vw</h2>
				<p className="bold">名词解释</p>
				<p>
					<code>vh</code>是 view height的缩写，<code>1vh</code>
					等于视窗尺寸的1%，
					<code>vw</code>是 view width的缩写，
					<code>1vw</code>等于视窗尺寸的1%。
				</p>
				<p>
					在放大或缩小浏览器时，
					<code>vh</code>和<code>vw</code>的尺寸都会发生变化。
				</p>
				<div className="code-example-wrap">
					<CodeExample initValue={3}>
						<TopCode>
							<Slider min="1" max="5" p="vw" h4="模拟视窗 - 宽" />
						</TopCode>
						<hr />
						<CodeExampleTextSingleLine
							content="h1字体大小"
							unit="vw"
						/>
					</CodeExample>
				</div>
				<div className="code-example-wrap">
					<CodeExample initValue={3}>
						<TopCode>
							<Slider min="1" max="5" p="vh" h4="模拟视窗 - 高" />
						</TopCode>
						<hr />
						<CodeExampleTextSingleLine
							content="h1字体大小"
							unit="vh"
						/>
					</CodeExample>
				</div>
			</section>

			<hr />

			<section className="post-content">
				<h2>ch</h2>
				<p className="bold">名词解释</p>
				<p>
					<code>ch</code>是当前字体大小下数字0的宽度。
				</p>
				<p>
					在适配设计时，我们可以使用<code>ch</code>
					来计算区域最大或最小的宽度，保证阅读的效果。
				</p>
				<div className="code-example-wrap">
					<CodeExample initValue={35}>
						<TopCode>
							<Slider min="20" max="45" p="ch" h4="h1" />
						</TopCode>
						<hr />
						<CodeExampleTextSingleLine
							content="Lorem ipsum从15世纪开始就被广泛地使用在西方的印刷、设计领域中，在电脑排版盛行之后，这段被传统印刷产业使用几百年的无意义文字又再度流行。"
							unit="ch"
						/>
					</CodeExample>
				</div>
				<article className="read-more">
					<div className="question-wrap">
						<h3 className="bold">适合阅读的行宽是多少？</h3>
						<h3>
							英文一行适合阅读的字数为50-75字符，中文一行适合阅读的字数为30-40字符。一
							来源 <br />¹
							<ALink
								href="https://baymard.com/blog/line-length-readability"
								title="Having the right amount of characters on each line is key to the readability of your text."
								text="https://baymard.com/blog/line-length-readability"
							/>
							<br />²
							<ALink
								href="https://chenhuijing.com/blog/chinese-web-typography/#%F0%9F%96%8A"
								title="中国文字的横排横写，是发展趋势。"
								text="Chinese language on the web"
							/>
						</h3>
					</div>
				</article>
			</section>
		</div>
	)
}

export default PxRemEm
