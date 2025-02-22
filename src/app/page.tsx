import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import React from "react";
import { Button } from 'antd';

export const metadata: Metadata = {
  title: "AECC",
  description: "Associação dos Estudantes Cabo-verdianos na China",
  // other metadata
  other: {
    "google-adsense-account": "ca-pub-1767079045992000",
  },
};

export default async function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
