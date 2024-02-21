import React from "react";

export const MenuItems = ({ menuOpen, user, handleToggleLoginModal, handleToggleRegisterModal }) => (
  <ul className={`flex gap-8 group items-center sm:flex ${menuOpen ? 'flex' : 'hidden'}`}>
    { user ? (
      <>
        <li className="font-semibold cursor-pointer hover:opacity-75">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="font-semibold cursor-pointer hover:opacity-75">Ajuda</li>
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

