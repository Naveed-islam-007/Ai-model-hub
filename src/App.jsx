
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/footer'
import Models from './components/Models'
import NavBar from './components/Navbar'

function App() {
 
  const getModels=async()=>{
      const res= await fetch('/models.json');
      return res.json()
  }

  const ModelPromise=getModels();

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Suspense fallback={<span class="$$loading $$loading-spinner $$loading-lg"></span>}>
      <Models ModelPromise={ModelPromise}></Models>
    </Suspense>

    
    <Footer></Footer>

    
    </>
  )
}

export default App
