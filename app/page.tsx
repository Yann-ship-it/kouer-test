import Hero from "@/components/hero";
import Image from 'next/legacy/image'
import ProductSlider from '../components/ProductSlider';
import { Input } from "@/components/ui/input";

export default async function Index() {
  return (
    <>
      <Hero />
      <main>

      {/* Producteurs */}

        <div className="relative w-full h-[458px] flex items-center object-contain">
          <Image
          className="object-cover"
          src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/bg.webp"
          layout="fill"
          alt="Picture of the author"
        />
          <div className="absolute text-white left-[5%]">
            <h1 className="max-md:text-3xl text-5xl text-[#4ea04c]">Le meilleur des producteurs<br/>directement chez vous !</h1>
            <div className="py-5">
              <p>Commandez chez Kouer et soutenez l'artisanat local.</p>
              <p>Recevez vos commandes<br/>à domicile en 48h</p>
            </div>
            <button className="bg-[#4ea04c] rounded-full px-5 py-0.5 text-xl">
              Voir tous nos produits
            </button>
          
          </div>
        </div>

        {/* Selections */}
      
        <div className="py-12">
      <ProductSlider />
    </div>


        {/* Les nouveautés */}

        <div className="py-12">
      <ProductSlider />
    </div>

        {/* Comment ça marche */}

        <section>
        <h2 className="flex justify-center text-[1.6rem] text-[#4ea04c]">Comment ça marche Kouer ?</h2>
          <div className="grid grid-cols-4 px-52 gap-10 max-xl:grid-cols-2 max-xl:px-0">
            <div className="text-center">
            <div className="relative w-[150px] h-[150px] m-auto max-sm:h-[100px] max-sm:w-[100px]">
              <Image
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/ordinateur.svg"
                layout="fill"
                alt="Picture of the author"
                />
              </div>
              <h3 className="text-xl text-[#4ea04c]">Des produits artisanaux</h3>
              <p className="text-[0.95rem]">Plus de 15.000 produits et 500 producteurs</p>
            </div>
            <div className="text-center">
            <div className="relative w-[150px] h-[150px] m-auto max-sm:h-[100px] max-sm:w-[100px]">
              <Image
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/ordinateur.svg"
                layout="fill"
                alt="Picture of the author"
                />
              </div>
              <h3 className="text-xl text-[#4ea04c]">Faites votre commande</h3>
              <p className="text-[0.95rem]">Découvrez une nouvelle façon de faire vos courses, directement en ligne</p>
            </div>
            <div className="text-center">
            <div className="relative w-[150px] h-[150px] m-auto max-sm:h-[100px] max-sm:w-[100px]">
              <Image
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/ordinateur.svg"
                layout="fill"
                alt="Picture of the author"
                />
              </div>
              <h3 className="text-xl text-[#4ea04c]">En direct du producteur</h3>
              <p className="text-[0.95rem]">Faites vos courses en circuit court en direct de vos producteurs.</p>
            </div>
            <div className="text-center">
            <div className="relative w-[150px] h-[150px] m-auto max-sm:h-[100px] max-sm:w-[100px]">
              <Image
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/ordinateur.svg"
                layout="fill"
                alt="Picture of the author"
                />
              </div>
              <h3 className="text-xl text-[#4ea04c]">Livraison rapide en 24h-48h</h3>
              <p className="text-[0.95rem]">Sec, frais ou réfrigéré, vous êtes livrés directement chez vous!</p>
            </div>
          </div>
        </section>

        {/* Producteurs */}

        <section className="flex w-[95%] m-auto gap-5 py-10 max-md:flex-col max-md:items-center">
          <div className="w-[50%] max-sm:w-[100%]">
            <h2 className="text-[#4ea04c] text-[1.6rem]">Des producteurs partenaires de qualités :</h2>
            <p className="text-[0.95rem]">Kouer sélectionne pour vous, des producteurs qui vendent exclusivement des produits artisanaux en direct et qui remplissent les conditions nécessaires pour vous offrir un marché de qualité.</p>
            <p className="text-[0.95rem]">Vous pouvez consulter nos engagements et les valeurs que nous défendons en cliquant sur <span>nos engagements.</span></p>
            <h3 className="text-[#505050] font-medium text-[20px]">Vous êtes un producteur ?</h3>
            <p className="text-[0.95rem]">Vous êtes intéressé par nous rejoindre en tant que producteur partenaires, et souhaitez rejoindre une communauté qui partage vos valeurs ? C’est par ici pour en savoir plus !</p>
          </div>
          <div className="w-full overflow-scroll overflow-y-hidden flex gap-5">
          <div className="relative w-[275px] h-[435px]">
              <Image
                className="object-cover rounded-xl"
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/saucisson.webp?t=2024-09-24T10%3A56%3A59.361Z"
                layout="fill"
                alt="Picture of the author"
                />
            </div>
            <div className="relative w-[275px] h-[435px]">
              <Image
                className="object-cover rounded-xl"
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/saucisson.webp?t=2024-09-24T10%3A56%3A59.361Z"
                layout="fill"
                alt="Picture of the author"
                />
            </div>
            <div className="relative w-[275px] h-[435px]">
              <Image
                className="object-cover rounded-xl"
                src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/saucisson.webp?t=2024-09-24T10%3A56%3A59.361Z"
                layout="fill"
                alt="Picture of the author"
                />
            </div>
              

          </div>

        </section>
      
        {/* Produits à moins de 5€ */}

        {/* Grid */}

        <section className="flex gap-3 w-full h-[750px] px-10 max-xl:h-[1400px] max-xl:flex-col">
          <div className="grid grid-cols-2 grid-rows-5 gap-3 w-full h-full">
            <div className="relative col-span-2 row-start-1 row-end-3">
              <Image
              className="rounded-lg object-cover"
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/produit_de_chateau.webp?t=2024-09-23T19%3A25%3A53.871Z"
              layout="fill"
              alt="panier"
              />
            </div>
            <div className="relative row-start-3 row-end-6">
              <Image
              className="rounded-lg object-cover"
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/produit_de_chateau.webp?t=2024-09-23T19%3A25%3A53.871Z"
              layout="fill"
              alt="panier"
              />
            </div>
            <div className="relative row-start-3 row-end-6">
              <Image
              className="rounded-lg object-cover"
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/produit_de_chateau.webp?t=2024-09-23T19%3A25%3A53.871Z"
              layout="fill"
              alt="panier"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-5 gap-3 w-full h-full">
            <div className="relative row-start-1 row-end-4">
              <Image
              className="rounded-lg object-cover"
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/produit_de_chateau.webp?t=2024-09-23T19%3A25%3A53.871Z"
              layout="fill"
              alt="panier"
              />
            </div>
            <div className="relative row-start-1 row-end-4">
              <Image
              className="rounded-lg object-cover"
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/produit_de_chateau.webp?t=2024-09-23T19%3A25%3A53.871Z"
              layout="fill"
              alt="panier"
              />
            </div>
            <div className="relative col-span-2 row-start-4 row-end-6">
              <Image
              className="rounded-lg object-cover"
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/produit_de_chateau.webp?t=2024-09-23T19%3A25%3A53.871Z"
              layout="fill"
              alt="panier"
              />
            </div>
          </div>
          
        </section>

        
      </main>
      <footer className="mt-20 bg-[#F4F4F4] pt-[60px] px-[43px] font-poppins w-full">
        <div className="flex justify-between mb-[50px] max-sm:flex-col max-sm:gap-[40px] [@media(max-width:450px)]:items-center [@media(max-width:450px)]:gap-[0px]">
          <div className="flex justify-between w-full max-sm:flex-col max-sm:text-center max-sm:justify-center">

          <div>

          
            <div className="relative w-[200px] h-[55px] max-sm:flex max-sm:justify-center max-sm:m-auto">
              <Image
              src="https://yqyvejgankeibaeulahw.supabase.co/storage/v1/object/public/image/kouer-logo.svg"
              layout="fill"
              alt="Picture of the author"
            />
            </div>
            <p className="mb-[15px] font-poppins text-[16px] text-[#505050] max-sm:text-center">4 Place Albert Einstein<br/>
            Vannes, Bretagne</p>
            <div>
              <p className="font-poppins text-[16px] text-[#505050] max-sm:text-center">Lundi - samedi de 9h00 à 19h00</p>
              <p className="mb-[15px] font-poppins text-[16px] text-[#505050] max-sm:text-center">+33 7 83 16 22 17</p>
              <p className="mb-[15px] font-poppins text-[16px] text-[#505050] max-sm:text-center">contact@kouer.fr</p>
            </div>
            </div>

            <div>
            <div>
              <p className="mb-[15px] font-poppins text-end text-[16px] font-normal text-[#505050] max-sm:text-center">Abonnez-vous à notre newsletter</p>
              <div className="max-sm:flex max-sm:justify-center">
                <Input className="rounded-[70px] bg-[#FFF] .placeholder-gray-500::placeholder pl-[20px] w-[400px] h-full focus:outline-none active:outline-none [@media(max-width:750px)]:w-[300px]" name="email" placeholder="Votre adresse mail" required />
              </div>
            </div>

          </div>
        </div>
        </div>

        <div className=" pb-10 flex justify-between gap-5 flex-wrap">
          <div>
            <h2 className="font-poppins text-[19px] mb-[15px] text-[#4EA04C] font-normal tracking-[1.8px]">Kouer</h2>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Qui sommes nous ?</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Comment ça marche</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Parrainage</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Trustpilot</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Blog</p>
          </div>

          <div>
            <h2 className="font-poppins text-[19px] mb-[15px] text-[#4EA04C] font-normal tracking-[1.8px]">Besoin d'aide ?</h2>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Nous contacter</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">FAQ</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]" >Comment fonctionne la livraison</p>
          </div>

          <div>
            <h2 className="font-poppins text-[19px] mb-[15px] text-[#4EA04C] font-normal tracking-[1.8px]">On s'engage pour</h2>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">L'écologie</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">L'agriculture</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">La Bretagne</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Le patrimoine</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Le pouvoir d'achat</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Empreinte carbone</p>
          </div>

          <div>
            <h2 className="font-poppins text-[19px] mb-[15px] text-[#4EA04C] font-normal tracking-[1.8px]">Nous rejoindre</h2>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Je suis producteur</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Carrières</p>
            <p className="font-poppins text-[16px] font-normal text-[#505050]">Investisseurs</p>
          </div>
        </div>

        <div className="flex justify-between pb-5 items-center">
          <div className="flex gap-5">
            <p className="font-poppins text-[14px] text-[#AAA] max-sm:text-[12px]">CGV / CGU</p>
            <p className="font-poppins text-[14px] text-[#AAA] max-sm:text-[12px]">Politique de confidentialité & Cookie</p>
            <p className="font-poppins text-[14px] text-[#AAA] max-sm:text-[12px]"> Mentions légales</p>
          </div>
          <div className="flex flex-col text-end">
            <p className="font-poppins text-[14px] text-[#AAA] max-sm:text-[12px]">FRANCE</p>
            <p className="font-poppins text-[14px] text-[#AAA] max-sm:text-[12px]">© Kouer 2024</p>
          </div>
        </div>
        

      </footer>
    </>
  );
}
