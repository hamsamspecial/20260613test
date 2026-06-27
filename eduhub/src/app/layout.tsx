import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import EthicsGate from "@/components/EthicsGate";
import PolicyModals from "@/components/PolicyModals";

export const metadata: Metadata = {
  title: "EduHub - 학습 웹앱 포털",
  description: "학생과 교사가 다양한 학습용 웹앱을 쉽고 빠르게 찾고 사용할 수 있는 포털",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-background text-text-primary">
        <EthicsGate />
        <TopNav />
        <Sidebar />
        <main className="ml-[240px] mt-[64px] p-6 max-w-[1280px] min-h-[calc(100vh-64px)] flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <PolicyModals />
        </main>
      </body>
    </html>
  );
}
