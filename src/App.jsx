import { useState } from 'react'
import Header from './components/Header'
import Hardskills from './components/Hardskills'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Header/>
     <Hardskills/>
    </div>
  )
}

export default App
