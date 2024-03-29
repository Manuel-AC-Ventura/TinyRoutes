import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

export const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('/login', { email, password });
      onLoginSuccess(res.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage('Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
        }
      }else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        setErrorMessage('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
      } else {
        // Ocorreu um erro ao configurar a solicitação
        setErrorMessage('Ocorreu um erro ao enviar a solicitação. Por favor, verifique sua conexão com a internet.');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.form
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={handleSubmit}
            variants={modalVariants}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-white p-8 rounded-lg shadow-md border-0 w-11/12 sm:w-2/4 md:w-1/3 lg:w-1/4"
          >
            <button type="button" onClick={onClose} className="float-right mb-10">
              <FaTimes className="text-red-500 hover:text-red-800" size={24} />
            </button>
            <div className="mt-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none"
                type="text"
                autoComplete="current-email"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-black border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none"
                type="password"
                autoComplete="current-password"
                placeholder="Senha"
              />
            </div>
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            <button type="submit" className="mt-8 bg-blue-500 text-white rounded-md px-4 py-2 w-full">
              Entrar
            </button>
          </motion.form>
        </div>
      )}
    </AnimatePresence>
  );
};
