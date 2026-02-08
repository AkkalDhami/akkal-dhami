// import DocsSidebar from "@/components/layouts/docs-sidebar";
// import { MobileNav } from "@/components/layouts/mobile-nav";

export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative px-2 py-1">
      <main className="w-full px-4 pt-12 pb-16 font-sans md:pt-18">
        {children}
      </main>
    </div>
  );
}
