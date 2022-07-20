import * as React from "react";
import "./App.css";
import { TVChartContainer } from "./components/TVChartContainer/index";
import { version } from "./charting_library";
import Layout from "./layout/layout";

class App extends React.Component {
  render() {
    return (
      <div className={"App"}>
        <Layout>
          <TVChartContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
