import React from "react";
import PropTypes from "prop-types";

class InfiniteScroll extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
    // getting a reference to a dom node that we will use to trigger loadMore function
    this.scrollContainer = React.createRef();
  }

  handleScroll = () => {
    // if we loading or we dont have more results we break from the function
    if (this.props.loading || !this.props.hasMore) return;
    // else we calculate the page offset
    const pageOffset = window.pageYOffset + window.innerHeight;
    // getting the actual dom node
    const scrollContainerElm = this.scrollContainer.current;
    // getting the height of the container "div"
    const scrollContainerElmHeight =
      scrollContainerElm.clientHeight + scrollContainerElm.offsetTop;
    // check if we close to reach the bottom
    // we dont want to wait for the user to reach the bottom
    // give it some space so the feed feels like it has infinite results
    const isReachedPositionToFetch =
      scrollContainerElmHeight - pageOffset <= 200;
    if (isReachedPositionToFetch) {
      this.props.setLoading();
      this.props.loadMore();
    }
  };

  // when the component mounts we call handle scroll manually so we get some initial data
  componentDidMount = () => {
    this.handleScroll();
    // set loading to true
    this.props.loadMore();
    // adding a scroll event listener to window
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    // removing the event when component will mount
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { children } = this.props;
    return <div ref={this.scrollContainer}>{children}</div>;
  }
}

export default InfiniteScroll;
