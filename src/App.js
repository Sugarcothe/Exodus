import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Index1 from './components/index/firstindex';
import Index2 from './components/index/secondindex';
import Index3 from './components/index/thirdindex';
import Index4 from './components/index/fourthindex';
import Index5 from './components/index/fifthindex';
import Index6 from './components/index/sisthindex';
import Index7 from './components/index/seventhindex';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Index1 />
      <Index2 />
      <Index3 />
      <Index4 />
      <Index5 />
      <Index6 />
      <Index7 />

    </div>
  );
}

export default App;
