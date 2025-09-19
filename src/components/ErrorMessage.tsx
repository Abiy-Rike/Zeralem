import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-8">{message}</p>
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          <RefreshCw className="w-5 h-5" />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;