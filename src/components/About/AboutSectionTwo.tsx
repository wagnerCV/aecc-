import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/20] max-w-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/aecc8.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:drop-shadow-none rounded-2xl"
              />
              
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[570px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-justify">
                  Nossa Missão
                </h3>
                <p className="whitespace-normal text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify">
                  A Associação de Estudantes Cabo-Verdianos na China tem como
                  missão promover a união, o apoio mútuo e o desenvolvimento
                  acadêmico e cultural dos estudantes cabo-verdianos no país.
                  Buscamos criar um ambiente acolhedor que facilite a
                  integração, o intercâmbio de conhecimentos e o fortalecimento
                  dos laços comunitários.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nossa Visão
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed text-justify whitespace-normal">
                  Aspiramos ser um farol de excelência e solidariedade, ajudando
                  nossos membros a alcançar seus objetivos educacionais e
                  pessoais enquanto cultivam um profundo apreço pela diversidade
                  cultural. Desejamos construir uma rede global de estudantes e
                  profissionais cabo-verdianos que contribuam positivamente para
                  suas comunidades e para o mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"></div>
      </div>
      
    </section>
  );
};

export default AboutSectionTwo;
