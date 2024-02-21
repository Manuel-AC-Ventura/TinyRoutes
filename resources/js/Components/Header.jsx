import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItems } from "./MenuItems";
import { LoginModal } from "./LoginModal";
import { MenuToggle } from "./MenuToggle";
import { usePage } from "@inertiajs/react";
import { RegisterModal } from "./RegisterModal";

export const Header = () => {
  const { user } = usePage().props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(user); // Estado do usuário logado
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const handleToggleRegisterModal = () => {
    setRegisterModalOpen(!isRegisterModalOpen);
  };

  // Função para atualizar o estado do usuário quando o login for bem-sucedido
  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setLoginModalOpen(false);
  };

  // Função para atualizar o estado do usuário quando o registro for bem-sucedido
  const handleRegisterSuccess = (userData) => {
    setCurrentUser(userData);
    setRegisterModalOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="w-full bg-slate-950 text-white flex flex-row items-center justify-between"
    >
      <h1 className="text-3xl font-bold">
        <a href="/">ShortWay</a>
      </h1>

      <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MenuItems
        menuOpen={menuOpen}
        user={currentUser} // Use currentUser ao invés de user
        handleToggleLoginModal={handleToggleLoginModal}
        handleToggleRegisterModal={handleToggleRegisterModal}
      />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleToggleLoginModal} onLoginSuccess={handleLoginSuccess} />
      <RegisterModal isOpen={isRegisterModalOpen} onClose={handleToggleRegisterModal} onRegisterSuccess={handleRegisterSuccess} />
    </motion.header>
  );
};

