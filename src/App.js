import './App.css';
import Header from './component/Header';
import YearProjectGroup from './component/YearProjectGroup';
import Project from './component/Project';
import Nav from './component/Nav';
import Work from './page/Work';

function App() {
    return (
        <div className="App">
            <Header />
            <div></div>
            <YearProjectGroup year='🐯 2022'>
                <Project name='test' />
                <Project />
            </YearProjectGroup>
            <YearProjectGroup year='🐮 2021'>
                <Project name='test' />
                <Project name='test' />
            </YearProjectGroup>
            <YearProjectGroup year='🐮 2021'>
                <Project name='test' />
                <Project name='test' />
            </YearProjectGroup>
            <Nav />
        </div>
    );
}

export default App;
