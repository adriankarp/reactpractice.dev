import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Practice Challenges" },
    {
      name: "description",
      content: "Explore React solutions to challenges from reactpractice.dev",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Welcome to React Practice Challenges
        </h1>
        <h3 className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          Challenges can be found on{" "}
          <a
            href="https://reactpractice.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            reactpractice.dev
          </a>
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li>
            <Link
              to="/challenge-1"
              className="block bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-lg py-3 px-4 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200 dark:from-indigo-600 dark:to-purple-600"
            >
              Build an Accordion Component
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
