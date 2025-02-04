import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenuPages } from "@/api/pages";
import { getSettings } from "@/api/settings";
import { GoogleAnalytics } from '@next/third-parties/google'

export default async function RootLayout({ children }) {
  const menuItems = await getMenuPages();
  const settings = await getSettings();
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  return (
    <html lang="uk">
      <body className=" bg-gray-100">
        <div className="relative z-10 overflow-hidden ">
          <div>
            <div className="absolute left-2/4 top-500 blur-md rounded-full h-72 w-72 bg-indigo-100"></div>
            <div className="absolute right-0  top-1/4 blur-md rounded-full h-72 w-72 bg-green-100"></div>
            <div className="absolute right-0  top-3/4 blur-md rounded-full h-72 w-72 bg-green-100"></div>
            <div className="absolute left-0  top-1/3 blur-md rounded-full h-72 w-72 bg-yellow-100"></div>
          </div>
          <div className="container-fluid mx-auto relative z-10  ">
            <Header menuItems={menuItems} settings={settings} imagePath={imagePath} />
            <div className='container mx-auto'>
              {children}
            </div>
            <Footer text={settings.footer_text} />
          </div>
        </div>
        <GoogleAnalytics gaId="G-GTGK1XPBZP" />
      </body>
    </html>
  );
}
