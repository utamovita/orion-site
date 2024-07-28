import { AppProps } from "next/app";
import "@design-system/styles/global.scss";
import { gotham } from "@design-system/fonts/gotham";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --fontFamilyPrimary: ${gotham.style.fontFamily};
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
