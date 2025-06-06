import { useState } from 'react'
import Header from './components/Header'
import Hardskills from './components/Hardskills'
import Softskills from './components/Softskills'
import Work from './components/Work'
import MyThoughts from './components/MyThoughts'
import Before from './components/Before'
import Footer from './components/Footer'

// update sequence : 
// npm run build
//  than update a repo add/commit/push
//  than npm run deploy




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Header/>
     <Hardskills/>
     <Softskills/>
     <Work/>
     <MyThoughts/>
     <Before/>
     <Footer/>
    </div>
  )
}

export default App
