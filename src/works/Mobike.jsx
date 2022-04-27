import './RumbleInTheJungle.scss'
import './Mobike.scss'

function Adtype() {
	return (
		<div className="work-mobike-adType">
			<div className="work-mobike-video-wrap">
				<video
					src={require('../video/work-mobike-adtype.webm')}
					autoPlay
					muted
					loop
					playsInline
					width={443}
				/>
			</div>
			<div className="adtype-wrap">
				<div className="top">
					<figure>
						<img
							src={require('../image/work-mobike-adtype01.jpg')}
							alt="adtype 01"
						/>
						<figcaption>
							<h3>硬广告</h3>
							<p>无关联或上下文关系</p>
						</figcaption>
					</figure>
				</div>
				<div className="bottom">
					<figure>
						<img
							src={require('../image/work-mobike-adtype02.jpg')}
							alt="adtype 02"
						/>
						<figcaption>
							<h3>合作广告</h3>
							<p>仅曝光广告主</p>
						</figcaption>
					</figure>
					<figure>
						<img
							src={require('../image/work-mobike-adtype03.jpg')}
							alt="adtype 03"
						/>
						<figcaption>
							<h3>换量广告</h3>
							<p>曝光广告主 + 摩拜</p>
						</figcaption>
					</figure>
					<figure>
						<img
							src={require('../image/work-mobike-adtype04.jpg')}
							alt="adtype 04"
						/>
						<figcaption>
							<h3>自身运营</h3>
							<p>提升摩拜品牌</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	)
}

const notifScene = ['运营+状态提示', '活动提示', '教育提示']

const newNotif = [
	{ h3: 'B1', p: '操作后消失或7.5秒自动消失，要求用户注意力高' },
	{ h3: 'B2', p: '操作后消失或5秒自动消失，要求用户注意力中' },
	{ h3: 'B3', p: '5秒自动消失，要求用户注意力低' },
]

const bikeData = ['车辆数据', '用户数据', '车辆详细数据，回收计划']

const Mobike = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>摩拜商业化与再设计</h1>
					<p>
						刮风减半，下雨全完。还有什么收入手段能让业务度过寒冬？
					</p>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>背景</h3>
						<p>
							每年的秋冬季都是业务数据下滑最厉害的时候，要是遇到寒流，那更是雪上加霜。业务在忙拉升业务数据的策略，设计师在忙着还之前的设计债。
						</p>
						<p>
							在过去已有的商业化中，讨论最多的就是扫码开锁时的广告位。最大的顾忌就是伤害用户的体验，但是如果没有更多的收入手段，用户连体验的可能都没有了。
						</p>
					</div>
				</section>
				<section className="work-content-wrap">
					<div className="work-mobike-conversion">
						<figure>
							<img
								src={require('../image/work-mobike-conversion.png')}
								alt="ad conversion analysis"
							/>
							<figcaption>
								<span>
									曝光<span className="red"></span>
								</span>
								<span>
									转化<span className="green"></span>
								</span>
								<span>
									注意力<span className="yellow"></span>
								</span>
							</figcaption>
						</figure>
					</div>

					<div className="work-content-text">
						<h3>当前商业化触点和问题</h3>
						<div className="ul-with-title">
							<p className="bold">app启动</p>
							<ul>
								<li>splash screen，曝光高，转化低</li>
								<li>
									pop-up，曝光高，转化低，弹窗形式和机制打断用户使用流程
								</li>
							</ul>
						</div>
						<div className="ul-with-title">
							<p className="bold">找车</p>
							<ul>
								<li>
									首页banner，曝光中等，操作区域在屏幕下方，转化率低
								</li>
								<li>
									地图车辆marker，曝光量较高，和用户找车强相关，操作空间少，只适于展示品牌logo
								</li>
								<li>
									右上角信息中心，曝光低，操作区域远离核心功能，同时用户对红点更新麻痹以及不能及时显示活动内容和品牌曝光
								</li>
							</ul>
						</div>

						<div className="ul-with-title">
							<p className="bold">扫码</p>
							<ul>
								<li>
									扫码开锁曝光高，用户注意力高度集中，但没有做商业化的资源位
								</li>
							</ul>
						</div>
						<div className="ul-with-title">
							<p className="bold">骑行中</p>
							<ul>
								<li>
									骑行卡片，曝光低，用户骑行中打开手机的需求低
								</li>
							</ul>
						</div>
					</div>
					<div className="work-content-text">
						<h3>当前用户体验触点和问题</h3>
						<ul>
							<li>
								在骑车时，用户很难重新打开手机获得信息或操作功能，一是安全原因，很多城市交通复杂，用户注意力集中在道路上，二是没有基础导航功能，不能辅助骑行。其次在三公里范围内，骑行时间绝大部分不超过半小时，用户不需要担心车辆费用。
							</li>
							<li>
								由于月卡，季卡，半年卡的优惠推广，用户结费时不会担心费用，导致查看付费结果的注意力下降，仍有百分之xx查看，入口流量的绝对数值仍然相当高。
							</li>
							<li>
								骑行前，用户停留时间在xx秒，高点击的功能是开锁，客服以及抽屉中的行程功能。顶部banner，车辆marker以及活动消息在不同的位置，分散了用户的注意力，同时离底部操作区较远，不利于被发现。
							</li>
							<li>
								扫码开锁天生具有聚焦用户注意力的属性，用户使用时注意力高度集中，是曝光量最大的入口。
							</li>
						</ul>
					</div>
				</section>

				<hr />
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h1>
							再设计 -
							重新整合的资源位和简化首页的结构，让用户更容易找到和聚焦内容，同时通过活动以及勋章提高用户停留在首页的时长，更好的转化活动内容。
						</h1>
						<h3>首页结构</h3>
						<ul>
							<li>
								把散落在首页上不同位置的曝光资源位整合在一起，用户只需要通过底部操作即可满足大部分的需求，不需要在不同的入口跳转获取不同的内容。
							</li>
							<li>
								广告根据优先级穿插在常驻模块之间，通过更大的空间去曝光重要的内容，而不是在不同的位置全部曝光，另外对于商业化团队提供阶梯化的价格方案，覆盖到不同预算需求的客户。
							</li>
						</ul>
					</div>
					<div className="work-content-img">
						<figure>
							<img
								src={require('../image/work-mobike-ad-layout.png')}
								alt="ad layout"
							/>
						</figure>
					</div>

					<div className="work-content-text">
						<h3>广告类型</h3>
						<p>将广告分成2种类型，硬性广告和软性广告。</p>
						<ul>
							<li>
								硬性广告只能占用p2，p3广告位置，但是通过拓展硬性广告的格式，从静态图片到动态视频，给予广告主更多的展示形式和价格空间。
							</li>
							<li>
								除了硬性广告之外，向广告主推广软性广告的展示。通过品牌联合活动的方式，把用户置于一个更有关联的语境之中，品牌获得更好的曝光以及转化效果。
							</li>
						</ul>
					</div>
					<Adtype />

					<div className="work-content-text">
						<h3>活动与勋章成就</h3>
						<p>
							成就系统是运动类的工具不能分开的一部分，摩拜是通勤的工具，也是用户去探索城市，绿色生活的一种体现。勋章和成就满足了用户情感上的需求，增加用户离开的成本以及黏性的提升，同时会更好的辅助软性广告的效果，形成一个更完善的闭环，骑车
							- 奖励/消费内容 -
							骑车。红包车商业化和线下店铺更紧密的结合，运维人员易于收车，同时用户得到红包和优惠券消费。
						</p>
					</div>
					<div className="work-mobike-medal">
						<video
							src={require('../video/work-mobike-medal.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={443}
						/>
					</div>

					<div className="work-content-text">
						<h3>扫码资源位</h3>
						<p>
							怎样让用户扫码时看到广告而不感到打扰？怎样让广告有效果，而且不影响用户开锁的效率？广告落地页和app怎样平滑的连接？不同类型的广告应该有几种不同的展示方式？围绕这些问题，我重新设计了扫码的流程，在广告曝光效果和开锁效率之间找平衡。
						</p>
					</div>
					<div className="work-mobike-scan2unlock">
						<video
							src={require('../video/work-mobike-ad.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={443}
						/>
					</div>
					<div className="work-content-text">
						<cite>
							青蛙动画来自 James Curran，身轻如燕勋章插图来自
							Peter Voth，其余勋章插图来自互联网。
						</cite>
					</div>
					<div className="work-content-text">
						<h3>方案反馈</h3>
						<p>
							来自上峰的反馈，不能改变现有的框架，以免和将来的商业模式不兼容，同时电单车会大规模投车，与单车并行同为重要业务。我带着这些反馈继续到新的设计中。
						</p>
					</div>
				</section>

				<hr />

				<section className="work-content-wrap">
					<div className="work-content-text">
						<h1>
							保持现有的产品框架进行设计，是改版的基准点。‘手机扫码，马上骑车’，这是用户的基准点。
						</h1>
						<h3>目标</h3>
						<p>
							在保持简洁使用的同时，我们也需要创造一个新平台，可以承载和扩展更多的用户需求和产品可能性。一是为了让用户更方便，更舒服的使用。二是为了更多的用户-app之间互动，从纯粹工具进化到一个新的产品模式。
						</p>
					</div>

					<div className="work-content-text">
						<h3>现有框架的局限</h3>
						<p>首页中点击最高的三个按钮依次是:</p>
						<ol>
							<li>扫码开锁</li>
							<li>客服</li>
							<li>抽屉导航(我的行程)</li>
						</ol>
						<p>
							其中扫码开锁和客服按钮常驻在屏幕下方。这样的位置安排对于每一个新用户学习很低，只需要点击底部的扫码按钮就可以使用产品，坏处是对于其他功能的关注度在一开始的时候教育度和曝光度会很低，容易被用户忽略，难以改变用户习惯，形成新功能的有效曝光。
						</p>
						<img
							src={require('../image/work-mobike-layout.png')}
							alt="old layout"
						/>
					</div>

					<div className="work-content-text">
						<h3>触达的矛盾</h3>
						<p>
							多信息展示时规则单一，最多只能显示2种卡片，随之出现的问题::
						</p>
						<ul>
							<li>
								没有明确的规范，只能通过卡片的大小显示信息的优先级。
							</li>
							<li>
								卡片上下排列的展示破坏了用户的焦点，找不到聚焦的落脚点。
							</li>
							<li>
								用户不能手动取消信息的展示，影响用户对app的控制感，同时产品又得不到有效的画像数据，不能为用户推荐更适合的信息。
							</li>
							<li>
								电助力车需要更多地图的空间去展示车，停车点和导航的信息，过多的顶部信息阻碍用户完成骑行任务。
							</li>
						</ul>
					</div>

					<div className="work-mobike-notif">
						<div className="notif-sketch">
							<img
								src={require('../image/work-mobike-notif-sketch.jpg')}
								alt="notif sketch"
							/>
						</div>
						<div className="notif-scene">
							{notifScene.map((item, index) => {
								return (
									<figure key={index}>
										<img
											src={require(`../image/work-mobike-notif-${
												index + 1
											}.jpg`)}
											alt={`notif scene ${index + 1}`}
										/>
										<figcaption>
											<p>{item}</p>
										</figcaption>
									</figure>
								)
							})}
						</div>
					</div>
				</section>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<h1>新框架 - 在保持用户底部扫码开锁操作习惯的同时：</h1>
						<ul>
							<li>
								通过不同区块，分区展示多类型触达内容，减少用户理解的成本。
							</li>
							<li>在底部操作区增加可划出新内容的区域。</li>
						</ul>
						<div className="work-mobike-layout">
							<img
								src={require('../image/work-mobike-old-layout.jpg')}
								alt="old layout"
							/>
							<div className="seperator">
								<p>旧</p>
								<div className="line"></div>
								<p>新</p>
							</div>
							<img
								src={require('../image/work-mobike-new-layout.jpg')}
								alt="new layout"
							/>
						</div>
					</div>
					<div className="work-content-text">
						<h3>信息分类</h3>
						<p>
							整理现有的信息内容，重新分类和调整显示优先级，并与广告信息分离。通过不同的显示策略，指引用户消化不同类型的信息。
						</p>
						<ol className="work-mobike-letter">
							<li>错误异常状态，完成任务后消失 （全局）</li>
							<li>
								提示信息状态，非完成任务可消失 (基于业务tab)
							</li>
							<li>特殊事件动画提示，点击后消失 (基于业务tab)</li>
						</ol>
						<p>
							通过A，B，C的信息分级机制，在不影响用户使用的同时，让信息更有效的触达到用户。为以后的新需求提供了一个平台，只需要填入内容和信息重要程度，自动从后台配置，减少了设计和产品重复工作。
						</p>
					</div>
					<div className="work-content-img">
						<table className="work-mobike-table">
							<thead>
								<tr>
									<th>A 错误异常／全局常驻</th>
									<th>B 提示消息／业务非常驻</th>
									<th>C 特殊事件／业务点击后消失</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>验证手机</td>
									<td>月卡，次卡充值 - B1</td>
									<td>电单车教育</td>
								</tr>
								<tr>
									<td>未登录</td>
									<td>红包车规则 - B2</td>
									<td>地理围栏扣费系统</td>
								</tr>
								<tr>
									<td>实名认证</td>
									<td>本周试用次数已用完 - B2</td>
									<td>运营区域系统</td>
								</tr>
								<tr>
									<td>余额欠费</td>
									<td>已领取的裂变红包车信息 - B2</td>
									<td>双锁车</td>
								</tr>
								<tr>
									<td>…</td>
									<td>开锁失败 - B3</td>
									<td>…</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="work-mobike-new-notif">
						<div className="notif-type-a">
							<figure>
								<img
									src={require('../image/work-mobike-new-notif-a.jpg')}
									alt="new notif type a"
								/>
								<figcaption>
									<h3>A</h3>
									<p>完成任务后消失，要求用户注意力最高</p>
								</figcaption>
							</figure>
						</div>
						<div className="notif-type-b">
							{newNotif.map((item, index) => {
								return (
									<figure key={index}>
										<img
											src={require(`../image/work-mobike-new-notif-b${
												index + 1
											}.jpg`)}
											alt={`new notif type b ${
												index + 1
											}`}
										/>
										<figcaption>
											<h3>{item.h3}</h3>
											<p>{item.p}</p>
										</figcaption>
									</figure>
								)
							})}
						</div>
						<div className="notif-type-c">
							<figure>
								<img
									src={require('../image/work-mobike-new-notif-c.jpg')}
									alt="new notif type c"
								/>
								<figcaption>
									<h3>C</h3>
									<p>点击消失，要求用户注意力高</p>
								</figcaption>
							</figure>
						</div>
					</div>
					<div className="work-content-text">
						<h3>新内容区</h3>
						<p>
							用户已经养成底部操作的习惯，在扫码按钮下增加一个新内容区域，可以承载更多内容，但不会影响到用户的使用习惯。旧框架中，广告和app信息占用同样的位置，造成识别的混淆。在新的框架下，广告只出现在底部的新内容区，同时增加了基于骑行位置的商户广告，并且可以收集用户是否感兴趣和对内容质量的判断，完善广告系统。
						</p>
					</div>
					<div className="work-mobike-new-content">
						<figure>
							<img
								src={require('../image/mobike-work-new-content-left.png')}
								alt="new content start"
							/>
						</figure>
						<figure>
							<img
								src={require('../image/mobike-work-new-content-mid.png')}
								alt="new content show panel"
							/>
						</figure>
						<figure>
							<img
								src={require('../image/mobike-work-new-content-right.png')}
								alt="new content user feedback"
							/>
						</figure>
					</div>
					<div className="work-content-text">
						<h3>个人数据展示</h3>
						<p>
							用户可以直观的看到公里数，卡路里，最高速度等骑行数据，让用户可以感觉到自身与平台之间的关系，更容易的激发分享和推荐给好友。骑行里程可以慢慢成为一个新指标，用户不仅仅为通勤而骑行，而可以为健康，为骑行过程去使用摩拜。
						</p>
					</div>
					<div className="work-mobike-scan2unlock">
						<video
							src={require('../video/work-mobike-data.webm')}
							autoPlay
							muted
							loop
							playsInline
							width={443}
						/>
					</div>
					<div className="work-content-text">
						<h3>硬件数据展示</h3>
						<p>
							骑行的工具-单车同时也会展示数据，不但会有用户对单车报障，提醒用户检查，同时会有单车本身的数据，以及回收计划。让用户真正了解他们每天真正使用的产品，给与安全感和可靠感。把这作为单车平台的基础，可以承载更多单车独立的产品。
						</p>
					</div>
					<div className="work-mobike-hardware">
						<div className="work-mobike-scan2unlock">
							<video
								src={require('../video/work-mobike-bike.webm')}
								autoPlay
								muted
								loop
								playsInline
								width={443}
							/>
						</div>
						<div className="work-mobike-bike">
							{bikeData.map((item, index) => {
								return (
									<figure key={index}>
										<img
											src={require(`../image/work-mobike-bike-${
												index + 1
											}.jpg`)}
											alt={`bike riding data ${
												index + 1
											}`}
										/>
										<figcaption>
											<p>{item}</p>
										</figcaption>
									</figure>
								)
							})}
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
					<h3>附录</h3>
					<p>找到了比前面2个方案更早的一个想法放在这里，留个念。</p>
					<div className="work-mobike-archive">
						<div className="work-mobike-scan2unlock">
							<video
								src={require('../video/work-mobike-archive-1.webm')}
								autoPlay
								muted
								loop
								playsInline
								width={443}
							/>
						</div>
						<div className="work-mobike-scan2unlock">
							<video
								src={require('../video/work-mobike-archive-2.webm')}
								autoPlay
								muted
								loop
								playsInline
								width={443}
							/>
						</div>
					</div>
				</footer>
			</article>
		</div>
	)
}

export default Mobike
