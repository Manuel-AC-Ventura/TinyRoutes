import { motion } from "framer-motion";
import { Head } from "@inertiajs/react";
import { TbMoodSad } from "react-icons/tb";
import { Header } from "@/Components/Header";

export default function Error404({ auth }) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-20 py-7 px-10 bg-slate-950">
      <Head title="Página não encontrada"/>
      <Header/>

      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="flex flex-col gap-8 items-center text-4xl text-zinc-300 font-bold text-center
      ">
        <TbMoodSad size={64} className="mx-auto" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl">ERRO 404 - Página não encontrada</h1>
      </motion.div>
    </div>
  );
}
