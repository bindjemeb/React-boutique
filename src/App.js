
import './categories.style.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component'

const Shop = () => {
  return (<h1>ma nouvelle  boutique</h1>);

};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />} />
      </Route>

    </Routes>


  );
}

export default App;
