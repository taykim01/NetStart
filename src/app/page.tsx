'use client'

import Header from "@/presentation/components/header";
import { useRef } from "react";
import { Provider } from "react-redux";
import store from "@/presentation/states/store";
import { ScrollContext } from "@/presentation/states/scroll_context";
import Pages from "@/presentation/pages";

export default function Home() {
  const refS1 = useRef(null)
  const refS2 = useRef(null)
  const refS3 = useRef(null)
  const refS4 = useRef(null)

  const scrollTo = (location: any) => {
    const top = location.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Provider store={store}>
      <ScrollContext.Provider value={{ scrollTo, refS1, refS2, refS3, refS4 }}>
        <main>
          <Pages />
        </main>
      </ ScrollContext.Provider >
    </ Provider>
  )
}
