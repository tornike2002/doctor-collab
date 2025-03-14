import React from 'react';

export default function ErrorMessage({ errorMessage }) {

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center">
      <h1 className="text-lg font-semibold">{errorMessage}</h1>
    </div>
  );
}
