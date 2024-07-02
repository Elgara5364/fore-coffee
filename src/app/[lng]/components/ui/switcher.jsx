"use client";

import { usePathname, useRouter } from "next/navigation";

export default function CountrySwitcher({ lng }) {
  const router = useRouter();
  const pathname = usePathname();
  const history = pathname.slice(4);
  // console.log(history);

  const handleChange = (e) => {
    const locales = e.target.value;
    if (history === "tentang-kami") {
      router.replace(`/${locales}/about`);
    } else if (history === "about") {
      router.replace(`/${locales}/tentang-kami`);
    } else {
      router.replace(`/${locales}`);
    }
  };

  return (
    <select
      value={lng}
      onChange={handleChange}
      className="text-primary font-black bg-inherit">
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  );
}

export function LanguageSwitcher({ lng }) {
  const router = useRouter();
  const pathname = usePathname();
  const history = pathname.slice(4);

  const handleClick = (e) => {
    const locales = e.target.value;
    if (history === "tentang-kami") {
      router.replace(`/${locales}/about`);
    } else if (history === "about") {
      router.replace(`/${locales}/tentang-kami`);
    } else {
      router.replace(`/${locales}`);
    }
  };

  return (
    <div className="flex gap-3 place-items-center">
      <button
        value="en"
        onClick={handleClick}
        className={lng === "en" ? "text-primary font-bold" : null}>
        EN
      </button>
      |
      <button
        value="id"
        onClick={handleClick}
        className={lng === "id" ? "text-primary font-bold " : null}>
        ID
      </button>
    </div>
  );
}
