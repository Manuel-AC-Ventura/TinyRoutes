import React, { useState } from "react";

export const MenuItems = ({ menuOpen, user, handleToggleLoginModal, handleToggleRegisterModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ul className={`flex gap-10 items-center sm:flex ${menuOpen ? 'flex' : 'hidden'}`}>
      { user ? (
        <>
          <li className="font-semibold cursor-pointer relative">
            <span className="hover:opacity-75" onClick={() => setDropdownOpen(!dropdownOpen)}>Dashboard</span>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</a>
                <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configurações</a>
              </div>
            )}
          </li>
          <li className="font-semibold cursor-pointer hover:opacity-75">
            <a href="/help">Ajuda</a>
          </li>
          <li className="font-semibold cursor-pointer hover:opacity-75">
            <a href="/logout">Logout</a>
          </li>
        </>
      ) : 
        <>
          <li onClick={handleToggleLoginModal} className="font-semibold cursor-pointer hover:opacity-75">Entrar</li>
          <li onClick={handleToggleRegisterModal} className="font-semibold cursor-pointer hover:opacity-75">Cadastrar</li>
        </>
      }
    </ul>
  );
};
