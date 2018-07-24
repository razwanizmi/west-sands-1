import Layout from "../components/Layout/Layout";

class Index extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <Layout>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.increment}>
          Add
        </button>
      </Layout>
    );
  }
}

export default Index;
