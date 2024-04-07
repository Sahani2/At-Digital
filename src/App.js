import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero-section/Hero';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
<div className='mb-7'><Header/>
</div>
<div className="flex-grow">
<div className='bg-white border-ErrorColor'><Hero/></div>
</div>


<div className=' relative bottom-0 items-end pt-4'><Footer/></div>
    </div>
  );
}

export default App;
