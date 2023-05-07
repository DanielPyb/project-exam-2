import Navbar from './components/Navbar';
import HolidayListPage from './pages/HolidayList';
import LandingSite from './pages/LandingSite';
import {Route, Routes} from "react-router-dom";
import LoginRegister from './pages/LoginRegister';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import SingleListingPage from './pages/SingleListingPage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingSite />} />
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/listings' element={<HolidayListPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/listings/:id' element={<SingleListingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
