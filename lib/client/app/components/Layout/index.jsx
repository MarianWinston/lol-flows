import React from "react";
import PropTypes from "prop-types";
import styles from "./layout.module.scss";

const Layout = ({ children, full }) => (
  <main className={full ? styles.FullWidth : styles.Layout}>{children}</main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
