import { Wf as r, a as o } from "chunk-UI3OD4DB.mjs";
import { i } from "chunk-HMJGBTPQ.mjs";
import { a as e } from "chunk-VL3ND6CP.mjs";
import { e as s } from "chunk-4PTFRIXN.mjs";
var n = "cq2i6r2",
  p = "o199fue7",
  c = "o16gpm6";
var t = s(e(), 1);
function A({ avatar: l, displayName: m, organization: a }) {
  let f = r.extractInitials(m);
  return (0, t.jsxs)("div", {
    className: n,
    children: [
      (0, t.jsx)(o, { color: i.tint, src: l || void 0, text: f }),
      a &&
        (0, t.jsx)(o, {
          size: "small",
          src: a.avatar || void 0,
          textCustomStyles: c,
          avatarCustomStyles: p,
          color: "#fff",
          text: r.extractInitials(a.displayName),
        }),
    ],
  });
}
export { A as a };
//# sourceMappingURL=chunk-7FJJKZSI.mjs.map
