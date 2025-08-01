import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  fetch('/api')
    .then(res => res.text())
    .then(console.log);
}, []);

  return (
    <div className ="bg-[#0d1117] min-h-screen text-white">
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App
