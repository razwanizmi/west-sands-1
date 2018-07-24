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

  decrement = () => {
    if (this.state.count === 0) return;

    this.setState(({ count }) => ({
      count: count - 1
    }));
  };

  render() {
    return (
      <Layout>
        <div className="center-wrapper">
          <h1>{this.state.count}</h1>
          <div>
            <button className="btn btn-danger mr-3" onClick={this.decrement}>
              <i className="fas fa-minus" />
            </button>
            <button className="btn btn-success" onClick={this.increment}>
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
