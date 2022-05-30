import React from "react";

import styles from "./styles";

const ProfileDetails = ({ profileHeader, profileText }) => {
  const classes = styles();
  return (
    <div className={classes.profileDetailsContainer}>
      <div className={classes.profilePic} />
      <h3 className={classes.profileHeader}>{profileHeader}</h3>
      <p className={classes.profileText}>{profileText}</p>
    </div>
  );
};

ProfileDetails.defaultProps = {
  profileHeader: "About Me",
  profileText: "Profile bio",
};

export { ProfileDetails };
export default ProfileDetails;
