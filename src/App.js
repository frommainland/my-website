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
import PostOnlineTest from './posts/PostOnlineTest'
import PostCloseButton from './component/PostCloseButton'

//work list
import WorkCloseButton from './component/WorkCloseButton';
import WorkMultiCard from './works/WorkMultiCard'
import RumbleInTheJungle from './works/RumbleInTheJungle'
import KidBook from './works/KidBook';

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
                        <Route path='Multicard' element={<WorkMultiCard />} />
                        <Route path='RumbleInTheJungle' element={<RumbleInTheJungle />} />
                        <Route path='KidBook' element={<KidBook />} />
                    </Route>

                    <Route path="/posts" element={
                        <div>
                            <Outlet />
                            <PostCloseButton />
                        </div>}>
                        <Route index element={<Posts />} />
                        {/* how to dynamically inject content for individual post?
                    use markdown?
                    how to link path:title in the articlelist.js and find content in posttest.js? */}
                        {/* <Route path=":title" element={<PostTest />} /> */}
                        <Route path='PostOnlineTest' element={<PostOnlineTest />} />
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
