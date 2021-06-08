import React from "react";
import "./App.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LionIcon from "./LionIcon";
import GogoroIcon from "./GogoroIcon";
import GermanyIcon from "./GermanyIcon";
import NCHUicon from "./NCHUicon";
import HotelIcon from "./HotelIcon";
import III_icon from "./III_icon";
import { makeStyles } from "@material-ui/core/styles";
import { GoMortarBoard } from "react-icons/go";
import { MdWork } from "react-icons/md";


const useStyles = makeStyles(theme => ({
  title: {
    color: "#3d4451 !important",
    marginTop: "0px !important",
  },
  gogoroName: {
    color: "#3d4451;",
    padding: "0px 0px 0px 0px",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "-25px !important",
  },
  name: {
    color: "#3d4451;",
    padding: "16px 0px 0px 0px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  iconstyle: {
    color: "white",
    fontSize: "31px",
    position: "relative",
    top: "13px",
    ["@media (max-width: 960px)"]: {
      top: "7px !important",
      color: "white !important",
      position: "relative !important",
      fontSize: "24px !important"
    }
  },
  skillList: {
    padding: "0px",
    marginTop: "0px",
  },
  ul: {
    padding: "0px !important",
  },
}));

const Timeline = () => {
  const classes = useStyles();
  return (
    <div className="Timeline">
      <h1 className="color_2 color_3 title_space">
        Work experience & Education
      </h1>
      <VerticalTimeline>
      <VerticalTimelineElement
      className="lion_work"
      // date="2018/6～2019/8"
      iconStyle={{ background: "#0073b0" }}
      icon={
          <MdWork color="white"/>
      }
    >
      <div className={classes.title}>
        <h3 className="vertical-timeline-element-title">
          <GogoroIcon />
        </h3>
        <h4
          className={`vertical-timeline-element-subtitle ${classes.gogoroName}`}
        >
          Front end engineer
        </h4>
        <p>2019/9~2021/3</p>
        <p className={classes.title}>
          <ul className={classes.ul}>
            <li>Develop Gostation Management System Platform</li>
            <li>Maintain Gogoro Network Battery Swapping Platform</li>
            <li>Define and apply interfaces with backend engineers</li>
            <li>Inter-department collaboration</li>
            <li>Take part in the project design discussions</li>
            <li>Responsive Web Design</li>
            <li>React module development</li>
          </ul>
        </p>
      </div>
    </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          // date="2018/6～2019/8"
          iconStyle={{ background: "#0073b0" }}
          icon={
              <MdWork color="white"/>
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <LionIcon />
            </h3>
            <h4
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              Front end engineer
            </h4>
            <p>2018/6~2019/9</p>
            <p className={classes.title}>
              <ul>
                <li>The Ticket/Pass Page of Lion Travel Website</li>
                <li>React module development</li>
                <li>jQuery module development</li>
                <li>Define and apply interfaces with backend engineers</li>
                <li>Inter-department collaboration</li>
                <li>Take part in the project design discussions</li>
                <li>Search engine optimization</li>
                <li>Responsive Web Design</li>
                <li>Cross-browser compatibility</li>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--iii"
          iconStyle={{ background: "#e1e0d8" }}
          icon={
            <GoMortarBoard />
          }
        >
          <div className={classes.title}>
            <h3
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              <III_icon />
            </h3>
            <h4 className="vertical-timeline-element-subtitle" />
            <p className={classes.title}>
              <ul className={classes.skillList}>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Responsive web design</li>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--Germany"
          // date="2016/7～201//8"
          iconStyle={{ background: "#e1e0d8" }}
          icon={
            <GoMortarBoard />
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <GermanyIcon />
            </h3>
            <p>
            2016/7~2017/7 Exchange Student
            </p>
            <p className={classes.title}>
              <ul>
                <li>Goethe Zertifikat A2</li>
                <li>Goethe Zertifikat B1</li>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--nchu"
          // date="2012/09～ 2016/06"
          iconStyle={{ background: "#e1e0d8" }}
          icon={
            <GoMortarBoard />
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <NCHUicon />
            </h3>
            <h4>
              Department of Foreign Languages and Literatures
            </h4>
            <p className={classes.title}>
              <ul>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--hote"
          // date="2016/07～2017/08"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <MdWork color="white"/>
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <HotelIcon />
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p className={classes.title}>
                <ul>
                  <li>Marketing communications</li>
                  <li>Facebook advertising</li>
                  <li>Google Adwords advertising</li>
                  <li>Customer relationship management</li>
                </ul>
              </p>
            </h4>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
