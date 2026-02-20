import React from "react";
import ContentHeader from "./ContentHeader";

const Content = ({ children }: React.PropsWithChildren) => {
  return (
    <main>
      <ContentHeader />
      <section>{children}</section>
    </main>
  );
};

export default Content;
