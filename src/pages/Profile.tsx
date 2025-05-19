import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import { User } from 'lucide-react';

export default function Profile() {
  const { user, signOut } = useAuth();

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 px-6 py-4">
          <h1 className="text-white text-2xl font-bold flex items-center">
            <User className="mr-2 h-6 w-6" />
            Profile
          </h1>
        </div>
        
        <div className="p-6">
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-medium text-sm truncate">{user.id}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Email Verified</p>
                <p className="font-medium">
                  {user.email_confirmed_at ? 'Yes' : 'No'}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Last Sign In</p>
                <p className="font-medium">
                  {user.last_sign_in_at 
                    ? new Date(user.last_sign_in_at).toLocaleString() 
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              variant="danger" 
              onClick={signOut}
              className="w-full"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}