import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import DetailPage from './Components/Detail/DetailPage';
import FormPage from './Components/Form/FormPage';

function App() {
  return (
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Routes>
        <Route path='/' element={<LandingPage />}> </Route>;
        <Route path="/Home" element={<Home />}> </Route>;
        <Route path='/DetailPage/:detailId' element={<DetailPage />}> </Route>;
        <Route path='/FormPage' element={<FormPage />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
