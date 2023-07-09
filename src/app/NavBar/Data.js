import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import EngineeringIcon from "@mui/icons-material/Engineering";
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
export const menuItems = [
  { title: "Home", link: "/", icon: <HomeIcon />, id: "1" },
  {
    title: "About Us",
    link: "/aboutus",
    icon: <BiotechIcon />,
    id: "2",
    end: <ArrowDropDownIcon />,
    // sub: [
    //   // { title: "Services", link: "/service/projects" },
    //   { title: "fdfd" },
    //   {
    //     title: "Kitchen Exhaust System",
    //   },
    // ],
  },
  {
    title: "Service",
    // link: "/service/projects",
    icon: <EngineeringIcon />,
    end: <ArrowDropDownIcon />,
    id: "3",
    sub: [
      {
        title: "Construction",
        link: "/service/construction",
      },
      // { title: "Services", link: "/service/projects" },
      {
        title: "AirConditioning & Mechanical Vendilation System",
        link: "/service/acmv",
      },
      {
        title: "Kitchen Exhaust System",
        link: "/service/kitchen-exhaust-system",
      },
      {
        title: "Glass & Aluminum Work",
        link: "/service/glass-aluminum-work",
      },
      {
        title: "Electrical Services",
        link: "/service/electrical-services",
      },
      {
        title: "Scaffolding work",
        link: "/service/scaffolding-work",
      },
    ],
  },
  {
    title: "Contact Us",
    link: "/contact",
    icon: <ConnectWithoutContactIcon />,
    id: "4",
  },
];
export const sub = [
  // { title: "Services", link: "/service/projects" },
  {
    title: "Construction",
    link: "/construction",
  },
  {
    title: "AirConditioning & Mechanical Ventilation System",
    link: "/airconditioning-mechanical-ventilation-system",
  },
  {
    title: "Kitchen Exhaust System",
    link: "/kitchen-exhaust-system",
  },
  {
    title: "Glass & Aluminum Work",
    link: "/glass-aluminum-work",
  },
  {
    title: "Scaffolding work",
    link: "/scaffolding-work",
  },
  {
    title: "Electrical Services",
    link: "/electrical-services",
  },
];
export const sub2 = [
  // { title: "Services", link: "/service/projects" },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
];
