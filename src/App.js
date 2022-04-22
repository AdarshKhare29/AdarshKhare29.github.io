import './App.css';
import './index.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Comtact';
import Footer from './components/Footer';
const imagePath={
  sun :'./images/sun.png',
  moon:'./images/moon.png'
}
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showHeader,setShowHeader]=useState(false);
  const [open,setOpen]=useState(true)
  const getImageName=()=>{
    return open?'moon':"sun"
  }
  const imageName=getImageName()
  const handleClick = () => {
    setDarkMode(!darkMode)
    setOpen(!open)
  }
  if(!showHeader){return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className='mode-icon'>
        {/* <img src={imagePath[imageName]} alt='theme-icon' onClick={handleClick} className={darkMode?'dark-mode':''}/> */}
        <input type="checkbox" id="toggle" />
        <label for="toggle" class="button" onClick={handleClick} ></label>
      </div>
      <BrowserRouter>
        <Header showHeader={showHeader} setShowHeader={setShowHeader}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='skills' element={<Skills />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
else{
  return(
    <BrowserRouter>
    <Header showHeader={showHeader} setShowHeader={setShowHeader}/>
  </BrowserRouter>
  )
}
}
export default App;
