import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import ErrorPage from './pages/error.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
