import Footer from "@/app/Footer";
import NavBar from "@/app/NavBar";
import CustomTheme from "@/config/Themes/Theme";
import { ThemeProvider } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
