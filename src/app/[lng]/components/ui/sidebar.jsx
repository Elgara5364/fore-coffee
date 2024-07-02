"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "/public/logo/Logo-2.png";
import Link from "next/link";
import { useTranslation } from "@/src/app/i18n/client";

export function Sidebar({ lng }) {
  const { t } = useTranslation(lng, "home");

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex mx-auto">
      <button className="hidden max-[999px]:block" onClick={handleOpen}>
        |||
      </button>
      {isOpen ? (
        <div className="w-1/2 h-[100vh] absolute z-50 top-0 right-0 max-w-1200 px-6 py-6 flex flex-col gap-8 bg-[#fff] -translate-x-0 transition-all ease-in-out duration-500">
          <div className="flex w-full justify-between">
            <Image
              src={Logo}
              sizes="100%"
              alt="Logo"
              style={{ width: 100, height: "auto" }}
            />
            <button onClick={handleClose}>X</button>
          </div>
          <div>
            <ul className="flex flex-col gap-5 text-primary font-bold text-base tracking-wider">
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
        </div>
      ) : (
        <div className="w-1/2 h-[100vh] absolute z-0 top-0 right-0 max-w-1200 px-6 py-6 gap-8 flex flex-col bg-red-50 translate-x-full transition-all ease-in-out duration-500">
          <div className="flex w-full justify-between">
            <Image
              src={Logo}
              sizes="100%"
              alt="Logo"
              style={{ width: 100, height: "auto" }}
            />
            <button onClick={handleClose}>X</button>
          </div>
          <div>
            <ul className="flex flex-col gap-5 text-primary font-bold text-base tracking-wider">
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
        </div>
      )}
    </div>
  );
}
