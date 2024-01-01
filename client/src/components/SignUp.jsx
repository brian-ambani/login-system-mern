import { Link } from "react-router-dom";

const SignUp = () => {
  const setEmail = () => {};
  const setPassword = () => {};
  const setUsername = () => {};
  return (
    <div className="bg-gray-800 h-dvh flex justify-center items-center ">
      <div className=" flex flex-col items-center bg-gray-500 space-y-6 w-[320px] h-[320px] rounded-md shadow-black">
        <h1 className="text-3xl mt-1 mb-2">Sign Up</h1>
        <form className="flex flex-col mb-4 space-y-3">
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="mb-1.5 outline-none px-2 py-1 rounded-sm"
            placeholder="Username"
          />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mb-1.5 outline-none px-2 py-1 rounded-sm"
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mb-1.5 outline-none px-2 py-1 rounded-sm"
            placeholder="Password"
          />
        </form>
        <button className="bg-gray-600 px-5 py-1 rounded-md hover:bg-slate-400 transition-all duration-300 ">
          Sign Up
        </button>
        <p>
          Have an account?{" "}
          <span className="underline text-blue-700">
            {<Link to="/">Sign In</Link>}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
