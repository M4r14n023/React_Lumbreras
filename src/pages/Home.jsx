import React from 'react'
import NavBar from '../components/NavBar'
import MainRouter from '../router/MainRouter'
import ItemListContainer from '../components/ItemListContainer'
<components />

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <MainRouter/>
      <ItemListContainer greeting="Bienvenidos a LauXpress, tu lugar"/>

    </div>
  )}

export default Home