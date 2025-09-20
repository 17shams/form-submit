const express = require("express");
const router = express.Router();

// GET Routes
router.get("/", (req, res) => {
  console.log("HOME AT LAST!!!");
  res.render("general/home.ejs", {
    currentPage: "home",
    title: "Stacey Salting - Portfolio",
    navBar: [],
  });
});

router.post("/projects", (req, res) => {

    res.redirect("/projects");
});

router.get("/about", (req, res) => {
  res.render("general/about.ejs", {
    currentPage: "about",
    title: "Stacey Salting - Portfolio",
    navBar: [],
  });
});

router.get("/experience", (req, res) => {
  res.render("general/experience.ejs", {
    title: "Stacey Salting - Portfolio",
    currentPage: "experience",
    navBar: [],
  });
});

router.get("/projects", (req, res) => {
  res.render("general/projects.ejs", {
    title: "Stacey Salting - Portfolio",
    currentPage: "projects",
    navBar: [],
  });
});

router.get("/skills", (req, res) => {
  res.render("general/skills.ejs", {
    title: "Stacey Salting - Portfolio",
    currentPage: "skills",
    navBar: [],
  });
});


module.exports = router;
