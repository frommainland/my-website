import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Cursor from './component/Cursor';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Post from './page/Post';
import About from './page/About';
import Work from './page/Work';
import Error from './page/Error';



function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Nav />
                <Cursor />
            </div>
            <Routes>
                <Route path="/" element={<Work />} />
                <Route path='/post' element={<Post />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
