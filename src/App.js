import './App.css';
import Cart from './components/Cart/Cart';
import Items from './components/Items/Items';

const App = () => {
  return (
    <div className="app">
      <div className='left__item'>
        <Items />
      </div>
      <div className='cart'>
        <Cart />
      </div>
    </div>
  );
}

export default App;
