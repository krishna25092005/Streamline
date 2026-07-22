import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  L as n,
  N as r,
  P as ee,
  _ as i,
  b as te,
  c as a,
  j as ne,
  l as o,
  o as re,
} from "./react.C7x6K2rX.mjs";
import { C as s, a as ie, r as ae, t as oe } from "./motion.BvGXTKSj.mjs";
import {
  A as se,
  C as c,
  Ct as l,
  E as ce,
  Et as u,
  G as le,
  M as d,
  R as f,
  S as ue,
  St as p,
  T as m,
  _t as de,
  a as h,
  bt as fe,
  f as g,
  ft as pe,
  i as _,
  lt as v,
  ot as me,
  pt as he,
  rt as ge,
  st as _e,
  u as ve,
  wt as ye,
  y,
  z as b,
} from "./framer.CF3iZfO7.mjs";
import { a as be, i as xe, o as Se, r as Ce } from "./shared-lib.BJ5PhJ39.mjs";
import { i as x, n as S, r as we, t as Te } from "./EpfgTb3LW.B_-1zNqo.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./k6zcj6FY_.2d0X-ZGI.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./Lb6ff2C_Q.ez8nCVhw.mjs";
import { n as Pe, t as C } from "./GYN8xEkvd.CextllOa.mjs";
import { n as Fe, t as w } from "./HcSHdSDmW.B57kuPCT.mjs";
import { n as Ie, t as T } from "./o0wOfTO7b.B5Gke0Rn.mjs";
import { a as E, n as Le, o as Re, t as D } from "./r5vw0kl3E.k_eB_lgG.mjs";
import { n as ze, t as O } from "./ScX0nH30a.CYCWAQr5.mjs";
import { n as Be, t as k } from "./Tv_uIQK3W.DIpj956B.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./vxo9lP1tq.BP5GRaxo.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./uf55qntp3.CLjGsKqf.mjs";
import Ye, { t as Xe } from "./tRCJU8iVWofOYEk5inMH1Ux3cSYVF4hucOg3V3ZhxRM.VH1o21qj.mjs";
var Ze,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  z,
  lt,
  B,
  V,
  H,
  ut,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  dt,
  X,
  ft,
  pt,
  Z,
  mt,
  ht,
  Q,
  $;
e(() => {
  (re(),
    le(),
    oe(),
    t(),
    Se(),
    xe(),
    Pe(),
    Fe(),
    Ie(),
    Re(),
    Le(),
    ze(),
    Be(),
    x(),
    Ee(),
    Ae(),
    Ge(),
    Ve(),
    Xe(),
    (Ze = f(O)),
    (A = ye(s.div)),
    (j = f(D)),
    (M = ye(h)),
    (N = f(w)),
    (P = u(s.div)),
    (F = p(s.div)),
    (I = f(T)),
    (L = f(E)),
    (R = p(h)),
    (Qe = f(k)),
    ($e = p(l(s.div))),
    (et = f(C)),
    (tt = f(Ce)),
    (nt = f(be)),
    (rt = {
      ir59Rmemn: `(min-width: 1200px)`,
      Kh7U3FggK: `(min-width: 810px) and (max-width: 1199.98px)`,
      xzjn_s8m2: `(max-width: 809.98px)`,
    }),
    (it = () => typeof document < `u`),
    (at = []),
    (ot = `framer-LQDF2`),
    (st = {
      ir59Rmemn: `framer-v-8q6d0u`,
      Kh7U3FggK: `framer-v-u4zjo7`,
      xzjn_s8m2: `framer-v-zkk48y`,
    }),
    (ct = (e, t, n) => (e && t ? `position` : n)),
    (z = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (lt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: z,
      x: 0,
      y: 0,
    }),
    (B = {
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
    (V = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (H = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (ut = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: H,
      x: 0,
      y: 0,
    }),
    (U = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (W = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: z,
      x: 0,
      y: 20,
    }),
    (G = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (K = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: H,
      x: 0,
      y: 20,
    }),
    (q = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (J = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 20,
    }),
    (Y = { bounce: 0, delay: 0.4, duration: 1, type: `spring` }),
    (dt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 20,
    }),
    (X = { bounce: 0, delay: 0.5, duration: 1, type: `spring` }),
    (ft = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 20,
    }),
    (pt = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (Z = { Desktop: `ir59Rmemn`, Phone: `xzjn_s8m2`, Tablet: `Kh7U3FggK` }),
    (mt = ({ value: e }) =>
      v()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ht = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `ir59Rmemn`,
    })),
    (Q = fe(
      i(function (e, t) {
        let i = ne(null),
          re = t ?? i,
          oe = te(),
          { activeLocale: l, setLocale: ce } = pe(),
          u = ge(),
          { style: le, className: d, layoutId: f, variant: p, ...fe } = ht(e);
        he(ee(() => Ye({}, l), [l]));
        let [v, ye] = _e(p, rt, !1),
          b = se(ot, Je, We, Te, ke, Ne),
          xe = r(ve)?.isLayoutTemplate,
          Se = !!r(ie)?.transition?.layout,
          x = ct(xe, Se),
          S = () => !it() || ![`Kh7U3FggK`, `xzjn_s8m2`].includes(v);
        return (
          de(),
          me({}),
          a(ve.Provider, {
            value: {
              activeVariantId: v,
              humanReadableVariantMap: Z,
              primaryVariantId: `ir59Rmemn`,
              variantClassNames: st,
            },
            children: o(ae, {
              id: f ?? oe,
              children: [
                a(mt, {
                  value: `html body { background: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)); }`,
                }),
                o(s.div, {
                  ...fe,
                  className: se(b, `framer-8q6d0u`, d),
                  ref: re,
                  style: { ...le },
                  children: [
                    o(s.main, {
                      className: `framer-1h2sryi`,
                      "data-framer-name": `Main`,
                      layout: x,
                      children: [
                        o(`section`, {
                          className: `framer-xu1r3q`,
                          "data-framer-name": `Hero`,
                          children: [
                            a(`div`, {
                              className: `framer-c0ftfw`,
                              "data-framer-name": `Container`,
                              children: o(`div`, {
                                className: `framer-3897qi`,
                                "data-framer-name": `Content`,
                                children: [
                                  o(A, {
                                    animate: lt,
                                    className: `framer-y21xm0`,
                                    "data-framer-appear-id": `y21xm0`,
                                    "data-framer-name": `Top`,
                                    initial: B,
                                    optimized: !0,
                                    children: [
                                      a(_, {
                                        height: 38,
                                        children: a(h, {
                                          className: `framer-17vpk3s-container`,
                                          nodeId: `ykbSk1Nks`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(O, {
                                            BSyxhptbW: `Subscription plans`,
                                            height: `100%`,
                                            id: `ykbSk1Nks`,
                                            layoutId: `ykbSk1Nks`,
                                            variant: V(`dVqc43eR9`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      a(c, {
                                        __fromCanvasComponent: !0,
                                        children: a(n, {
                                          children: a(`h1`, {
                                            className: `framer-styles-preset-c64y67`,
                                            "data-styles-preset": `uf55qntp3`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                            },
                                            children: `Transparent pricing without hidden fees`,
                                          }),
                                        }),
                                        className: `framer-dkr7qh`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  a(y, {
                                    breakpoint: v,
                                    overrides: {
                                      Kh7U3FggK: {
                                        width: `min(min(${u?.width || `100vw`}, 1260px) - 40px, 800px)`,
                                      },
                                      xzjn_s8m2: {
                                        width: `min(min(${u?.width || `100vw`}, 1260px) - 32px, 800px)`,
                                      },
                                    },
                                    children: a(_, {
                                      height: 807,
                                      width: `min(min(${u?.width || `100vw`}, 1260px) - 60px, 800px)`,
                                      children: a(M, {
                                        animate: ut,
                                        className: `framer-xkqwfa-container`,
                                        "data-framer-appear-id": `xkqwfa`,
                                        initial: B,
                                        nodeId: `D7zFRw_Gd`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `TbHzfliLr`,
                                        children: a(y, {
                                          breakpoint: v,
                                          overrides: {
                                            Kh7U3FggK: { variant: V(`GgMHH0p4y`) },
                                            xzjn_s8m2: { variant: V(`T4SQdc4EG`) },
                                          },
                                          children: a(D, {
                                            height: `100%`,
                                            id: `D7zFRw_Gd`,
                                            layoutId: `D7zFRw_Gd`,
                                            style: { maxWidth: `100%`, width: `100%` },
                                            variant: V(`UH10pDOG6`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            o(`div`, {
                              className: `framer-y3jlk5`,
                              "data-framer-name": `BG Item`,
                              children: [
                                a(`div`, {
                                  className: `framer-ldt9hd`,
                                  "data-framer-name": `BG Overlay`,
                                }),
                                a(g, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    intrinsicHeight: 1600,
                                    intrinsicWidth: 1920,
                                    pixelHeight: 1600,
                                    pixelWidth: 1920,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `max(${u?.width || `100vw`}, 1px)`,
                                    src: `../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg`,
                                    srcSet: `../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg?scale-down-to=512&width=1920&height=1600 512w,../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg?scale-down-to=1024&width=1920&height=1600 1024w,../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg 1920w`,
                                  },
                                  className: `framer-s7nygx`,
                                  "data-framer-name": `BG Image`,
                                }),
                              ],
                            }),
                            S() &&
                              a(g, {
                                background: {
                                  alt: `Cloud Image`,
                                  fit: `fit`,
                                  intrinsicHeight: 689,
                                  intrinsicWidth: 1185,
                                  pixelHeight: 689,
                                  pixelWidth: 1185,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `601.9594px`,
                                  src: `../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png?width=1185&height=689`,
                                  srcSet: `../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png?scale-down-to=512&width=1185&height=689 512w,../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png 1024w,../../assets/images/Rorgfh4qpKNsZyFzGNQ9wt5C0i4.png?width=1185&height=689 1185w`,
                                },
                                className: `framer-16c7nhh hidden-u4zjo7 hidden-zkk48y`,
                                "data-framer-name": `Cloud 01`,
                                fitImageDimension: `width`,
                              }),
                            S() &&
                              a(g, {
                                background: {
                                  alt: `Cloud Image`,
                                  fit: `fit`,
                                  intrinsicHeight: 714,
                                  intrinsicWidth: 1192,
                                  pixelHeight: 714,
                                  pixelWidth: 1192,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `584.3137px`,
                                  src: `../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png?width=1192&height=714`,
                                  srcSet: `../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png?scale-down-to=512&width=1192&height=714 512w,../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png 1024w,../../assets/images/lSZuKptayJeB4Xcw10qjE7IisQw.png?width=1192&height=714 1192w`,
                                },
                                className: `framer-gh7zta hidden-u4zjo7 hidden-zkk48y`,
                                "data-framer-name": `Cloud 03`,
                                fitImageDimension: `width`,
                              }),
                          ],
                        }),
                        a(`section`, {
                          className: `framer-uvijj1`,
                          "data-framer-name": `Client`,
                          children: a(`div`, {
                            className: `framer-1t3nd7m`,
                            "data-framer-name": `Container`,
                            children: o(F, {
                              __framer__animate: { transition: z },
                              __framer__animateOnce: !0,
                              __framer__enter: U,
                              __framer__exit: W,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-uxe1gk`,
                              "data-framer-name": `Content`,
                              children: [
                                a(`div`, {
                                  className: `framer-1a86d0b`,
                                  "data-framer-name": `Fade Left`,
                                }),
                                a(`div`, {
                                  className: `framer-1eq7nld`,
                                  "data-framer-name": `Fade Right`,
                                }),
                                o(`div`, {
                                  className: `framer-bw66ui`,
                                  "data-framer-name": `Pre Title`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-d54jjb`,
                                      "data-framer-name": `Line`,
                                    }),
                                    a(_, {
                                      height: 38,
                                      children: a(h, {
                                        className: `framer-1vj2m56-container`,
                                        nodeId: `DhrwmJBmp`,
                                        scopeId: `TbHzfliLr`,
                                        children: a(O, {
                                          BSyxhptbW: `Trusted by investors and financial teams`,
                                          height: `100%`,
                                          id: `DhrwmJBmp`,
                                          layoutId: `DhrwmJBmp`,
                                          variant: V(`dVqc43eR9`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                o(P, {
                                  className: `framer-zn2uiy`,
                                  "data-framer-name": `Ticker`,
                                  tickerEffectAlign: `center`,
                                  tickerEffectDirectionModifier: `default`,
                                  tickerEffectDraggable: !1,
                                  tickerEffectEnabled: !0,
                                  tickerEffectGap: `70px`,
                                  tickerEffectHoverModifier: 10,
                                  tickerEffectOverflow: `clip`,
                                  tickerEffectPosition: `relative`,
                                  tickerEffectStackDirection: `row`,
                                  tickerEffectVelocity: 20,
                                  children: [
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-1ihb4pj-container`,
                                          nodeId: `oLMXDI1c2`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `oLMXDI1c2`,
                                            layoutId: `oLMXDI1c2`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 28,
                                                pixelWidth: 130,
                                                src: `../../assets/images/zzy3Hy80EnMAcFDNkN3NKywrws.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-1ptca6o-container`,
                                          nodeId: `SfzZ8_RM4`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `SfzZ8_RM4`,
                                            layoutId: `SfzZ8_RM4`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-7b0nkj-container`,
                                          nodeId: `MygKGPuiV`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `MygKGPuiV`,
                                            layoutId: `MygKGPuiV`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 37,
                                                pixelWidth: 130,
                                                src: `../../assets/images/yGSAR2BPJR4R5RavxHMin7aaQ.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-3vcwgk-container`,
                                          nodeId: `yPbL8uYAh`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `yPbL8uYAh`,
                                            layoutId: `yPbL8uYAh`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 29,
                                                pixelWidth: 130,
                                                src: `../../assets/images/Q4NOfouamWGgk3UFlEHpVqoh1g.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-ypb83c-container`,
                                          nodeId: `FYQXKG3Tb`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `FYQXKG3Tb`,
                                            layoutId: `FYQXKG3Tb`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 28,
                                                pixelWidth: 130,
                                                src: `../../assets/images/5nGuSZAwRT4NRfDDIZujzQtZZWE.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-wys12i-container`,
                                          nodeId: `K4z2JYcjW`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `K4z2JYcjW`,
                                            layoutId: `K4z2JYcjW`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 28,
                                                pixelWidth: 130,
                                                src: `../../assets/images/DBUwDF8TyuYlJjEnFZLTmnkqZlc.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-tfhdju-container`,
                                          nodeId: `CL5K06ce6`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `CL5K06ce6`,
                                            layoutId: `CL5K06ce6`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 32,
                                                pixelWidth: 130,
                                                src: `../../assets/images/S6mPNLdVr3HXs5RKDjK6oOoGA8s.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-1cfcfdf-container`,
                                          nodeId: `mCR48sGwJ`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `mCR48sGwJ`,
                                            layoutId: `mCR48sGwJ`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 29,
                                                pixelWidth: 130,
                                                src: `../../assets/images/IGCk8ybXXrx7eiHCx1ShUDNZM.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-m7geau-container`,
                                          nodeId: `m_IT7A3fS`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `m_IT7A3fS`,
                                            layoutId: `m_IT7A3fS`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 31,
                                                pixelWidth: 130,
                                                src: `../../assets/images/i3wMGgeQf62mFsJKEN8286Rro.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-1kyhljz-container`,
                                          nodeId: `i6bTcs4bM`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `i6bTcs4bM`,
                                            layoutId: `i6bTcs4bM`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 28,
                                                pixelWidth: 130,
                                                src: `../../assets/images/xY23GtEZUG32O0u9umhbJ1nvk.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(m, {
                                      children: a(_, {
                                        height: 20,
                                        children: a(h, {
                                          className: `framer-1qkan0f-container`,
                                          nodeId: `B2Zy1eaOX`,
                                          scopeId: `TbHzfliLr`,
                                          children: a(w, {
                                            height: `100%`,
                                            id: `B2Zy1eaOX`,
                                            layoutId: `B2Zy1eaOX`,
                                            width: `100%`,
                                            zDJH8fw1b: G(
                                              {
                                                pixelHeight: 28,
                                                pixelWidth: 130,
                                                src: `../../assets/images/4VQV9nkj7FeFolOWQKOgtWtu5G0.svg`,
                                              },
                                              `Client Logo`
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                a(`div`, {
                                  className: `framer-15ko1su`,
                                  "data-framer-name": `Line`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        o(`section`, {
                          className: `framer-1mvz1b6`,
                          "data-framer-name": `Testimonial`,
                          children: [
                            a(`div`, {
                              className: `framer-12rzumb`,
                              "data-framer-name": `Container`,
                              children: o(`div`, {
                                className: `framer-cxsyq`,
                                "data-framer-name": `Content`,
                                children: [
                                  o(F, {
                                    __framer__animate: { transition: z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: U,
                                    __framer__exit: W,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-ic4qmq`,
                                    "data-framer-name": `Left`,
                                    children: [
                                      a(c, {
                                        __fromCanvasComponent: !0,
                                        children: a(n, {
                                          children: a(`h2`, {
                                            className: `framer-styles-preset-140jh7d`,
                                            "data-styles-preset": `vxo9lP1tq`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                            },
                                            children: `What investors say about the platform`,
                                          }),
                                        }),
                                        className: `framer-ea96yj`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(`div`, {
                                        className: `framer-16ej03z`,
                                        "data-framer-name": `List`,
                                        children: [
                                          a(_, {
                                            height: 22,
                                            children: a(h, {
                                              className: `framer-1re7ia3-container`,
                                              nodeId: `q3_1AYg0O`,
                                              scopeId: `TbHzfliLr`,
                                              children: a(T, {
                                                GmSs_KKEi: `4.8/5 Rating`,
                                                height: `100%`,
                                                id: `q3_1AYg0O`,
                                                layoutId: `q3_1AYg0O`,
                                                uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                variant: V(`GLuZpuSO3`),
                                                width: `100%`,
                                                XMCDOSojK: G(
                                                  {
                                                    pixelHeight: 18,
                                                    pixelWidth: 19,
                                                    src: `../../assets/images/DR5ESv57oR37TVFwEH7Mx1yI0.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
                                            }),
                                          }),
                                          a(`div`, {
                                            className: `framer-y3sxz6`,
                                            "data-framer-name": `Line`,
                                          }),
                                          a(_, {
                                            height: 22,
                                            children: a(h, {
                                              className: `framer-1qfecc3-container`,
                                              nodeId: `Ve3HERQrn`,
                                              scopeId: `TbHzfliLr`,
                                              children: a(T, {
                                                GmSs_KKEi: `75+ testimonials`,
                                                height: `100%`,
                                                id: `Ve3HERQrn`,
                                                layoutId: `Ve3HERQrn`,
                                                uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                variant: V(`GLuZpuSO3`),
                                                width: `100%`,
                                                XMCDOSojK: G(
                                                  {
                                                    pixelHeight: 18,
                                                    pixelWidth: 20,
                                                    src: `../../assets/images/aljF5lhKI0wLwJbLJN7Va9tNyCI.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
                                            }),
                                          }),
                                          a(`div`, {
                                            className: `framer-8mpplp`,
                                            "data-framer-name": `Line`,
                                          }),
                                          a(_, {
                                            height: 22,
                                            children: a(h, {
                                              className: `framer-rod72t-container`,
                                              nodeId: `gts5M0YKa`,
                                              scopeId: `TbHzfliLr`,
                                              children: a(T, {
                                                GmSs_KKEi: `12K+ growth community`,
                                                height: `100%`,
                                                id: `gts5M0YKa`,
                                                layoutId: `gts5M0YKa`,
                                                uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                variant: V(`GLuZpuSO3`),
                                                width: `100%`,
                                                XMCDOSojK: G(
                                                  {
                                                    pixelHeight: 18,
                                                    pixelWidth: 24,
                                                    src: `../../assets/images/haC1N7nJkCBSyVJF33CEFhE4Ls.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a(y, {
                                    breakpoint: v,
                                    overrides: {
                                      Kh7U3FggK: {
                                        height: 300,
                                        width: `max((min(${u?.width || `100vw`}, 1260px) - 70px) / 2, 50px)`,
                                      },
                                      xzjn_s8m2: {
                                        height: 300,
                                        width: `max(min(${u?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                      },
                                    },
                                    children: a(_, {
                                      width: `max((min(${u?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                      children: a(R, {
                                        __framer__animate: { transition: H },
                                        __framer__animateOnce: !0,
                                        __framer__enter: U,
                                        __framer__exit: K,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-13ztjhw-container`,
                                        nodeId: `gYP2kHRSP`,
                                        rendersWithMotion: !0,
                                        scopeId: `TbHzfliLr`,
                                        children: a(y, {
                                          breakpoint: v,
                                          overrides: {
                                            xzjn_s8m2: {
                                              lP_2UgiNa: `20px`,
                                              variant: V(`qtUc6Oe2H`),
                                            },
                                          },
                                          children: a(E, {
                                            c_6S1GWN5: G(
                                              {
                                                pixelHeight: 920,
                                                pixelWidth: 800,
                                                src: `../../assets/images/7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg`,
                                                srcSet: `../../assets/images/7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg 800w`,
                                              },
                                              `Avatar`
                                            ),
                                            height: `100%`,
                                            id: `gYP2kHRSP`,
                                            layoutId: `gYP2kHRSP`,
                                            lP_2UgiNa: `40px`,
                                            ltvSVWkDz: `David Miller`,
                                            njvQGMtNX: `This platform helped me understand my portfolio in ways I couldn’t before. The insights are clear and actually useful.`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: V(`Vf9ggY25D`),
                                            vG_YeqZ3L: `Individual Investor`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(y, {
                                    breakpoint: v,
                                    overrides: {
                                      Kh7U3FggK: {
                                        width: `max((min(${u?.width || `100vw`}, 1260px) - 70px) / 2, 50px)`,
                                      },
                                      xzjn_s8m2: {
                                        width: `max(min(${u?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                      },
                                    },
                                    children: a(_, {
                                      height: 300,
                                      width: `max((min(${u?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                      children: a(R, {
                                        __framer__animate: { transition: q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: U,
                                        __framer__exit: J,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1shhocf-container`,
                                        nodeId: `jqQi_8cjW`,
                                        rendersWithMotion: !0,
                                        scopeId: `TbHzfliLr`,
                                        children: a(y, {
                                          breakpoint: v,
                                          overrides: {
                                            xzjn_s8m2: {
                                              lP_2UgiNa: `20px`,
                                              variant: V(`qtUc6Oe2H`),
                                            },
                                          },
                                          children: a(E, {
                                            c_6S1GWN5: G(
                                              {
                                                pixelHeight: 150,
                                                pixelWidth: 150,
                                                src: `../../assets/images/hYfCvJ3IVdEznEOwIQiiAxWOsPY.jpg`,
                                              },
                                              `Avatar`
                                            ),
                                            height: `100%`,
                                            id: `jqQi_8cjW`,
                                            layoutId: `jqQi_8cjW`,
                                            lP_2UgiNa: `40px`,
                                            ltvSVWkDz: `Sarah Thompson`,
                                            njvQGMtNX: `Managing multiple portfolios is much easier now. The risk analysis tools save us hours every week.`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: V(`Vf9ggY25D`),
                                            vG_YeqZ3L: `Wealth Manager`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(y, {
                                    breakpoint: v,
                                    overrides: {
                                      Kh7U3FggK: {
                                        width: `max((min(${u?.width || `100vw`}, 1260px) - 70px) / 2, 50px)`,
                                      },
                                      xzjn_s8m2: {
                                        width: `max(min(${u?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                      },
                                    },
                                    children: a(_, {
                                      height: 300,
                                      width: `max((min(${u?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                      children: a(R, {
                                        __framer__animate: { transition: Y },
                                        __framer__animateOnce: !0,
                                        __framer__enter: U,
                                        __framer__exit: dt,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1ejiwqe-container`,
                                        nodeId: `KGecKWOA7`,
                                        rendersWithMotion: !0,
                                        scopeId: `TbHzfliLr`,
                                        children: a(y, {
                                          breakpoint: v,
                                          overrides: {
                                            xzjn_s8m2: {
                                              lP_2UgiNa: `20px`,
                                              variant: V(`qtUc6Oe2H`),
                                            },
                                          },
                                          children: a(E, {
                                            c_6S1GWN5: G(
                                              {
                                                pixelHeight: 150,
                                                pixelWidth: 150,
                                                src: `../../assets/images/622M5cyJBdKPIK1fPnBlo3qONk.jpg`,
                                              },
                                              `Avatar`
                                            ),
                                            height: `100%`,
                                            id: `KGecKWOA7`,
                                            layoutId: `KGecKWOA7`,
                                            lP_2UgiNa: `40px`,
                                            ltvSVWkDz: `Michael Chen`,
                                            njvQGMtNX: `The real-time insights and alerts help me react faster to market changes. It’s become part of my daily workflow.`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: V(`Vf9ggY25D`),
                                            vG_YeqZ3L: `Active Trader`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(y, {
                                    breakpoint: v,
                                    overrides: {
                                      Kh7U3FggK: {
                                        width: `max((min(${u?.width || `100vw`}, 1260px) - 70px) / 2, 50px)`,
                                      },
                                      xzjn_s8m2: {
                                        width: `max(min(${u?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                      },
                                    },
                                    children: a(_, {
                                      height: 300,
                                      width: `max((min(${u?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                      children: a(R, {
                                        __framer__animate: { transition: X },
                                        __framer__animateOnce: !0,
                                        __framer__enter: U,
                                        __framer__exit: ft,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-flxg4o-container`,
                                        nodeId: `YV2xGuKrD`,
                                        rendersWithMotion: !0,
                                        scopeId: `TbHzfliLr`,
                                        children: a(y, {
                                          breakpoint: v,
                                          overrides: {
                                            xzjn_s8m2: {
                                              lP_2UgiNa: `20px`,
                                              variant: V(`qtUc6Oe2H`),
                                            },
                                          },
                                          children: a(E, {
                                            c_6S1GWN5: G(
                                              {
                                                pixelHeight: 150,
                                                pixelWidth: 150,
                                                src: `../../assets/images/W13V3WO2YwDah4yBxCcZc70Es.jpg`,
                                              },
                                              `Avatar`
                                            ),
                                            height: `100%`,
                                            id: `YV2xGuKrD`,
                                            layoutId: `YV2xGuKrD`,
                                            lP_2UgiNa: `40px`,
                                            ltvSVWkDz: `Emily Rodriguez`,
                                            njvQGMtNX: `The data visualization and analytics make complex financial data much easier to interpret.`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: V(`Vf9ggY25D`),
                                            vG_YeqZ3L: `Financial Analyst`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            o(`div`, {
                              className: `framer-5jv4k5`,
                              "data-framer-name": `BG Item`,
                              children: [
                                a(`div`, {
                                  className: `framer-1pg1kgt`,
                                  "data-framer-name": `BG Top`,
                                }),
                                a(`div`, {
                                  className: `framer-1emeprs`,
                                  "data-framer-name": `BG Bottom`,
                                }),
                                a(g, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    intrinsicHeight: 1080,
                                    intrinsicWidth: 1920,
                                    pixelHeight: 1080,
                                    pixelWidth: 1920,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `max(${u?.width || `100vw`}, 1px)`,
                                    src: `../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg`,
                                    srcSet: `../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg?scale-down-to=1024&width=1920&height=1080 1024w,../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg 1920w`,
                                  },
                                  className: `framer-1rt37ef`,
                                  "data-framer-name": `BG Image`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        a(`section`, {
                          className: `framer-1ikobpm`,
                          "data-framer-name": `FAQs`,
                          children: a(`div`, {
                            className: `framer-i1np8c`,
                            "data-framer-name": `Container`,
                            children: o(`div`, {
                              className: `framer-q0cmgb`,
                              "data-framer-name": `Content`,
                              children: [
                                o(F, {
                                  __framer__animate: { transition: z },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: W,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-lx2jn1`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    a(c, {
                                      __fromCanvasComponent: !0,
                                      children: a(n, {
                                        children: a(`h2`, {
                                          className: `framer-styles-preset-140jh7d`,
                                          "data-styles-preset": `vxo9lP1tq`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                          },
                                          children: `Frequently asked questions`,
                                        }),
                                      }),
                                      className: `framer-102860k`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(c, {
                                      __fromCanvasComponent: !0,
                                      children: a(n, {
                                        children: a(`p`, {
                                          className: `framer-styles-preset-n7iy3a`,
                                          "data-styles-preset": `EpfgTb3LW`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                          },
                                          children: `Find quick answers to common questions about the platform, pricing, and security.`,
                                        }),
                                      }),
                                      className: `framer-1eepiu4`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                o($e, {
                                  __framer__animate: { transition: H },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: K,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1jl8op`,
                                  "data-framer-name": `Accordion Wrapper`,
                                  flowEffectEnabled: !0,
                                  flowEffectTransition: pt,
                                  isNestedFlowEffect: !1,
                                  children: [
                                    a(y, {
                                      breakpoint: v,
                                      overrides: {
                                        Kh7U3FggK: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 40px)`,
                                        },
                                        xzjn_s8m2: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 32px)`,
                                        },
                                      },
                                      children: a(_, {
                                        height: 70,
                                        width: `calc(min(${u?.width || `100vw`}, 860px) - 60px)`,
                                        children: a(h, {
                                          className: `framer-ibodxg-container`,
                                          layout: `position`,
                                          nodeId: `fShPlRrmF`,
                                          rendersWithMotion: !0,
                                          scopeId: `TbHzfliLr`,
                                          children: a(y, {
                                            breakpoint: v,
                                            overrides: { xzjn_s8m2: { variant: V(`I6yIM5iJA`) } },
                                            children: a(k, {
                                              Cem09IVM0: `How secure is my financial data?`,
                                              height: `100%`,
                                              id: `fShPlRrmF`,
                                              layoutId: `fShPlRrmF`,
                                              NV3c2dGIv: `Your data is protected with industry-standard encryption and secure infrastructure. We follow strict security practices to ensure your financial information remains private and safe.`,
                                              style: { width: `100%` },
                                              variant: V(`zSlT2gi2H`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(y, {
                                      breakpoint: v,
                                      overrides: {
                                        Kh7U3FggK: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 40px)`,
                                        },
                                        xzjn_s8m2: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 32px)`,
                                        },
                                      },
                                      children: a(_, {
                                        height: 70,
                                        width: `calc(min(${u?.width || `100vw`}, 860px) - 60px)`,
                                        children: a(h, {
                                          className: `framer-1rzfbyi-container`,
                                          layout: `position`,
                                          nodeId: `oECRs0qYN`,
                                          rendersWithMotion: !0,
                                          scopeId: `TbHzfliLr`,
                                          children: a(y, {
                                            breakpoint: v,
                                            overrides: { xzjn_s8m2: { variant: V(`ciPb55D8c`) } },
                                            children: a(k, {
                                              Cem09IVM0: `Can I connect multiple investment accounts?`,
                                              height: `100%`,
                                              id: `oECRs0qYN`,
                                              layoutId: `oECRs0qYN`,
                                              NV3c2dGIv: `Yes. You can securely connect multiple bank, trading, and investment accounts to track everything in one unified dashboard.`,
                                              style: { width: `100%` },
                                              variant: V(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(y, {
                                      breakpoint: v,
                                      overrides: {
                                        Kh7U3FggK: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 40px)`,
                                        },
                                        xzjn_s8m2: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 32px)`,
                                        },
                                      },
                                      children: a(_, {
                                        height: 70,
                                        width: `calc(min(${u?.width || `100vw`}, 860px) - 60px)`,
                                        children: a(h, {
                                          className: `framer-1r7n39i-container`,
                                          layout: `position`,
                                          nodeId: `uNkBItjir`,
                                          rendersWithMotion: !0,
                                          scopeId: `TbHzfliLr`,
                                          children: a(y, {
                                            breakpoint: v,
                                            overrides: { xzjn_s8m2: { variant: V(`ciPb55D8c`) } },
                                            children: a(k, {
                                              Cem09IVM0: `How do the AI insights work?`,
                                              height: `100%`,
                                              id: `uNkBItjir`,
                                              layoutId: `uNkBItjir`,
                                              NV3c2dGIv: `Our AI analyzes market trends, portfolio performance, and risk signals to generate insights that help you make smarter investment decisions.`,
                                              style: { width: `100%` },
                                              variant: V(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(y, {
                                      breakpoint: v,
                                      overrides: {
                                        Kh7U3FggK: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 40px)`,
                                        },
                                        xzjn_s8m2: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 32px)`,
                                        },
                                      },
                                      children: a(_, {
                                        height: 70,
                                        width: `calc(min(${u?.width || `100vw`}, 860px) - 60px)`,
                                        children: a(h, {
                                          className: `framer-qftuf9-container`,
                                          layout: `position`,
                                          nodeId: `hFt5xDPhM`,
                                          rendersWithMotion: !0,
                                          scopeId: `TbHzfliLr`,
                                          children: a(y, {
                                            breakpoint: v,
                                            overrides: { xzjn_s8m2: { variant: V(`ciPb55D8c`) } },
                                            children: a(k, {
                                              Cem09IVM0: `Is there a trial available before subscribing?`,
                                              height: `100%`,
                                              id: `hFt5xDPhM`,
                                              layoutId: `hFt5xDPhM`,
                                              NV3c2dGIv: `Yes. You can explore the platform with a trial period to understand how the features work before choosing a paid plan.`,
                                              style: { width: `100%` },
                                              variant: V(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    a(y, {
                                      breakpoint: v,
                                      overrides: {
                                        Kh7U3FggK: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 40px)`,
                                        },
                                        xzjn_s8m2: {
                                          width: `calc(min(${u?.width || `100vw`}, 860px) - 32px)`,
                                        },
                                      },
                                      children: a(_, {
                                        height: 70,
                                        width: `calc(min(${u?.width || `100vw`}, 860px) - 60px)`,
                                        children: a(h, {
                                          className: `framer-1fh3vgs-container`,
                                          layout: `position`,
                                          nodeId: `VTf0QfJlJ`,
                                          rendersWithMotion: !0,
                                          scopeId: `TbHzfliLr`,
                                          children: a(y, {
                                            breakpoint: v,
                                            overrides: { xzjn_s8m2: { variant: V(`ciPb55D8c`) } },
                                            children: a(k, {
                                              Cem09IVM0: `Do you offer plans for financial teams or organizations?`,
                                              height: `100%`,
                                              id: `VTf0QfJlJ`,
                                              layoutId: `VTf0QfJlJ`,
                                              NV3c2dGIv: `Yes. We offer enterprise solutions designed for financial teams and institutions. You can contact our sales team to discuss custom requirements.`,
                                              style: { width: `100%` },
                                              variant: V(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                o(F, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-8wienk`,
                                  "data-framer-name": `CTA`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-q2xjox`,
                                      "data-framer-name": `Top`,
                                      children: [
                                        a(c, {
                                          __fromCanvasComponent: !0,
                                          children: a(n, {
                                            children: a(`h3`, {
                                              className: `framer-styles-preset-1m8gun7`,
                                              "data-styles-preset": `k6zcj6FY_`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `Still have questions?`,
                                            }),
                                          }),
                                          className: `framer-1bzyxy9`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(c, {
                                          __fromCanvasComponent: !0,
                                          children: a(n, {
                                            children: a(`p`, {
                                              className: `framer-styles-preset-1couuo6`,
                                              "data-styles-preset": `Lb6ff2C_Q`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `Reach out and our team will guide you.`,
                                            }),
                                          }),
                                          className: `framer-1aqtaxe`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    a(ue, {
                                      links: [
                                        {
                                          href: { webPageId: `fX4X9meU8` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `fX4X9meU8` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `fX4X9meU8` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        a(_, {
                                          height: 59,
                                          children: a(h, {
                                            className: `framer-1meum7p-container`,
                                            nodeId: `oWf9H9SW1`,
                                            scopeId: `TbHzfliLr`,
                                            children: a(y, {
                                              breakpoint: v,
                                              overrides: {
                                                Kh7U3FggK: {
                                                  gayKxTIvB: e[1],
                                                  variant: V(`n9A7jxl3z`),
                                                },
                                                xzjn_s8m2: {
                                                  gayKxTIvB: e[2],
                                                  variant: V(`n9A7jxl3z`),
                                                },
                                              },
                                              children: a(C, {
                                                gayKxTIvB: e[0],
                                                height: `100%`,
                                                id: `oWf9H9SW1`,
                                                layoutId: `oWf9H9SW1`,
                                                uYcQ8rJi0: !1,
                                                variant: V(`KVSDvWZoH`),
                                                width: `100%`,
                                                ziCnPH11n: `Talk to our team`,
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        a(_, {
                          children: a(h, {
                            className: `framer-45hbsp-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `lmw8oIXer`,
                            scopeId: `TbHzfliLr`,
                            children: a(Ce, {
                              height: `100%`,
                              id: `lmw8oIXer`,
                              intensity: 15,
                              layoutId: `lmw8oIXer`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    a(_, {
                      children: a(h, {
                        className: `framer-nx7pvz-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: x,
                        layoutScroll: !0,
                        nodeId: `jpr5gth6F`,
                        scopeId: `TbHzfliLr`,
                        children: a(be, {
                          blur: 10,
                          borderRadius: `0px`,
                          direction: `to top`,
                          height: `100%`,
                          id: `jpr5gth6F`,
                          layoutId: `jpr5gth6F`,
                          style: { height: `100%`, width: `100%` },
                          transition: { duration: 0, type: `tween` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-LQDF2.framer-1v68twc, .framer-LQDF2 .framer-1v68twc { display: block; }`,
        `.framer-LQDF2.framer-8q6d0u { align-content: center; align-items: center; background-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-LQDF2 .framer-1h2sryi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-xu1r3q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 194px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-c0ftfw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1260px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-LQDF2 .framer-3897qi, .framer-LQDF2 .framer-q0cmgb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-y21xm0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LQDF2 .framer-17vpk3s-container, .framer-LQDF2 .framer-1vj2m56-container, .framer-LQDF2 .framer-1ihb4pj-container, .framer-LQDF2 .framer-1ptca6o-container, .framer-LQDF2 .framer-7b0nkj-container, .framer-LQDF2 .framer-3vcwgk-container, .framer-LQDF2 .framer-ypb83c-container, .framer-LQDF2 .framer-wys12i-container, .framer-LQDF2 .framer-tfhdju-container, .framer-LQDF2 .framer-1cfcfdf-container, .framer-LQDF2 .framer-m7geau-container, .framer-LQDF2 .framer-1kyhljz-container, .framer-LQDF2 .framer-1qkan0f-container, .framer-LQDF2 .framer-1re7ia3-container, .framer-LQDF2 .framer-1qfecc3-container, .framer-LQDF2 .framer-rod72t-container, .framer-LQDF2 .framer-1meum7p-container, .framer-LQDF2 .framer-45hbsp-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-LQDF2 .framer-dkr7qh, .framer-LQDF2 .framer-ea96yj, .framer-LQDF2 .framer-102860k, .framer-LQDF2 .framer-1eepiu4, .framer-LQDF2 .framer-1bzyxy9, .framer-LQDF2 .framer-1aqtaxe { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-xkqwfa-container { flex: none; height: auto; max-width: 800px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LQDF2 .framer-y3jlk5, .framer-LQDF2 .framer-5jv4k5 { -webkit-user-select: none; align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-LQDF2 .framer-ldt9hd { background: linear-gradient(180deg, var(--token-e266aeaf-00d6-433e-94f9-0ad61361974f, rgba(255, 255, 255, 0.3)) 19%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 36%); bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-LQDF2 .framer-s7nygx, .framer-LQDF2 .framer-1rt37ef { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-LQDF2 .framer-16c7nhh { -webkit-user-select: none; flex: none; height: 350px; left: -50px; opacity: 0.8; overflow: visible; pointer-events: none; position: absolute; top: 50px; user-select: none; width: auto; z-index: 1; }`,
        `.framer-LQDF2 .framer-gh7zta { -webkit-user-select: none; flex: none; height: 350px; opacity: 0.8; overflow: visible; pointer-events: none; position: absolute; right: 30px; top: -150px; user-select: none; width: auto; z-index: 1; }`,
        `.framer-LQDF2 .framer-uvijj1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-1t3nd7m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1260px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-uxe1gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-1a86d0b { background: linear-gradient(90deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 10px; flex: none; left: 0px; overflow: visible; position: absolute; top: 40px; width: 80px; z-index: 1; }`,
        `.framer-LQDF2 .framer-1eq7nld { background: linear-gradient(270deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 10px; flex: none; overflow: visible; position: absolute; right: 0px; top: 40px; width: 80px; z-index: 1; }`,
        `.framer-LQDF2 .framer-bw66ui { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-d54jjb { -webkit-user-select: none; background: linear-gradient(90deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186)) 50%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: calc(50.00000000000002% - 1px / 2); user-select: none; z-index: 0; }`,
        `.framer-LQDF2 .framer-zn2uiy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-15ko1su { -webkit-user-select: none; background: linear-gradient(90deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186)) 50%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 0px; flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 0; }`,
        `.framer-LQDF2 .framer-1mvz1b6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-12rzumb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-LQDF2 .framer-cxsyq { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-ic4qmq { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-16ej03z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-y3sxz6, .framer-LQDF2 .framer-8mpplp { align-self: stretch; background-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); flex: none; height: auto; opacity: 0.3; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-LQDF2 .framer-13ztjhw-container, .framer-LQDF2 .framer-1shhocf-container, .framer-LQDF2 .framer-1ejiwqe-container, .framer-LQDF2 .framer-flxg4o-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-1pg1kgt { background: linear-gradient(0deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-456a706a-3175-452e-a8be-f8b4e2e708c1, rgba(255, 255, 255, 0.7)) 25%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 50%); flex: none; height: 200px; left: -10px; overflow: visible; position: absolute; right: -10px; top: -1px; z-index: 1; }`,
        `.framer-LQDF2 .framer-1emeprs { background: linear-gradient(180deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-456a706a-3175-452e-a8be-f8b4e2e708c1, rgba(255, 255, 255, 0.7)) 25%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 50%); bottom: -1px; flex: none; height: 200px; left: -10px; overflow: visible; position: absolute; right: -10px; z-index: 1; }`,
        `.framer-LQDF2 .framer-1ikobpm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-i1np8c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 860px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-lx2jn1, .framer-LQDF2 .framer-8wienk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-1jl8op { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-ibodxg-container, .framer-LQDF2 .framer-1rzfbyi-container, .framer-LQDF2 .framer-1r7n39i-container, .framer-LQDF2 .framer-qftuf9-container, .framer-LQDF2 .framer-1fh3vgs-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-q2xjox { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LQDF2 .framer-nx7pvz-container { flex: none; height: 100px; left: 0px; pointer-events: auto; position: fixed; right: 0px; top: 0px; z-index: 8; }`,
        ...Ke,
        ...He,
        ...S,
        ...De,
        ...je,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-LQDF2.framer-8q6d0u { width: 810px; } .framer-LQDF2 .framer-xu1r3q { padding: 158px 0px 0px 0px; } .framer-LQDF2 .framer-c0ftfw, .framer-LQDF2 .framer-1t3nd7m, .framer-LQDF2 .framer-12rzumb, .framer-LQDF2 .framer-i1np8c { padding: 0px 20px 0px 20px; } .framer-LQDF2 .framer-3897qi { gap: 30px; } .framer-LQDF2 .framer-uvijj1 { padding: 80px 0px 0px 0px; } .framer-LQDF2 .framer-1mvz1b6 { padding: 160px 0px 160px 0px; } .framer-LQDF2 .framer-cxsyq { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-LQDF2 .framer-ic4qmq { padding: 0px 0px 20px 0px; } .framer-LQDF2 .framer-1pg1kgt, .framer-LQDF2 .framer-1emeprs { height: 160px; } .framer-LQDF2 .framer-1ikobpm { padding: 0px 0px 60px 0px; } .framer-LQDF2 .framer-q0cmgb { gap: 40px; }}`,
        `@media (max-width: 809.98px) { .framer-LQDF2.framer-8q6d0u { width: 390px; } .framer-LQDF2 .framer-xu1r3q { padding: 128px 0px 0px 0px; } .framer-LQDF2 .framer-c0ftfw, .framer-LQDF2 .framer-1t3nd7m, .framer-LQDF2 .framer-12rzumb, .framer-LQDF2 .framer-i1np8c { padding: 0px 16px 0px 16px; } .framer-LQDF2 .framer-3897qi, .framer-LQDF2 .framer-q0cmgb { gap: 30px; } .framer-LQDF2 .framer-uvijj1 { padding: 60px 0px 0px 0px; } .framer-LQDF2 .framer-1mvz1b6 { padding: 100px 0px 100px 0px; } .framer-LQDF2 .framer-cxsyq { gap: 20px 30px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-LQDF2 .framer-ic4qmq { grid-column: span 1; } .framer-LQDF2 .framer-16ej03z { gap: 10px 10px; } .framer-LQDF2 .framer-1pg1kgt, .framer-LQDF2 .framer-1emeprs { height: 100px; } .framer-LQDF2 .framer-1ikobpm { padding: 0px 0px 30px 0px; } .framer-LQDF2 .framer-1jl8op { gap: 16px; } .framer-LQDF2 .framer-nx7pvz-container { height: 60px; }}`,
      ],
      `framer-LQDF2`
    )),
    (Q.displayName = `Home`),
    (Q.defaultProps = { height: 4534, width: 1200 }),
    ce(
      Q,
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
        ...Ze,
        ...j,
        ...N,
        ...I,
        ...L,
        ...Qe,
        ...et,
        ...tt,
        ...nt,
        ...b(qe),
        ...b(Ue),
        ...b(we),
        ...b(Oe),
        ...b(Me),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          d(O, {}, t),
          d(D, {}, t),
          d(w, {}, t),
          d(T, {}, t),
          d(E, {}, t),
          d(k, {}, t),
          d(C, {}, t),
        ])
      ),
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerTbHzfliLr`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Kh7U3FggK":{"layout":["fixed","fixed"]},"xzjn_s8m2":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `4534`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, at as queryParamNames };
//# sourceMappingURL=QvoKylH37pYo2nbkXTr_yJhq628RS7hpADlIXVmku1E.CKmgwVnv.mjs.map
