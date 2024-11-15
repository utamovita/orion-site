import { AppProps } from "next/app";
import "@design-system/styles/global.scss";
import { poppins } from "@design-system/fonts/poppins";
import { bebasNeue } from "@design-system/fonts/bebas-neue";
import { pd } from "@design-system/fonts/pd";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --fontFamilyPrimary: ${poppins.style.fontFamily};
            --fontFamilySecondary: ${pd.style.fontFamily};
            --fontFamilyTertiary: ${bebasNeue.style.fontFamily};
          }
        `}
      </style>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(App);
