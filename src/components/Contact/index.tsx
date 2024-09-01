"use client";
import React, { useState, useRef, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useUser } from '@clerk/nextjs'; // Importando useUser

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isExploding, setIsConfettiVisible] = useState(false);
  const [email, setEmail] = useState<string>(""); // Estado para armazenar o email
  const formRef = useRef<HTMLFormElement>(null);

  const { user } = useUser(); // Obter os detalhes do usuário logado

  useEffect(() => {
    if (user && user.emailAddresses[0].emailAddress) {
      setEmail(user.emailAddresses[0].emailAddress); // Definir o email se o usuário estiver autenticado
    }
  }, [user]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "f20a4f08-425d-436c-afb6-718a061e48c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      // Limpa o formulário
      if (formRef.current) {
        formRef.current.reset();
      }

      // Exibe a mensagem de sucesso e oculta o formulário
      setSuccessMessage("Mensagem enviada com sucesso!");
      setIsFormVisible(false);
      setIsConfettiVisible(true); // Mostra os confetes

      // Espera 5 segundos e depois restaura o formulário
      setTimeout(() => {
        setSuccessMessage(null);
        setIsFormVisible(true);
        setIsConfettiVisible(false); // Oculta os confetes
      }, 5000);
    }
  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {isExploding && <ConfettiExplosion />}
              {isFormVisible ? (
                <>
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Precisa de ajuda ou tem alguma pergunta? Não hesite em nos contatar.
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    Entraremos em contato o mais breve possível.
                  </p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Seu Nome
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Digite seu nome"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Seu Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={email} // Preencher o campo de email com o valor do estado
                            onChange={(e) => setEmail(e.target.value)} // Permitir edição do email, se necessário
                            placeholder="Digite seu email"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Sua Mensagem
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Digite sua mensagem"
                            required
                            className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <p className="text-green-500 text-xl font-semibold text-center">
                  {successMessage}
                </p>
              )}
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
  