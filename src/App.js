import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/projects' element = {<ProjectPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
