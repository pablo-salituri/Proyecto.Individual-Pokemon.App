import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import DetailPage from './Components/Detail/DetailPage';
import FormPage from './Components/Form/Create/FormPage';
import NavBar from './Components/NavBar/NavBar';
import SobreMi from './Components/SobreMi/SobreMi.jsx';
import LandingForm from './Components/Form/LandingForm/LandingForm';
import DeletePokemon from './Components/Form/Delete/DeletePokemon';



function App() {
  
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname === '/' ? <LandingPage /> : <NavBar />}
      <Routes>
        <Route path="/Home" element={<Home />}> </Route>;
        <Route path='/DetailPage/:detailId' element={<DetailPage />}> </Route>;
        <Route path='/LandingForm' element={<LandingForm />}> </Route>
        <Route path='/FormPage' element={<FormPage />}> </Route>
        <Route path='/Delete' element={<DeletePokemon />}> </Route>
        <Route path='/SobreMi' element={<SobreMi />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
