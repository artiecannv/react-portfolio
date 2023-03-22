import mock1 from "../src/assets/projects/mock1.png";
import mock2 from "../src/assets/projects/mock2.png";
import mock3 from "../src/assets/projects/mock3.png";
import mock4 from "../src/assets/projects/mock4.png";
import wip from "../src/assets/projects/wip.png";

export const projects = [
  {
    title: "Mark Me in the Middle",
    subtitle: "JQuery, Mapbox, TurfJS",
    description:
      "Put any two addresses in the united states into the map, the application will find a point in the middle of the two addresses. Meet up locations listed also!",
    image: { mock1 },
    link: "https://artiecannv.github.io/mark-me-in-the-middle/",
  },
  {
    title: "The Table",
    subtitle: "Node, ExpressJS, MySQL",
    description:
      "Table-based board game scheduling application so you can meetup with friends and make new ones to play your favorite games",
    image: { mock2 },
    link: "https://the-table-app.herokuapp.com/",  },
  {
    title: "Coding Quiz",
    subtitle: "HTML, CSS, JavaScript",
    description: "Timed quiz with basic programming language questions.",
    image: { mock3 },
    link: "https://artiecannv.github.io/coding-quiz/",
  },
  {
    title: "Terminal Employee Tracker",
    subtitle: "Inquirer, MySQL, dotenv",
    description:
      "Tracks employees from multiple departments with this application. Use this to keep track of an entire department, or designate a manager for specific employees",
    image: { mock4 },
    link: "https://drive.google.com/file/d/13CbBjpGMECgOoepiMPLEZvinNHJeq87F/view",
  },
  {
    title: "Work in Progress",
    subtitle: "MERN Stack, React",
    description:
      "Project currently in progress, will be updated with completed project link",
    image: { wip },
  },
];
