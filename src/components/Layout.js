import React from "react";
import { Explorer } from "./Explorer";
import { SideBar } from "./SideBar";
import { Container } from "./Container";
export const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <SideBar />
      <Explorer />
      <Container children={children} />
    </div>
  );
};
