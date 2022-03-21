import React from 'react'
import './RumbleInTheJungle.css'
import ALink from '../component/ALink'
import VideoBookmark from '../component/VideoBookmark'

const RumbleInTheJungle = () => {

    const yellow = "#FFCB5C"
    const pink = "#ED93ED"
    const red = "#EB3136"
    const blue = "#1C60E3"

    return (
        <div className='work-page-wrap'>
            <article className='work-article-wrap'>
                <header className='work-header'>
                    <h1>森林里的响声</h1>
                    <p>数字绘本应该是什么样子？</p>
                </header>
                <section className='work-content-wrap'>
                    <div className='work-content-text'>
                        <h3>背景</h3>
                        <p>伴鱼原创数字绘本的创作流程还是同传统印刷业很相似，同教研老师沟通之后，通过构思，插画到校对，确认之后，一是上传后台，走查前端效果，二是与动效沟通，添加动画。</p>
                        <p>在这种瀑布式的流程中，可以估计出 1本/x小时 的效率，保证绘本每个月的产量。多翻几本之后，有一种用大量 <code>&lt;img&gt;</code> 标签写网站的感觉，不能说不对，但是作为一个数字产品，它有没有更数字的可能？<ALink href='https://frankchimero.com/blog/2013/what-screens-want/' title='Frank Chimero · What Screens Want.' text='Frank Chimero' /> 的这篇文章对我有很大的帮助，它更深入的讨论了作为屏幕，数字媒介的本质是什么。以及10年前 Mike Matas 的数字图书概念。</p>
                        <p>作为一个爸爸，家里纸质印刷书里的一类就是词语书，举例来说，《我最喜欢的车子》每页一辆交通工具，汽车，自行车... 用圆形将页面串联在一起，不但小朋友认识了形状，而且利用了纸张本身的特质，那么做这样一本数字绘本会是什么样子？</p>
                    </div>
                    <div className='work-content-img'>
                        <div className='work-content-2Img-wrap'>
                            <img src={require('../image/work-rumbleInTheJungle-car-i-like-1.jpg')} alt="bicycle illustration" />
                            <img src={require("../image/work-rumbleInTheJungle-car-i-like-2.jpg")} alt="car illustration" />
                        </div>
                        <div className='work-content-2Img-wrap'>
                            <img src={require('../image/work-rumbleInTheJungle-car-i-like-3.jpg')} alt="motocyle illustration" />
                            <img src={require('../image/work-rumbleInTheJungle-car-i-like-4.jpg')} alt="bulldozer illustration" />
                        </div>
                    </div>
                    <div className='work-content-text'>
                        <h3>实验</h3>
                        <p>我在Adobe Stock上找到了 <ALink href='https://stock.adobe.com/search?creator_id=206710010&filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bis_editorial%5D=all&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfetch_excluded_assets%5D=1&order=relevance&safe_search=1&k=animal&search_page=1&search_type=usertyped&acp=&aco=animal&get_facets=0' title='Our studio is engaged in the production of vector illustrations in various styles.' text='Good Studio' /> 一幅插图作品，觉得非常适合儿童绘本，向小朋友介绍常见的森林动物。</p>
                    </div>
                    <div className='work-content-1Img'>
                        <img src={require('../image/work-RumbleInTheJungle-goodStudio.jpg')} alt="" />
                    </div>
                    <div className='work-content-text'>
                        <h3>根据这幅插图，我做了我的第一本数字绘本。</h3>
                        <VideoBookmark Title='Jungle-frommainland' Href='https://jungle-frommainland.netlify.app' LinkText='https://jungle-frommainland.netlify.app' Background='work-RumbleInTheJungle-site-thumbnail' />
                    </div>
                </section>

                <hr />

                <section className='work-content-wrap'>
                    <div className='work-content-text'>
                        <h3>把这幅插图做绘本的基础，延伸出来绘本的其他三个部分。</h3>
                        <ol>
                            <li>镜头向前推，铺垫故事发生的地方和气氛</li>
                            <li>镜头平移，展示森林里动物生活的状态</li>
                            <li>镜头平移，认识动物数据，小知识和声音</li>
                            <li>镜头向后拉，阅读完成得到勋章</li>
                        </ol>
                    </div>
                    <div className='work-rumbleTheJungle-filmFraming-text-grid'>
                        <div style={{ color: yellow, borderColor: yellow }} className='work-rumbleTheJungle-filmFraming-text'>
                            开篇铺垫</div>
                        <div style={{ color: pink, borderColor: pink }} className='work-rumbleTheJungle-filmFraming-text'>
                            展示动物</div>
                        <div style={{ color: red, borderColor: red }} className='work-rumbleTheJungle-filmFraming-text'>
                            认识内容</div>
                        <div style={{ color: blue, borderColor: blue }} className='work-rumbleTheJungle-filmFraming-text'>
                            正向反馈</div>
                    </div>
                    <div className='work-rumbleTheJungle-filmFraming-img-grid'>
                        <img src={require('../image/work-rumbleInTheJungle-framing01.png')} alt="framing zoom in" />
                        <img src={require('../image/work-rumbleInTheJungle-framing02.png')} alt="framing move pan" style={{ gridArea: '1 / 2 / 2 / 4' }} />
                        <img src={require('../image/work-rumbleInTheJungle-framing03.png')} alt="framing zoom out" />
                    </div>
                </section>

                <section className='work-content-wrap'>
                    <h1>开篇铺垫</h1>
                    <div className='work-rumbleTheJungle-beginning'>
                        <img src={require('../image/work-RumbleInTheJungle-beginning-1.png')} alt="screenshot 1" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-2.png')} alt="screenshot 2" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-3.png')} alt="screenshot 3" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-4.png')} alt="screenshot 4" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-5.png')} alt="screenshot 5" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-6.png')} alt="screenshot 6" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-7.png')} alt="screenshot 7" />
                        <img src={require('../image/work-RumbleInTheJungle-beginning-8.png')} alt="screenshot 8" />
                    </div>
                    <div className='work-content-text'>
                        <p className='highlight'>设计</p>
                        <ul>
                            <li>森林动物眨眼睛和前部分花朵以及后部分重色叶子没有连贯性，直接淡入开始了第二部分。</li>
                        </ul>
                        <br />
                        <br />
                        <p className='highlight'>开发</p>
                        <ul>
                            <li>静态植物没有处理成反复轻微摇摆。</li>
                            <li>移动端不支持 svg path filter。</li>
                            <li>提示左滑 icon 没有记录全局状态。</li>
                        </ul>
                    </div>
                </section>

                <section className='work-content-wrap'>
                    <h1>展示动物</h1>
                    <div className='work-rumbleTheJungle-parallax'>
                        <img src={require('../image/work-RumbleInTheJungle-parallax-1.png')} alt="screenshot 9" />
                        <img src={require('../image/work-RumbleInTheJungle-parallax-2.png')} alt="screenshot 10" />
                        <img src={require('../image/work-RumbleInTheJungle-parallax-3.png')} alt="screenshot 11" />
                        <img src={require('../image/work-RumbleInTheJungle-parallax-4.png')} alt="screenshot 12" />
                        <img src={require('../image/work-RumbleInTheJungle-parallax-5.png')} alt="screenshot 13" />
                    </div>
                    <div className='work-content-text'>
                        <p className='highlight'>设计</p>
                        <ul>
                            <li>模拟望远镜平移的过程中，缺少超级近景，比如模糊的树，草丛，飞鸟等。</li>
                            <li>模拟风的状态文字穿插缺少层次。</li>
                        </ul>
                        <br />
                        <br />
                        <p className='highlight'>开发</p>
                        <ul>
                            <li>结尾按钮在特定情况下不能显示。</li>
                            <li>在不同尺寸下不能控制结束时图片的完美叠加。</li>
                        </ul>
                    </div>
                </section>

                <section className='work-content-wrap'>
                    <h1>认识内容</h1>
                    <div className='work-RumbleInTheJungle-swipe'>
                        <img src={require('../image/work-RumbleInTheJungle-swipe.jpg')} alt="screenshot 14" style={{ borderRadius: '24px' }} />
                    </div>
                    <div className='work-content-text'>
                        <p className='highlight'>设计</p>
                        <ul>
                            <li>底部图片排版处理与插画不一致。</li>
                            <li>用图片展示内容不够吸引小朋友了解。</li>
                            <li>顶部小朋友动物声音按钮可常驻，底部动物按钮可以和动物插画合并，操作更符合直觉。</li>
                        </ul>
                        <br />
                        <br />
                        <p className='highlight'>开发</p>
                        <ul>
                            <li>移动端播放声音卡死。</li>
                            <li>没有一次只能播放一种声音逻辑。</li>
                            <li>动画卡。</li>
                            <li>carousel转场没有信息提示，转场中背景色没转换。</li>
                            <li>Drop cap排版不对齐。</li>
                        </ul>
                    </div>
                </section>

                <section className='work-content-wrap'>
                    <h1>正向反馈</h1>
                    <div className='work-RumbleInTheJungle-ending'>
                        <img src={require('../image/work-RumbleInTheJungle-ending.jpg')} alt="screenshot 15" style={{ borderRadius: '24px' }} />
                    </div>
                    <div className='work-content-text'>
                        <p className='highlight'>设计</p>
                        <ul>
                            <li>没有镜头往后拉的感觉。</li>
                            <li>没有讲清楚勋章的作用。</li>
                            <li>电子的勋章和实体勋章的区别是什么。</li>
                        </ul>
                        <br />
                        <br />
                        <p className='highlight'>开发</p>
                        <ul>
                            <li>Read Again 不能跳转回首页。</li>
                        </ul>
                    </div>
                </section>
                <footer>
                    <div>&#8258; <span style={{
                        transform: 'rotate(180deg)',
                        display: 'inline-block'
                    }}>&#8258;</span> &#8258;</div>
                    <h3>后续</h3>
                    <p>做的第一本数字绘本很开心也很无助。查资料和改设计是经常的事情，同时也接触到了很多不同的想法和实现。虽然这本绘本离我想象中的数字绘本差的很远，但它是一个开头。开头的动能虽不大，但让我看到了其他人在做的东西以及更多的可能。</p>
                </footer>

            </article>
        </div>
    )
}

export default RumbleInTheJungle