'use client'

import Header from "@/presentation/components/header";
import FormPage from "@/presentation/pages/form_page";
import MainPage from "@/presentation/pages/main_page";
import { useRef } from "react";
import { Provider } from "react-redux";
import store from "@/presentation/states/store";
import { ScrollContext } from "@/presentation/states/scroll_context";

export default function Home() {
  const refS1 = useRef(null)
  const refS2 = useRef(null)

  const scrollTo = (location: any) => {
    const top = location.current.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Provider store={store}>
      <ScrollContext.Provider value={{ scrollTo, refS1, refS2 }}>
        <main>
          <Header />
          <div ref={refS1}><MainPage /></div>
          <div ref={refS2}><FormPage /></div>
        </main>
      </ ScrollContext.Provider >
    </ Provider>
  )
}
