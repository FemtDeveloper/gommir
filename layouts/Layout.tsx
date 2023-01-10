import Head from "next/head";
import React, { FC } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SideMenu from "../Components/SideMenu/SideMenu";

interface Props {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
}

const Layout: FC<Props> = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{`Gommir - ${title}`}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <SideMenu />
      <main
        style={{
          paddingTop: 70,
          margin: 0,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
