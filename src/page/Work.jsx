import React from 'react'
import Project from '../component/Project'
import YearProjectGroup from '../component/YearProjectGroup'

const Work = () => {
    return (
        <div style={{
            backgroundColor:'#0A0A0A',
            color: 'white',
            paddingTop:'48px'
        }}>
            {/* tag 内容只能选择 网站 APP 体验优化 咨询 从无到有  */}
            <YearProjectGroup year='🐯 - 2022'>
                <Project name='项目存档' company='个人' tag1='网站' tag2='从无到有' />
            </YearProjectGroup>
            <YearProjectGroup year='🐮 - 2021'>
                <Project name='森林里的响声' company='个人' tag1='网站' />
                <Project name='英文绘本' company='伴鱼绘本' tag1='APP' tag2='体验优化' />
            </YearProjectGroup>
            <YearProjectGroup year='🐭 - 2020'>
                <Project name='MultiCard' company='韩亚银行 KEB Hana' tag1='APP' tag2='咨询' />
            </YearProjectGroup>
            <YearProjectGroup year='🐷 - 2019'>
                <Project name='Pay in China' company='Visa 中国' tag1='APP' tag2='从无到有' />
            </YearProjectGroup>
            <YearProjectGroup year='🐶 - 2018'>
                <Project name='单车商业化' company='摩拜单车' tag1='APP' tag2='体验优化' />
                <Project name='单车数据化' company='摩拜单车' tag1='APP' tag2='体验优化' />
                <Project name='普洱设计系统' company='摩拜单车' tag1='体验优化' />
            </YearProjectGroup>
        </div>
    )
}

export default Work