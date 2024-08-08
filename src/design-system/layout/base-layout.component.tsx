import React from "react";
import { Footer } from "@design-system/layout/footer/footer.component";
import { Header } from "@design-system/layout/header/header.component";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}

export { BaseLayout };
