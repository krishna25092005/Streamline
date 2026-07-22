import { a as c } from "chunk-27NK7L7D.mjs";
import { e as s } from "chunk-4PTFRIXN.mjs";
var e = s(c(), 1);
function a(t) {
  let r = (0, e.useMemo)(() => {
    let n = window.matchMedia(t);
    function o() {
      return n.matches;
    }
    function i(u) {
      return (n.addEventListener("change", u), () => n.removeEventListener("change", u));
    }
    return { getCurrentValue: o, subscribe: i };
  }, [t]);
  return (0, e.useSyncExternalStore)(r.subscribe, r.getCurrentValue);
}
export { a };
//# sourceMappingURL=chunk-TEVZ2MET.mjs.map
