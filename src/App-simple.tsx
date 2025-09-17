import React from 'react';

function SimpleApp() {
  console.log('SimpleApp is rendering');
  
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-white text-4xl font-bold">
        Hello World - React is Working!
      </div>
    </div>
  );
}

export default SimpleApp;