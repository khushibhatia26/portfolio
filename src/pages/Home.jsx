import { useState } from "react";
import { motion } from "framer-motion";
import myPhoto from "../profile.jpeg";
import resumePDF from "../resumekhushi25.pdf";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative flex flex-col items-center text-center py-16 px-6 bg-gradient-to-br from-indigo-900 via-gray-900 to-indigo-800 dark:from-gray-100 dark:via-white dark:to-gray-300"
    >
      {/* Resume button top-right */}
      {!showResume && (
        <button
          onClick={() => setShowResume(true)}
          className="absolute top-6 right-6 flex items-center space-x-2 text-white dark:text-gray-900 bg-indigo-600 dark:bg-indigo-300 hover:bg-indigo-500 dark:hover:bg-indigo-400 font-semibold py-2 px-4 rounded-lg shadow-md transition"
          aria-label="Open Resume"
          title="Open Resume"
        >
          <span>Check out my Resume</span>
          <span className="text-2xl">👉</span>
        </button>
      )}

      {/* Show home content or resume */}
      {!showResume ? (
        <>
          <img
            src={myPhoto}
            alt="Khushi Bhatia"
            className="rounded-full w-48 h-48 object-cover border-4 border-indigo-400 shadow-2xl mb-10"
          />

          <section className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold text-white dark:text-gray-900">
              Hi, My name is Khushi Bhatia
            </h1>
            <p className="text-base text-gray-200 dark:text-gray-700 leading-relaxed">
             I was bored, so I made this portfolio. The picture above is from my graduation day at 
             Arizona State University, where I graduated summa cum laude in Computer Science. 
             It feels a bit strange to talk about myself like this haha, but I’m a curious and creative tech lover who 
             enjoys learning new things and building projects that actually work. I love exploring new 
             technology and finding smart ways to solve problems but for me, tech is more than just work, 
             it’s a passion.


            </p>
          </section>

          <section className="max-w-2xl mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-white dark:text-gray-900">
              My Interests
            </h2>
            <p className="text-base text-gray-200 dark:text-gray-700 leading-relaxed">
              I'm really passionate about working on AI and Machine Learning{" "}
              projects, especially as part of a team where we can bounce around ideas and build
              something impactful together. Lately, I’ve been diving into the{" "}
              fintech and stock market world, exploring how tech can transform
              finance and I’ve even worked on projects in that space. I love taking what I
              learn and applying it to real-world problems. Outside of tech, I enjoy{" "}
              meeting new people, networking, and having meaningful conversations.
              I’ve also been playing tennis since I was five, which has taught me
              discipline, focus, and fun. I'm constantly inspired by{" "}
              strong women in tech and hope to do the same that is keep learning and
              uplift others along the way. Feel free to check out some of my projects in the Projects section — they’re pretty cool, I promise!!!!



            </p>
          </section>
        </>
      ) : (
        <div className="w-full max-w-4xl flex flex-col items-center space-y-6">
          <iframe
            src={resumePDF}
            title="Khushi Bhatia Resume"
            className="w-full h-[700px] border-4 border-indigo-400 rounded-lg shadow-xl"
          ></iframe>
          <button
            onClick={() => setShowResume(false)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
          >
            ← Back to Home
          </button>
        </div>
      )}
    </motion.div>
  );
}
