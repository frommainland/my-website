import './PxRemEm.scss'
import CodeExample from './PxRemEm-components/CodeExample'
import TopCode from './PxRemEm-components/TopCode'

const PxRemEm = () => {
	return (
		<div className="post-container">
			<section className="post-header">
				<h1>应该用px，em还是rem？以及相关的距离单位</h1>
				<h3>2022-07-18</h3>
			</section>
			<section>
				<p>
					目前我使用这些单位的规则是： ¹ 字体大小使用rem；²
					绝大部分的长度，宽度使用em和%；³
					尽量少用px，因为对设备适配和设计包容性不友好。下面是解释和可操作的例子。
				</p>
			</section>
			<section className="post-content">
				<p className="bold">px名词解释</p>
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
							1px和1pt在iOS设备上的区别是什么
						</h3>
						<h3>
							在用@1x尺寸设计的时候，1px和1pt是相等的。内容来自
							What is px? What is a pt? What is dp?
						</h3>
					</div>
				</article>
			</section>
			<section className="post-content">
				<p className="bold">em名词解释</p>
				<p>相对距离单位，大小基于元素本身的字体大小。</p>
				<div className="code-example-wrap">
					<p className="bold">使用优点</p>
					<p>长宽距离可以与字体大小等比放大或缩小</p>
					<CodeExample initValue={20}>
						<TopCode></TopCode>
					</CodeExample>
				</div>
				<div className="code-example-wrap">
					<p className="bold">使用缺点</p>
					<p>与父元素叠加，产生叠加效果 (compounding effect)</p>
					<div className="code-interactive"></div>
				</div>
				<article className="read-more">
					<h3 className="bold">为什么叫做em？</h3>
					<h3>
						传统印刷里面用大写字母M的字块作为当前字体的大小(磅数)。
					</h3>
				</article>
			</section>
		</div>
	)
}

export default PxRemEm
