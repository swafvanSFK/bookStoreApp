import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="">
          <div className="modal-box p-20">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg text-center">Signup</h3>
            <div className="flex  flex-col align-items-center items-center">
              {/* Fullname */}
              <div className="mt-4 space-y-2 my-5">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2 my-5">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
              </div>
              {/*Password  */}
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
                Signup
              </button>
              <p>
                Have accound?
                <Link
                  to={'/'}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
