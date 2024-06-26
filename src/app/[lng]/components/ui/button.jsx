import Link from "next/link";
import { useTranslation } from "../../../i18n";

export async function OurStoryButton({ lng }) {
  const { t } = await useTranslation(lng, "home");

  return (
    <button className="mt-5 bg-green-700 px-4 py-2 rounded-full text-white font-bold">
      <Link href={"/#"} className="text-[12px]">
        {t("our-story.read-more")} <span className="ms-3 text-small">&gt;</span>
      </Link>
    </button>
  );
}

export async function ReadMoreButton({ lng }) {
  const { t } = await useTranslation(lng, "home");
  return (
    <button className="mt-5 bg-green-700 px-1.5 py-1 rounded-full text-white font-bold">
      <Link href={"/#"} className="text-[12px]">
        {t("fore-news.read-more")}
      </Link>
    </button>
  );
}
