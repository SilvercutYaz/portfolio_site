import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png) center / cover"
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>dummy text goes here</CardText>
            <CardActions className="card-actions" border>
              <Button colored>github</Button>
              <Button colored>github</Button>
              <Button colored>github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png) center / cover"
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>dummy text goes here</CardText>
            <CardActions className="card-actions" border>
              <Button colored>github</Button>
              <Button colored>github</Button>
              <Button colored>github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png) center / cover"
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>dummy text goes here</CardText>
            <CardActions className="card-actions" border>
              <Button colored>github</Button>
              <Button colored>github</Button>
              <Button colored>github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>this is html/jss</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>this is react</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab="this.state.activeTab"
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>React</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
