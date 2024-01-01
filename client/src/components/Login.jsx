import { Link } from "react-router-dom";

const Login = () => {
  const setEmail = () => {};
  const setPassword = () => {};
  return (
    <div className="bg-gray-800 h-dvh flex justify-center items-center ">
      <div className=" flex flex-col items-center bg-gray-500 space-y-8 w-[320px] h-[320px] rounded-md shadow-black">
        <h1 className="text-3xl mt-1 mb-4">Log in</h1>
        <form className="flex flex-col mb-4 space-y-3">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mb-2 outline-none px-2 py-1 rounded-sm"
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mb-2 outline-none px-2 py-1 rounded-sm"
            placeholder="Password"
          />
        </form>
        <button className="bg-gray-600 px-5 py-1 rounded-sm hover:bg-slate-400 transition-all duration-300 ">
          Log In
        </button>
        <p>
          Do not have an account?{" "}
          <span className="underline text-blue-700">
            {<Link to="/signup">Sign Up</Link>}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
