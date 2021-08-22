import './App.css';
import Cart from './components/Cart/Cart';
import Invoice from './components/Invoice/Invoice';
import Items from './components/Items/Items';

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
        <Invoice />
      </div>
    </>
  );
}

export default App;
