import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  L as n,
  N as r,
  P as i,
  _ as a,
  b as o,
  c as s,
  j as c,
  l,
  o as u,
  s as ee,
} from "./react.C7x6K2rX.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.BvGXTKSj.mjs";
import {
  A as h,
  B as g,
  C as _,
  D as v,
  E as y,
  G as b,
  M as x,
  R as S,
  St as C,
  a as w,
  bt as T,
  c as te,
  f as E,
  ft as D,
  i as O,
  l as k,
  lt as A,
  o as j,
  ot as ne,
  pt as re,
  rt as ie,
  st as ae,
  u as oe,
  wt as se,
  y as M,
  yt as N,
  z as P,
} from "./framer.CF3iZfO7.mjs";
import { i as F, n as I, r as L, t as ce } from "./xDpw_VO59.ttkzNN47.mjs";
import { a as R, i as le, o as ue, r as z } from "./shared-lib.BJ5PhJ39.mjs";
import { i as de, n as fe, r as pe, t as me } from "./EpfgTb3LW.B_-1zNqo.mjs";
import { n as he, t as B } from "./J6sr42DwA.Ckncwpz4.mjs";
import { i as ge, n as _e, r as ve, t as ye } from "./vxo9lP1tq.BP5GRaxo.mjs";
import be, { t as xe } from "./9IY-RY1X66YVXZW5CsTuYKWaDFBr0Vx7BZhshJHsTSU.D9PMIgE5.mjs";
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H,
  U,
  W,
  G,
  Se,
  K,
  q,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  J,
  Ae = e(() => {
    (u(),
      b(),
      m(),
      t(),
      F(),
      (H = C(d.div)),
      (U = { PyEpFspC_: { hover: !0, pressed: !0 } }),
      (W = [`PyEpFspC_`, `HfzDy1ZVT`, `l5GT1erqQ`, `rof9Cn58a`, `dduLFHPDa`, `k6IEKMCBM`]),
      (G = `framer-uAbe3`),
      (Se = {
        dduLFHPDa: `framer-v-hpt60o`,
        HfzDy1ZVT: `framer-v-1pt9m0t`,
        k6IEKMCBM: `framer-v-16amlbv`,
        l5GT1erqQ: `framer-v-17ytfyy`,
        PyEpFspC_: `framer-v-7ucx6o`,
        rof9Cn58a: `framer-v-1fi2qf`,
      }),
      (K = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (q = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Ce = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (we = (e, t) => `translateX(-50%) ${t}`),
      (Te = ({ value: e, children: t }) => {
        let n = r(f),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (Ee = {
        Default: `PyEpFspC_`,
        Disabled: `l5GT1erqQ`,
        Error: `dduLFHPDa`,
        Loading: `HfzDy1ZVT`,
        Phone: `k6IEKMCBM`,
        Success: `rof9Cn58a`,
      }),
      (De = d.create(n)),
      (Oe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ee[r.variant] ?? r.variant ?? `PyEpFspC_`,
      })),
      (ke = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = T(
        a(function (e, t) {
          let r = c(null),
            i = t ?? r,
            a = o(),
            { activeLocale: u, setLocale: ee } = D();
          ie();
          let { style: f, className: m, layoutId: g, variant: v, ...y } = Oe(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: te,
              setVariant: E,
              variants: O,
            } = N({
              cycleOrder: W,
              defaultVariant: `PyEpFspC_`,
              enabledGestures: U,
              ref: i,
              variant: v,
              variantClassNames: Se,
            }),
            k = ke(e, O),
            A = h(G, ce),
            j = () => b !== `HfzDy1ZVT`,
            ne = () => b === `HfzDy1ZVT`;
          return s(p, {
            id: g ?? a,
            children: s(De, {
              animate: O,
              initial: !1,
              children: s(Te, {
                value: K,
                children: l(d.button, {
                  ...y,
                  ...C,
                  className: h(A, `framer-7ucx6o`, m, x),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: k,
                  layoutId: `PyEpFspC_`,
                  ref: i,
                  style: {
                    backdropFilter: `none`,
                    backgroundColor: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    WebkitBackdropFilter: `none`,
                    ...f,
                  },
                  variants: {
                    "PyEpFspC_-hover": {
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, rgb(237, 241, 244))`,
                      WebkitBackdropFilter: `none`,
                    },
                    "PyEpFspC_-pressed": {
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, rgb(237, 241, 244))`,
                      WebkitBackdropFilter: `none`,
                    },
                    dduLFHPDa: {
                      backdropFilter: `none`,
                      backgroundColor: `rgba(255, 34, 68, 0.15)`,
                      WebkitBackdropFilter: `none`,
                    },
                    k6IEKMCBM: { backdropFilter: `none`, WebkitBackdropFilter: `none` },
                    l5GT1erqQ: {
                      backdropFilter: `blur(5px)`,
                      backgroundColor: `var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.3))`,
                      WebkitBackdropFilter: `blur(5px)`,
                    },
                    rof9Cn58a: { backdropFilter: `none`, WebkitBackdropFilter: `none` },
                  },
                  ...V(
                    {
                      "PyEpFspC_-hover": { "data-framer-name": void 0 },
                      "PyEpFspC_-pressed": { "data-framer-name": void 0 },
                      dduLFHPDa: { "data-framer-name": `Error` },
                      HfzDy1ZVT: { "data-framer-name": `Loading` },
                      k6IEKMCBM: { "data-framer-name": `Phone` },
                      l5GT1erqQ: { "data-framer-name": `Disabled` },
                      rof9Cn58a: { "data-framer-name": `Success` },
                    },
                    b,
                    w
                  ),
                  children: [
                    j() &&
                      s(_, {
                        __fromCanvasComponent: !0,
                        children: s(n, {
                          children: s(d.p, {
                            className: `framer-styles-preset-6b8cag`,
                            "data-styles-preset": `xDpw_VO59`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                            },
                            children: `Join Waitlist`,
                          }),
                        }),
                        className: `framer-to1k51`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `QearTk2os`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "PyEpFspC_-hover": {
                            "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                          },
                          "PyEpFspC_-pressed": {
                            "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                          },
                          dduLFHPDa: { "--extracted-r6o4lv": `rgb(255, 34, 68)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...V(
                          {
                            "PyEpFspC_-hover": {
                              children: s(n, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-6b8cag`,
                                  "data-styles-preset": `xDpw_VO59`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                  },
                                  children: `Join Waitlist`,
                                }),
                              }),
                            },
                            "PyEpFspC_-pressed": {
                              children: s(n, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-6b8cag`,
                                  "data-styles-preset": `xDpw_VO59`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                  },
                                  children: `Join Waitlist`,
                                }),
                              }),
                            },
                            dduLFHPDa: {
                              children: s(n, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-6b8cag`,
                                  "data-styles-preset": `xDpw_VO59`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Unable to join. Try again`,
                                }),
                              }),
                            },
                            rof9Cn58a: {
                              children: s(n, {
                                children: s(d.p, {
                                  className: `framer-styles-preset-6b8cag`,
                                  "data-styles-preset": `xDpw_VO59`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                  },
                                  children: `You're on the waitlist!`,
                                }),
                              }),
                            },
                          },
                          b,
                          w
                        ),
                      }),
                    ne() &&
                      s(d.div, {
                        className: `framer-1895okm`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: k,
                        layoutId: `OxLEvIF1v`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: s(H, {
                          __framer__loop: Ce,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: q,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1nhezty`,
                          "data-framer-name": `Conic`,
                          layoutDependency: k,
                          layoutId: `vvVFNwOJx`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 7.208614864864882deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 342deg)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            HfzDy1ZVT: {
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: s(d.div, {
                            className: `framer-1e85l9p`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: k,
                            layoutId: `pLHxCLu7R`,
                            style: {
                              backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: we,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-uAbe3.framer-duvren, .framer-uAbe3 .framer-duvren { display: block; }`,
          `.framer-uAbe3.framer-7ucx6o { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 44px 18px 44px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-uAbe3 .framer-to1k51 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-uAbe3 .framer-1895okm { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-uAbe3 .framer-1nhezty { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-uAbe3 .framer-1e85l9p { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-uAbe3.framer-v-1pt9m0t.framer-7ucx6o, .framer-uAbe3.framer-v-17ytfyy.framer-7ucx6o, .framer-uAbe3.framer-v-1fi2qf.framer-7ucx6o, .framer-uAbe3.framer-v-hpt60o.framer-7ucx6o, .framer-uAbe3.framer-v-16amlbv.framer-7ucx6o { cursor: unset; }`,
          `.framer-uAbe3.framer-v-1pt9m0t .framer-1nhezty { overflow: hidden; }`,
          ...I,
        ],
        `framer-uAbe3`
      )),
      (J.displayName = `Waitlist Form Button`),
      (J.defaultProps = { height: 59, width: 189 }),
      v(J, {
        variant: {
          options: [`PyEpFspC_`, `HfzDy1ZVT`, `l5GT1erqQ`, `rof9Cn58a`, `dduLFHPDa`, `k6IEKMCBM`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`, `Phone`],
          title: `Variant`,
          type: j.Enum,
        },
      }),
      y(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...P(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  Y,
  ze,
  Be,
  Ve,
  He,
  X,
  Z,
  Q,
  Ue,
  We,
  $,
  Ge;
e(() => {
  (u(),
    b(),
    m(),
    t(),
    ue(),
    le(),
    he(),
    Ae(),
    de(),
    ge(),
    xe(),
    (je = S(B)),
    (Me = S(J)),
    (Ne = se(d.div)),
    (Pe = S(z)),
    (Fe = S(R)),
    (Ie = {
      Kk98V36vZ: `(max-width: 809.98px)`,
      omnn4dNZT: `(min-width: 1200px)`,
      tmSFBj7c7: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Le = () => typeof document < `u`),
    (Re = []),
    (Y = `framer-qqoA8`),
    (ze = {
      Kk98V36vZ: `framer-v-1l9sgq8`,
      omnn4dNZT: `framer-v-1jaw6sc`,
      tmSFBj7c7: `framer-v-eqacmu`,
    }),
    (Be = (e, t, n) => (e && t ? `position` : n)),
    (Ve = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.1, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (He = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Q = { Desktop: `omnn4dNZT`, Phone: `Kk98V36vZ`, Tablet: `tmSFBj7c7` }),
    (Ue = ({ value: e }) =>
      A()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (We = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `omnn4dNZT`,
    })),
    ($ = T(
      a(function (e, t) {
        let a = c(null),
          u = t ?? a,
          m = o(),
          { activeLocale: v, setLocale: y } = D(),
          b = ie(),
          { style: x, className: S, layoutId: C, variant: T, ...A } = We(e);
        re(i(() => be({}, v), [v]));
        let [j, se] = ae(T, Ie, !1),
          N = h(Y, ye, me),
          P = r(oe)?.isLayoutTemplate,
          F = !!r(f)?.transition?.layout,
          I = Be(P, F),
          L = () => !Le() || ![`tmSFBj7c7`, `Kk98V36vZ`].includes(j);
        return (
          ne({}),
          s(oe.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: Q,
              primaryVariantId: `omnn4dNZT`,
              variantClassNames: ze,
            },
            children: l(p, {
              id: C ?? m,
              children: [
                s(Ue, {
                  value: `html body { background: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)); }`,
                }),
                l(d.div, {
                  ...A,
                  className: h(N, `framer-1jaw6sc`, S),
                  ref: u,
                  style: { ...x },
                  children: [
                    l(d.main, {
                      className: `framer-13nmgde`,
                      "data-framer-name": `Main`,
                      layout: I,
                      children: [
                        l(`section`, {
                          className: `framer-10vtfbr`,
                          "data-framer-name": `Hero`,
                          children: [
                            s(`div`, {
                              className: `framer-uyrisw`,
                              "data-framer-name": `Container`,
                              children: l(Ne, {
                                animate: Ve,
                                className: `framer-l6e3ln`,
                                "data-framer-appear-id": `l6e3ln`,
                                "data-framer-name": `Content`,
                                initial: He,
                                optimized: !0,
                                children: [
                                  l(`div`, {
                                    className: `framer-opnxhq`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      s(M, {
                                        breakpoint: j,
                                        overrides: {
                                          Kk98V36vZ: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              128 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          tmSFBj7c7: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              158 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: s(O, {
                                          height: 28,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            194 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: s(w, {
                                            className: `framer-uvfpmo-container`,
                                            nodeId: `Ke7Io3Qt7`,
                                            scopeId: `LUppQAJrN`,
                                            children: s(B, {
                                              h3thwb3uh: `Get early access`,
                                              height: `100%`,
                                              id: `Ke7Io3Qt7`,
                                              layoutId: `Ke7Io3Qt7`,
                                              rhGiDGRBu: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                              variant: X(`oBYzv67yH`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      s(_, {
                                        __fromCanvasComponent: !0,
                                        children: s(n, {
                                          children: s(`h1`, {
                                            className: `framer-styles-preset-140jh7d`,
                                            "data-styles-preset": `vxo9lP1tq`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                            },
                                            children: `Be the first to access our platform`,
                                          }),
                                        }),
                                        className: `framer-1d6rdu2`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      s(_, {
                                        __fromCanvasComponent: !0,
                                        children: s(n, {
                                          children: s(`p`, {
                                            className: `framer-styles-preset-n7iy3a`,
                                            "data-styles-preset": `EpfgTb3LW`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                            },
                                            children: `Our AI-powered platform is designed to help investors analyze markets, monitor portfolios, and uncover insights faster.`,
                                          }),
                                        }),
                                        className: `framer-1cz3a03`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  s(te, {
                                    className: `framer-10qs5h5`,
                                    nodeId: `ddfgOOoKi`,
                                    children: (e) =>
                                      s(ee, {
                                        children: l(`label`, {
                                          className: `framer-1gwc3bq`,
                                          "data-framer-name": `Email Address`,
                                          children: [
                                            s(k, {
                                              className: `framer-i06wpx`,
                                              inputName: `Email`,
                                              placeholder: `Enter your email`,
                                              required: !0,
                                              type: `email`,
                                            }),
                                            s(M, {
                                              breakpoint: j,
                                              overrides: {
                                                Kk98V36vZ: {
                                                  width: `max(min(min(${b?.width || `100vw`}, 860px) - 32px, 600px), 1px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    242.6 +
                                                    0 +
                                                    0 +
                                                    73,
                                                },
                                                tmSFBj7c7: {
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    158 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    252.6 +
                                                    0 +
                                                    5.5,
                                                },
                                              },
                                              children: s(O, {
                                                height: 59,
                                                y:
                                                  (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  194 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  272.6 +
                                                  0 +
                                                  5.5,
                                                children: s(w, {
                                                  className: `framer-1g8yjfr-container`,
                                                  nodeId: `VVsDzqN5i`,
                                                  scopeId: `LUppQAJrN`,
                                                  children: s(M, {
                                                    breakpoint: j,
                                                    overrides: {
                                                      Kk98V36vZ: {
                                                        style: { width: `100%` },
                                                        variant: Z(
                                                          e,
                                                          {
                                                            error: `dduLFHPDa`,
                                                            incomplete: `l5GT1erqQ`,
                                                            pending: `HfzDy1ZVT`,
                                                            success: `rof9Cn58a`,
                                                          },
                                                          X(`k6IEKMCBM`)
                                                        ),
                                                      },
                                                      tmSFBj7c7: {
                                                        variant: Z(
                                                          e,
                                                          {
                                                            error: `dduLFHPDa`,
                                                            incomplete: `l5GT1erqQ`,
                                                            pending: `HfzDy1ZVT`,
                                                            success: `rof9Cn58a`,
                                                          },
                                                          X(`k6IEKMCBM`)
                                                        ),
                                                      },
                                                    },
                                                    children: s(J, {
                                                      height: `100%`,
                                                      id: `VVsDzqN5i`,
                                                      layoutId: `VVsDzqN5i`,
                                                      type: `submit`,
                                                      variant: Z(
                                                        e,
                                                        {
                                                          error: `dduLFHPDa`,
                                                          incomplete: `l5GT1erqQ`,
                                                          pending: `HfzDy1ZVT`,
                                                          success: `rof9Cn58a`,
                                                        },
                                                        X(`PyEpFspC_`)
                                                      ),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                            l(`div`, {
                              className: `framer-slyixe`,
                              "data-framer-name": `BG Item`,
                              children: [
                                s(`div`, {
                                  className: `framer-di993g`,
                                  "data-framer-name": `BG Overlay`,
                                }),
                                s(E, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    intrinsicHeight: 1600,
                                    intrinsicWidth: 1920,
                                    loading: g((b?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0),
                                    pixelHeight: 1600,
                                    pixelWidth: 1920,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `max(${b?.width || `100vw`}, 1px)`,
                                    src: `../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg`,
                                    srcSet: `../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg?scale-down-to=512&width=1920&height=1600 512w,../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg?scale-down-to=1024&width=1920&height=1600 1024w,../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg 1920w`,
                                  },
                                  className: `framer-s0t4s9`,
                                  "data-framer-name": `BG Image`,
                                }),
                              ],
                            }),
                            L() &&
                              s(E, {
                                background: {
                                  alt: `Cloud Image`,
                                  fit: `fit`,
                                  intrinsicHeight: 689,
                                  intrinsicWidth: 1185,
                                  loading: g((b?.y || 0) + 0 + 0 + 0 + 0 + 50),
                                  pixelHeight: 689,
                                  pixelWidth: 1185,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `601.9594px`,
                                  src: `../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png?width=1185&height=689`,
                                  srcSet: `../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png?scale-down-to=512&width=1185&height=689 512w,../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png 1024w,../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png?width=1185&height=689 1185w`,
                                },
                                className: `framer-1p3kxnu hidden-eqacmu hidden-1l9sgq8`,
                                "data-framer-name": `Cloud 01`,
                                fitImageDimension: `width`,
                              }),
                            L() &&
                              s(E, {
                                background: {
                                  alt: `Cloud Image`,
                                  fit: `fit`,
                                  intrinsicHeight: 714,
                                  intrinsicWidth: 1192,
                                  loading: g((b?.y || 0) + 0 + 0 + 0 + 0 + -150),
                                  pixelHeight: 714,
                                  pixelWidth: 1192,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `584.3137px`,
                                  src: `../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png?width=1192&height=714`,
                                  srcSet: `../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png?scale-down-to=512&width=1192&height=714 512w,../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png 1024w,../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png?width=1192&height=714 1192w`,
                                },
                                className: `framer-1jidd5b hidden-eqacmu hidden-1l9sgq8`,
                                "data-framer-name": `Cloud 03`,
                                fitImageDimension: `width`,
                              }),
                          ],
                        }),
                        s(O, {
                          children: s(w, {
                            className: `framer-1oiiwgr-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `ijCEISTcz`,
                            scopeId: `LUppQAJrN`,
                            children: s(z, {
                              height: `100%`,
                              id: `ijCEISTcz`,
                              intensity: 15,
                              layoutId: `ijCEISTcz`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    s(O, {
                      children: s(w, {
                        className: `framer-7cxge1-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: I,
                        layoutScroll: !0,
                        nodeId: `Je_geCss1`,
                        scopeId: `LUppQAJrN`,
                        children: s(R, {
                          blur: 10,
                          borderRadius: `0px`,
                          direction: `to top`,
                          height: `100%`,
                          id: `Je_geCss1`,
                          layoutId: `Je_geCss1`,
                          style: { height: `100%`, width: `100%` },
                          transition: { duration: 0, type: `tween` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-qqoA8.framer-h256dy, .framer-qqoA8 .framer-h256dy { display: block; }`,
        `.framer-qqoA8.framer-1jaw6sc { align-content: center; align-items: center; background-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-qqoA8 .framer-13nmgde { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qqoA8 .framer-10vtfbr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 194px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-qqoA8 .framer-uyrisw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; max-width: 860px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-qqoA8 .framer-l6e3ln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-qqoA8 .framer-opnxhq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qqoA8 .framer-uvfpmo-container, .framer-qqoA8 .framer-1oiiwgr-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-qqoA8 .framer-1d6rdu2, .framer-qqoA8 .framer-1cz3a03 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-qqoA8 .framer-10qs5h5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px 30px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-qqoA8 .framer-1gwc3bq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-qqoA8 .framer-i06wpx { --framer-input-background: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, #dde5ed); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 100px; --framer-input-border-radius-bottom-right: 100px; --framer-input-border-radius-top-left: 100px; --framer-input-border-radius-top-right: 100px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, #4d585f); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.4s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-icon-mask-image: none; --framer-input-padding: 10px 224px 10px 30px; --framer-input-placeholder-color: var(--token-3773b559-408e-44fa-b41c-14281b49a454, rgba(29, 29, 29, 0.5)); flex: none; height: 70px; position: relative; width: 100%; }`,
        `.framer-qqoA8 .framer-1g8yjfr-container { flex: none; height: auto; position: absolute; right: 5px; top: 50%; transform: translateY(-50%); width: auto; z-index: 1; }`,
        `.framer-qqoA8 .framer-slyixe { -webkit-user-select: none; align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-qqoA8 .framer-di993g { background: linear-gradient(180deg, var(--token-e266aeaf-00d6-433e-94f9-0ad61361974f, rgba(255, 255, 255, 0.3)) 0%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 50%); bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-qqoA8 .framer-s0t4s9 { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-qqoA8 .framer-1p3kxnu { -webkit-user-select: none; flex: none; height: 350px; left: -50px; opacity: 0.8; overflow: visible; pointer-events: none; position: absolute; top: 50px; user-select: none; width: auto; z-index: 1; }`,
        `.framer-qqoA8 .framer-1jidd5b { -webkit-user-select: none; flex: none; height: 350px; opacity: 0.8; overflow: visible; pointer-events: none; position: absolute; right: 30px; top: -150px; user-select: none; width: auto; z-index: 1; }`,
        `.framer-qqoA8 .framer-7cxge1-container { flex: none; height: 100px; left: 0px; pointer-events: auto; position: fixed; right: 0px; top: 0px; z-index: 8; }`,
        ..._e,
        ...fe,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-qqoA8.framer-1jaw6sc { width: 810px; } .framer-qqoA8 .framer-10vtfbr { padding: 158px 0px 80px 0px; } .framer-qqoA8 .framer-uyrisw { padding: 0px 20px 0px 20px; } .framer-qqoA8 .framer-l6e3ln { gap: 30px; }}`,
        `@media (max-width: 809.98px) { .framer-qqoA8.framer-1jaw6sc { width: 390px; } .framer-qqoA8 .framer-10vtfbr { padding: 128px 0px 30px 0px; } .framer-qqoA8 .framer-uyrisw { padding: 0px 16px 0px 16px; } .framer-qqoA8 .framer-l6e3ln { gap: 20px; } .framer-qqoA8 .framer-1gwc3bq { gap: 16px; } .framer-qqoA8 .framer-i06wpx { --framer-input-padding: 10px 20px 10px 20px; height: 57px; } .framer-qqoA8 .framer-1g8yjfr-container { position: relative; right: unset; top: unset; transform: unset; width: 100%; } .framer-qqoA8 .framer-7cxge1-container { height: 60px; }}`,
      ],
      `framer-qqoA8`
    )),
    ($.displayName = `Request Demo`),
    ($.defaultProps = { height: 1658, width: 1200 }),
    y(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,
              weight: `500`,
            },
          ],
        },
        ...je,
        ...Me,
        ...Pe,
        ...Fe,
        ...P(ve),
        ...P(pe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(B, {}, t), x(J, {}, t)])) }),
    (Ge = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerLUppQAJrN`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"tmSFBj7c7":{"layout":["fixed","fixed"]},"Kk98V36vZ":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `1658`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ge as __FramerMetadata__, $ as default, Re as queryParamNames };
//# sourceMappingURL=wWpCkfAI_W3FMtUlYv-iTZzJfI3z0s9sn_mbbB-hUYk.D9gTAcAa.mjs.map
