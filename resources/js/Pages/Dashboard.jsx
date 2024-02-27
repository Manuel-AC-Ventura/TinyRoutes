//import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Header } from '@/Components/Header';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
  const { user } = usePage().props;

  if(!user){
    window.location = '/'
  }
  
  return (
    <div className="w-full min-h-screen flex flex-col gap-20 py-7 px-10 bg-slate-950">
      <Head title='Dashboard'/>
      <Header/>

      <main className='w-full bg-slate-950'>
        
      </main>
    </div>
  );
}
