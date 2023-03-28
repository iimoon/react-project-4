import './App.css';
import Addstudent from './Component/Addstudent';
import View from './Component/View';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path={'/'} element={<View />}></Route>
          <Route path={'/addstudent'} element={<Addstudent data={{id:'',name:'',grade:''}} method="post"/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
