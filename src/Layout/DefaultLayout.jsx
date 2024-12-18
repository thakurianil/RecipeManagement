import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children, pageTitle }) => {

  return (
    
    <div>

      <Container>
        <div className="p-2">{pageTitle}</div>
        <main className="main">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </div>
  );
};
