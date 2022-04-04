import React from 'react'
import './RumbleInTheJungle.scss'
import './PayInChina.scss'

const intervieweeID = []

for (let index = 1; index < 13; index++) {
	intervieweeID.push(index)
}

const workshop = []
for (let index = 1; index < 5; index++) {
	workshop.push(index)
}

const PayInChina = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>Pay in China</h1>
					<p>Visa对于中国国内消费者是什么？它能做什么？</p>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>机遇</h3>
						<p>
							Visa
							对于我和很多人来说只是信用卡片角落上的一个标志。国内消费者享受到的信用卡权益以及能在海外大部分商店顺利的支付都是Visa多年来长期同发卡行以及商户合作的结果。但是随着移动支付在中国的兴起，不但国内的消费者已经习惯于移动的支付，同时也影响到了商户端的收款方式。
						</p>
						<p>
							目前已经很难看到面对面纸币的交易，甚至是卡片POS交易，在不远的未来，交易的甚至会达到真正的无感化。但是这对到中国来旅游，不能绑定信用卡到支付宝，微信的外国人体验就没有那么便捷和舒服了，当然，通过收取交易手续费的卡组织赚钱就更难了。
						</p>
					</div>
					<div className="work-content-text">
						<div className="work-payinchina-context-highlight">
							<ul>
								<li>
									中国内地移动支付二维码占比所有支付的90%以上，但是不支持外卡绑定。
								</li>
								<li>
									只有酒店，机场等大型商户能够支持外卡支付，同时支持外卡支付的商户在大幅的减少。
								</li>
							</ul>
						</div>
					</div>
					<div className="work-content-text">
						<h3>快速解决</h3>
						<p>
							Visa本身不拥有任何商户的资料，需要补贴银行才能帮助拓展商户的网络。银行本身也在推广自身的移动支付与支付宝和微信抗衡，所以很难达到推广外卡支付的效果。如果Visa自己去获取商户，直接补贴商户，那么这个业务本身就与银行产生了竞争关系，打破了四方模式的根本，这是Visa做不到的。
						</p>
						<p>
							所以还是需要借移动支付的方法，通过改变用户本身的习惯去完成在中国的交易。
						</p>
					</div>
					<div className="work-payinchina-design-alpha">
						<figure>
							<img
								src={require('../image/work-payinchina-alpha.png')}
								alt="pay in china app alpha screenshot"
							/>
							<figcaption>alpha</figcaption>
						</figure>
						<figure>
							<img
								src={require('../image/work-payinchina-beta.png')}
								alt="pay in china app beta screenshot"
							/>
							<figcaption>beta</figcaption>
						</figure>
					</div>
				</section>
				<hr />
				<section className="work-content-wrap">
					<div className="work-content-text">
						<div className="work-payinchina-context-highlight">
							<p>
								我们似乎解决了用户的问题，但这是基于Visa白标银行APP的结构上修改而来。作为一个面向消费者的简单工具APP，应该更易用。
							</p>
						</div>
					</div>
					<div className="work-payinchina-idea-1">
						<figure>
							<img
								src={require('../image/work-payinchina-idea-1.png')}
								alt="design idea 1"
							/>
						</figure>
						<video
							src={require('../video/work-payinchina-idea-1.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={314}
						/>
					</div>
					<div className="work-content-text">
						<ul>
							<li>
								四个底部tab减少到三个，增加每一个tab内容曝光。
							</li>
							<li>
								从基于卡片，卡包支付逻辑到基于二维码支付的逻辑，减少了每次支付选择的麻烦。
							</li>
							<li>横划切换快速切换tab，增加了易用性。</li>
						</ul>
					</div>
				</section>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<div className="work-payinchina-context-highlight">
							<p>
								重新去看这个产品能够提供的用户价值，里面却有很大的漏洞。
							</p>
						</div>
					</div>
					<div className="work-content-text">
						<ul>
							<li>
								<span className="bold">用户量。</span>
								如仅支持Visa刷卡，最大用户量不到所有持卡人50%。
								用户体验流程不完整，产品价值低。
							</li>
							<li>
								<span className="bold">
									用户体验流程不完整，产品价值低。
								</span>
								当前产品的流程不完善，并且不能满足用户正常使用中的基本需求，用户不会沉淀也不会去传播，达不到产品初期积累的动能。
								<img
									style={{ marginBottom: 0, marginTop: 20 }}
									src={require('../image/work-payinchina-diagram.png')}
									alt="use flow diagram"
								/>
							</li>
							<li>
								<span className="bold">海外客户银行。</span>
								如果把这个APP定位成一个实验品，测试完成技术的可行性并且产生完整的API解决方案卖给海外银行。从此银行的持卡人角度来看，他们不会关心某一个卡组织，而是需要银行APP支持所有的卡组织在中国能够成功的支付。从银行角度来看，更希望有一个统一的解决方案，而不会单独和每一个卡组织谈，增加接入和后期维护的巨大成本。
							</li>
							<li>
								<span className="bold">国内竞品。</span>
								如果同时有竞争对手支持Visa，mastercard和Amex支付，甚至更多的卡组织，那仅有Visa支付的数字钱包还有竞争优势吗？AIP是国内第三方的聚合支付平台，如果这样的PF同时在接不同的卡组织，那么还有用户会用我们的APP吗？
							</li>
						</ul>
					</div>
				</section>
				<hr />
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>解决以上问题的两种可能方向：</h3>
						<ol>
							<li>
								发掘更多全品类可支付的商户，覆盖更多使用场景。可能的劣势:在初始阶段就需要维护大量商户，并且不能直接管理，需要通过不同的PF，不能保证初期产品使用的质量。同时在初期宣传的时候需要传递出APP支持大部分商户，定位模糊。
							</li>
							<li>
								发掘更多单一垂直类可支付的商户。可能的劣势：深耕某一个领域需要更多的时间和资源。可消费支付的商户数量少。
							</li>
						</ol>
						<p>
							假如我们选择了<code>2</code>
							，作为一个海外用户在中国旅行，在衣食住行中，每天固定交易，频次高且有中国特色的食是一个很好的支付场景。如果把美食的回忆附加到APP上会不会更容易让用户沉淀并且去转换将要去中国旅行的用户？
						</p>
					</div>
					<div className="work-content-text">
						<h3>基础原型</h3>
					</div>
					<div className="work-payinchina-idea-2">
						<figure>
							<img
								src={require('../image/work-payinchina-idea-2.png')}
								alt="design idea 2"
							/>
						</figure>

						<video
							src={require('../video/work-payinchina-idea-2.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={314}
						/>
					</div>
				</section>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>原型迭代</h3>
					</div>
					<div className="work-payinchina-iteration-1">
						<div className="work-payinchina-old">
							<img
								src={require('../image/work-payinchina-old-1.png')}
								alt="design old version 1"
							/>
							<img
								src={require('../image/work-payinchina-old-2.png')}
								alt="design old version 2"
							/>
							<p>旧</p>
						</div>
						<div className="divider"></div>
						<div className="work-payinchina-new">
							<p>新</p>
							<img
								src={require('../image/work-payinchina-new-1.png')}
								alt="design new version 1"
							/>
							<img
								src={require('../image/work-payinchina-new-2.png')}
								alt="design new version 2"
							/>
						</div>
					</div>
					<div className="work-content-text">
						<ul>
							<li>
								将所有类型，必吃以及营业中餐厅放在首页顶部，方便对国内不熟悉的用户的引导，同时保证消费的质量以及增加复用的可能性。
							</li>
							<li>
								筛选页面中增强选中状态易读性，修改主色为青草绿，区别于维萨，万事达以及美运卡的品牌色。
							</li>
							<li>
								筛选页面中增强选中状态易读性，修改主色为青草绿，区别于维萨，万事达以及美运卡的品牌色。
							</li>
						</ul>
					</div>
				</section>

				<section className="work-content-wrap">
					<div className="work-payinchina-iteration-2">
						<div className="work-payinchina-old">
							<img
								src={require('../image/work-payinchina-old-3.png')}
								alt="design old version 3"
							/>
							<img
								src={require('../image/work-payinchina-old-4.png')}
								alt="design old version 4"
							/>
						</div>
						<div className="divider">
							<p>旧</p>
							<div></div>
							<p>新</p>
						</div>
						<div className="work-payinchina-new">
							<img
								src={require('../image/work-payinchina-new-3.png')}
								alt="design new version 3"
							/>
							<img
								src={require('../image/work-payinchina-new-4.png')}
								alt="design new version 4"
							/>
						</div>
					</div>
					<div className="work-content-text">
						<ul>
							<li>
								添加甄选的快速介绍功能，让用户直接可以了解餐厅主打特色。为了与普通餐厅区别，臻选页面中使用新主色紫色。
							</li>
							<li>
								修改普通与臻选餐厅底部白色按钮“收藏”和“支付”转换成对应主色的按钮，让操作一目了然，不会溶于背景之后。之前白色的背景更想用单色与餐厅彩色图片产生对比，让关注点落在图片上。
							</li>
							<li>
								增加横滑的操作，将餐厅图片，优惠信息折叠，减少浏览内容的长度，增加浏览的效率。
							</li>
							<li>
								在详情页内直接添加卡组织的优惠信息，让用户更容易了解并有卡组织的背书，促成交易。
							</li>
						</ul>
					</div>
				</section>
				<section className="work-content-wrap">
					<div className="work-payinchina-iteration-3">
						<div className="divider">
							<div></div>
							<p>新</p>
						</div>
						<div className="work-payinchina-new">
							<img
								src={require('../image/work-payinchina-new-5.png')}
								alt="design new version 5"
							/>
							<img
								src={require('../image/work-payinchina-new-6.png')}
								alt="design new version 6"
							/>
							<img
								src={require('../image/work-payinchina-new-7.png')}
								alt="design new version 7"
							/>
							<img
								src={require('../image/work-payinchina-new-8.png')}
								alt="design new version 8"
							/>
						</div>
					</div>
					<div className="work-content-text">
						<ul>
							<li>
								支付页面上添加三大卡组织标志，提醒用户在有这些标志的商家消费。
							</li>
							<li>
								在完成支付之后，通过用户的评价去优化商家的信息以及推荐的顺序，增加可信度，并且推荐给其他的朋友。
							</li>
						</ul>
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
						支付宝和微信最近陆续推出了支持外国外卡在中国消费的方案，一个是通过外卡买入2000限额的预付卡，另外一个需要在有微信接受外卡的微信商户中扫码。
					</p>
					<p>
						对于外国人拥有支付宝和微信必然会享受到更多的服务，但是对于一个面对外卡在中国支付c端app最大的问题还是用户使用时间短，不能留存到产品上，所以投入产出比不能平衡是最大的问题。
					</p>
				</footer>
			</article>
		</div>
	)
}

export default PayInChina
