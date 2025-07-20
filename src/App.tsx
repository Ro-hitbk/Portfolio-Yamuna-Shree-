import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';

function App(){
  return(
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/experience" element = {<Experience/>}/>
    </Routes>
  )
}

export default App;