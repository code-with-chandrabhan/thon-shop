import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <form class="max-w-sm mx-auto  bg-black text-white rounded-lg p-8 mt-20">
        <p className="text-3xl font-bold">Login</p>
        <div class="mb-5 pt-4">
          <label
            for="Username"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your Username
          </label>
          <input
            type="Username"
            id="Username"
            class="cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            placeholder="Username"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class=" cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            class="cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            placeholder="Password"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            class="cursor-pointer shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            placeholder="confirm password"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <p className="ms-2 text-sm font-medium">
            I agree with the{" "}
            <a href="Signup">
              <span className="text-red-600 hover:underline">signup</span>
            </a>
          </p>
        </div>
        <button
          type="submit"
          class="cursor-pointer w-full text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login
        </button>

        <div className="flex justify-between pt-6">
          <p className="border-b-2 w-20"></p>
          <p className="text-sm font-bold">or signup with</p>
          <p className="border-b-2 w-20"></p>
        </div>
        <div className="flex justify-between pt-6">
          <a href="facebook">
            <button className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center">
              Facebook
            </button>
          </a>
          <a href="google">
            <button className="cursor-pointer text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center">
              Google
            </button>
          </a>
          <a href="twitter">
            <button className="cursor-pointer text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center">
              Twitter
            </button>
          </a>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Login;
