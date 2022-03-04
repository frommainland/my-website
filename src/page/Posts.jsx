import React from 'react'
import { Outlet } from 'react-router-dom'
import ArticleList from '../component/ArticleList'


const Posts = () => {

    return (
        <div style={{
            color: 'white',
            paddingTop: '48px',
            cursor: 'none'
        }}>
            {/* <Outlet /> */}
            <ArticleList title='上线测试' time='2022.02.16' id='PostOnlineTest' />
            <ArticleList title='迭代网站计划' time='2022.02.16' id='PostSitePlan' />
            <ArticleList title='迭代网站计划' time='2022.02.16' id='PostSitePlan' />
            <ArticleList title='迭代网站计划' time='2022.02.16' id='PostSitePlan' />
            <ArticleList title='迭代网站计划' time='2022.02.16' id='PostSitePlan' />
            <ArticleList title='迭代网站计划' time='2022.02.16' id='PostSitePlan' />
            <ArticleList title='迭代网站计划' time='2022.02.16' id='PostSitePlan' />
        </div>
    )
}

export default Posts