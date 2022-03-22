import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./screens/Home";
import { Fontisto } from "@expo/vector-icons";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
