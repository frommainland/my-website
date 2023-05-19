import React from 'react'

const LinkedinJobExplore = () => {
	return (
		<div className="work-page-wrap">
			<article className="work-article-wrap">
				<header className="work-header">
					<h1>职位探索</h1>
					<p>通过探索，帮助求职者找到新机会</p>
				</header>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>背景</h3>
						<p>
							在领英关闭了职场社交feed功能之后，我们面临着几块问题：
						</p>
						<ol>
							<li>
								没有了社交关系，之前与之相关的功能是否能够迁移到求职功能中
							</li>
							<li>
								正在研发的功能能否和现有的产品结构很好的结合 -
								全球远程工作，内推，职场互助
							</li>
							<li>
								如果招聘做为主要产品功能，怎样让用户清晰了解产品的定位
							</li>
						</ol>
						<p>
							这几块问题相互包括，很难有一个明确的方向，所以我们并没有一开始并没有用从上至下的方法，而是去发散的去想某一块的可能的解决方案。以下是几个有潜力的方案。
						</p>
					</div>
				</section>
				<section className="work-content-wrap">
					<img
						src={require('../image/LinkedinJobExplore-1.webp')}
						alt="job explore sketch 1"
					/>
					<div className="work-content-text">
						<h3>精简</h3>
						<p>优点：强调招聘内容以及反馈，产品定位明确</p>
						<p>缺点：删除掉的功能产生的影响难以估计</p>
					</div>
				</section>
				<section className="work-content-wrap">
					<img
						src={require('../image/LinkedinJobExplore-2.webp')}
						alt="job explore sketch 2"
					/>
					<div className="work-content-text">
						<h3>内推链接</h3>
						<p>
							优点：互联网内推MVP，增加了目前求职的路径，强调了职位招聘的定位
							产品定位明确
						</p>
						<p>
							缺点：发现tab中没有同统一的规划，各个模块中相关性低，用户难以联想
						</p>
					</div>
				</section>
				<section className="work-content-wrap">
					<img
						src={require('../image/LinkedinJobExplore-3.webp')}
						alt="job explore sketch 3"
					/>
					<div className="work-content-text">
						<h3>用户内推</h3>
						<p>
							优点：覆盖更多内推的场景，
							新的方式帮助用户发现更多人以及更多的机会，
							用户的数据新的分类，可以对应出更多的可能的职位信息
						</p>
						<p>缺点：技术周期长， 领英用户内推活跃度的不确定</p>
					</div>
				</section>
				<section className="work-content-wrap">
					<img
						src={require('../image/LinkedinJobExplore-4.webp')}
						alt="job explore sketch 4"
					/>
					<div className="work-content-text">
						<h3>多词订阅</h3>
						<p>
							优点：新角度切分职位信息，
							曝光度更多在JD详情中弱化的信息，
							增加了数据维度，支持多维度筛选信息
						</p>
						<p>内容要求高， 技术实现难</p>
					</div>
				</section>
				<section className="work-content-wrap">
					<div className="work-content-text">
						<h3>问题与范围</h3>
						<p>
							在多次讨论和评估之后，我们比较了不同的方向，确认了一个能够落地的方案。帮助随便看看的求职者(casual
							job seeker)找到除了首页算法以及搜索之外更多的信息。
						</p>
						<h3>方案</h3>
						<p>
							围绕职业灵感，职业价值和市场行情创造新的职位专题。
						</p>
						<ol>
							<li>
								为用户提供具有启发性的Job扩展专题，与职位推荐不同。举例：《产品经理的下一站：战略投资顾问》
							</li>
							<li>
								实效性/品牌性/运营性。举例：《NGO公司知多少》、《跃上高阶职场招聘专题》
							</li>
							<li>
								热搜、榜单提供话题性和讨论性。举例：《2022年全球吸引力雇主》
							</li>
						</ol>
					</div>
				</section>
				<section className="work-content-wrap">
					<img
						src={require('../image/LinkedinJobExplore-5.webp')}
						alt="job explore sketch 5"
					/>
					<img
						src={require('../image/LinkedinJobExplore-6.webp')}
						alt="job explore sketch 6"
					/>
					<img
						src={require('../image/LinkedinJobExplore-7.webp')}
						alt="job explore sketch 7"
					/>
					<div className="work-content-text">
						<h3>数据结果</h3>
						<p>
							在ramp50%的情况下在探索tab下查看职位和申请职位数据上升，进入专题的点击率为34%，
							同时提升搜索11%，同时在与用户访谈时我们得到大量正面反馈，认为帮助他们解决了只有领英平台上能找到的工作机会，同时希望增加更多的筛选以及关注功能。
						</p>
					</div>
					<div className="work-content-text">
						<h3>副作用：工具简单化</h3>
						<p>
							职位探索同时帮助运营同事创建一个更加容易使用的工具，可以同时在客户端，移动端以及网页端创建管理专题内容和数据的超级工具。在短信和推送中有可以针对性的帮助用户发现更多职位的灵感。
						</p>
					</div>
					<div className="work-content-text">
						<h3>附</h3>
						<p>
							True north: Total job views <br />
							Signpost: WAU, job applies, job applicant, search &
							jymbii
						</p>
					</div>
				</section>
			</article>
		</div>
	)
}

export default LinkedinJobExplore
