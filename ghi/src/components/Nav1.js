import React from "react";

function Nav1() {
  return (
    <>
      <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  <span class="Pokemon font-extrabold text-blue-900 text-xl">
                    Catalist
                  </span>
                </a>
              </div>
              <div class="Pokemon hidden md:flex items-center space-x-1">
                <a href="#" class="py-4 px-2 text-gray-700 hover:text-gray-800">
                  Home
                </a>
                <a href="#" class="py-4 px-2 text-gray-700 hover:text-gray-800">
                  Services
                </a>
                <a href="#" class="py-4 px-2 text-gray-700 hover:text-gray-800">
                  About
                </a>
                <a href="#" class="py-4 px-2 text-gray-700 hover:text-gray-800">
                  Contact
                </a>
              </div>
            </div>
            <div class=" Pokemon hidden md:flex items-center space-x-3">
              <a
                href="#"
                class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400"
              >
                Sign Up
              </a>
              <a
                href="#"
                class="py-2 px-2 font-medium text-gray-700 rounded hover:bg-green-200"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav1;
