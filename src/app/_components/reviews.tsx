'use client'
import useEmblaCarousel from "embla-carousel-react"
import { ChevronRight, ChevronLeft, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from "@phosphor-icons/react"
import tutor1 from '../../assets/img/tutor1.png'
import tutor2 from '../../assets/img/tutor2.jpg'
import tutor3 from '../../assets/img/tutor3.jpg'
import Image from "next/image"

const reviewers = [
   {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci dicta nam voluptatum consequatur quasi voluptas odit molestiae, magni, dolor laudantium nobis nihil tenetur similique deserunt molestias, officia minus quisquam vero repudiandae deleniti blanditiis. Quasi?",
      author: "Bianca Laimes",
      role: "Tutora da Luna (Golden Retriever)",
      image: tutor2,
   },
   {
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium libero nobis reiciendis quas ea? Blanditiis quod quaerat, neque quos obcaecati assumenda consequatur expedita autem iusto consectetur quo! Laborum libero ipsam ratione nemo nesciunt quidem, quaerat reprehenderit dolorem sint a consequatur.",
      author: "Cássio Cristão",
      role: "Tutor do Thor (Bulldog Francês)",
      image: tutor1,
   },
   {
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe porro ea aliquam aut non beatae adipisci quia amet, id est enim dolorum tenetur magnam nisi fuga iste cum iusto.",
      author: "Lucas Furia",
      role: "Tutor da Mel e do Max",
      image: tutor3,
   },
]

export function Reviews() {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
   })

   function scrollPrev() {
      emblaApi?.scrollPrev();
   }
   function scrollNext() {
      emblaApi?.scrollNext();
   }
   return (
      <>
         <section className="bg-yellow-200 py-16">
            <div className="container mx-auto px-4">
               <div>
                  <h2 className="text-4xl text-center font-bold mb-12">Depoimentos</h2>
                  <div className="relative max-2-4xl mx-auto">
                     <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                           {reviewers.map((item, index) => (
                              <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                 <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                       <div className="relative w-24 h-24">
                                          <Image src={item.image} alt={item.author} fill sizes='96px' className="object-cover rounded-full" />
                                       </div>
                                       <p className="text-gray-200">{item.content}</p>
                                       <div>
                                          <p className="font-bold">{item.author}</p>
                                          <p className="text-sm text-gray-400">{item.role}</p>
                                       </div>
                                    </div>
                                 </article>
                              </div>
                           ))}
                        </div>
                     </div>
                     <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                     </button>
                     <button onClick={scrollNext} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}