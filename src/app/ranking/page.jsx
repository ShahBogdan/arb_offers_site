import { getOffers } from "@/api/offers";
import Offers from "@/components/offers/Offers";
import PagesH1 from "@/components/PagesH1";
import PagesH2 from "@/components/PagesH2";
import { getSettings } from "@/api/settings";
import PageSeoText from "@/components/PageSeoText";
export async function generateMetadata({ params, searchParams }, parent) {
  const settings = await getSettings();
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: settings.ranking_page_title,
    description: settings.ranking_page_meta_desc,
    openGraph: {
      title: settings.ranking_page_title,
      description: settings.ranking_page_meta_desc,
      images: [
        settings.ranking_page_og_image &&
          imagePath + settings.ranking_page_og_image,
        ...previousImages,
      ],
    },
  };
}

const TableItem = ({ item }) => {
  return (
    <a
      href={item ? item.offer_url : null}
      target=" _blank"
      className=" text-2xl text-center uppercase mt-2"
    >
      {item ? item.name : ""}
    </a>
  );
};

export default async function () {
  const offersList = await getOffers();
  const imagePath = process.env.MEDIA_DOMAIN_PATH;
  const settings = await getSettings();

  const min_real_annual_rate = () => {
    let res = offersList.sort(
      (a, b) =>
        parseFloat(a.real_annual_rate_to) - parseFloat(b.real_annual_rate_to)
    );
    return res[0];
  };

  const max_time = () => {
    let res = offersList.sort((a, b) => b.term_to - a.term_to);
    return res[0];
  };

  const faster_offer = () => {
    let res = offersList.sort((a, b) => a.time_to_get - b.time_to_get);
    return res[0];
  };

  return (
    <div>
      <PagesH1 h1={settings.ranking_page_h1} />

      <div className=" flex flex-col md:flex-row mx-auto w-full justify-between gap-2">
        <div className="flex-1 p-5 bg-white shadow-md rounded-md">
          <div className=" text-gray-600">Найменьша річна ставка</div>
          <TableItem item={min_real_annual_rate()} />
        </div>
        <div className="flex-1 p-5 bg-white shadow-md rounded-md">
          <div className=" text-gray-600">Найдовший термін</div>
          <TableItem item={max_time()} />
        </div>
        <div className="flex-1 p-5 bg-white shadow-md rounded-md">
          <div className=" text-gray-600">Найшвидша видача</div>
          <TableItem item={faster_offer()} />
        </div>
      </div>
      <PagesH2 h2={"Всі пропозиції по рейтингу:"} />
      <div className="my-5">
        <Offers show_filter={false} offers={offersList} imagePath={imagePath} />
      </div>
      <PageSeoText text={settings.ranking_page_text} />
      <PageSeoText text={settings.text_for_google_term} />
    </div>
  );
}
