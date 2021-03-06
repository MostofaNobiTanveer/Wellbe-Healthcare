import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import Alert from "../../utils/Alert";
import ScrollToTop from "../../utils/ScrollToTop";

const Signin = () => {
  const [error, setError] = useState({ show: false, msg: "" });
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const {
    signInUsingGoogle,
    sendPasswordResetEmail,
    auth,
    setUser,
    signInWithEmailAndPassword,
  } = useAuthContext();
  const location = useLocation();
  const history = useHistory();

  const redirect_url = location.state?.from || "/doctors";

  useEffect(() => {
    const timer = setTimeout(() => {
      setError({ show: false });
    }, 4000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((result) => {
        history.push(redirect_url);
        setUser(result.user);
      })
      .catch((error) => {
        setError({ show: true, msg: error.code });
      });
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, formValues.email)
      .then(() => {setError({ show: true, msg: "A password reset email has been sent to your email." });})
      .catch((error) => setError({ show: true, msg: error.code }));
  };

  return (
    <div className="flex-1 bg-gray-900 flex flex-col justify-center pb-10 pt-4 px-3 sm:px-6 lg:px-8">
      <ScrollToTop />
      {error.show && <Alert text={error.msg} />}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mail.example.com"
                  value={formValues.email}
                  onChange={handleFormValueChange}
                  required
                  className="appearance-none text-gray-200 bg-gray-800 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="************"
                  value={formValues.password}
                  onChange={handleFormValueChange}
                  required
                  className="appearance-none text-gray-200 bg-gray-800 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <button
                  onClick={handleForgotPassword}
                  className="font-medium text-purple-400 hover:text-purple-500"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">Or</span>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-100 hover:bg-gray-600"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M 15.003906 3 C 8.375 3 3 8.371094 3 15 C 3 21.628906 8.375 27 15.003906 27 C 25.015625 27 27.269531 17.707031 26.332031 13 L 15 13 L 15 17 L 22.738281 17 C 21.847656 20.449219 18.726562 23 15 23 C 10.582031 23 7 19.417969 7 15 C 7 10.582031 10.582031 7 15 7 C 17.007812 7 18.839844 7.746094 20.246094 8.96875 L 23.085938 6.128906 C 20.953125 4.183594 18.117188 3 15.003906 3 Z M 15.003906 3"
                      clipRule="evenodd"
                    />
                  </svg>
                  &nbsp;Sign in with Google
                </button>
              </div>
            </div>
            <p className="mt-6 text-center text-base font-medium text-gray-400">
              New Here?
              <Link
                to="/signup"
                className="text-purple-400 hover:text-purple-500"
              >
                &nbsp;Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
