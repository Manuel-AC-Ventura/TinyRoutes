import axios from "axios";
import { useState } from "react"
import { motion } from "framer-motion";
import { Head } from "@inertiajs/react";
import { Header } from "@/Components/Header";
import { Shortened } from "@/Components/Shortened";


export default function Home({ auth }){
  const [url, setUrl] = useState('');
  const [shortened, setShortened] = useState('');

  const handleSubmit = async (event)=>{
    event.preventDefault();

    try {
      const response = await axios.post('/api/shorten', { url });
      console.log(response.data)
      setShortened(response.data.shortened)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className="w-full min-h-screen flex flex-col gap-20 py-7 px-10 bg-slate-950">
      <Head title="Home" />

      <Header />

      <motion.form
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 30 }}
        className="w-full md:w-2/3 lg:w-1/2 mx-auto gap-3 flex flex-col md:flex-row items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          name="url"
          value={url}
          required={true}
          placeholder="https://example.com"
          onChange={(e) => setUrl(e.target.value)}
          className="w-full md:w-3/4 lg:w-3/5 px-4 py-2 text-lg rounded-md outline-none border-none placeholder-italic"
        />
        <button className="w-full md:w-auto bg-blue-950 p-2 rounded-md font-semibold text-white mt-3 md:mt-0">
          Encurtar
        </button>
      </motion.form>
      { shortened &&
        <Shortened shortened={shortened} />
      }
    </div>
  )
}