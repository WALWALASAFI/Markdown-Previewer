import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

// Configure marked to interpret newlines as <br>
marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-5">Markdown Previewer</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <textarea
          id="editor"
          className="w-full md:w-1/2 h-64 p-2 border border-gray-300 rounded-md"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          className="w-full md:w-1/2 h-64 p-2 border border-gray-300 rounded-md overflow-auto"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
