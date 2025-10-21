import { FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  avatar: string;
  rating?: number;
  delay?: number;
}

const TestimonialCard = ({ name, position, content, avatar, rating = 5, delay = 0 }: TestimonialCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }
    
    return stars;
  };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full relative"
    >
      <div className="absolute top-6 right-6 text-primary/10 text-7xl">
        <FaQuoteRight />
      </div>
      
      <p className="text-gray-600 mb-6 relative z-10">{content}</p>
      
      {/* Rating */}
      <div className="flex mb-4 relative z-10">
        {renderStars()}
      </div>
      
      <div className="flex items-center relative z-10">
        <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-primary shadow-md">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <p className="text-sm text-primary font-medium">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
