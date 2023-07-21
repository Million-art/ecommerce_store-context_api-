import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
 const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white text-black p-8 rounded-lg shadow-2xl w-1/2 sm:w-1/3 md:w-1/4">
           <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                Password*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link className="text-blue-500 hover:text-blue-800" to="/ForgetPassword">
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link className="text-blue-500 hover:text-blue-800" to="/Register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
 export default Login;