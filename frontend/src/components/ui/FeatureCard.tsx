import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  imageSrc?: string;
}

const FeatureCard = ({ icon, title, description, delay = 0, imageSrc }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
    >
      {imageSrc && (
        <div className="w-full h-40 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="text-primary text-4xl mb-5 mx-auto sm:mx-0">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-center sm:text-left">{title}</h3>
        <p className="text-gray-600 text-center sm:text-left">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
