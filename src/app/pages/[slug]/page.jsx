import { getPageDetail } from "@/api/pages";

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = (await params).slug;
  const pageData = await getPageDetail({ page_slug: slug });
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: pageData.title,
    description: pageData.meta_description,
    openGraph: {
      title: pageData.title,
      description: pageData.meta_description,
      images: [
        pageData.og_image && imagePath + pageData.og_image,
        ...previousImages,
      ],
    },
  };
}

export default async function ({ params }) {
  const slug = (await params).slug;
  const pageData = await getPageDetail({ page_slug: slug });
  const imagePath = process.env.MEDIA_DOMAIN_PATH;

  return (
    <div className="flex flex-col mt-5 ">
      <div className=" flex flex-col md:flex-row font-bold text-2xl text-gray-700">
        <h1>{pageData.h1}</h1>
      </div>
      {pageData.image_full && (
        <div className="w-full  my-5 ">
          <img
            className=" object-contain w-full rounded-md shadow-md"
            src={imagePath + pageData.image_full}
            alt={pageData.title}
          />
        </div>
      )}

      <div
        className="bg-white mt-5 border border-gray-100 rounded-md p-5"
        dangerouslySetInnerHTML={{ __html: pageData.text }}
      />
    </div>
  );
}
