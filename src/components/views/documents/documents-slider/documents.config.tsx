import { Locale } from "@customTypes/pages";

type DocumentItem = {
  title: {
    [key in Locale]: string;
  };
  subtitle: {
    [key in Locale]: string;
  };
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  link: string;
};

const imageBasePath = "/assets/images/documents/";

const documentsConfig: DocumentItem[] = [
  {
    title: {
      en: "Euro Bank Details",
      de: "Euro Bank Details",
      pl: "Euro Bank Details",
    },
    subtitle: {
      en: "Details regarding Euro bank payment methods",
      de: "Details zu Euro-Bank-Zahlungsmethoden",
      pl: "Szczegóły dotyczące metod płatności Euro banku",
    },
    image: {
      url: `${imageBasePath}euro-bank-details.png`,
      alt: "Euro bank details",
      width: 648,
      height: 840,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2023/08/Euro-bank-details.pdf",
  },
  {
    title: {
      en: "License",
      de: "Lizenz",
      pl: "Licencja",
    },
    subtitle: {
      en: "Official license document for road transport services",
      de: "Offizielles Lizenzdokument für Straßentransportdienstleistungen",
      pl: "Na wykonywanie transportu drogowego w zakresie pośrednictwa przy przewozie rzeczy",
    },
    image: {
      url: `${imageBasePath}licencja.jpg`,
      alt: "Licence",
      width: 1650,
      height: 2306,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2023/08/License.pdf",
  },
  {
    title: {
      en: "RODO",
      de: "RODO",
      pl: "RODO",
    },
    subtitle: {
      en: "RODO",
      de: "RODO",
      pl: "Zgoda na przetwarzanie danych osobowych",
    },
    image: {
      url: `${imageBasePath}rodo.png`,
      alt: "RODO",
      width: 625,
      height: 859,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2023/10/Orion-Express-Rekrutacja.pdf",
  },
  {
    title: {
      en: "OCPDU UE",
      de: "OCPDU UE",
      pl: "OCPDU UE",
    },
    subtitle: {
      en: "OCPDU UE",
      de: "OCPDU UE",
      pl: "Ubezpieczenie kabotważowe OCPDU UE",
    },
    image: {
      url: `${imageBasePath}OCPDU_2.png`,
      alt: "Kabotaż UE",
      width: 451,
      height: 641,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2024/05/Orion-kabotaz-ue-COR520501.pdf",
  },
  {
    title: {
      en: "OCPDU DE",
      de: "OCPDU DE",
      pl: "OCPDU DE",
    },
    subtitle: {
      en: "OCPDU DE",
      de: "OCPDU DE",
      pl: "Ubezpieczenie kabotważowe OCPDU DE",
    },
    image: {
      url: `${imageBasePath}Kabotaz_DE.png`,
      alt: "Kabotaż DE",
      width: 481,
      height: 687,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2024/05/Orion-kabotaz-de-COR520501.pdf",
  },
  {
    title: {
      en: "KRS",
      de: "KRS",
      pl: "KRS",
    },
    subtitle: {
      en: "KRS",
      de: "KRS",
      pl: "Krajowy Rejestr Sądowy",
    },
    image: {
      url: `${imageBasePath}KRS.png`,
      alt: "KRS",
      width: 512,
      height: 731,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2024/05/Odpis_Pelny_KRS_0000899782.pdf",
  },
  {
    title: {
      en: "Ubezpieczenie",
      de: "Ubezpieczenie",
      pl: "Ubezpieczenie",
    },
    subtitle: {
      en: "Ubezpieczenie",
      de: "Ubezpieczenie",
      pl: "Certyfikat ubezpieczeniowy",
    },
    image: {
      url: `${imageBasePath}ubezpieczenie.png`,
      alt: "Ubezpieczenie OCPDU",
      width: 565,
      height: 802,
    },
    link: "https://orionexpress.pl/wp-content/uploads/2024/05/2024_05_1716194701604_ORION_-_certyfikat_ocpdis-COR520501.pdf",
  },
];

export { documentsConfig };
