import { AppProps } from "next/app";
import "@design-system/styles/global.scss";
import { gotham } from "@design-system/fonts/gotham";

export default function App({ Component, pageProps }: AppProps) {
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
