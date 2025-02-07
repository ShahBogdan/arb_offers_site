import Offers from "@/components/offers/Offers";
import { getOffers } from "@/api/offers";
import { getSettings } from "@/api/settings";
import { getMainPageFaq } from "@/api/faq";
import FaqComponent from "@/components/Faq";
import PageSeoText from "@/components/PageSeoText";
import OffersMainPage from "@/components/OffersMainPage";

export const revalidate = 60
export const dynamicParams = true

export async function generateMetadata({ }, parent) {
  const settings = await getSettings();
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: settings.main_page_title,
    description: settings.main_page_meta_desc,
    openGraph: {
      title: settings.main_page_title,
      description: settings.main_page_meta_desc,
      images: [settings.main_page_og_image && imagePath + settings.main_page_og_image, ...previousImages],
    },
  };
}

export default async function Home() {
  const offersList = await getOffers();
  const settings = await getSettings();
  const faq_list = await getMainPageFaq();

  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  return (
    <main className="">
      <div className="text-center md:text-start">
        <h1 className=" my-1 md:my-5 px-5 py-2 md:px-0 md:py-0  text-xl md:text-4xl font-semibold text-gray-700">
          {settings.main_page_h1}
        </h1>
        <span className=" text-2xl font-bold text-gray-600 ">
          Більше <span className=" text-orange-600">заявок</span> - вищі шанси:
        </span>
      </div>
      <OffersMainPage offers={offersList} imagePath={imagePath} />
      <div className="my-5 border border-gray-200 py-10 bg-white rounded-md">
        <h3 className="font-bold text-xl text-center text-gray-600">Найчастіші запитання</h3>
        <FaqComponent items={faq_list} />
      </div>
      <PageSeoText text={settings.text_for_google_term} />
      <PageSeoText text={settings.main_page_text} />
    </main>
  );
}
