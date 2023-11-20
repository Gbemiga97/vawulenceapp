import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <div className="App">
    <HashRouter>
    <NavBar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='plans' element={<Plans />} />
      <Route path='trainers' element={<Trainers />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
