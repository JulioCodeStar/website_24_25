import { Header, Footer } from "@/components/Layouts/";

export default function HomeLayout({ children }) {

  return (
    <main className="min-h-screen flex flex-col justify-between relative text-mons">
      <Header />
        <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
