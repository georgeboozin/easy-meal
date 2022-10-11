import type { NextPage } from "next";
import { Header } from "components/HeaderWithLocale";
import { MultiLink } from "components/MultiLink";

const MultiLinkPage: NextPage = () => {
  return (
    <>
      <Header />
      <MultiLink />
    </>
  );
};

export default MultiLinkPage;
