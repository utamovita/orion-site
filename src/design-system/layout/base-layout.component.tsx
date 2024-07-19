import React from "react";
import { Footer } from "@design-system/layout/footer/footer.component";
import { Header } from "@design-system/layout/header/header.component";
import { Container } from "@design-system/layout/utilities";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Container fullWidth={true}>
      <Header />

      {children}

      <Footer />
    </Container>
  );
}

export { BaseLayout };
