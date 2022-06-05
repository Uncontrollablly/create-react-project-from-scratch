1. output.publicPath

   - 指定 output.path 目录 serve 到的 url (This option specifies the public URL of the output directory when referenced in a browser)

2. **output.publicPath** vs **devServer.static.publicPath**

   - webpack-dev-server serves bundled files from the directory defined in output.path, i.e., files will be available under **http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]**.

   - devServer.static.publicPath: tell the server at which URL to serve static.directory content.

   - **output.path 被 serve 在 output.publicPath 指定的 url 上; devServer.static.directory 被 serve 在 devServer.static.publicPath 指定的 url 上**

3. index.html 中 script 路径与 output.publicPath 什么关系

   - index.html 在 script 元素中指定 bundle.js 的路径，而 bundle.js 被 serve 的位置是由 output.publicPath 决定的，因此 index.html 中 bundle.js 的路径需要与 output.publicPath 一致，否则会 404.

   - 本项目中 html 与 bundle.js 位于不同的目录，html 所在 public 目录是根据 devServer.static.publicPath 被 serve 的，bundle.js 所在 dist 目录则是根据 output.publicPath 被 serve 的。在 html 中用相对路径指定了 bundle.js 的路径，该相对路径**相对的是 html 的路径**，即: http://[devServer.host]:[devServer.port]/index.html，所以最终 bundle.js 的位置计算为：http://[devServer.host]:[devServer.port]/index.html/../[output.publicPath]/[output.filename] 即 **http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename] (http://localhost:3000/dist/bundle.js)**.

4. Does dev-server build bundle according to webpack config

   - Yes. webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.
