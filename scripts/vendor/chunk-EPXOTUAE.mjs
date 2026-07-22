import { b as c } from "chunk-QARJ6W4C.mjs";
import { a as r, b as t } from "chunk-RM7C2BN3.mjs";
import { ia as i } from "chunk-XRJTL357.mjs";
function o(s) {
  return s instanceof r && s.status === t.BadRequest && s.data.reason === "editor_limit_reached";
}
function a(s) {
  return (
    s instanceof r && s.status === t.BadRequest && s.data.reason === "project_editor_limit_reached"
  );
}
var n = i("accessRequest");
async function E(s) {
  try {
    let e = await c.post("/web/access-requests/grant", { requestId: s });
    return {
      status: 0,
      accessRequest: e.accessRequest,
      requestingUser: e.requestingUser,
      resource: e.resource,
    };
  } catch (e) {
    return o(e)
      ? {
          status: 1,
          editorLimit: e.data.editorLimit,
          licenseType: e.data.licenseType,
          teamId: e.data.teamId,
          teamName: e.data.teamName,
        }
      : a(e)
        ? {
            status: 4,
            projectId: e.data.projectId,
            licenseType: e.data.licenseType,
            editorLimit: e.data.editorLimit,
          }
        : e instanceof r && e.status === t.Conflict
          ? { status: 2 }
          : (n.reportError(e), { status: 3 });
  }
}
async function y(s) {
  try {
    let e = await c.post("/web/access-requests/deny", { requestId: s });
    return {
      status: 0,
      accessRequest: e.accessRequest,
      requestingUser: e.requestingUser,
      resource: e.resource,
    };
  } catch (e) {
    return e instanceof r && e.status === t.Conflict
      ? { status: 2 }
      : (n.reportError(e), { status: 3 });
  }
}
export { o as a, a as b, E as c, y as d };
//# sourceMappingURL=chunk-EPXOTUAE.mjs.map
