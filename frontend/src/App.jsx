import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  fetch('/api')
    .then(res => res.text())
    .then(console.log);
}, []);

  return (
    <>
      <h1>Hello from React frontend</h1>

    </>
  )
}

export default App
