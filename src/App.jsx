import './App.css'
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/Home';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {ColdDrinks} from './components/ColdDrinks'
import {HotDrinks} from './components/HotDrinks'
import {Dessert} from './components/Dessert'

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/colddrinks' element={<ColdDrinks/>}/>
      <Route path='/hotdrinks' element={<HotDrinks/>}/>
      <Route path='/dessert' element={<Dessert/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
