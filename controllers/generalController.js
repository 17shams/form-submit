const express = require("express");
const router = express.Router();

// GET Routes
router.get("/", (req, res) => {
  console.log("HOME AT LAST!!!");
  res.render("general/home.ejs", {
    currentPage: "home",
    title: "Portfolio",
    navBar: [],
  });
});

router.post("/projects", (req, res) => {

    res.redirect("/projects");
});

router.get("/about", (req, res) => {
  res.render("general/about.ejs", {
    currentPage: "about",
    title: "Portfolio",
    navBar: [],
  });
});

router.get("/experience", (req, res) => {
  res.render("general/experience.ejs", {
    title: "Portfolio",
    currentPage: "experience",
    navBar: [],
  });
});

router.get("/projects", (req, res) => {
  res.render("general/projects.ejs", {
    title: "Portfolio",
    currentPage: "projects",
    navBar: [],
  });
});

router.get("/skills", (req, res) => {
  res.render("general/skills.ejs", {
    title: "Portfolio",
    currentPage: "skills",
    navBar: [],
  });
});


module.exports = router;
