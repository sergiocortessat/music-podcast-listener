import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Something went wrong</h1>
        <p className="text-lg mb-4">
          Sorry, we encountered an error while processing your request.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 btn btn-primary text-white rounded hover:bg-blue-600"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
