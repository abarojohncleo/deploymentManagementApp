import React from "react";
import {toast} from 'react-toastify';

const Toast = ({type, message}) => {

  return (
  <div className="flex min-h-screen items-center justify-center bg-slate-100">
    <div>
      <div className="max-w-lg bg-green-100 text-green-700 rounded-lg border border-green-200 z-40 px-4 ">
        {message}
      </div>
    </div>
  </div>
  )
};

export default Toast;