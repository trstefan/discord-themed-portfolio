import React from "react";
import { TopBar } from "./TopBar";

export const Container = ({ children }) => {
  return (
    <div className="bg-gray:200 dark:bg-gray-700 w-full">
      <TopBar></TopBar>
      <main className="p-5 bg">{children}</main>
    </div>
  );
};
