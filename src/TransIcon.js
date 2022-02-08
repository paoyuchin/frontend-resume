import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  style: {
    width: "100%"
  },
  icon: {
    display: "inline-block"
  },
  header_lion_logo:{
    width:'60px',
    height: '60px',    
    paddingRight: '15px'
  },
  image: {
    width: "30%",
  },
}));
const TransIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.style}>
    <img
      className={classes.image}
      src="https://www.trans-iot.com/wp-content/uploads/2021/06/Trans-IOT-LOGO-150.svg"
      />
    </div>
  );
};

export default TransIcon;
