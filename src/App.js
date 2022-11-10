import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        
      </RouterProvider>
      <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </div>
  );
}

export default App;
