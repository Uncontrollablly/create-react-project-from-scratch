1. output.publicPath

   - 指定 output.path 目录 serve 到的 url (This option specifies the public URL of the output directory when referenced in a browser)

2. **output.publicPath** vs **devServer.static.publicPath**

   - webpack-dev-server serves bundled files from the directory defined in output.path, i.e., files will be available under **http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]**.

   - devServer.static.publicPath: tell the server at which URL to serve static.directory content.

   - **output.path 被 serve 在 output.publicPath 指定的 url 上; devServer.static.directory 被 serve 在 devServer.static.publicPath 指定的 url 上**

3. Does dev-server build bundle according to webpack config

   - Yes. webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.
