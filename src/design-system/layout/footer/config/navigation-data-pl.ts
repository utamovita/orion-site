import { FooterItem } from "@design-system/layout/footer/footer-navigation/footer-navigation.component";

export type FooterConfig = {
  mainNavigation: FooterItem[];
  bottomNavigation: FooterItem[];
};

const footerConfigPL: FooterConfig = {
  mainNavigation: [
    {
      title: "Twitter",
      link: "https://x.com/?lang=pl",
    },
    {
      title: "Telegram",
      link: "https://web.telegram.org",
    },
    {
      title: "Discord",
      link: "https://discord.com/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com",
    },
  ],
  bottomNavigation: [
    {
      title: "Polityka Prywatności",
      link: "/",
    },
    {
      title: "Pliki Cookies",
      link: "/",
    },
  ],
};

export { footerConfigPL };
