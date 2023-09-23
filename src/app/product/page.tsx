import { redirect } from "next/navigation";
import React from "react";

const RedirectToHome = () => {
  redirect("/");
};

export default RedirectToHome;
