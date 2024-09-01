import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aecc | Contact Page",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Entre em Contato Conosco"
        description="Estamos aqui para ajudar. Envie suas perguntas, sugestões ou feedback."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
