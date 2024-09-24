import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from 'next/legacy/image'

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-[url('https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/background-login.jpg?t=2024-09-24T13%3A30%3A36.310Z')]">

    
    <div className="w-[500px] flex bg-white py-[80px] px-[100px] rounded-[20px] max-sm:px-[50px] max-sm:w-[400px]">
    <form className="flex-1 flex flex-col w-[50%]">
    <div className="relative w-[170px] h-[48px] m-auto">
    <Link
            href="/"
          >
            <Image
            src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/kouer-logo.svg"
            layout="fill"
            alt="Picture of the author"
          />
          </Link>
        
        </div>
      <h1 className="!text-[#4EA04C] !text-[20px] !font-poppins !font-medium !text-center">Content de vous revoir</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
      <div>
        <Label className="text-[#AAA] text-[16px] font-poppins px-[15px]" htmlFor="email">Adresse mail</Label>
        <Input className="px-[20px] py-[8px] h-[44px] text-[#505050] font-poppins text-[16px] font-normal bg-[#F4F4F4] rounded-[60px] mb-[20px] focus:outline-none focus:border focus:border-gray-500 hover:bg-[#F0F0F0]" name="email" required />
        <div className="flex justify-between items-center">
          <Label className="text-[#AAA] text-[16px] font-poppins px-[15px]" htmlFor="password">Mot de passe</Label>
        </div>
        <Input
          className="px-[20px] py-[8px] pr-[50px] h-[44px] text-[#505050] font-poppins text-[16px] font-normal bg-[#F4F4F4] rounded-[60px] mb-[10px] w-full focus:outline-none focus:border focus:border-gray-500 hover:bg-[#F0F0F0]"
          type="password"
          name="password"
          required
        />
        <div className="mb-5">

        
        <Link
            className="text-[14px] text-[#AAA] font-semibold font-poppins underline underline-offset-8 hover:text-[#cec7c7] cursor-pointer duration-200 w-fit"
            href="/forgot-password"
          >
            Mot de passe oublié
          </Link>
          </div>
        </div>
       

        <SubmitButton className="bg-[#4EA04C] text-[16px] rounded-full text-white hover:opacity-[0.8]" pendingText="Signing In..." formAction={signInAction}>
          Se connecter
        </SubmitButton>
        <Link className="py-2 border border-[#4EA04C] flex justify-center text-[16px] bg-white rounded-full text-[#4EA04C] hover:bg-[#4ea04c33]" href="/sign-up">
          Créer un compte
        </Link>
        <FormMessage message={searchParams} />
      </div>
    </form>
    </div>
    </div>
  );
}
