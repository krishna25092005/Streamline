import { a as o } from "chunk-FUQZY6JN.mjs";
import { a as i } from "chunk-K6L5GVTR.mjs";
import { b as n } from "chunk-QARJ6W4C.mjs";
import { Ta as s } from "chunk-XRJTL357.mjs";
function c(e) {
  return e.type === "template";
}
function y(e, t = {}) {
  let r = e.space.scope !== "user" ? e.space.id : void 0,
    a;
  return (
    c(e) ? (a = "recent") : e.collection && (a = e.collection.id),
    s({ ...t, duplicateFrom: e.id, spaceId: r, collectionId: a })
  );
}
function P(e, t) {
  return n.put(`/web/v2/projects/${e}`, t);
}
async function f(e, t = !1) {
  let r = s(e);
  t ? i(r) : o(r);
}
async function j(e) {
  return n.delete(`/web/projects/${e}/acl/me`);
}
async function x(e) {
  return n.delete(`/web/projects/${e}`);
}
export { c as a, y as b, P as c, f as d, j as e, x as f };
//# sourceMappingURL=chunk-ZEJJYMK7.mjs.map
