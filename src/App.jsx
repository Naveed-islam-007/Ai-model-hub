
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/footer'
import Models from './components/Models'
import NavBar from './components/Navbar'
import Cart from './components/Cart'

function App() {
 
  const getModels=async()=>{
      const res= await fetch('/models.json');
      return res.json()
  } 

  const ModelPromise=getModels();

  const [activeTab,setaciveTab]=useState('All')
    const [carts, setCarts] = useState([])  


  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>


 <div role="tablist" class="tabs justify-center gap-3">
  <a onClick={()=>setaciveTab("All")} role="tab" className="tab w-40 border-2 rounded-xl border-black text-xl">All</a>
  < a onClick={()=>setaciveTab("Cart")} role="tab" className="tab w-40 border-2 rounded-xl border-black text-xl">Cart</a>
</div>


    {
      activeTab==='All'?<Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <Models ModelPromise={ModelPromise} carts={carts} setCarts={setCarts}></Models>
    </Suspense>:
    <Cart  carts={carts} setCarts={setCarts}></Cart>

    }




    <Footer></Footer>

    
    </>
  )
}

export default App
