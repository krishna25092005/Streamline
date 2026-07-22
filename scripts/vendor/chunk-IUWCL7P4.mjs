import { N as d, Od as c, ga as y } from "chunk-R3L7MKPD.mjs";
import { e as l } from "chunk-CEQRNBNM.mjs";
import { Ne as p, hd as a, rk as m } from "chunk-32ADSF37.mjs";
import { a as u } from "chunk-27NK7L7D.mjs";
import { e as k } from "chunk-4PTFRIXN.mjs";
var f = k(u(), 1);
function P(t) {
  return d(t) && y(t) && a(t);
}
function S(t) {
  let e = {};
  if (!t) return e;
  let i = t.children.filter(P).sort((r, s) => (r.breakpointWidth ?? 0) - (s.breakpointWidth ?? 0));
  for (let r of i) {
    let s = r.originalid,
      o = e[s] ?? [];
    (o.push(r), (e[s] = o));
  }
  return e;
}
function x(t) {
  let e = c.get(t);
  return (0, f.useMemo)(() => S(e), [e]);
}
function R(t, e) {
  return !m(e) || !p(e) ? "" : B(t, e.width);
}
function B(t, e) {
  let i = [],
    r = Object.values(t);
  for (let s of r) {
    let o = s.find((n) => (n.breakpointWidth ?? 0) > e);
    if (o) {
      let n = l(2, o.id);
      i.push(n);
    }
  }
  return i.join(" ");
}
export { S as a, x as b, R as c, B as d };
//# sourceMappingURL=chunk-IUWCL7P4.mjs.map
