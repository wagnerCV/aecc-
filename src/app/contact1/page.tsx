"use client"; 
import React from 'react';


export default function Contact() {
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
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
          }
      }

    return (
      <>
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-8">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Precisa de ajuda ou tem alguma pergunta? Não hesite em nos contatar.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Entraremos em contato o mais breve possível.
              </p>
              <form onSubmit={handleSubmit}>
          <input type="text" name="name"/>
          <input type="email" name="email"/>
          <textarea name="message"></textarea>
          <button type="submit">Submit Form</button>
        </form>
            </div>
          </div>
          {/*
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
          */}
          
        </div>
      </div>
    </section>
        
      </>
    );
  }