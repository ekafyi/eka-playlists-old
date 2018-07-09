import { injectGlobal } from 'react-emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @media only screen and (max-width: 479px) {
    html.has-overlay--xs {
      &,
      body {
        overflow: hidden;
      }
      body:after {
        content: " ";
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: .4;
        background: #000;
      }
    }
  }
  body {
    text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -webkit-text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
  .sticky {
    position: sticky;
  }
  ::selection {
    background: #ffa57d;
  }
  a:focus {
    outline-color: coral;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
 
  html, body, div, span, applet, object, iframe,
  blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    /**
    */
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`