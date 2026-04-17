import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="text-center space-y-6 animate-pulse">

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-[#244D3F]">
          404
        </h1>

        {/* Icon */}
        <div className="text-6xl">
          😵
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">

          <Link to="/" className="btn bg-[#244D3F] text-white">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default ErrorPage;