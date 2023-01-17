import "./App.css";
import json2md from "json2md";

const App = () => {
  // set the file name by the user and generate the markdown file of the JSON File.
  const createMarkdownFile = (fileName) => {
    const data = require(`./data/${fileName}.json`);
    console.log(data);
    const dataFile = json2md(data);

    // create the Element and generate the Markdown file using Element.
    let hiddenElement = document.createElement("a");
    hiddenElement.download = `${fileName}.md`;
    let blob = new Blob([dataFile], {
      type: "text/plain",
    });
    hiddenElement.href = window.URL.createObjectURL(blob);
    hiddenElement.click();
  };

  return (
    <div className="container">
      <p className="items">
        <div className="item" onClick={() => createMarkdownFile("file1")}>
          <h3>Heading</h3>
          <h5>File 1</h5>
        </div>
        <div className="item" onClick={() => createMarkdownFile("file2")}>
          <h3>Blockquote</h3>
          <h5>File 2</h5>
        </div>
      </p>
    </div>
  );
};

export default App;
