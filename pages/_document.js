import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';
import getPageContext from '../src/getPageContext';
import Grid from '@material-ui/core/Grid';
import "../styles.scss"
import { GA_TRACKING_ID } from '../gtag'

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600|Montserrat:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" href="/static/academy_logo_300x300_favicon.ico" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
         <script
           async
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
         />
         <script
           dangerouslySetInnerHTML={{
             __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${GA_TRACKING_ID}');
         `}}
         />


          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <meta property='og:image' content='https://cdn1.academyux.com/wp-content/uploads/2019/08/10014904/homepage.jpg'/>
          <meta property='og:url' content='https://academyux.com' />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4613579.js"></script>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  const pageContext = getPageContext();
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
