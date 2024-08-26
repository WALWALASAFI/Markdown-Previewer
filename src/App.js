import { useState } from 'react'; // Only import what you need
import { marked } from 'marked';
import './App.css';

// Configure marked to interpret newlines as <br>
marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(`# Walwala Safi

## Markdown Previewer

Welcome to my Markdown Previewer! The Markdown Previewer is a web application built using 
React that allows users to write and preview Markdown in real time. It’s a simple, 
yet powerful tool that converts plain text with Markdown syntax into HTML, enabling users to see formatted text as they type.

[Click here to visit my GitHub Repository](https://github.com/WALWALASAFI/Markdown-Previewer)

Inline code: \`inline code\`

\`\`\`javascript
// Code block
function exampleFunction() {
  console.log("This is a code block");
}
\`\`\`

- Random Quote Machine
- MarkDown Previewer
- Drum Machine
- JavaScript Calculator 
- 25+5 Clock

> This is a blockquote. It is used to highlight quotes.

> Blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Markdown**
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 to-white-700 text-black flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Markdown Previewer</h1>
      <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row gap-8">
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
