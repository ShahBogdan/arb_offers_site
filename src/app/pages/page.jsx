import { getSettings } from "@/api/settings";
import { getPages } from "@/api/pages";

export async function generateMetadata({ params, searchParams }, parent) {
  const settings = await getSettings();
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: settings.pages_title,
    description: settings.pages_meta_desc,
    openGraph: {
      title: settings.pages_title,
      description: settings.pages_meta_desc,
      images: [
        settings.pages_og_image && imagePath + settings.pages_og_image,
        ...previousImages,
      ],
    },
  };
}

export default async function Pages({ params, searchParams }) {
  const pagesList = await getPages();
  console.log(pagesList);
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  return (
    <div className="text-red-700">
      <h1>asdad</h1>
      <div>
        {pagesList.results.map((page) => {
          return (
            <div>
              <div className=" w-40 h-40">
                <img
                  className=" object-contain"
                  src={imagePath + page.image}
                  alt={page.title}
                />
              </div>
              <div>{page.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
