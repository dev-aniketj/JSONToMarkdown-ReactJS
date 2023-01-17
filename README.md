# JSON to Markdown

**It will automatically converts your JSON data into markdown code, but your have to make json file in the proper format**.

**[DOCUMENTATION](DOCUMENTATION.md)**

## How it is working ??

If you want to convert your JSON file then add the file into the `src/data/your_file.json`
<br/>
Go to **`App.js`** and add new item in it _OR_ just change the name of the file with is passed inside the **`createMarkdownFile()`** function.
<br/>

```
<div className="item" onClick={() => createMarkdownFile("your_file_name")}>
  <h3>Title</h3>
  <h5>File Name</h5>
</div>
```

## Installation

```sh
# Using npm
npm install --save json2md
# Using yarn
yarn add json2md
```

## Run

```sh
# Using npm
npm start
# Using yarn
yarn start
```

## Examples

### File 1

- [JSON](./src/data/file1.json)
- [Markdown](./src/markdown/file1.md)

<br/>
<br/>
<br/>
<br/>
<br/>

## NPM Packages

### I am using React Js and this NPM Package [json2md](https://www.npmjs.com/package/json2md)
