import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { BackToTop } from "@/components/ui/back-to-top";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative max-w-svw overflow-hidden">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
