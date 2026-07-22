import { kb as p } from "chunk-2OZTVFML.mjs";
import { d as c } from "chunk-2NNAZIJI.mjs";
import { n as d } from "chunk-NICCNLKG.mjs";
import { H as m, P as f } from "chunk-CEQRNBNM.mjs";
import { qd as o } from "chunk-32ADSF37.mjs";
import { da as s } from "chunk-UQ6KW42F.mjs";
import { b as n } from "chunk-DYNCKUFC.mjs";
function R(e, i, r, l) {
  let { imageSize: t, originalFilename: u } = i,
    g = n(e.fillImage) ? s(e.fillImage)?.preferredSize : void 0,
    a = {
      fillType: "image",
      fillImage: c(i, l ?? g, r),
      fillImageOriginalName: u,
      fillImagePixelWidth: t.naturalWidth,
      fillImagePixelHeight: t.naturalHeight,
      ...P(e),
    };
  if ((m(e) && e.fillEnabled === !1 && (a.fillEnabled = !0), o(e))) {
    let { nonZeroNaturalWidth: h, nonZeroNaturalHeight: F } = d(t);
    ((a.intrinsicWidth = h), (a.intrinsicHeight = F));
  }
  e.set(a);
}
function P(e) {
  if (f(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
function U(e, i, r) {
  if (!i && !r) return !1;
  for (let l of e) {
    let t = p[l];
    if (r) {
      if (r.includes(l)) return !0;
    } else if (i && t && i.includes(t)) return !0;
  }
  return !1;
}
export { R as a, U as b };
//# sourceMappingURL=chunk-SUYCF7DL.mjs.map
