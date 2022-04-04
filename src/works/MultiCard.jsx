import './RumbleInTheJungle.scss'
import './MultiCard.scss'

const intervieweeID = []

for (let index = 1; index < 13; index++) {
	intervieweeID.push(index)
}

const workshop = []
for (let index = 1; index < 5; index++) {
	workshop.push(index)
}

const MultiCard = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>MultiCard</h1>
					<p>
						在成熟的东亚信用卡环境中，通过数字+实体卡的形式找到新的产品市场。
					</p>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>机遇</h3>
						<p>
							韩国人均拥有5张信用卡，但是在KEB
							Hana，我们的数据显示客户人均仅拥有1.24张信用卡。我们想通过新的KEB
							Hana
							MultiCard这款产品提升现有以及潜客的申卡，用卡和活卡全周期。
						</p>
					</div>
					<div className="work-content-text">
						<h3>前期实地调研</h3>
						<p>
							我们深入韩国当地市场，通过对12位不同金融背景，生活习惯的访谈者90分钟面对面访谈，竞品对比以及原型测试，我们得到用户不同使用场景中的痛点。经过对痛点的梳理，同时与用户测试时的反应数据对应，我们抽象出这款产品中主要的人物特征。(12位用户首次采访，5位用户二次采访)
						</p>
					</div>
					<div className="work-multicard-interview">
						{intervieweeID.map((id, i) => (
							<img
								src={require(`../image/work-multicard-interviewee-${id}.jpg`)}
								alt={`interviewee ${id}`}
								key={i}
							/>
						))}
					</div>
					<div className="work-multicard-interview-place">
						<img
							src={require(`../image/work-multicard-interview-place-1.jpg`)}
							alt={`interview place 1`}
						/>
						<img
							src={require(`../image/work-multicard-interview-place-2.jpg`)}
							alt={`interview place 2`}
						/>
					</div>

					<div className="work-multicard-interview-tool">
						<img
							src={require(`../image/work-multicard-interview-tool-1.jpg`)}
							alt={`interview tool 1`}
						/>
						<img
							src={require(`../image/work-multicard-interview-tool-2.jpg`)}
							alt={`interview tool 2`}
						/>
					</div>
				</section>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>用户画像</h3>
						<p>
							Bryan在生活中井井有条，并不断在寻找做的更棒的方法。这样的习惯同时让他很好的去管理生活花销
							-
							他认为信用卡是一种节俭的办法，可以通过他手中不同的信用卡权益和优惠中获取。
						</p>
					</div>
					<div className="work-content-text">
						<h3>用户洞察</h3>
						<p>产品使用上的不方便阻碍了Bryan做的更好。</p>
						<ul>
							<li>
								携带多张卡才能获取不同卡片上的权益。
								Bryan希望只带一张卡，但是这张卡需要能智能的获取所有其他卡上的权益。反之，他不会改变现有的习惯。同时他不相信一个银行就可以让他得到他所希望的所有权益。
							</li>
							<li>
								Bryan希望跟踪他所有卡上的最少消费额，了解他的消费习惯和在一个平台上容易的管理所有获得权益。
							</li>
							<li>
								Bryan希望及时了解最新和他相关的权益，他不想被落下。
							</li>
						</ul>
					</div>
					<div className="work-multicard-workshop">
						{workshop.map((id, i) => (
							<img
								src={require(`../image/work-multicard-workshop-${id}.jpg`)}
								alt={`workshop ${id}`}
								key={i}
							/>
						))}
					</div>
				</section>

				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>问题和设计</h3>
						<p>
							我们怎样通过提供智能建议，追踪花费以及权益提醒去减少KEB
							Hana用户使用卡上的不方便，让他们成为更聪明的消费者。同时与不同部门协作完成价值主张，策略画布，获客计划和风险合规
						</p>
					</div>
					<div className="work-multicard-workshop">
						{workshop.map((id, i) => (
							<img
								src={require(`../image/work-multicard-design-${id}.jpg`)}
								alt={`design ${id}`}
								key={i}
							/>
						))}
					</div>
					<img
						src={require(`../image/work-multicard-end.jpg`)}
						alt={`group photo`}
						style={{ borderRadius: 24 }}
					/>
				</section>
			</article>
		</div>
	)
}

export default MultiCard
