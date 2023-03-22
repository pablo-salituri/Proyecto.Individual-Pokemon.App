import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import DetailPage from './Components/Detail/DetailPage';
import FormPage from './Components/Form/FormPage';
import NavBar from './Components/NavBar/NavBar';



function App() {
  
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname === '/' ? <LandingPage /> : <NavBar />}
      <Routes>
        <Route path="/Home" element={<Home />}> </Route>;
        <Route path='/DetailPage/:detailId' element={<DetailPage />}> </Route>;
        <Route path='/FormPage' element={<FormPage />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
