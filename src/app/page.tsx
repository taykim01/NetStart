import Header from "@/presentation/components/header";
import FormPage from "@/presentation/pages/form_page";
import MainPage from "@/presentation/pages/main_page";

export default function Home() {
  return (
    <main>
      <Header />
      <MainPage />
      <FormPage />
    </main>
  )
}
