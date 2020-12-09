import React from 'react';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'


function CodeBlock(props: {language: string, value: string}) {
  return <SyntaxHighlighter style={duotoneLight} language={props.language} children={props.value} />
}



export default CodeBlock;