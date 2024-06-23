import { Footer } from "@/components/layout/footer/footer.component";
import { Header } from "@/components/layout/header/header.component";
import { Container } from "@/components/layout/utilities";
import "./styles/global.scss";

type BaseLayoutProps = {
  children: React.ReactNode;
  footer: any;
  mainMenu: any;
};

function BaseLayout({ children, footer, mainMenu }: BaseLayoutProps) {
  return (
    <Container fullWidth={true}>
      <Header menuData={mainMenu} />

      {children}

      <Footer data {...footer} />
    </Container>
  );
}

export { BaseLayout };
