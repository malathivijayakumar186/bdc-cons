import Footer from '@/app/Footer';
import NavBar from '@/app/NavBar'



const Layout = ({ children }) => {

  return (
    
    <div >
      <NavBar/>
      <div >{children}</div>
      <Footer/>
    </div>
  )
};

export default Layout;
