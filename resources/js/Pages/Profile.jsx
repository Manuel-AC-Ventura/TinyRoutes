import axios from "axios";
import { useState } from "react";
import { Header } from "@/Components/Header";
import { Head, usePage } from "@inertiajs/react";

export default function Profile(){
  const { user } = usePage().props;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleSubmit = async(event)=>{
    const id = user.id;
    event.preventDefault();

    try {
      const res  = await axios.put('/edit', { id, name, email, password })
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className="w-full min-h-screen flex flex-col gap-20 py-7 px-10 bg-slate-950">
      <Head title={user.name}/>
      <Header/>

      <form className="flex flex-col gap-5 sm:mx-auto sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-white">Editar Perfil</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} className="text-black border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none" type="text" autoComplete="name" placeholder="Nome" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="text-black border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none" type="email" autoComplete="email" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="text-black border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none" type="password" autoComplete="current-password" placeholder="Senha" />
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-blue-700  hover:bg-blue-800 text-white font-semibold rounded-md px-4 py-2 w-full">Editar</button>
          <button className="bg-red-700 hover:bg-red-800 text-white font-semibold rounded-md px-4 py-2 w-full">Apagar</button>
        </div>
      </form>
    </div>
  )
}
