const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
});

function App() {
  const [text, setText] = React.useState(initialState);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
        id="editor"
        name="text"
        rows="10"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="textarea"
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );

  function Preview({ markdown }) {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
      ></div>
    );
  }
}

const initialState = `

# a header (H1 size)\n \
## a sub header (H2 size)\n \
alink.com\n\n \
\`inline code\`\n\n \
\`\`\`a code block\`\`\`\n\n \
* a list item\n \
> a blockquote\n\n \
an image ![Eclipse Logo](https://www.eclipse.org/artwork/images/v2/logo-800x188.png)\n\n \
**and bolded text.**

--------------------------------------------------------------------------------

This is a paragraph

**This is a bolded text**

> Block Quotes!

# Heading

## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](https://youtube.com)

This is a inline \`<div></div>\`

This is a block of code

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/440px-React-icon.svg.png)

-------------------------------------------------------------------------------

# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`;

ReactDOM.render(<App />, document.getElementById("root"));
