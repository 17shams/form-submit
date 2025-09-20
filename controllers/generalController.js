const express = require("express");
const router = express.Router();

// GET Routes
router.get("/", (req, res) => {
  console.log("HOME AT LAST!!!");
  res.render("general/home.ejs", {
    currentPage: "home",
    title: "Portfolio",
    showFooter: true,
    navBar: []
  });
});

router.post("/projects", (req, res) => {
    res.redirect("/projects");
});

router.get("/about", (req, res) => {
  res.render("general/about.ejs", {
    currentPage: "about",
    title: "Portfolio",
    showFooter: true,
    navBar: []
  });
});

router.get("/projects", (req, res) => {
  res.render("general/projects.ejs", {
    title: "Portfolio",
    currentPage: "projects",
    navBar: [],
    showFooter: true
  });
});

router.get("/contact", (req, res) => {
  res.render("general/contact.ejs", {
    title: "Portfolio",
    currentPage: "contact",
    navBar: [],
    showFooter: false
  });
});


module.exports = router;
