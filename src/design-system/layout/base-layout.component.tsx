import React from "react";
import { Footer } from "@design-system/layout/footer/footer.component";
import { Header } from "@design-system/layout/header/header.component";
import { OverlayProvider } from "react-aria";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <OverlayProvider>{children}</OverlayProvider>
      <Footer />
    </>
  );
}

export { BaseLayout };
