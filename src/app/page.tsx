import React from 'react';
import FAQSection from '../components/FAQ'; // Import the FAQSection component

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white mb-2">KESA AI</h1>
            <p className="text-xl text-gray-300 mb-6">
              The Local AI Development IDE
            </p>
            <div className="flex space-x-4">
              <a
                href="#get-started"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
              >
                <span>Learn More</span>
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-light mb-8 leading-relaxed">
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-purple-600">
              Unleash the Future:
            </span>
            <br />
            Develop Cutting-Edge AI Apps
            <br />
            with Unparalleled Ease.
            <br />
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-600 to-pink-500">
              Unlock the Boundless Power
            </span>
            <br />
            of Machine Learning.
          </h2>
          <a
            href="#get-started"
            className="bg-white text-black font-light py-3 px-6 rounded-md transition-colors duration-300 hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>

        <div className="mt-16 max-w-xl">
          <h2 className="text-2xl font-light mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-400">
            <li>Streamlined development workflow</li>
            <li>Powerful AI model training</li>
            <li>Intuitive data management</li>
            <li>Seamless deployment and monitoring</li>
          </ul>
        </div>

        {/* Render the FAQSection component */}
        <FAQSection />
      </main>

      <footer className="bg-black py-4">
        <p className="text-sm text-center text-gray-400">
          &copy; KESA AI {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}