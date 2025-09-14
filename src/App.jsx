import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import HomeLayout from "./Layouts/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/contact" element={<Homepage />} />
          <Route path="/how-it-works" element={<Homepage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}
