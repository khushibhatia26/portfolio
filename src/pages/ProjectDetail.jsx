import { useParams } from "react-router-dom";

const projectDetails = {
  "cool-react-app": {
    title: "Deutsche Bank ESG Insights & AI Chatbot Project",
    content:
      "Collaborated in a cutting-edge project leveraging Google Cloud Storage and Bitbucket to unify team efforts in building a robust web scraping pipeline for ESG and financial data across leading U.S. banks. I, with the team worked on the creation of a Retrieval-Augmented Generation (RAG) model to process vast amounts of data with token limits, mastering vector pointers for efficient information retrieval. Performed advanced sentiment analysis to generate insightful visual comparisons on ESG performance, integrating findings from deep research—including stock market trends. Developed an intelligent chatbot powered by the RAG model that answers complex finance queries and fun non-finance questions (yes, even grandma’s secret cookie recipe!). Deployed the entire solution on GCP, demonstrating seamless teamwork and cloud-based innovation.",
    skills: [
      "UI/UX Development",
      "Figma",
      "Canva",
      "Computer Graphics",
      "Retrieval-Augmented Generation Models",
      "ASP.NET Core",
      "API",
      "Agile Methodology",
      "Sentiment Analysis",
      "Bitbucket",
      "Vertex AI",
      "Google Cloud Platform",
      "Gemini",
    ],
  },
  "ui-ux-immigrant-service-app": {
    title: "UI/UX Design App for Mobile and Web for Immican.AI",
    content:
      "Designed and prototyped a gamified mobile and web app in Figma to assist immigrants in finding and connecting with service providers — covering areas like immigration, taxes, housing, and more. The app rewards users with points for completing services, unlocking offers and incentives. Collaborated closely with the sponsor and team using Agile workflows, delivering user-focused features such as personalized chatbots, appointment scheduling, a roadmap center, and a clean, scrollable UI. The platform also includes user profile management allowing document uploads and data edits for a smooth, comprehensive experience.",
    skills: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "Agile Methodology",
      "Collaboration",
      "User-Centered Design",
      "Gamification",
      "Chatbots",
      "Mobile & Web App Design",
    ],
  },
  "blackstraw-ai-data-models": {
    title: "Time Series & Disease Prediction Models – Blackstraw.AI",
    content:
      "At Blackstraw.AI, I developed and implemented two core machine learning pipelines. The first was a time series forecasting model trained on large-scale stock market data to predict stock growth, leveraging techniques like moving averages, trend detection, and multivariate analysis. The second was a deep learning classification system using a medical dataset containing diseases, symptoms, and treatments. I trained artificial neural networks (ANNs), recurrent neural networks (RNNs), and transformer models to map symptoms to likely diseases and provide associated medication recommendations. Both projects required extracting meaningful insights from structured and unstructured data while optimizing model performance and scalability.",
    skills: [
      "Time Series Analysis",
      "Pandas",
      "NLP",
      "Transformers",
      "ANN",
      "RNN",
      "Deep Learning",
      "Data Preprocessing",
      "Medical Dataset Analysis",
      "Stock Market Forecasting",
      "Python",
      "TensorFlow / PyTorch",
    ],
  },
  "pix2pix-image-mapping": {
    title: "Pix2Pix Image Mapping – Computer Vision Project",
    content:
      "Worked on a deep learning-based image-to-image translation project using the Pix2Pix framework. Given a dataset of over 1,000 paired images (real-world images and their corresponding Google Map views), I trained a model using Convolutional Neural Networks (CNNs) and Pix2Pix architecture to generate realistic map images from regular photos. By leveraging both generators and discriminators, the model learned to map input images to their visual map equivalents. Transfer learning techniques were applied to fine-tune performance, achieving meaningful visual outputs and demonstrating the power of GANs in computer vision tasks.",
    skills: [
      "Pix2Pix",
      "GANs",
      "Deep Learning",
      "CNNs",
      "Image-to-Image Translation",
      "Transfer Learning",
      "Python",
      "Jupyter Notebook",
      "TensorFlow / PyTorch",
      "Computer Vision",
      "Discriminators & Generators",
    ],
  },
  
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="text-center text-red-500 py-20">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <p>Please check the URL or return to the projects list.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-4xl font-bold text-center text-white dark:text-gray-900">
        {project.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-700">
        {project.content}
      </p>

      {project.skills && project.skills.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white dark:text-gray-900">
            Skills Involved
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-600 text-white dark:bg-indigo-300 dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
