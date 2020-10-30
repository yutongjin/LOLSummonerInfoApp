import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { useState, useEffect } from "react";
import axios from "axios";
import GetChampionMastery from "../Component/GetChampionMastery";
import GetChampionGameNumberAndWinRate from "../Component/GetChampionGameNumberAndWinRate";
import ChampionSelector from "../Component/ChampionSelector";
import styles from "../css/input.module.css";
import Champion from "../Component/Champion";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  nameInput: {
    marginLeft: theme.spacing(3),
  },
  fixedHeight: {
    height: 240,
  },
}));
const api_key = "RGAPI-1f92482a-aec2-46d3-a7d6-680603097598";

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("RNG mIxgzzz");
  const [scores, setScores] = useState(0);
  const [championMasteries, setChampionMasteries] = useState([]);
  const [counter, setCounter] = useState(0);

  const [selectedChampion, setSelectChampion] = useState(-1);
  const [championInfoList, setChampionInfoList] = useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setChampionMasteries(championInfoList);

    // action on update of movies
  }, [championInfoList]);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  let handleInputChange = (e) => {
    setInputValue(e.target.value);
    setName(e.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>{" "}
          A
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={styles.center}>
          <input className={classes.nameInput} onChange={handleInputChange} />
          <ChampionSelector
            onChange={(event) => {
              console.log(event.target.value);
              setSelectChampion(event.target.value);
            }}
          />

          <button
            onClick={() =>
              GetChampionMastery({ name: name }, api_key).then((resp) => {
                let scoreSum = 0;
                /*              resp.data.slice(0,18).map((champion) => {
                                  let championInfoArray = [];
                                  GetChampionGameNumberAndWinRate(
                                    {
                                      name: name,
                                      championId: champion.championId,
                                    },
                                    api_key
                                  ).then((resp) => {
                                    //use championList => to solve replace state problem
                                    setChampionInfoList((championInfoList) => [
                                      ...championInfoList,
                                      {
                                        summonerId: name,
                                        championId: champion.championId,
                                        championLevel: champion.championLevel,
                                        championPoints: champion.championPoints,
                                        totalGameNumbers: resp.data.totalGames,
                                      },
                                    ]);
                                    console.log(" after info" + championInfoList);
                                  });*/
                resp.data.map((champion) => {
                  setChampionInfoList((championInfoList) => [
                    ...championInfoList,
                    {
                      summonerId: name,
                      championId: champion.championId,
                      championLevel: champion.championLevel,
                      championPoints: champion.championPoints,
                    },
                  ]);
                });
                resp.data.forEach((champion) => {
                  scoreSum += champion.championPoints;
                });
                setScores(scoreSum);
              })
            }
          >
            查所有英雄情况
          </button>
          <button
            onClick={() =>
              GetChampionMastery({ name: name }, api_key).then((resp1) => {
                let scoreSum = 0;
                console.log(JSON.stringify(resp1.data));
                GetChampionGameNumberAndWinRate(
                  {
                    name: name,
                    championId: selectedChampion,
                  },
                  api_key
                ).then((resp) => {
                  resp1.data.map((champion, _, obj) => {
                    if (champion.championId == selectedChampion) {
                      console.log("same!!");
                      console.log(JSON.stringify(champion));
                      console.log(
                        JSON.stringify({
                          summonerId: name,
                          championId: champion.championId,
                          championLevel: champion.championLevel,
                          championPoints: champion.championPoints,
                          totalGameNumbers: resp.data.totalGames,
                        })
                      );
                      setChampionInfoList((championInfoList) => [
                        {
                          summonerId: name,
                          championId: champion.championId,
                          championLevel: champion.championLevel,
                          championPoints: champion.championPoints,
                          totalGameNumbers: resp.data.totalGames,
                        },
                      ]);
                    }
                  });
                  console.log(" after info" + championInfoList);
                });
              })
            }
          >
            查特定英雄
          </button>
        </div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits scores={scores} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders masteries={championMasteries} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
