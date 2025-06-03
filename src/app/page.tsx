import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-indigo-600 py-4">
        <h1 className="text-2xl font-bold text-white text-center">Welcome to KESA AI</h1>
        <p className="text-lg text-white text-center">The Local AI Development IDE</p>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <p className="text-lg mb-4">Develop AI applications with ease.</p>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </main>
      <footer className="bg-gray-800 py-2">
        <p className="text-sm text-white text-center">&copy; KESA AI</p>
      </footer>
    </div>
  );
}