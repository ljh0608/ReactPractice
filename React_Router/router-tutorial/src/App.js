import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
            </Routes>
        </div>
    );
}

export default App;
