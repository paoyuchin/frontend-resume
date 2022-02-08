import React from "react";
import "./App.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LionIcon from "./LionIcon";
import GogoroIcon from "./GogoroIcon";
import TransIcon from "./TransIcon";
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
  transIot: {
    color: "#3d4451;",
    padding: "0px 0px 0px 0px",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "-25px !important",
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
    textAlign: "left", 
  }
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
          iconStyle={{ background: "#E6A85F" }}
          icon={
            <MdWork color="white" />
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <TransIcon />
            </h3>
            <h4
                className={`vertical-timeline-element-subtitle ${classes.name}`}
              >
              IOV Project Manager
            </h4>
            <p>2021/7~2022/2</p>
            <p className={classes.title}>
              <ul className={classes.ul}>
                  <li>
                  • Imported the GIT version control tool.
                  </li><br/>
                  <li>
                  • People used social media such as WhatsApp or Line to discuss features  and to track issues.
                    Imported project management tool {`(‘Click up’)`}.
                  </li><br/>
                  <li >
                  • Hosted a meeting with members to discuss the problem. Reached an agreement to implement a product development process. AGILE.
                    The project went smoothly, and members now willingly communicate with
                    each other.
                  </li><br/>
                  <li>
                  • Advocated MVP concept and built an MVP. The development team can focus on the most valuable feature now. KOLs  exposed valuable features to the market two months  before
                    the product was launched into  the market.
                  </li>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          // date="2018/6～2019/8"
          iconStyle={{ background: "#E6A85F" }}
          icon={
            <MdWork color="white" />
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
              <li>
              • Drove the team as the Front End Development Engineer. The battery swap management platform has already released and has been in use for two years.
              The platform can monitor over 2300 battery swap stations in the whole of Taiwan. The system monitors the battery status of the scooters. Maintenance can receive an immediate, urgent alert
              when the  battery swap station has a problem. 
              </li><br/>
              <li>
              • Developed a new Battery Swap platform for mobile devices with the team. Improved the user interface and user experience.
              Enhanced FAEs user experience and the UI. Improved FAE’s working efficiency.
              </li><br/>
              <li>• Define and apply interfaces with backend engineers</li>
              <li>• Inter-department collaboration</li>
              <li>• React module development</li>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          // date="2018/6～2019/8"
          iconStyle={{ background: "#E6A85F" }}
          icon={
            <MdWork color="white" />
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
              <ul className={classes.ul}>
                <li>
                  •The company website’s UI was too old, and it did not support RWD. I Built cross-browser compatibility and improved search engine optimization plus
                  Responsive Web Design. Managers were easily able to monitor the site’s ranking. The number of visitors increased by 70%.
                </li><br/>
                <li>• React module development</li>
                <li>• jQuery module development</li>
                <li>• Define and apply interfaces with backend engineers</li>
                <li>• Inter-department collaboration</li>
                <li>• Cross-browser compatibility</li>
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
          iconStyle={{ background: "#E6A85F" }}
          icon={
            <MdWork color="white" />
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <HotelIcon />
            </h3>
            <h4
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              Marketing PR planner
            </h4>
            <p>2013/11~2015/10</p>
            <h4 className="vertical-timeline-element-subtitle">
              <p className={classes.title}>
                <ul className={classes.ul}>
                  <li>
                  • The hotel’s marketing strategy was out of date. Activities were not attractive. Assisted traditional hotels with their digital transformation. Responsible for setting a daily Facebook budget.
                  Increased brand awareness of the hotel.</li><br/>
                  <li>• Obtained useful quantitative data for analysis at the same time. The number of visitors to the official website of the hotel increased by 1,000-1100 people per month. The hotel restaurant’s performance also  improved. Quantitative data was obtained through the
                  Facebook fan page every month. Through analysis we improved the effectiveness of our marketing.</li><br/>
                  <li>• Google Adwords advertising</li>
                  <li>• Customer relationship management</li>
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
