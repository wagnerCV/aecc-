import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-8">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Nossos Valores"
                paragraph="Na Associação de Estudantes Cabo-Verdianos na China, acreditamos que nossos valores fundamentais são a base de todas as nossas iniciativas e atividades. Eles não apenas orientam nossas ações e decisões diárias, mas também refletem o compromisso com a excelência e o apoio mútuo que definem nossa comunidade."
                mb="24px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full">
                    <List text="União: Fomentamos a coesão e a solidariedade entre nossos membros." />
                    <List text="Excelência: Promovemos o desempenho acadêmico e o desenvolvimento pessoal." />
                    <List text="Cultura: Valorizamos e celebramos nossas raízes cabo-verdianas, enquanto aprendemos e respeitamos a cultura chinesa." />
                    <List text="Apoio: Oferecemos suporte em questões acadêmicas, emocionais e sociais." />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 aspect-[25/24] max-w-[500px] lg:mr-0">
                <div className="relative aspect-[2/1] row-span-2 h-full">
                  <Image
                    src="/images/about/grupo1.jpg"
                    alt="Image 1"
                    fill
                    className="object-cover drop-shadow-lg rounded-2xl"
                  />
                </div>
                <div className="relative aspect-[2/1]">
                  <Image
                    src="/images/about/aecc3.jpg"
                    alt="Image 3"
                    fill
                    className="object-cover drop-shadow-lg rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
