import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Deutsche Bank ESG Insights & AI Chatbot Project",
    slug: "cool-react-app",
    desc: "Building a Cloud-Powered RAG Model for ESG Data Analysis and Conversational AI",
  },
  {
    title: "UI/UX Design App for Mobile and Web for Immican.AI",
    slug: "ui-ux-immigrant-service-app",
    desc: "Designed a gamified app in Figma to help immigrants find services and earn rewards.",
  },
  {
    title: "Time Series & Disease Prediction Models at Blackstraw.AI",
    slug: "blackstraw-ai-data-models",
    desc: "Forecasting stock growth and predicting diseases using time series, ANN/RNN, and transformers.",
  },
  {
    title: "Pix2Pix Image Mapping – Computer Vision Project at Tech Mahindra",
    slug: "pix2pix-image-mapping",
    desc: "Used deep learning with CNNs to generate Google Map views from real-world images.",
  },
  
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(({ title, desc, slug }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/projects/${slug}`)}
            className="p-6 border border-gray-700 rounded-lg bg-gray-800 dark:bg-gray-200 cursor-pointer transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2 dark:text-gray-900">{title}</h2>
            <p className="text-gray-300 dark:text-gray-700">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
