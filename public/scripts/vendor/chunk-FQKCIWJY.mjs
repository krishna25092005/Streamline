import { nb as d } from "chunk-R3L7MKPD.mjs";
import { hg as T } from "chunk-CEQRNBNM.mjs";
import { Bl as k, Dl as m, h as i } from "chunk-32ADSF37.mjs";
import { a as g } from "chunk-27NK7L7D.mjs";
import { a as u } from "chunk-425IX65M.mjs";
import { e as C } from "chunk-4PTFRIXN.mjs";
function F(o) {
  let e = {};
  for (let r of d.getTokenNodes(o)) {
    e[i] || (e[i] = {});
    let t = e[i];
    (u(t, "Tokens entry must exist"), (t[r.id] = r));
  }
  return e;
}
function v(o) {
  let e = {};
  for (let r of d.getAllTokenNodes(o)) e[r.id] = r;
  return e;
}
function P(o, e, r) {
  let t = o.cloneWithIds(),
    a = Object.values(v(e));
  for (let n of t.walk()) Object.assign(n, k(n, a, r));
  return t;
}
function w(o, e, r) {
  if (!e) return;
  let t = Object.values(v(o)),
    a = {};
  for (let n of t) {
    let s = n.colorForMode(r);
    if (!s) return;
    a[n.id] = s;
  }
  for (let [n, s] of e) {
    let l = new T();
    for (let [c, f] of s) {
      let p = m(f, a);
      p ? l.set(c, p) : l.set(c, f);
    }
    e.set(n, l);
  }
}
var b = C(g(), 1);
function y() {
  return document.body.dataset.framerTheme === "dark";
}
function N(o) {
  let e = new MutationObserver(o);
  return (
    e.observe(document.body, { attributes: !0, attributeFilter: ["data-framer-theme"] }),
    () => e.disconnect()
  );
}
function O() {
  return (0, b.useSyncExternalStore)(N, y);
}
export { y as a, O as b, F as c, v as d, P as e, w as f };
//# sourceMappingURL=chunk-FQKCIWJY.mjs.map
