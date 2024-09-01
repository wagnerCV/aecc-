import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Member from "@/components/Member";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AECC | Sobre Nós",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nós"
        description="Na Associação de Estudantes Cabo-Verdianos na China, nos dedicamos a criar uma comunidade solidária e enriquecedora para estudantes cabo-verdianos vivendo e estudando na China."
      />
      <AboutSectionOne />  
      <AboutSectionTwo />
      <AboutSectionThree></AboutSectionThree>
      <Member></Member>
    </>
  );
};

export default AboutPage;
