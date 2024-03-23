import { useState } from 'react';
import Router from 'next/router';
import Swal from 'sweetalert2';

export default function Apply() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === 'spaghetti') {
      Router.push('https://app.youform.io/forms/4bjolz3t');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong password!',
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-slate-300 p-10 rounded-lg shadow-lg">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Submit</button>
      </form>
    </div>
  );
}

