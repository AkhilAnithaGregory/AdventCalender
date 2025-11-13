import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "../lib/provider/theme/theme-provider";
import "./__root.css";

const RootLayout = () => (
  <>
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
