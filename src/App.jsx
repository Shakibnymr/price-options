

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/lineChart/LineChart'
// import Daisyuinav from './components/daisyui/daisyuinav'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
     {/* <Daisyuinav></Daisyuinav> */}
  <PriceOptions></PriceOptions> 
 <LineChart></LineChart>
 <Phones></Phones>
    </>
  )
}

export default App
