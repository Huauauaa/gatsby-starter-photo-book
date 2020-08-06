import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStateContext } from '../components/globalState.js';
import View from '../components/view.js';
import '../components/layout.css';
import 'typeface-open-sans/index.css';
import { exitFullScreen } from '../util/fullScreenHelpers.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
//import theme from "../theme.yaml"

class PaginatedGalleryTemplate extends React.Component {
  componentDidMount() {
    exitFullScreen();
  }

  render() {
    const highlight =
      this.props.location && this.props.location.state
        ? this.props.location.state.highlight
        : -1;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>H&B Photo Book</title>
        </Helmet>
        <GlobalStateContext.Consumer>
          {globalState => (
            <>
              <Header />
              <View
                globalState={globalState}
                pageContext={this.props.pageContext}
                highlight={highlight}
              />

              <Footer />
            </>
          )}
        </GlobalStateContext.Consumer>
      </>
    );
  }
}

export default PaginatedGalleryTemplate;
