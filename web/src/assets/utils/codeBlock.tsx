import React from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import { jsx, javascript, sass, scss, less, css, html } from "react-syntax-highlighter/dist/esm/languages/prism";

import {dark, coy, a11yDark, atomDark, cb, darcula,duotoneSea ,duotoneSpace, funky, ghcolors, materialLight,duotoneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'


function CodeBlock(props: {language: string, value: string}) {
  return <SyntaxHighlighter style={duotoneLight} language={props.language} children={props.value} />
}



export default CodeBlock;