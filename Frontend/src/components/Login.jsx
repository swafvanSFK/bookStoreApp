import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">Login</h3>
          <div className="flex  flex-col align-items-center items-center">
            <div className="mt-4 space-y-2 my-5">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2 mb-5">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
              Login
            </button>
            <p>
              Not registerd?
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
