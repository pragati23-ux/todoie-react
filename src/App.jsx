import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='todocontainer'>
    <Header value="TODO APP" />
    <Main text="Eat" />
    <Main text ="Sleep"/>
    <Main text="Bath"/>
    <Main text="Study" />
    <Main text="Repeat" />
     
     <Button />
    </div>
    
    
       
    </>
  )
}

export default App
