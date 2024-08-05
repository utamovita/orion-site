import { Locale } from "@customTypes/pages";
import {
  navigationDataPL,
  navigationDataEN,
  navigationDataDE,
} from "@design-system/layout/header/main-navigation/config";
import { NavigationItem } from "@design-system/layout/header/main-navigation/main-navigation.component";
import { useRouter } from "next/router";

function useMainNavigation() {
  const router = useRouter();
  const { locale } = router;

  const getNavigationData = (): NavigationItem[] => {
    switch (locale as Locale) {
      case "en":
        return navigationDataEN;
      case "de":
        return navigationDataDE;
      case "pl":
        return navigationDataPL;
      default:
        return navigationDataPL;
    }
  };

  const data = getNavigationData();

  return {
    data,
  };
}

export { useMainNavigation };
