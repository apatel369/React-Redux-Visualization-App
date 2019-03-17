import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../store/actions";
import { connect } from "react-redux";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    margin: "5% 25%"
  }
};

class DroneDataDash extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      temp,
      lat,
      long,
      lastRece
    } = this.props;
    return (
      <Card>
        <CardHeader title="Dashboard Visualization" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary={`Temperature: ${temp}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Latitude: ${lat}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Longitude: ${long}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Last Received: ${lastRece}`} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}
const mapState = (state, ownProps) => {
  const {
    temp,
    lat,
    long,
    lastRece,
  } = state.DroneDataDash;

  return {
    temp,
    lat,
    long,
    lastRece
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE_DATA
    })
});

export default withStyles(styles)(connect(
  mapState,
  mapDispatch
)(DroneDataDash));

