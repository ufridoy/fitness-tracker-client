import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600">
          Sign in to access your account
        </p>
      </div>
      <form noValidate="" action="" className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600 text-gray-400 dark:text-gray-600">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400 dark:text-violet-600 text-violet-400 dark:text-violet-600"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
      <div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
    <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
