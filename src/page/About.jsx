import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

const linkColor = '#00AE65'

function ALink({ href, title, text }) {
    return (
        <motion.div style={{ display: 'inline-block' }} whileHover={{ color: linkColor }}>
            <a href={href} title={title}>
                {text}
            </a>
        </motion.div>
    )
}


const About = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '48px',
            paddingBottom: '160px'
        }}>
            <article className='about-article-wrap'>
                <header className='about-header'>
                    <motion.h1 style={{ display: 'inline-block' }} whileHover={{ rotate: 20 }}>👋</motion.h1>
                    <h1>我是杨硕，一位设计师。</h1>
                </header>
                <div className='about-seperator'>
                    <p>更新于2022.02.18</p>
                    <hr />
                </div>
                <aside>
                    <p className='about-aside-bubble'>为什么要做一个个人网站？ </p>
                </aside>
                <section>
                    <p>我之前的 <ALink href='https://cargocollective.com/frommainland/' title='frommainland website' text='个人网站' /> 用的是 <ALink href='https://cargo.site/' title='Cargo is a professional site building platform for designers and artists.' text='cargocollective' />，免费的但是有文件大小和项目限制，付费之后也无法做深入定制。随着我做的项目变多，免费租的‘网上之家’已经没法扩容了，所以需要找一个新的地方。</p>
                    <p>做数字媒体设计已经有10多年了，只在这最近一两年来我开始接触前端真正的代码，之前的工具都是在用一层层的语法糖包着，但是外层的糖随着时间失去用户或者维护，那不如直接去用原本开发的工具。</p>
                    <p>从 <ALink href='https://coffeescript.org/' title='CoffeeScript is a little language that compiles into JavaScript.' text='coffee script' /> 到 <ALink href='https://reactjs.org/' title='React – A JavaScript library for building user interfaces' text='react' />，在这其中，从开始设计，做出原型，然后再碰到之前没有想到的问题，反反复复，我从其中得到了很多的乐趣。一个个人网站只是这期间的一个项目，刚好它又能存档之前或是之后所有的项目，一举两得。</p>
                </section>

                <aside>
                    <p className='about-aside-bubble'>为什么要把项目存档？</p>
                </aside>

                <section>
                    <p>之前对我来说，项目存档仅仅是一个作品集的线上形式，容易发送且展示的内容更多。现在更多的是个人，而不是工作，它能提供一条我的时间线，不管是作品的好坏，我能清楚的看到我创造东西的来往。</p>
                    <p>如果能帮助到看到它的人，那就更好了。细想我所学到的设计前端开发的相关知识，绝大多数都从 <ALink href='https://www.google.com/' title="Search the world's information" text='网上社区' /> 中而来。现在我能把做项目中的一些发现重新放进给社区是一件开心的事情。</p>
                </section>
                <aside>
                    <p className='about-aside-bubble'>点击网站上tag标签没用</p>
                </aside>

                <section>
                    <p>我希望之后有一个标签系统能更多的分类，但是目前只作为每个项目中一个信息的视觉展示。</p>
                </section>

                <aside>
                    <p className='about-aside-bubble'>网站上的文章为什么不用公众号写，方便而且易操作？</p>
                </aside>

                <section>
                    <p>公众号写文章一定会更方便，更容易，但我更喜欢把东西都放在一起，在这个网站上，一个随着时间流逝而不断变化的网站里。
                    </p>
                </section>

                <aside>
                    <p className='about-aside-bubble'>设计还要写代码?</p>
                </aside>

                <section>
                    <p className='about-aside-bubble'>使用figma的时候，我还会用photoshop，代码也只是完成产品中众多的工具之一。
                    </p>
                    <div className='about-video-bookmark'>
                        <div className='about-video-thumbnail'></div>
                        <div className='about-video-text-wrap'>
                            <p id='about-video-title'>Shia LaBeouf "Just Do It" Motivational Speech (Original Video by LaBeouf, Rönkkö & Turner)</p>
                            <a id='about-video-linkText' href="https://www.youtube.com/watch?v=ZXsQAXx_ao0&ab_channel=MotivaShian">https://www.youtube.com/watch?v=ZXsQAXx_ao0&ab_channel=MotivaShian</a>
                        </div>

                    </div>
                </section>

            </article>
        </div>
    )
}

export default About