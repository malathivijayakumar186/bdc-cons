import Footer from "@/app/Footer";
import NavBar from "@/app/NavBar";
import CustomTheme from "@/config/Themes/Theme";
import { ThemeProvider } from "@mui/material";
import "./globals.css"
const Layout = ({ children }) => {
  return (
    <div style={{width:"100%",overflowX:"hidden"}}>
      <ThemeProvider theme={CustomTheme}>
        <NavBar />
        <div style={{width:"100%",marginTop:"92px",overflowX:"hidden"}}>{children}</div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
