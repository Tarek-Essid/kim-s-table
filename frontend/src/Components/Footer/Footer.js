import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./Footer.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Kim's Table
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <Container maxWidth="sm" className="my-footer">
        <Typography variant="body1">My footer can be found here.</Typography>
        <Copyright />
      </Container>
    </div>
  );
};

export default Footer;
