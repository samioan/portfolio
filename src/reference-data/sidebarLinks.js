import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const icon = {
  width: 21,
  height: 21,
};

const sidebarLinks = {
  top: [
    {
      title: "Home",
      component: <HomeOutlinedIcon sx={icon} />,
      href: "/",
    },
    {
      title: "About",
      component: <PersonOutlineOutlinedIcon sx={icon} />,
      href: "/about",
    },
    {
      title: "Resume",
      component: <DescriptionOutlinedIcon sx={icon} />,
      href: "/resume",
    },
    {
      title: "Portfolio",
      component: <VisibilityOutlinedIcon sx={icon} />,
      href: "/portfolio",
    },
    {
      title: "Contact",
      component: <EmailOutlinedIcon sx={icon} />,
      href: "/contact",
    },
  ],
  bottom: [
    {
      title: "Github",
      component: <GitHubIcon sx={icon} />,
      href: "https://github.com/samioan",
    },
    {
      title: "Linkedin",
      component: <LinkedInIcon sx={icon} />,
      href: "https://www.linkedin.com/in/ioannis-siampalias/",
    },
  ],
};

export default sidebarLinks;
