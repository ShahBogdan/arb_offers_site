import { getSettings } from "@/api/settings";
import PageSeoText from "@/components/PageSeoText";
import PagesH1 from "@/components/PagesH1";
export const revalidate = 60;
export const dynamicParams = true;
export async function generateMetadata() {
  return {
    title: "Політика конфіденційності",
  };
}

export default async function () {
  const settings = await getSettings();

  return (
    <div className="mt-5">
      <PagesH1 text={"Політика конфіденційності"} />
      <div className="my-5">
        <PageSeoText text={settings.site_policy} />
      </div>
    </div>
  );
}
