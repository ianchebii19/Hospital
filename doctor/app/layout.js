import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
