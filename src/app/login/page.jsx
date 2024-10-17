import React from "react";

const Login = () => {
  return (
    <>
      <div className="bglogin h-screen bg-center max-sm:pt-10 bg-cover bg-fixed w-full">
        <div className="bg-white rounded-md sm:mt-20 mt-4 sm:w-2/5 sm:float-right px-5 py-8 sm:mr-14 mx-4">
          <div className="items-center">
            <h2 className="text-cyan-800 font-semibold my-2 text-2xl">
              Welcome!
            </h2>
            <h2 className="text-black font-semibold my-2">Login</h2>
          </div>
          <div>
            <form>
              <div className="grid gap-4">
                {/* <!-- Grid --> */}

                <div>
                  <label for="username">User Name</label>
                  <input
                    type="text"
                    className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500 "
                    placeholder="User Name"
                  />
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    autocomplete="email"
                    className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500 "
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500 "
                    placeholder="Password"
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-700 hover:bg-cyan-800 border border-transparent text-sm lg:text-base text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
