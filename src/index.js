// import App from "./App";

// const reactComponent = <App />;

function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello iweather";
  return element;
}

document.body.appendChild(component());
