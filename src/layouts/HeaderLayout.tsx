import { ReactNode } from "react";
import Head from "next/head";

interface HeaderLayoutProps {
  children: ReactNode;
  title?: string;
}

// pass title value to set the head title， e.g. In 404 page, write <HeaderLayout title="404"></HeaderLayout>
const HeaderLayout = ({ children, title }: HeaderLayoutProps) => {
  const headName = `${title} | eth-tldr`;
  return (
    <>
      {title && (
        <Head>
          <title>{headName}</title>
          <meta name="description" content="eth-tldr" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      {children}
    </>
  );
};

export default HeaderLayout;
