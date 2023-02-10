import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
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
                <li>
                    <Link to="/profile/jaehoon?date=20201019#id=10">재훈 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">길동 프로필</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/profile/:id" element={<Profile></Profile>} />
            </Routes>
        </div>
    );
}

export default App;
