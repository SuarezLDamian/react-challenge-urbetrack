import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import router from "@config/router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@config/queryClient";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme accentColor="iris" grayColor="mauve" radius="medium">
        <RouterProvider router={router} />
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>,
);
