import { useState } from 'react'
import './App.css'
import Page_accuiel from './composants/Page_accuiel'
import Inputs from './composants/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="contenaire">
    <div className="contenaire1"><Page_accuiel/></div>
    <div className='inscription'><Inputs/></div>
   </div>
    </>
  )
}

export default App
