import React from 'react'
import Project from '../component/Project'
import YearProjectGroup from '../component/YearProjectGroup'

const Work = () => {
	return (
		<div
			style={{
				backgroundColor: '#0A0A0A',
				color: 'white',
				paddingTop: '48px',
			}}>
			{/* tag 内容只能选择 网站 APP 体验优化 咨询 从无到有  */}
			{/* <YearProjectGroup year="🐯 - 2022">
				<Project
					name="个人网站"
					company="个人"
					tag1="网站"
					tag2="从无到有"
					projectLink="PersonalSite"
				/>
			</YearProjectGroup> */}

			<YearProjectGroup year="🐯 - 2022">
				<Project
					name="互联网词语"
					company="个人"
					tag1="网站"
					projectLink="NewJargon"
				/>
			</YearProjectGroup>

			<YearProjectGroup year="🐮 - 2021">
				<Project
					name="森林里的响声"
					company="个人"
					tag1="网站"
					projectLink="RumbleInTheJungle"
				/>
				<Project
					name="英文绘本阅读"
					company="伴鱼绘本"
					tag1="APP"
					tag2="体验优化"
					projectLink="KidBook"
				/>
			</YearProjectGroup>
			<YearProjectGroup year="🐭 - 2020">
				<Project
					name="MultiCard"
					company="韩亚银行 KEB Hana"
					tag1="APP"
					tag2="咨询"
					projectLink="Multicard"
				/>
			</YearProjectGroup>
			<YearProjectGroup year="🐷 - 2019">
				<Project
					name="Pay in China"
					company="Visa 中国"
					tag1="APP"
					tag2="从无到有"
					projectLink="PayInChina"
				/>
			</YearProjectGroup>
			<YearProjectGroup year="🐶 - 2018">
				<Project
					name="摩拜商业化与再设计"
					company="摩拜单车"
					tag1="APP"
					tag2="体验优化"
					projectLink="Mobike"
				/>
				<Project
					name="普洱设计系统"
					company="摩拜单车"
					tag1="体验优化"
					projectLink="Puer"
				/>
			</YearProjectGroup>
			<YearProjectGroup year="🐒 - 2016">
				<Project
					name="Flipboard体验优化"
					company="Flipboard中国"
					tag1="APP"
					tag2="体验优化"
					projectLink="FbRetouch"
				/>
			</YearProjectGroup>
			<YearProjectGroup year="🐑 - 2015">
				<Project
					name="三更"
					company="Flipboard中国"
					tag1="APP"
					tag2="从无到有"
					projectLink="Sangeng"
				/>
			</YearProjectGroup>
		</div>
	)
}

export default Work
