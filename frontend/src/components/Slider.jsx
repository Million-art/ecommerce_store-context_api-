
import { useEffect, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import img1 from '../assets/slider/slider2.jpg';
import img2 from '../assets/slider/brush.png';
import img3 from '../assets/slider/slider3.jpeg';
import { motion } from 'framer-motion';
import '../style/style.css';
 const Slider = () => {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
     return () => clearInterval(interval);
  }, [images]);
   return (
    <>
      <div
        className="bg-cover bg-center w-screen h-screen mt-20 flex flex-col justify-center items-center space-y-8"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <h1 className="text-blue-500 text-8xl font-bold mb-4 text-center">
          Good Quality!
        </h1>
        <pre className="text-black text-lg mb-4 text-center font-semibold sm:text-sm">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda eosAssumenda </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda eos </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda </p>
        </pre>
        <a
          href="#products"
          duration={500}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
        >
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mr-2"
          >
            <BsArrowDown size={24} />
          </motion.span>
          Explore Now
        </a>
      </div>
      <div className="bg-gray-100 min-h-screen mt-40">
      <div className="container mx-auto py-16 ">
        <h1 className="text-4xl font-bold text-center mb-8">Discover Our Amazing Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Fast Shipping</h2>
            <p className="text-gray-700">Get your favorite cosmetics delivered to your doorstep within 2-3 business days.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Wide Range of Products</h2>
            <p className="text-gray-700">Choose from a vast collection of high-quality cosmetics, including makeup, skincare, and fragrances.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Personalized Recommendations</h2>
            <p className="text-gray-700">Discover new products tailored to your preferences with our advanced recommendation system.</p>
          </div>
        </div>
      </div>
    </div>
       <h1 className="text-center text-4xl mt-20 text-blue-500 font-serif font-bold underline">
        Available Products
      </h1>
       <style >{`
        @media (max-width: 768px) {
          .text-8xl {
            font-size: 4rem;
          }
          .text-lg {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};
 export default Slider;