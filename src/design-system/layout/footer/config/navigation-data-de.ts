import { FooterItem } from "@design-system/layout/footer/footer-navigation/footer-navigation.component";

const footerConfigDE: {
  mainNavigation: FooterItem[];
  bottomNavigation: FooterItem[];
} = {
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
      title: "Datenschutzrichtlinie",
      link: "/",
    },
    {
      title: "Kekse",
      link: "/",
    },
  ],
};

export { footerConfigDE };
