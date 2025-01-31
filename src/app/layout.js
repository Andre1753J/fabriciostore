import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Fabricio Clinica",
  description: "Projeto de duas materias front-end e back-end",
  charset: 'UTF-8',
  author: 'André Orocondo Lopes Aguirre',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}