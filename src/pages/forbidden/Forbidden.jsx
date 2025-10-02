import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600 mb-4">403 - Forbidden</h1>
      <p className="text-lg text-gray-700 mb-6">
        Sorry, you don’t have permission to access this page.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Forbidden;
