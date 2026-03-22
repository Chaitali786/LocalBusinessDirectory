
import Header from './components/Header/index'
import Footer from './components/Footer'
import MainCardContainer from './components/MainCardContainer/index'
import {businessList,getAreaBusiness} from './assets/data/businessList'
import Home from './components/Home'
import {useState} from 'react'

function App() {

  const hagsatraBusinessList = getAreaBusiness(businessList,"Hagsatra");
  const bandhagenBusinessList = getAreaBusiness(businessList,"Bandhagen");
  const [page , setPage] = useState('Home')

  return (
    <div className="App">
      <Header 
        title="TheLocalRoot" 
        subtitle="Your Neighborhood's Digital Marketplace" 
        setPage={setPage}
      />
      {page ==='Home' && <Home/>}
      {page==="Hagsatra"  && <MainCardContainer  businessList = {hagsatraBusinessList}/>}
      {page==="Bandhagen"  && <MainCardContainer businessList = {bandhagenBusinessList} />}
      <Footer/>
    </div>
  )
}

export default App
