import { Link, useLocation } from 'react-router-dom';
import { Rocket, FileText, Home } from 'lucide-react';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Rocket className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">SpaceStack Selector</h1>
          </div>
          
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Selector</span>
            </Link>
            
            <Link
              to="/docs"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/docs') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Documentation</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
