import React from "react";

import {
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageOverlay,
} from "./error-bondary.styled";
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasErrored)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/Q2BAOd2.png" />
          <ErrorImageText>This Page is Not on the Map</ErrorImageText>
        </ErrorImageOverlay>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
