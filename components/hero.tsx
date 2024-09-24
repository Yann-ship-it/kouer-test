import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import Link from "next/link";
import Image from 'next/legacy/image'

export default function Header() {
  return (
    
    <nav className="flex flex-col gap-3 items-center p-7 w-full">
      <div className="flex justify-center items-center w-full">
        <div className="relative w-[130px] h-[35px]">
        <Image
            src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/kouer-logo.svg"
            layout="fill"
            alt="Picture of the author"
          />
        </div>
      
    
<form className="w-[45%] mx-auto"> 
    
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 right-1 pr-2 flex items-center pointer-events-none">
        <svg className="w-6 h-6 text-[#4ea04c]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full pr-10 p-2 px-5 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 placeholder-[#4ea04c]" placeholder="Quel produit recherchez-vous ?" required />
          
    </div>
</form>

<div className="flex gap-5 items-center">

  <div className="flex items-center gap-2">
  <div className="relative w-[40px] h-[40px]">
  <Image
        src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/user.svg"
        layout="fill"
        alt="Picture of the author"
      />
      </div>
      <div>
        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} 
        <p className="text-[10px]">Compte et commandes</p>
      </div>
      <Image
        src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/arrow.svg"
        width={25}
        height={50}
        alt="Logo compte"
      />
  </div>


  <div className="relative w-[30px] h-[30px]">
  <Image
        src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/coeur.svg"
        layout="fill"
        alt="Produit favoris" 
      />
      </div>

  <div className="flex items-center gap-3">
  <div className="relative w-[30px] h-[30px]">
  <Image
        src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/wallet.svg"
        layout="fill"
        alt="panier"
      />
  </div>
      <span className="text-[#1b4d3e]">0.00€</span>
  </div>

</div>

      </div>
      

    <div className="grid grid-cols-9 gap-10 w-[90%]">

      <div className="flex items-center flex-col">  
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/AllProducts.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Tous les produits
        </span>
      </div>

      <div className="flex items-center flex-col">
        <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/viande.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div> 
      
        <span className="text-sm text-center">
          Viande & Charcuterie
        </span>
      </div>
    
      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/crevette.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Poissons & Fruits de mer
        </span>
      </div>

      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/carotte.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Fruits & Légumes
        </span>
      </div>

      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/boissons.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Boissons
        </span>
      </div>

      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/Epicerie.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Epicerie Salée
        </span>
      </div>

      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/sucre.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Epicerie Sucrée
        </span>
      </div>

      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/fromage.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
          Fromagerie & Produits laitiers
        </span>
      </div>

      <div className="flex items-center flex-col"> 
      <div className="w-[40px] h-[40px] m-auto">
          <Image
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/traiteur.svg"
          width={50}
          height={50}
          alt="panier"
          />
        </div>
        <span className="text-sm text-center">
        Plat traiteur
        </span>
      </div>
    </div>

    </nav>
  );
}
