import Head from "next/head";
import React, { FC } from "react";
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
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SideMenu />
      <main
        style={{
          paddingTop: 200,
          margin: 0,
          height: "100vh",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
