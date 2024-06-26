import { useTranslation } from "../../i18n";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo/Logo-2.png";
import CountrySwitcher, { LanguageSwitcher } from "./ui/switcher";

const Navbar = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <header className="w-full bg-white">
      <div className="flex justify-between place-items-center max-w-1200 px-4 h-24 mx-auto bg-inherit">
        <div>
          <Link href={`/${lng}`}>
            <Image src={Logo} alt="Fore Coffee" width={80} />
          </Link>
        </div>
        <div className="flex gap-5 place-items-center max-[1000px]:hidden">
          <div className="flex gap-5">
            <ul className="flex gap-5 text-primary font-base text-base tracking-wider">
              <li>
                <Link href={`/${lng}/${t("header.links.about")}`}>
                  {t("header.navbar.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/${t("header.links.menu")}`}>
                  {t("header.navbar.menu")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/${t("header.links.store")}`}>
                  {t("header.navbar.store")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/${t("header.links.collaboration")}`}>
                  {t("header.navbar.collaboration")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/${t("header.links.career")}`}>
                  {t("header.navbar.career")}
                </Link>
              </li>
              <li>
                <Link href={`/${lng}/${t("header.links.contact-us")}`}>
                  {t("header.navbar.contact-us")}
                </Link>
              </li>
            </ul>
          </div>
          <CountrySwitcher lng={lng} />
        </div>
        <div className="flex gap-5">
          <div className="flex place-items-center gap-4 max-[550px]:hidden ">
            <button className="py-2 px-5 outline-1 outline outline-green-950 rounded-full text-primary font-bold">
              Download App
            </button>
          </div>
          <LanguageSwitcher lng={lng} />
          <button className="origin-center rotate-90 hidden max-[999px]:block">
            |||
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
