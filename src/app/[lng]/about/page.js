import { useTranslation } from "../../i18n";

const About = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "home");

  return <h1 className="text-white">{t("header.navbar.about")}</h1>;
};

export default About;
