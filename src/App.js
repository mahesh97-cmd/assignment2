import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App font-inter">
      <Navbar/>
      <div className='flex justify-center bg-[#FBFCFD]'>
      <Main/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
