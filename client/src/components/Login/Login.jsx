import React from "react";
const Login = () => {
  return (
    <div class=" z-10 bg-white">
  <div class="flex items-center justify-center min-h-screen text-center">

    <div
      class="inline-block px-2 py-6 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl lg:w-2xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
      role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="pb-2 bg-white">
        <div class="flex-col items-center sm:flex">
          <div class="mt-3 mb-1 text-center sm:text-left">
            <h4 class="pt-1 text-3xl font-black leading-6 text-gray-700" id="modal-headline">
              Sign in
            </h4>
          </div>
        </div>
      </div>
      <div class="w-full font-sans text-sm text-center text-gray-600">
        Sign in on the internal platform
      </div>
      <div class="px-4 py-2 pt-1 pt-3 mt-1 text-xs bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          class="justify-center w-full px-3 py-2 font-bold text-white bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none">
          Login with facebook
        </button>
      </div>
      <div class="px-4 py-2 pt-1 pt-3 mt-1 text-xs bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          class="justify-center w-full px-3 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none">
          Login with google
        </button>
      </div>
      <div class="w-full pt-2 text-sm text-center text-gray-600">
        or login with email address
      </div>
      <div class="px-4 text-xs bg-gray-50 sm:px-6 sm:flex-row-reverse">
        <form class="mt-4">
          <label for="email" class="block">
            <span class="font-sans text-sm text-gray-700">
              Email Address
            </span>
            <input type="email" id="email" name="email" autocomplete="username"
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
          <label for="password" class="block mt-3">
            <span class="font-sans text-sm text-gray-700">
              Password
            </span>
            <input type="password" id="password" name="password" autocomplete="current-password"
              class="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
              required />
          </label>
          <div class="justify-start w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#">Forgot password</a>
          </div>
          <div class="mt-6">
            <button type="submit"
              class="w-full px-4 py-2 text-sm text-center text-white bg-blue-500 rounded-md hover:bg-indigo-500">Sign in
              now</button>
          </div>
        </form>
      </div>
      <div class="justify-start w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
        Don't have an account?
        <a class="block text-sm text-indigo-700 fontme hover:underline" href="#">Sign up</a>
      </div>
    </div>
  </div>
</div>
  );
};
export default Login;
