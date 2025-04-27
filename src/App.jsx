import { useState } from 'react'
import Header from './components/Header'
import Hardskills from './components/Hardskills'
import Softskills from './components/Softskills'
import Work from './components/Work'
import Footer from './components/Footer'
import MyThoughts from './components/MyThoughts'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Header/>
     <Hardskills/>
     <Softskills/>
     <Work/>
     <MyThoughts/>
     <Footer/>
    </div>
  )
}

export default App
