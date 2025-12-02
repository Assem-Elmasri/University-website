"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Eye, EyeClosed , LockIcon, User2, Moon , Sun} from "lucide-react";

export default function AuthPage() {
  const [authMode, setAuthMode] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { theme, setTheme } = useApp();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${authMode} submitted:`, formData);
    // Add your authentication logic here
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 text-white backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Sun size={24} className="material-symbols-outlined text-2xl" />
          ) : (
            <Moon size={24} className="material-symbols-outlined text-2xl" />
          )}
        </button>
      </div>

      <div className="flex h-full grow flex-col">
        <div className="flex flex-1">
          <div className="flex flex-col w-full lg:flex-row">
            {/* Left Side: Branding */}
            <div
              className="relative flex flex-col items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen p-8 lg:p-12 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAFpdfoblLZRIQA2AAdXEdMjOCD0l3I7flmxHo-UkbHE82rjmfDCIVEDzTQaywFGS5kMXxBRSWM28f2oyYN_Y4bmWOoB9JSAyYsDX2BqTIHfvQ6EP8U3_flj-lEoacftnxbMZo1gL5KX0ZjeHFhJeP0WVgtZiVxjBlyatE_P8Vc3H2gZM-9oNuad1GWOxUvC4wOzJfCVEJDJvQ89vxfhvTD2JIEKpEkfA0HTxo7kgUFNspIVu7qIIe3f08RgdOh6cHAjpx0qNg7ok')",
              }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-4 max-w-md">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    school
                  </span>
                  <h1 className="text-white text-3xl font-bold">
                    Nebula University
                  </h1>
                </div>
                <p className="text-white/80 text-lg font-normal leading-relaxed">
                  Unlock your potential. Access your student portal to connect
                  with your courses, community, and future.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-background-light dark:bg-background-dark p-8 lg:p-12">
              <div className="flex flex-col max-w-md w-full gap-8">
                {/* Title Section */}
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Welcome Back
                  </h1>
                  <h2 className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">
                    Sign in to your student portal
                  </h2>
                </div>

                {/* Auth Mode Toggle */}
                <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1.5">
                  <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-checked:bg-white dark:has-checked:bg-background-dark has-checked:shadow-sm has-checked:text-primary dark:has-checked:text-primary text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal transition-colors">
                    <span className="truncate">Login</span>
                    <input
                      type="radio"
                      name="auth-toggle"
                      value="Login"
                      checked={authMode === "Login"}
                      onChange={(e) => setAuthMode(e.target.value)}
                      className="invisible w-0"
                    />
                  </label>
                  <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-checked:bg-white dark:has-checked:bg-background-dark has-checked:shadow-sm has-checked:text-primary dark:has-checked:text-primary text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal transition-colors">
                    <span className="truncate">Register</span>
                    <input
                      type="radio"
                      name="auth-toggle"
                      value="Register"
                      checked={authMode === "Register"}
                      onChange={(e) => setAuthMode(e.target.value)}
                      className="invisible w-0"
                    />
                  </label>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Email/Student ID Input */}
                  <label className="flex flex-col w-full">
                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                      Email / Student ID
                    </p>
                    <div className="relative flex w-full items-center">
                      <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">
                        <User2 size={20} />
                      </span>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange(e)}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-4 py-3 text-base font-normal leading-normal"
                        placeholder="Enter your email or student ID"
                      />
                    </div>
                  </label>

                  {/* Password Input */}
                  <label className="flex flex-col w-full">
                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                      Password
                    </p>
                    <div className="relative flex w-full items-center">
                      <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">
                        <LockIcon size={20} />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange(e)}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-12 py-3 text-base font-normal leading-normal"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                      >
                        <span className="material-symbols-outlined">
                          {showPassword ? <EyeClosed size={22} /> : <Eye size={22} />}
                        </span>
                      </button>
                    </div>
                  </label>

                  {/* Forgot Password */}
                  <p className="text-primary text-sm font-medium leading-normal text-right underline cursor-pointer hover:opacity-80 transition-opacity">
                    Forgot Password?
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full h-14 rounded-lg bg-primary text-slate-900 text-base font-bold leading-normal shadow-sm hover:opacity-90 transition-opacity"
                  >
                    {authMode}
                  </button>
                </form>

                {/* Social Logins */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <hr className="w-full border-slate-200 dark:border-slate-700" />
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal whitespace-nowrap">
                      Or continue with
                    </p>
                    <hr className="w-full border-slate-200 dark:border-slate-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3032_630)">
                          <path
                            d="M22.5801 12.23C22.5801 11.45 22.5101 10.7 22.3701 9.98H12.0001V14.21H18.1501C17.9101 15.62 17.2001 16.85 16.1401 17.6L16.1201 17.72L19.4601 20.25L19.6401 20.26C21.4901 18.59 22.5801 15.7 22.5801 12.23Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23C15.22 23 17.94 21.92 19.64 20.26L16.14 17.6C15.06 18.33 13.65 18.76 12 18.76C9.13 18.76 6.69 16.93 5.82 14.39L5.73 14.4L2.3 16.92L2.27 16.99C3.96 20.48 7.71 23 12 23Z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.82007 14.39C5.61007 13.79 5.50007 13.15 5.50007 12.5C5.50007 11.85 5.61007 11.21 5.82007 10.61L5.82007 10.48L2.39007 7.99L2.27007 8.01C1.52007 9.49 1.00007 11.12 1.00007 12.5C1.00007 13.88 1.52007 15.51 2.27007 16.99L5.82007 14.39Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 6.24C13.73 6.24 15.14 6.87 16.22 7.89L19.71 4.54C17.93 2.89 15.22 1.5 12 1.5C7.71 1.5 3.96 4.52 2.27 8.01L5.82 10.61C6.69 8.07 9.13 6.24 12 6.24Z"
                            fill="#EA4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3032_630">
                            <rect fill="white" height="24" width="24" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Google</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM16.333 16.333H13.667V11.25C13.667 10.4217 13.3331 9.62795 12.7473 9.04214C12.1615 8.45634 11.3678 8.125 10.539 8.125C9.71026 8.125 8.91653 8.45634 8.33073 9.04214C7.74492 9.62795 7.411 10.4217 7.411 11.25V16.333H4.745V7.667H7.411V8.948C7.81156 8.32433 8.38048 7.82851 9.04944 7.52183C9.7184 7.21515 10.459 7.11124 11.176 7.222C11.893 7.33276 12.56 7.65389 13.1026 8.14809C13.6453 8.64229 14.0416 9.28912 14.246 10C14.735 9.895 15.228 10.047 15.642 10.418C16.056 10.789 16.333 11.341 16.333 11.917V16.333ZM9.002 6.333C9.43232 6.333 9.84533 6.16259 10.1558 5.85211C10.4663 5.54162 10.637 5.12862 10.637 4.698C10.637 4.26738 10.4663 3.85438 10.1558 3.54389C9.84533 3.23341 9.43232 3.063 9.002 3.063C8.57168 3.063 8.15867 3.23341 7.84818 3.54389C7.5377 3.85438 7.367 4.26738 7.367 4.698C7.367 5.12862 7.5377 5.54162 7.84818 5.85211C8.15867 6.16259 8.57168 6.333 9.002 6.333Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}