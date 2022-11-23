import React from 'react'
import './WebGradient.scss'
import ALink from '../component/ALink'
import RGBSlider from './WebGradient-components/RGBSlider'
import HSLSlider from './WebGradient-components/HSLSlider'
import CodeBlock from './CodeBlock'
import Chroma from './WebGradient-components/Chroma'

export const WebGradient = () => {
	return (
		<div className="post-container">
			<section className="post-header">
				<h1>Web渐变中“灰区”的原因和解决方法</h1>
				<h3>2022-11-21</h3>
			</section>
			<section>
				<h2>灰区</h2>
				<p>
					在css-tricks的
					<ALink
						href="https://css-tricks.com/the-gray-dead-zone-of-gradients/"
						title="The “Gray Dead Zone” of Gradients"
						text="这篇文章"
					/>
					里面提到了“Erik D. Kennedy
					发现了一个色彩渐变中出现的问题，在两个互补色之间做线性渐变，渐变的中间颜色会变灰。
				</p>
				<div className="webgradient-yb-gradient webgradient-gradient"></div>
				<div className="webgradient-gm-gradient webgradient-gradient"></div>
				<div
					className="webgradient-rg-gradient
                 webgradient-gradient"
				></div>
			</section>
			<section>
				<p>
					Erik提出的方案是在绕过中间，其实是让渲染中从之前的2个色彩之间的渐变变成多个色彩之间的渐变。
				</p>
				<div style={{ textAlign: 'center' }}>
					<img
						src={require('../image/Post-webgradient-erik.png')}
						alt="how gradient works in diagram"
					/>
				</div>
			</section>
			<section>
				<p>
					那么web中线性渐变到底是怎样实现的呢？在Josh Comeau
					<ALink
						href="https://www.joshwcomeau.com/css/make-beautiful-gradients/"
						title="Make Beautiful Gradients"
						text="这篇文章"
					/>
					中有很好的解释。在下面这个例子里，渐变发生的过程就是色彩rgb数值趋近于对方的过程
					- <code>RGB(255, 255, 0)</code> ⇄{' '}
					<code>RGB(0, 0, 255)</code>。
				</p>
				<RGBSlider
					r={255}
					g={255}
					b={0}
					initValue={0}
					className="webgradient-yb-gradient"
				/>
				<p>
					在这个过程中，如果rgb的三个数值相似或相等，就会产生灰色。一个极端例子就是白色渐变到黑色时，中间的灰色所有的rgb三个数值是一直相等的，所以就会产生浅灰到深灰的色带。(所以黑色和白色是一种特殊的灰色？👀)
				</p>
				<RGBSlider
					r={255}
					g={255}
					b={255}
					className="webgradient-wb-gradient"
					initValue={125}
				/>
			</section>
			<section>
				<h2>HSL</h2>
				<p>
					怎样让渐变中rgb色值不相似或相等呢？需要用另外的色彩表示方法
					- HSL。
					H代表Hue色相，S代表Saturation饱和度，L代表Lightness明度。通过混合HSL的数值达到渐变的效果。
				</p>
				<p>但是代码中目前还不能直接写成以下表达：</p>
				<CodeBlock
					codestring={`.hsl {
	background: linear-gradient(
		to right,
		hsl(60 100% 50%),
		hsl(240 100% 50%)
	);
}`}
				/>
				<p>
					渲染时还是会把HSL转化成RGB数值，所以需要手动的加入一个HSL的中间数值，在这个例子中中间值就是{' '}
					<code>hsl(150 100% 50%)</code>，这样就避免了出现中间的灰区。
				</p>
				<div className="webgradient-hsl-yb-gradient"></div>
				<HSLSlider />
			</section>
			<section>
				<h2>更多色彩模式</h2>
				<p>
					除了RGB，HSL的方法表示色彩外，目前还有LAB，LCH模式可以使用。具体的细节可以看
					<ALink
						href="https://www.smashingmagazine.com/2021/11/guide-modern-css-colors/"
						title="A Guide To Modern CSS Colors With RGB, HSL, HWB, LAB And LCH"
						text="这篇文章"
					/>
					。但是怎样在web中显示不同色彩模式的渐变呢？还是需要转化成RGB之后才能转化，在figma中可以使用不同的渐变插件来实现。
				</p>
				<p>
					实现这些渐变工具的一种方法是利用
					<ALink
						href="https://www.vis4.net/chromajs/#chroma-gl"
						title="chroma.js is a small-ish zero-dependency JavaScript library (13.5kB) for all kinds of color conversions and color scales."
						text="chroma.js"
					/>
					提供快速的不同颜色之间的差值颜色并转化成RGB值。使用chroma.js的大致思路，用以下已两种颜色举例：
				</p>

				<Chroma />
			</section>
			<section>
				<h2>参考</h2>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<ALink
						href="https://www.joshwcomeau.com/css/make-beautiful-gradients/"
						title="Make Beautiful Gradients"
						text="Make Beautiful Gradients"
					/>
					<br />
					<ALink
						href="https://www.smashingmagazine.com/2021/11/guide-modern-css-colors/"
						title="A Guide To Modern CSS Colors With RGB, HSL, HWB, LAB And LCH"
						text="A Guide To Modern CSS Colors With RGB, HSL, HWB, LAB And LCH"
					/>
					<br />
					<ALink
						href="https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/"
						title="LCH colors in CSS: what, why, and how?"
						text="LCH colors in CSS: what, why, and how?"
					/>
					<br />
					<ALink
						href="https://www.smashingmagazine.com/2021/07/hsl-colors-css/"
						title="Using HSL Colors In CSS"
						text="Using HSL Colors In CSS"
					/>
					<br />
					<ALink
						href="https://www.vis4.net/chromajs/#chroma-gl"
						title="chroma.js"
						text="chroma.js"
					/>
				</div>
			</section>
		</div>
	)
}
