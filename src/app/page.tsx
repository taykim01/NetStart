'use client'

import Header from "@/presentation/components/header";
import FormPage from "@/presentation/pages/form_page";
import MainPage from "@/presentation/pages/main_page";
import { useRef } from "react";
import { Provider } from "react-redux";
import store from "@/presentation/states/store";
import { ScrollContext } from "@/presentation/states/scroll_context";
import StrengthsPage from "@/presentation/pages/strengths_page";

export default function Home() {
  const refS1 = useRef(null)
  const refS2 = useRef(null)
  const refS3 = useRef(null)

  const scrollTo = (location: any) => {
    const top = location.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Provider store={store}>
      <ScrollContext.Provider value={{ scrollTo, refS1, refS2, refS3 }}>
        <main>
          <Header />
          <div ref={refS1}><MainPage /></div>
          <StrengthsPage reference={refS3} />
          <div ref={refS2}><FormPage /></div>
        </main>
      </ ScrollContext.Provider >
    </ Provider>
  )
}
