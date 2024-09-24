import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Cursor from './component/Cursor';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Posts from './page/Posts';
import About from './page/About';
import Work from './page/Work';
import Error from './page/Error';

//posts list

import PxRemEm from './posts/PxRemEm';
import { WebGradient } from './posts/WebGradient';
import PostCloseButton from './component/PostCloseButton'

//work list
import WorkCloseButton from './component/WorkCloseButton';
import MultiCard from './works/MultiCard'
import RumbleInTheJungle from './works/RumbleInTheJungle'
import KidBook from './works/KidBook';
import PayInChina from './works/PayInChina';
import Mobike from './works/Mobike'
import Puer from './works/Puer';
import Sangeng from './works/Sangeng';
import FbRetouch from './works/FbRetouch';
import NewJargon from './works/NewJargon';
import LastNameSlang from './works/LastNameSlang';
import LinkedinJobExplore from './works/LinkedinJobExplore';
import FlowerAndPoem from './works/FlowerAndPoem';
import SlackingOff from './works/SlackingOff';
// work 2024
import EmojiWallpaper from './works/EmojiWallpaper'
import FramerMotionBook from './works/FramerMotionBook';
import HarpersCollection from './works/HarpersCollection';
import RadiantCanvas from './works/RadiantCanvas';

// usecontext 命名错误，应该是首页contentClickedContext
import { NavButtonContext } from './context/NavButtonContext';



function App() {


    //测试--包含首页所有可点击的链接，点击链接后让底部nav消失
    //测试失败--关闭按钮需要有两个，一个回到work，另一个回到post
    // const [contentClicked, setContentClicked] = useState(false)
    // <NavButtonContext.Provider value={{ contentClicked, setContentClicked }}>

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //

    //post文章链接点击
    const [articleClicked, setArticleClicked] = useState(false)
    //work项目链接点击
    const [projectClicked, setProjectClicked] = useState(false)


    return (
        <Router>
            <NavButtonContext.Provider value={{ articleClicked, setArticleClicked, projectClicked, setProjectClicked }}>
                <div className="App">
                    <Header />
                    <Nav />
                    <Cursor />
                </div>
                <Routes>
                    <Route index element={<Work />} />
                    {/* <Route path="/work" element={<Work />} /> */}
                    <Route path='/work' element={
                        <div>
                            <Outlet />
                            <WorkCloseButton />

                        </div>
                    }>
                        <Route index element={<Work />} />
                        <Route path='RadiantCanvas' element={<RadiantCanvas />} />
                        <Route path='HarpersCollection' element={<HarpersCollection />} />
                        <Route path='EmojiWallpaper' element={<EmojiWallpaper />} />
                        <Route path='FramerMotionBook' element={<FramerMotionBook />} />

                        <Route path='LinkedinJobExplore' element={<LinkedinJobExplore />} />
                        <Route path='FlowerAndPoem' element={<FlowerAndPoem />} />
                        <Route path='SlackingOff' element={<SlackingOff />} />

                        <Route path='Multicard' element={<MultiCard />} />
                        <Route path='RumbleInTheJungle' element={<RumbleInTheJungle />} />
                        <Route path='KidBook' element={<KidBook />} />
                        <Route path='PayInChina' element={<PayInChina />} />
                        <Route path='Mobike' element={<Mobike />} />
                        <Route path='Puer' element={<Puer />} />
                        <Route path='Sangeng' element={<Sangeng />} />
                        <Route path='FbRetouch' element={<FbRetouch />} />
                        <Route path='NewJargon' element={<NewJargon />} />
                        <Route path='LastNameSlang' element={<LastNameSlang />} />
                    </Route>

                    <Route path="/posts" element={
                        <div style={{ overflowX: 'hidden', }}>
                            <Outlet />
                            <PostCloseButton />
                        </div>}>
                        <Route index element={<Posts />} />
                        {/* how to dynamically inject content for individual post?
                    use markdown?
                    how to link path:title in the articlelist.js and find content in posttest.js? */}
                        {/* <Route path=":title" element={<PostTest />} /> */}
                        <Route path='PxRemEm' element={<PxRemEm />} />
                        <Route path='WebGradient' element={<WebGradient />} />
                        <Route path="*" element={<div>No post found</div>} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </NavButtonContext.Provider>
        </Router>
    );
}

export default App;
