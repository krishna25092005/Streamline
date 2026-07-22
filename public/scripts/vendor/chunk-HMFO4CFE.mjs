import { b as n } from "chunk-QARJ6W4C.mjs";
import { g as o, ia as s } from "chunk-XRJTL357.mjs";
var p = s("pollProject");
async function d(i, a) {
  let { intervalMillis: c, attempts: r, stopCondition: l } = a;
  try {
    for (let t = 0; t < r; t++) {
      let e = await n.get(`/web/projects/${i}`, {
        includeUsageDataV2: "true",
        includeAiCreditLimit: "true",
      });
      if (l(e)) return { status: 0, project: e };
      t < r - 1 && (await o(c));
    }
    return { status: 1, message: `Polling exceeded ${r} attempts` };
  } catch (t) {
    return (p.reportError(t), { status: 2, error: t });
  }
}
export { d as a };
//# sourceMappingURL=chunk-HMFO4CFE.mjs.map
