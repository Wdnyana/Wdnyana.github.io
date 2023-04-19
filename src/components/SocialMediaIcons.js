const SocialMediaIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "30px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        href="https://github.com/Wdnyana"
        className="icon icon--github"
        style={styles.icon}
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Purwa Wiadnyana' GitHub Profile"
        ></i>
      </a>
      <a
        href="https://www.linkedin.com/in/purwa-wiadnyana/"
        className="icon icon--linkedin"
        style={styles.icon}
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Purwa Wiadnyana' LinkedIn Profile"
        ></i>
      </a>
      <a
        href="https://www.instagram.com/purwawiadnyana/"
        className="icon icon--instagram"
        style={styles.icon}
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Purwa Wiadnyana' Instagram Profile"
        ></i>
      </a>
      <a
        href="https://www.facebook.com/purwa.wiadnyanaputra?mibextid=ZbWKwL"
        className="icon icon--facebook"
        style={styles.icon}
        rel="noreferrer"
        target="_blank"
      >
        <i
          className="fa-brands fa-facebook"
          aria-hidden="true"
          title="Purwa Wiadnyana' Facebook Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
