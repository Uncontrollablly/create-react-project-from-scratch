# HMR\Hot reloading\Live reloading\react-hot-loader\react-fast-refresh

- HMR(Hot Module Replacement): 打包工具如 webpack 提供的一种能力。Exchanges, adds, or removes modules while an application is running, without a full reload.

- Hot Reloading is just short for **HMR**. Hot reloading only refreshes the files that were changed without losing the state of the app.

- Live reloading reloads or refreshes the entire app when a file changes. For example, if you were four links deep into your navigation and saved a change, live reloading would restart the app and load the app back to the initial route.

基于 HMR，产生了 react-hot-loader 及 react-fast-refresh:

- [react-hot-loader](https://github.com/gaearon/react-hot-loader): Tweak React components in real time. 实现 react 的 HMR

- [react-fast-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin): It's a re-implementation of "hot reloading" with full support from React. It's originally shipping for React Native but most of the implementation is platform-independent. It’s like the old "hot reloading" feature, but rebuilt from scratch for better reliability, error resilience, and function component support.

参考：

- https://stackoverflow.com/questions/40889776/what-are-the-conceptual-differences-between-live-reloading-hot-reloading-and-h

- https://stackoverflow.com/questions/41428954/what-is-the-difference-between-hot-reloading-and-live-reloading-in-react-native

- https://blog.isquaredsoftware.com/2017/08/blogged-answers-webpack-hmr-vs-rhl/

- http://www.ayqy.net/blog/hot-reload/

- https://segmentfault.com/a/1190000023534941

- https://reactnative.dev/blog/2019/09/18/version-0.61#fast-refresh
