import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './getPageContext';
import SimpleAppBar from '../components/simpleAppBar';
import SimpleAppBarTiny from '../components/simpleAppBarTiny';
import SimpleAppBarTinyBack from '../components/simpleAppBarTinyBack';
import SimpleAppFooter from '../components/simpleAppFooter';
import { ParallaxProvider } from 'react-scroll-parallax';
import { LinearProgress } from '@material-ui/core/LinearProgress';
import Transition from '../components/transition';
import Router from 'next/router';

const loadDelay = 2

function withRoot(Component) {
  class WithRoot extends React.Component {



    constructor(props, context) {
      super(props, context);
      this.state = {
        loadTiny:false,
        loadTinyBack:false,
        loadAppBar:true
      }
      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {

        if(Router.router.route == "/blog"){
        this.setState({
          loadTiny:true,
          loadAppBar:false,
          loadTinyBack:false
        })
      }

      if(Router.router.route == "/search"){
      this.setState({
        loadTiny:true,
        loadAppBar:false,
        loadTinyBack:false
      })
    }

      if(Router.router.route == "/post"){
      this.setState({
        loadTiny:false,
        loadAppBar:false,
        loadTinyBack:true
      })
    }

        if(!Router.router.route == "/post" || !Router.router.route == "/blog" || !Router.router.route == "/search" ){
        this.setState({
          loadTiny:false,
          loadTinyBack:false,
          loadAppBar:true
        })
      }

      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <ParallaxProvider>
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >


          {this.state.loadTiny ?
            (
              <SimpleAppBarTiny />
            )
            :<span></span>
          }

          {this.state.loadTinyBack ?
            (
              <SimpleAppBarTinyBack />
            )
            :<span></span>
          }

          {this.state.loadAppBar ?
            (
              <SimpleAppBar />
            )
            :<span></span>
          }

          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...this.props} />
          <SimpleAppFooter />
        </MuiThemeProvider>
        </ParallaxProvider>
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
  };

  WithRoot.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

export default withRoot;
