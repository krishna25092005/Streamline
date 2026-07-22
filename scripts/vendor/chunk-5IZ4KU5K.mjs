import { Cc as g } from "chunk-R3L7MKPD.mjs";
import { Bc as h } from "chunk-CEQRNBNM.mjs";
import { rk as v } from "chunk-32ADSF37.mjs";
import { V as P, q as C } from "chunk-UQ6KW42F.mjs";
import { a as S } from "chunk-VL3ND6CP.mjs";
import { a as y } from "chunk-27NK7L7D.mjs";
import { ia as p } from "chunk-XRJTL357.mjs";
import { e as l } from "chunk-4PTFRIXN.mjs";
var a = l(y(), 1);
var c = l(y(), 1);
function N(o) {
  return o.getFontsForCodeGeneration().some(C);
}
function I(o) {
  let e = N(o),
    [n, i] = (0, c.useState)(e);
  return (
    (0, c.useEffect)(() => {
      e &&
        P.getCustomFontsImportPromise()
          .then(() => {
            i(!1);
          })
          .catch(() => {
            i(!1);
          });
    }, [e]),
    n
  );
}
var u = l(S(), 1),
  F = p("InjectStylePresets"),
  A = (0, a.memo)(function ({ componentLoader: e, presetsListNode: n, fontPreviewByNodeId: i }) {
    return n
      ? (0, u.jsx)(u.Fragment, {
          children: n.getStylePresets().map((r) => {
            let m = i?.get(r.id);
            return (0, u.jsx)(L, { componentLoader: e, preset: r, fontPreview: m }, r.id);
          }),
        })
      : null;
  }),
  L = (0, a.memo)(function ({ componentLoader: e, preset: n, fontPreview: i }) {
    let r = w(),
      m = I(n);
    return (
      (0, a.useLayoutEffect)(
        () => (
          document.head.appendChild(r),
          () => {
            document.head.removeChild(r);
          }
        ),
        [r]
      ),
      (0, a.useLayoutEffect)(() => {
        if (m) return;
        let d = n.generateCSSForCanvas(e),
          s = r.sheet;
        if (s !== null) {
          try {
            for (let t = 0; t < d.length; t++) {
              let f = d[t];
              f !== void 0 && s.insertRule(f, t);
            }
          } catch (t) {
            F.warn(t);
          }
          return () => {
            try {
              for (let t = s.cssRules.length - 1; t >= 0; t--) s.deleteRule(t);
            } catch (t) {
              F.warn(t);
            }
          };
        }
      }, [e, n, r, m, i]),
      null
    );
  });
function w() {
  let o = (0, a.useRef)();
  if (o.current === void 0) {
    let e = document.createElement("style");
    (e.setAttribute("type", "text/css"),
      e.setAttribute("data-framer-css", "true"),
      (o.current = e));
  }
  return o.current;
}
function D(o, e, n) {
  if (!h(o)) return;
  let i = o.getTopLevelVariants();
  if (i.length < 2) return;
  let r = {},
    m = {};
  for (let s of i) {
    let t = s.resolveValue("name") ?? g(n, s);
    ((m[t] = s.id), (r[s.id] = s.id));
  }
  let d = v(e) ? e.id : void 0;
  return {
    primaryVariantId: o.baseVariantId,
    variantClassNames: r,
    activeVariantId: d,
    humanReadableVariantMap: m,
  };
}
export { A as a, D as b };
//# sourceMappingURL=chunk-5IZ4KU5K.mjs.map
