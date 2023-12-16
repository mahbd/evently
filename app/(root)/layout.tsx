import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for hosting events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex h-screen flex-col"}>
      <Header />
      <main className={"flex-1"}>{children}</main>
      <Footer />
    </div>
  );
}
