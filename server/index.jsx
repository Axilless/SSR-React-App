const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { HelmetProvider } = require("react-helmet-async");
const {
  createStaticHandler,
  StaticRouterProvider,
  createStaticRouter,
} = require("react-router-dom/server");
const createFetchRequest = require("./request");
const { Response } = require("node-fetch");
const { routes } = require("../src/config/routes");
const fs = require("fs");

const app = express();

let handler = createStaticHandler(routes);

const PORT = process.env.PORT ?? 3001;

app.use("/static", express.static(__dirname));

app.get("*", async (req, res) => {
  let fetchRequest = createFetchRequest(req, res);
  let context = await handler.query(fetchRequest);
  const helmetContext = {};

  if (
    context instanceof Response &&
    [301, 302, 303, 307, 308].includes(context.status)
  ) {
    return res.redirect(context.status, context.headers.get("Location"));
  }

  let router = createStaticRouter(handler.dataRoutes, context);
  let reactApp = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouterProvider router={router} context={context} />
      </HelmetProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;

  const indexHTML = await fs.promises.readFile(
    `${__dirname}/index.html`,
    "utf-8"
  );
  const reactHtml = indexHTML
    .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    .replace(
      "<head>",
      `<head>${helmet.title.toString()}${helmet.meta.toString()}`
    );

  res.send(reactHtml);
});

const listener = app.listen(PORT, () => {
  let { port } = listener.address();
  console.log(`Listening on port ${port}`);
});
