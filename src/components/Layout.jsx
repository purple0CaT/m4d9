import React from "react";
import MyJumbotron from "./MyJumbotron";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

export default function Layout({ children }) {
  return (
    <>
      <MyNav />
      <MyJumbotron />
      {children}
      <MyFooter />
    </>
  );
}
