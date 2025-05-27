// Class Component (để so sánh)


import React from "react";

class ClassComponent extends React.Component {
  componentDidMount() {
    console.log("[ClassComponent] Mounted");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      console.log("[ClassComponent] Props changed: count", {
        from: prevProps.count,
        to: this.props.count,
      });
    }
    console.log("[ClassComponent] Rendered");
  }

  render() {
    const now = performance.now();
    while (performance.now() - now < 500) { }

    return <div>Class Component render with count: {this.props.count}</div>;
  }
}

export default ClassComponent;
