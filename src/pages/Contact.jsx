import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="max-w-lg mx-auto px-4 py-20 text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <p className="text-gray-300 dark:text-gray-700 text-lg">
        📞 Phone:{" "}
        <a href="tel:+14806851230" className="underline hover:text-indigo-400">
          480-685-1230
        </a>
      </p>

      <p className="text-gray-300 dark:text-gray-700 text-lg">
        📧 Email:{" "}
        <a
          href="mailto:khushibhatia5@gmail.com"
          className="underline hover:text-indigo-400"
        >
          khushibhatia5@gmail.com
        </a>
      </p>

      <p className="flex justify-center items-center space-x-2 text-gray-300 dark:text-gray-700 text-lg">
        <a
          href="https://www.linkedin.com/in/khushi-bhatia26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.5v12H.24V8zm7.53 0h4.3v1.7h.06c.6-1.1 2.05-2.26 4.23-2.26 4.53 0 5.36 2.97 5.36 6.83v7.73h-4.5v-6.85c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.6v6.98h-4.5V8z" />
          </svg>
        </a>
        <span>LinkedIn</span>
      </p>
    </motion.div>
  );
}
