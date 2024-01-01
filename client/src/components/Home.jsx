import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        {/* logo on the left */}

        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="h-8 w-8 mr-2" />
            <span className="text-white font-semibold text-lg">FlinX</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/docs" className="text-white hover:text-gray-300">
              Docs
            </Link>
            <Link to="/pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link to="docs" className="text-white hover:text-gray-300">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
            <p className="text-gray-700">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
