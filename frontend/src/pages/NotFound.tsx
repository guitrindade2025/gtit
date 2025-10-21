import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="bg-white py-32">
      <div className="container-custom flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-secondary mb-6">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que procura não existe ou foi removida. 
            Volte para a página inicial ou entre em contacto connosco se precisar de ajuda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              Voltar para a Página Inicial
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contacte-nos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
