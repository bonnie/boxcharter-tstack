// load dynamically every time to make sure the mdx ICON_MAP
//   import doesn't get bloated by loading every icon for every
//   page.
//   https://vite.dev/guide/features#dynamic-import
// TODO: how to type this properly??
// export default await import("./Icon");

export * from "./Icon";
export { default } from "./Icon";
