import { b as r } from "chunk-JV5ZGBOG.mjs";
import { b as e } from "chunk-425IX65M.mjs";
function n(a) {
  let t = r();
  switch (a) {
    case "default":
      return { variant: "default" };
    case "darker":
      return { variant: "darker", darkOnDark: t };
    default:
      e(a, "Invalid modal variant");
  }
}
function s(a) {
  switch (a) {
    case "default":
      return { variant: "default" };
    case "darker":
      return { variant: "darker", darkOnDark: !0 };
    default:
      e(a, "Invalid modal variant");
  }
}
export { n as a, s as b };
//# sourceMappingURL=chunk-CQWVHDVB.mjs.map
