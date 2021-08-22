import './App.css';
import Cart from './components/Cart/Cart';
import Shipping from './components/Shipping/Shipping';
import Items from './components/Items/Items';
import Invoice from './components/Invoice/Invoice';

const App = () => {
  return (
    <>
      <div className="app">
        <div className='left__item'>
          <Items />
        </div>
        <div className='right__item'>
          <Cart />
        </div>
      </div>
      <div>
        <Shipping />
      </div>
      <div>
        <Invoice />
      </div>
    </>
  );
}

export default App;
