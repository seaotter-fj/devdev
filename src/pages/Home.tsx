import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-blue-600 pb-32">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Supabase Auth Demo
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            A simple authentication app using React and Supabase for learning purposes.
          </p>
        </div>
      </div>

      <div className="relative -mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              {user ? (
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Welcome back!
                  </h2>
                  <p className="mt-2 text-gray-600">
                    You are currently logged in as {user.email}.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/profile"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Your Profile
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 text-center">
                    Get Started
                  </h2>
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition duration-150">
                      <div className="flex flex-col items-center">
                        <UserPlus className="h-8 w-8 text-blue-500" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Sign Up</h3>
                        <p className="mt-2 text-sm text-gray-600 text-center">
                          Create a new account to get started with our demo app.
                        </p>
                        <div className="mt-4">
                          <Link
                            to="/signup"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Create Account
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition duration-150">
                      <div className="flex flex-col items-center">
                        <LogIn className="h-8 w-8 text-blue-500" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Sign In</h3>
                        <p className="mt-2 text-sm text-gray-600 text-center">
                          Already have an account? Sign in to access your profile.
                        </p>
                        <div className="mt-4">
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Sign In
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}