import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Cursor from './component/Cursor';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Posts from './page/Posts';
import About from './page/About';
import Work from './page/Work';
import Error from './page/Error';
import PostOnlineTest from './posts/PostOnlineTest'
import PostCloseButton from './component/PostCloseButton'
import PostTest from './page/PostTest';
import { NavButtonContext } from './context/NavButtonContext';
import { useState } from 'react';


function App() {

    const [articleClicked, setArticleClicked] = useState(false)

    return (
        <Router>
            <NavButtonContext.Provider value={{ articleClicked, setArticleClicked }}>
                <div className="App">
                    <Header />
                    <Nav />
                    <Cursor />
                </div>
                <Routes>
                    <Route index element={<Work />} />
                    <Route path="/work" element={<Work />} />
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
