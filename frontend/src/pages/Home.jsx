import Products from './Products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
 
function App() {

  return (
    < div className='p-x-4'> 
        <Navbar />
        <Slider />
        <Products />
        <Footer />
    </div>
  );
}

export default App;
