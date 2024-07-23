import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import About from './pages/about';
import Contact from './pages/contacts';
import Footer from './components/Footer';
import Error from './pages/error';

function App() {
    return (
        <main>
            <Header />
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </section>
            <Footer />
        </main>
    );
}

export default App;
