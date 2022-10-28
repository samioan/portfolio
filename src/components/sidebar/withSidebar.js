import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import styles from "./styles";

const withSidebar = (Component) => (props) => {
  const topSidebarButtons = [
    {
      title: "Home",
      component: <HomeOutlinedIcon sx={styles.icon} />,
      href: "/",
    },
    {
      title: "About",
      component: <PersonOutlineOutlinedIcon sx={styles.icon} />,
      href: "/about",
    },
    {
      title: "Resume",
      component: <DescriptionOutlinedIcon sx={styles.icon} />,
      href: "/resume",
    },
    {
      title: "Portfolio",
      component: <VisibilityOutlinedIcon sx={styles.icon} />,
      href: "/portfolio",
    },
    {
      title: "Blog",
      component: <AutoStoriesOutlinedIcon sx={styles.icon} />,
      href: "/blog",
    },
    {
      title: "Contact",
      component: <EmailOutlinedIcon sx={styles.icon} />,
      href: "/contact",
    },
  ];

  const bottomSidebarButtons = [
    {
      title: "Github",
      component: <GitHubIcon sx={styles.icon} />,
      href: "https://github.com/samioan",
    },
    {
      title: "Linkedin",
      component: <LinkedInIcon sx={styles.icon} />,
      href: "https://www.linkedin.com/in/ioannis-siampalias/",
    },
  ];

  const newProps = {
    ...props,
    topSidebarButtons,
    bottomSidebarButtons,
  };

  return <Component {...newProps} />;
};

export { withSidebar };
export default withSidebar;
