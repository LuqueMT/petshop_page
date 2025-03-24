import Image from "next/image";
import aboutImg from '../../assets/img/about-1.png';
import about2Img from '../../assets/img/about-2.png';
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
export function About() {
   return (
      <>
         <section className="bg-stone-100 py-16">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative" data-aos="fade-up" data-aos-delay="500">
                     <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image src={aboutImg} alt="Foto do Cachorro" fill quality={100} className="object-cover hover:scale-110 duration-300" priority />
                     </div>
                     <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                        <Image src={about2Img} alt="Foto do Cachorro 2" fill quality={100} className="object-cover" priority />
                     </div>
                  </div>
                  <div className="space-y-6 mt-10">
                     <h2 className="text-4xl font-bold">SOBRE</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident consectetur rerum voluptatum enim amet dignissimos earum quo quas nulla fugit, libero, sequi, totam laudantium fuga suscipit temporibus consequatur. Aspernatur eaque quia dolores impedit neque iure dignissimos ipsum quas, obcaecati, fuga placeat veritatis, molestiae debitis quae tenetur facilis eius enim necessitatibus?</p>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-2"><Check className='text-red-500' />Aberto desde 2006</li>
                        <li className="flex items-center gap-2"><Check className='text-red-500' />Equipe com mais de 10 veterinários</li>
                        <li className="flex items-center gap-2"><Check className='text-red-500' />Qualidade e Prioridade</li>
                     </ul>
                     <div className="flex gap-2">
                        <a href="#" className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                           <WhatsappLogo className="w-5 h-5 text-white" />Contato via WhatsApp</a>
                        <a href="#" className="bg-stone-300 flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                           <MapPin className="w-5 h-5 text-black" />Endereço da Loja</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}