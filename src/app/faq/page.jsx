import { getSettings } from "@/api/settings";
import { getFaq } from "@/api/faq";
import FaqComponent from "@/components/Faq";
import PageSeoText from "@/components/PageSeoText";
export const revalidate = 60;
export const dynamicParams = true;
export async function generateMetadata({ params, searchParams }, parent) {
  const settings = await getSettings();
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  console.log(settings);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: settings.faq_page_title,
    description: settings.faq_page_meta_desc,
    openGraph: {
      title: settings.faq_page_title,
      description: settings.faq_page_meta_desc,
      images: [
        settings.faq_page_og_image && imagePath + settings.faq_page_og_image,
        ...previousImages,
      ],
    },
  };
}

export default async function ({ params, searchParams }) {
  const faqList = await getFaq();
  const settings = await getSettings();

  return (
    <div className="mt-5">
      <h1 className="text-center text-2xl text-slate-600 font-bold ">
        {settings.faq_page_h1}
      </h1>
      <div className=" p-10 bg-gray-50 shadow-lg rounded-md mt-5">
        <FaqComponent items={faqList} />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: settings.faq_page_text }} /> */}
      <PageSeoText text={settings.faq_page_text} />
    </div>
  );
}
