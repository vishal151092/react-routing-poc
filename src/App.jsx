import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, RouterProvider, Routes,Route, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Help from './components/Help';
import About from './components/About';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)




  return (
    <>

<BrowserRouter>
    <Header />
    
    <Routes>

        <Route path='/' element={ <Home />} />
        
        <Route path='/about' element={<About />}/>
        
        <Route path='/help' element={<Help/>}/>

        <Route path='*' element={<div> Page not found </div>} />

    </Routes>

</BrowserRouter>


    </>
  )
}

export default App
