
import React, { useState } from 'react';

export default function Messages() {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState('success');

  const showMessage = (text, type = 'success') => {
    setMessage(text);
    setType(type);
    setTimeout(() => setMessage(null), 4000);
  };

  return (
    <div className="p-6">
      {/* Notification */}
      {message && (
        <div
          className={`fixed top-4 right-4 px-4 py-3 rounded shadow-lg z-50 transition-all duration-300 
            ${type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
        >
          {message}
        </div>
      )}

      {/* Trigger Buttons */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => showMessage('Successfully registered!', 'success')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Simulate Registration
        </button>

        <button
          onClick={() => showMessage('Signed in successfully.', 'success')}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Simulate Sign In
        </button>

        <button
          onClick={() => showMessage('Track enrolled!', 'success')}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Simulate Track Enrollment
        </button>

        <button
          onClick={() => showMessage('Course registration failed.', 'error')}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Simulate Failed Course Registration
        </button>

        <button
          onClick={() => showMessage('Payment processed!', 'success')}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Simulate Payment
        </button>
      </div>
    </div>
  );
}
