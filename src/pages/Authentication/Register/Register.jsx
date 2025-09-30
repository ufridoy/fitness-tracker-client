import React, { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm;
  const { updateUserProfile, createUser } = useAuth(AuthContext);
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password);

    const userProfile = {
      displayName: data.name,
      photoURL: profilePic,
    };
    updateUserProfile(userProfile).then(() => {
      navigate(from);
    });
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          Create a new account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="leroy@jenkins.com"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*****"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              })}
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Photo Upload */}
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              {...register("photo")}
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-violet-400 dark:file:bg-violet-600 file:text-gray-900 dark:file:text-gray-50 hover:file:bg-violet-300 dark:hover:file:bg-violet-700"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Register
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600">
            Already have an account?{" "}
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400 dark:text-violet-600"
            >
              Sign in
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
