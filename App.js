const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, "I'm an h1 tag"),
  React.createElement("div", { className: "child" }, "I'm an h1 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//console.log("Test")
