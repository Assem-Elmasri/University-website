"use client";

import { useState,  } from "react";
import { useApp } from "@/context/AppContext";
import { Eye, EyeClosed, LockIcon, User2, Moon, Sun, GraduationCap, Mail, Phone, MapPin, Calendar } from "lucide-react";

import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    studentID: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const { theme, setTheme } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");
  
  if (authMode === "Login") {
    console.log("Login submitted:", formData);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (res.ok) {

        document.cookie = `token=${data.rows[0].Student_ID}; path=/; max-age=86400`; // 1 day

        // Only reset form on success
        setFormData({
          studentID: "",
          password: "",
        });
        // Navigate to dashboard
        router.push('/');
      } else {
        console.error("Login failed:", data);
        setError(data.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  } else {
    console.log("Register submitted:", registerData);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      
      const data = await res.json();
      if (res.ok) {
        console.log("Registration successful:", data);
        // Reset form on success
        setRegisterData({
          firstName: "",
          lastName: "",
          gender: "",
          dob: "",
          address: "",
          email: "",
          phoneNumber: "",
        });
        router.refresh();
        // Optionally switch to login or redirect
        setAuthMode("Login");
        // Show success message
        setError("Registration successful! Please log in.");
      } else {
        console.error("Registration failed:", data);
        setError(data.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
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
                    <GraduationCap size={34} color="#5bbce4" />
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
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-background-light dark:bg-background-dark p-8 lg:p-12 overflow-y-auto">
              <div className="flex flex-col max-w-md w-full gap-8 my-8">
                {/* Title Section */}
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    {authMode === "Login" ? "Welcome Back" : "Create Account"}
                  </h1>
                  <h2 className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">
                    {authMode === "Login" ? "Sign in to your student portal" : "Join Nebula University today"}
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
                  {error && (
                    <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-800">
                      <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                    </div>
                  )}
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {authMode === "Login" ? (
                    <>
                      {/* Login Form */}
                      <label className="flex flex-col w-full">
                        <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Student ID
                        </p>
                        <div className="relative flex w-full items-center">
                          <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">
                            <User2 size={20} />
                          </span>
                          <input
                            type="text"
                            name="studentID"
                            value={formData.studentID}
                            onChange={handleInputChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-4 py-3 text-base font-normal leading-normal"
                            placeholder="Enter your student ID"
                            required
                          />
                        </div>
                      </label>

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
                            onChange={handleInputChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-12 py-3 text-base font-normal leading-normal"
                            placeholder="Enter your password"
                            required
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
                    </>
                  ) : (
                    <>
                      {/* Register Form */}
                      <div className="grid grid-cols-2 gap-4">
                        <label className="flex flex-col w-full">
                          <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                            First Name *
                          </p>
                          <input
                            type="text"
                            name="firstName"
                            value={registerData.firstName}
                            onChange={handleRegisterChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-base font-normal leading-normal"
                            placeholder="John"
                            maxLength={50}
                            required
                          />
                        </label>

                        <label className="flex flex-col w-full">
                          <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                            Last Name *
                          </p>
                          <input
                            type="text"
                            name="lastName"
                            value={registerData.lastName}
                            onChange={handleRegisterChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-3 text-base font-normal leading-normal"
                            placeholder="Doe"
                            maxLength={50}
                            required
                          />
                        </label>
                      </div>

                      <label className="flex flex-col w-full">
                        <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Email *
                        </p>
                        <div className="relative flex w-full items-center">
                          <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">
                            <Mail size={20} />
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-4 py-3 text-base font-normal leading-normal"
                            placeholder="john.doe@example.com"
                            maxLength={100}
                            required
                          />
                        </div>
                      </label>

                      <label className="flex flex-col w-full">
                        <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Phone Number *
                        </p>
                        <div className="relative flex w-full items-center">
                          <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">
                            <Phone size={20} />
                          </span>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={registerData.phoneNumber}
                            onChange={handleRegisterChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-4 py-3 text-base font-normal leading-normal"
                            placeholder="+1 (555) 123-4567"
                            required
                          />
                        </div>
                      </label>

                      <div className="grid grid-cols-2 gap-4">
                        <label className="flex flex-col w-full">
                          <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                            Gender *
                          </p>
                          <select
                            name="gender"
                            value={registerData.gender}
                            onChange={handleRegisterChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 px-4 py-3 text-base font-normal leading-normal"
                            required
                          >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </label>

                        <label className="flex flex-col w-full">
                          <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                            Date of Birth *
                          </p>
                          <div className="relative flex w-full items-center">
                            <span className="material-symbols-outlined absolute left-4 text-slate-400 dark:text-slate-500">
                              <Calendar size={20} />
                            </span>
                            <input
                              type="date"
                              name="dob"
                              value={registerData.dob}
                              onChange={handleRegisterChange}
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 pl-12 pr-4 py-3 text-base font-normal leading-normal"
                              required
                            />
                          </div>
                        </label>
                      </div>

                      <label className="flex flex-col w-full">
                        <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                          Address *
                        </p>
                        <div className="relative flex w-full items-center">
                          <span className="material-symbols-outlined absolute left-4 top-3 text-slate-400 dark:text-slate-500">
                            <MapPin size={20} />
                          </span>
                          <input
                            type="text"
                            name="address"
                            value={registerData.address}
                            onChange={handleRegisterChange}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-4 py-3 text-base font-normal leading-normal"
                            placeholder="123 Main St, City, State"
                            maxLength={80}
                            required
                          />
                        </div>
                      </label>
                    </>
                  )}

                  {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex items-center justify-center w-full h-14 rounded-lg bg-primary text-slate-900 text-base font-bold leading-normal shadow-sm hover:opacity-90 transition-opacity bg-sky-300 hover:bg-sky-400 hover:cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Processing..." : authMode === "Login" ? "Sign In" : "Create Account"}
                    </button>
                </form>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}