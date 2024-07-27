import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Projects from './pages/projects/Projects.jsx';
import Contact from './pages/contact/Contact.jsx';
import ErrorPage from './pages/error/Error.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
