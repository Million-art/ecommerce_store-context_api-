import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
 
const Contact = () => { 
  return ( 
    <> 
      <Navbar /> 
      <div className="flex flex-col items-center justify-center mt-[130px] px-4"> 
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1> 
        <div className="w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg"> 
          <div className="mb-4"> 
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> 
              Name 
            </label> 
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text" 
              placeholder="Your Name" 
            /> 
          </div> 
          <div className="mb-4"> 
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> 
              Email 
            </label> 
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Your Email" 
            /> 
          </div> 
          <div className="mb-4"> 
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message"> 
              Message 
            </label> 
            <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="message" 
              placeholder="Your Message" 
              rows="4" 
            ></textarea> 
          </div> 
          <div className="flex items-center justify-between"> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> 
              Send 
            </button> 
          </div> 
        </div> 
        <div className="mt-10 w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg"> 
          <h2 className="text-2xl font-bold mb-6 text-center">Our Contact Information</h2> 
          <p className="text-gray-700 text-sm mb-2"><span className="font-bold">Phone:</span> +1234567890</p> 
          <p className="text-gray-700 text-sm mb-2"><span className="font-bold">Email:</span> example@example.com</p> 
          <p className="text-gray-700 text-sm mb-2"><span className="font-bold">Address:</span> 1234 Street, City, State, Country</p> 
        </div> 
      </div> 
      <Footer /> 
    </> 
  ); 
}; 
 
export default Contact;