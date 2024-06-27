import Image from "next/image";
import App from "/public/images/apps2-300x287.png";
import { useTranslation } from "../../i18n";
import Link from "next/link";
import GooglePlay from "/public/images/Google-Play-Badge.png";
import AppStore from "/public/images/App-Store-Badge.png";

const DownloadApp = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");
  return (
    <section className="pt-10 pb-3 px-4">
      <div className="flex-col">
        <div className="px-2 text-center">
          <Image
            src={App}
            alt=""
            sizes="100%"
            style={{ width: "85%" }}
            className="mx-auto"
          />
          <h3 className="mt-4 tracking-[0.65em] text-[11px] text-primary font-normal">
            {t("app.title")}
          </h3>
          <h2 className="mt-3 px-5 text-primary text-xl font-extrabold">
            {t("app.details")}
          </h2>
          <p className="mt-5 text-primary text-[12px] font-normal tracking-widest">
            {t("app.details2")}
          </p>
        </div>
        <div className=" mt-6 mx-auto flex justify-center gap-4 ">
          <Link href={"/"} className="w-4/12">
            <Image
              src={GooglePlay}
              alt="Google Play"
              sizes="100%"
              style={{ width: "100%" }}></Image>
          </Link>
          <Link href={"/"} className="w-4/12">
            <Image
              src={AppStore}
              alt="App Store"
              sizes="100%"
              style={{ width: "100%" }}></Image>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
