import './App.css';
import { Routes , Route } from 'react-router-dom';
import Books from './components/Books';
import Add from './components/Add';
import Update from './components/Update';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Books/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </>
  );
}

export default App;
