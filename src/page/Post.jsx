import React from 'react'
import ArticleList from '../component/ArticleList'

const Post = () => {

    return (
        <div style={{
            color: 'white',
            paddingTop: '48px'
        }}>
            <ArticleList title='上线测试' time='2022.02.16'/>
            <ArticleList title='迭代网站计划' time='2022.02.16'/>
        </div>
    )
}

export default Post