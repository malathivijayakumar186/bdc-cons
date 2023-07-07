import NavBar from '@/app/NavBar'



const Layout = ({ children }) => {

  return (
    
    <div lang="en">
      <NavBar/>
      <div >{children}</div>
    </div>
  )
};

export default Layout;
