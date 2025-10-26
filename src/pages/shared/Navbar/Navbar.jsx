import React, { useContext, useState, useEffect } from "react";
import FitnessLogo from "../FitnessLogo/FitnessLogo";
import { HiMenuAlt2, HiSun, HiMoon } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const { user, role, logout } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => logout();
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // NavLink class with active + hover + focus styles
  const navLinkClass = ({ isActive }) =>
    `flex items-center px-4 -mb-1 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      isActive
        ? "text-white bg-blue-600"
        : "text-gray-200 hover:text-white hover:bg-gray-700"
    }`;

  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={navLinkClass}
          onClick={() => setDropdownOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltrainers"
          className={navLinkClass}
          onClick={() => setDropdownOpen(false)}
        >
          All Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={navLinkClass}
          onClick={() => setDropdownOpen(false)}
        >
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/forum"
          className={navLinkClass}
          onClick={() => setDropdownOpen(false)}
        >
          Community / Forums
        </NavLink>
      </li>
    </>
  );

  // Role-based Dashboard path
  let dashboardPath = "/dashboard/member";
  if (role === "admin") dashboardPath = "/dashboard/admin";
  if (role === "trainer") dashboardPath = "/dashboard/trainer";

  // Auth buttons
  const authButtons = user ? (
    <>
      <li>
        <Link
          to={dashboardPath}
          className="flex items-center px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white transition focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setDropdownOpen(false)}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <div>
          <Link
            to="/profile"
            className="flex items-center px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setDropdownOpen(false)}
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-200"
              />
            ) : (
              <span className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                {user.displayName ? user.displayName[0] : "U"}
              </span>
            )}
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setDropdownOpen(false);
            }}
            className="flex items-center px-4 py-2 rounded border hover:bg-red-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Logout
          </button>
        </div>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link
          to="/login"
          className="flex items-center px-4 py-2 rounded border hover:bg-gray-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setDropdownOpen(false)}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="flex items-center px-4 py-2 rounded bg-violet-400 text-gray-900 hover:bg-violet-600 transition focus:outline-none focus:ring-2 focus:ring-violet-300"
          onClick={() => setDropdownOpen(false)}
        >
          Register
        </Link>
      </li>
    </>
  );

  return (
    <header className="p-4 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
      <div className="container flex justify-between items-center h-16 mx-auto">
        {/* Left side: Logo + Mobile menu */}
        <div className="flex items-center">
          <div className="dropdown relative">
            <button
              tabIndex={0}
              className="btn lg:hidden mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleDropdown}
              aria-label="Toggle Menu"
              aria-expanded={isDropdownOpen}
            >
              <HiMenuAlt2 className="text-3xl" />
            </button>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-gray-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow transition-transform transform origin-top ${
                isDropdownOpen ? "scale-100" : "scale-0"
              }`}
            >
              {navlinks}
              {authButtons} {/* Mobile auth buttons */}
              {/* Dark Mode toggle inside dropdown */}
              <li>
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 rounded hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {darkMode ? (
                    <>
                      <HiSun className="mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <HiMoon className="mr-2" /> Dark Mode
                    </>
                  )}
                </button>
              </li>
            </ul>
          </div>
          <FitnessLogo />
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-3">{navlinks}</ul>

        {/* Right side buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="lg:flex">{authButtons}</ul>
          {/* Dark Mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {darkMode ? (
              <HiSun className="text-xl" />
            ) : (
              <HiMoon className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import React from "react";
// import FitnessLogo from "../FitnessLogo/FitnessLogo";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { Link, NavLink } from "react-router";

// const Navbar = () => {
//   const navlinks = (
//     <>
//       <li>
//         <NavLink to="/" className="flex items-center px-4 -mb-1">
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/trainers" className="flex items-center px-4 -mb-1">
//           All Trainer
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/classes" className="flex items-center px-4 -mb-1">
//           All Classes
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/forums" className="flex items-center px-4 -mb-1">
//           Forums
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <header className="p-4 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
//       <div className="container flex justify-between items-center h-16 mx-auto">
//         {/* Left side: Logo + Mobile menu */}
//         <div className="flex items-center">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn lg:hidden mr-2">
//               <HiMenuAlt2 className="text-3xl" />
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-gray-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               {navlinks}
//             </ul>
//           </div>
//           <FitnessLogo />
//         </div>

//         {/* Desktop menu */}
//         <ul className="hidden lg:flex space-x-3">{navlinks}</ul>

//         {/* Right side buttons (later conditional) */}
//         <div className="hidden lg:flex gap-2">
//           <Link to="/login" className="self-center px-6 py-2 rounded border">Login</Link>
//           <Link to="/register" className="self-center px-6 py-2 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
//             Register
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
