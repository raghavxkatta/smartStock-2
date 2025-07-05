import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import LensisScroll from './components/LensisScroll'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
      <LensisScroll>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </LensisScroll>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
