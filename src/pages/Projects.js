import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../Images/goAds_homepage.png";
import project2 from "../Images/flight_img.png";
import project3 from "../Images/weather_img.png";
import project4 from "../Images/code_quiz.png";
import project5 from "../Images/day_planner_pic.png";
import project6 from "../Images/todo_picture.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    // height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "goAds.com - A classifieds application",
    description: `goAds.com is an online classified advertising services
    platform built using HTML, CSS, Bootstrap, JS, Jquery,
    Handlebars,Express server, node.js, Sequelize, Mysql, MVC
    framework & CRUD Operations.`,
    image: project1,
    github: "https://github.com/sushmakaluva/goAds.com",
    liveDemo: "https://fathomless-hollows-88186.herokuapp.com/"
  },
  {
    name: "flYjet - Flight booking application",
    description: `A user can
    search for flights according to their source/destination
    both one-way and round-trip. flYjet will find the best
    possible match along with Flight prices, distance between
    source/destination, and travel durations.`,
    image: project2,
    github: "https://github.com/sushmakaluva/flYjet-Flight-Search",
    liveDemo: " https://sushmakaluva.github.io/flYjet-Flight-Search/"
  },
  {
    name: "Weather Dashboard",
    description: `Weather dashboard provides real-time and location-specific weather forecasts to help people make better decisions. It allows the user to search for a city and display current weather conditions & a 5-day forecast. Detects the current location upon intial page loading.`,
    image: project3,
    github: "https://github.com/sushmakaluva/Weather-dashboard",
    liveDemo: "https://sushmakaluva.github.io/Weather-dashboard/"
  },
  {
    name: "Code Quiz",
    description: `LQuiz is a way to test and improve your knowledge & skills. JavaScript quiz is a learning application which tests your Javascript acumen and displays your final score at the end. This quiz provides Multiple Choice Questions related to Javascript Framework.`,
    image: project4,
    github: "https://github.com/sushmakaluva/Code-Quiz",
    liveDemo: "https://sushmakaluva.github.io/Code-Quiz/"
  },
  {
    name: "Day Planner",
    description: `A calendar application to boost your productivity with an easy-to-use, multitasking Day-planner app that gives your life the organization you’ve been searching for! Designed for those who're looking for a full-featured app to manage daily life better.`,
    image: project5,
    github:"https://github.com/sushmakaluva/Day-Planner",
      liveDemo:"https://sushmakaluva.github.io/Day-Planner/"
  },
  {
    name: "To-do-list",
    description: `When there are a million things to do, and we don't know how we're going to get it all done.This To do list of all your tasks will allow you to sit down and make a plan. Users can see all notes that currently exist, and can delete notes once they are no longer needed.`,
    image: project6,
    github:"https://github.com/sushmakaluva/To-do-list",
      liveDemo:"https://sushmakaluva.github.io/To-do-list/"
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: "space-between" }}>
                <Button size="small" color="primary" href={project.github}>
                  Github
                </Button>
                <Button size="small" color="primary" href={project.liveDemo}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;