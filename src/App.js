import './App.css'
import NavBar from './components/navigationBar'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Medication from './pages/medication'
import HairCare from './pages/hairCare'
import SkinCare from './pages/skinCare'
import DailyEssentials from './pages/dailyEssentials'
import MomAndBaby from './pages/momAndBaby'
import MakeupAndAccessories from './pages/makeupAndAccessories'
import HealthCareDevices from './pages/healthCareDevices'
import VitaminsAndSupplements from './pages/vitaminsAndSupplements'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/medication' element={<Medication/>}></Route>
        <Route path='/hair-care' element={<HairCare/>}></Route>
        <Route path='/skin-care' element={<SkinCare/>}></Route>
        <Route path='/daily-essentials' element={<DailyEssentials/>}></Route>
        <Route path='/mom-and-baby' element={<MomAndBaby/>}></Route>
        <Route path='/makeup-and-accessories' element={<MakeupAndAccessories/>}></Route>
        <Route path='health-care-devices' element={<HealthCareDevices/>}></Route>
        <Route path='vitamins-and-supplements' element={<VitaminsAndSupplements/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
