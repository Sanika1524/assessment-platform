// src/components/Common/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ userRole }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        {userRole === "admin" && (
          <>
            <li>
              <NavLink
                to="/admin"
                style={({ isActive }) =>
                  isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                }
              >
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/create-test"
                style={({ isActive }) =>
                  isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                }
              >
                Create Test
              </NavLink>
            </li>
          </>
        )}

        {userRole === "candidate" && (
          <>
            <li>
              <NavLink
                to="/candidate/tests"
                style={({ isActive }) =>
                  isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                }
              >
                Test List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/candidate/take-test"
                style={({ isActive }) =>
                  isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                }
              >
                Take Test
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/candidate/summary"
                style={({ isActive }) =>
                  isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                }
              >
                Summary
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#6F42C1", // Professional Purple
    padding: "1rem 2rem",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#EDE7F6", // Lavender
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    transition: "color 0.3s",
  },
  activeLink: {
    textDecoration: "underline",
    color: "#C3B1E1", // Accent Light Purple
  },
};

export default Navbar;
