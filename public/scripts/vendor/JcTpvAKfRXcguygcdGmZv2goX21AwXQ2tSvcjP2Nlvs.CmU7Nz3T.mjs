import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  L as r,
  N as i,
  P as a,
  R as o,
  _ as s,
  b as c,
  c as l,
  j as u,
  l as d,
  o as f,
} from "./react.C7x6K2rX.mjs";
import { C as p, a as m, r as ee, t as h } from "./motion.BvGXTKSj.mjs";
import {
  A as g,
  B as _,
  C as v,
  Ct as y,
  D as b,
  Dt as x,
  E as S,
  Et as C,
  G as w,
  M as T,
  R as E,
  S as D,
  St as O,
  T as k,
  _t as A,
  a as j,
  bt as M,
  f as N,
  ft as te,
  gt as P,
  i as F,
  j as ne,
  lt as re,
  m as ie,
  mt as ae,
  nt as oe,
  o as I,
  ot as L,
  pt as se,
  rt as ce,
  st as le,
  u as ue,
  vt as de,
  w as fe,
  wt as pe,
  y as R,
  yt as z,
  z as B,
} from "./framer.CF3iZfO7.mjs";
import { i as me, n as he, r as ge, t as _e } from "./OKYo87J9J.-a4HuZwQ.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./xDpw_VO59.ttkzNN47.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./Lb6ff2C_Q.PRibHeT9.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./NwDqOD0lC.DLmwjcON.mjs";
import { a as Ae, i as je, o as Me, r as Ne } from "./shared-lib.BJ5PhJ39.mjs";
import { n as Pe, t as Fe } from "./Aqgkmreum.pdUbRqT4.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./EpfgTb3LW.B_-1zNqo.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./roK1lt6bc.DywWD4Z4.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./k6zcj6FY_.2d0X-ZGI.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./Lb6ff2C_Q.ez8nCVhw.mjs";
import { n as Qe, t as $e } from "./GYN8xEkvd.CextllOa.mjs";
import { n as et, t as V } from "./HcSHdSDmW.B57kuPCT.mjs";
import { n as tt, t as nt } from "./J6sr42DwA.Ckncwpz4.mjs";
import { i as rt, n as it, r as at, t as ot } from "./jUb4JLM3m.BmCPGJgV.mjs";
import { n as st, t as ct } from "./o0wOfTO7b.B5Gke0Rn.mjs";
import {
  a as lt,
  c as ut,
  i as dt,
  l as ft,
  n as pt,
  o as mt,
  r as ht,
  s as gt,
  t as _t,
  u as vt,
} from "./r5vw0kl3E.k_eB_lgG.mjs";
import { n as yt, t as bt } from "./ScX0nH30a.CYCWAQr5.mjs";
import { n as xt, t as St } from "./SpBH48GJo.BN8XxEsu.mjs";
import { n as Ct, t as wt } from "./Tv_uIQK3W.DIpj956B.mjs";
import { i as Tt, n as Et, r as Dt, t as Ot } from "./jUb4JLM3m.CzMGQEZF.mjs";
import { i as kt, n as At, r as jt, t as Mt } from "./vxo9lP1tq.BP5GRaxo.mjs";
import Nt, { t as Pt } from "./xfk2abqNcKSXHQE8ncLO0bWmYYSyEtiS5jGZ1-ozOlQ.C8K0Lefu.mjs";
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (f(),
      w(),
      h(),
      t(),
      Ie(),
      (It = [`oQ7_KK9Ry`, `KLt0rpAcj`, `S7K6hgRTk`]),
      (Lt = `framer-jEhVD`),
      (Rt = {
        KLt0rpAcj: `framer-v-632chi`,
        oQ7_KK9Ry: `framer-v-pns8n`,
        S7K6hgRTk: `framer-v-cabqcy`,
      }),
      (zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Vt = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Ht = { Desktop: `oQ7_KK9Ry`, Phone: `S7K6hgRTk`, Tablet: `KLt0rpAcj` }),
      (Ut = p.create(r)),
      (Wt = ({ content: e, height: t, icon: n, id: r, width: i, ...a }) => ({
        ...a,
        EzLGQv3FE: n ??
          a.EzLGQv3FE ?? {
            alt: `Icon`,
            pixelHeight: 20,
            pixelWidth: 21,
            src: `../../assets/images/9TgPFzikB5iacM06fvtpGu10.svg`,
          },
        RRYAQG22b:
          e ??
          a.RRYAQG22b ??
          `All Your Data in One Place Bring all your accounts, assets, and insights together in one clear, unified view.`,
        variant: Ht[a.variant] ?? a.variant ?? `oQ7_KK9Ry`,
      })),
      (Gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Kt = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te(),
            f = ce(),
            {
              style: m,
              className: h,
              layoutId: y,
              variant: b,
              EzLGQv3FE: x,
              RRYAQG22b: S,
              ...C
            } = Wt(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = z({
              cycleOrder: It,
              defaultVariant: `oQ7_KK9Ry`,
              ref: i,
              variant: b,
              variantClassNames: Rt,
            }),
            P = Gt(e, M),
            F = g(Lt, ze);
          return l(ee, {
            id: y ?? a,
            children: l(Ut, {
              animate: M,
              initial: !1,
              children: l(Vt, {
                value: zt,
                children: d(p.div, {
                  ...C,
                  ...D,
                  className: g(F, `framer-pns8n`, h, T),
                  "data-framer-name": `Desktop`,
                  layoutDependency: P,
                  layoutId: `oQ7_KK9Ry`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...m,
                  },
                  variants: {
                    S7K6hgRTk: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                  },
                  ...Ft(
                    {
                      KLt0rpAcj: { "data-framer-name": `Tablet` },
                      S7K6hgRTk: { "data-framer-name": `Phone` },
                    },
                    w,
                    O
                  ),
                  children: [
                    l(p.div, {
                      className: `framer-gq7lk`,
                      "data-border": !0,
                      "data-framer-name": `Icon`,
                      layoutDependency: P,
                      layoutId: `tFiiVIOg8`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-0810840b-a17e-48e5-b9f0-8da453e4251d, rgba(255, 255, 255, 0.1))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        background: `linear-gradient(135deg, var(--token-60bca774-6ba3-4c34-a431-2fd8d1ea1b8a, rgb(50, 50, 50)) 0%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 100%)`,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      variants: {
                        S7K6hgRTk: {
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                      },
                      children: l(N, {
                        background: {
                          alt: `Icon`,
                          fit: `fit`,
                          intrinsicHeight: 20,
                          intrinsicWidth: 21,
                          loading: _((f?.y || 0) + 30 + 0 + 10),
                          pixelHeight: 20,
                          pixelWidth: 21,
                          sizes: `21px`,
                          ...Bt(x),
                          positionX: `center`,
                          positionY: `center`,
                        },
                        className: `framer-1kjiw8i`,
                        fitImageDimension: `width`,
                        layoutDependency: P,
                        layoutId: `uAtmVq0rX`,
                        ...Ft(
                          {
                            KLt0rpAcj: {
                              background: {
                                alt: `Icon`,
                                fit: `fit`,
                                intrinsicHeight: 20,
                                intrinsicWidth: 21,
                                loading: _((f?.y || 0) + 30 + 0 + 0 + 10),
                                pixelHeight: 20,
                                pixelWidth: 21,
                                sizes: `21px`,
                                ...Bt(x),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                            S7K6hgRTk: {
                              background: {
                                alt: `Icon`,
                                fit: `fit`,
                                intrinsicHeight: 20,
                                intrinsicWidth: 21,
                                loading: _((f?.y || 0) + 20 + 0 + 0 + 9),
                                pixelHeight: 20,
                                pixelWidth: 21,
                                sizes: `16.8px`,
                                ...Bt(x),
                                positionX: `center`,
                                positionY: `center`,
                              },
                            },
                          },
                          w,
                          O
                        ),
                      }),
                    }),
                    l(p.div, {
                      className: `framer-tlmq44`,
                      "data-framer-name": `Content`,
                      layoutDependency: P,
                      layoutId: `V3YiL0qYO`,
                      children: l(v, {
                        __fromCanvasComponent: !0,
                        children: l(r, {
                          children: l(p.p, {
                            className: `framer-styles-preset-n7iy3a`,
                            "data-styles-preset": `EpfgTb3LW`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                            },
                            children: `All Your Data in One Place Bring all your accounts, assets, and insights together in one clear, unified view.`,
                          }),
                        }),
                        className: `framer-11i20af`,
                        fonts: [`Inter`],
                        layoutDependency: P,
                        layoutId: `vDcctjv3b`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: S,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-jEhVD.framer-1ftil0k, .framer-jEhVD .framer-1ftil0k { display: block; }`,
          `.framer-jEhVD.framer-pns8n { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 150px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jEhVD .framer-gq7lk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jEhVD .framer-1kjiw8i { flex: none; height: 20px; overflow: visible; position: relative; width: auto; }`,
          `.framer-jEhVD .framer-tlmq44 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-jEhVD .framer-11i20af { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-jEhVD.framer-v-632chi.framer-pns8n { flex-direction: column; height: 200px; }`,
          `.framer-jEhVD.framer-v-632chi .framer-tlmq44, .framer-jEhVD.framer-v-cabqcy .framer-tlmq44 { flex: none; width: 100%; }`,
          `.framer-jEhVD.framer-v-cabqcy.framer-pns8n { flex-direction: column; gap: 16px; padding: 20px; }`,
          `.framer-jEhVD.framer-v-cabqcy .framer-gq7lk { height: 34px; width: 34px; }`,
          `.framer-jEhVD.framer-v-cabqcy .framer-1kjiw8i { height: 16px; }`,
          `.framer-jEhVD.framer-v-cabqcy .framer-11i20af { max-width: 500px; }`,
          ...Le,
          `.framer-jEhVD[data-border="true"]::after, .framer-jEhVD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-jEhVD`
      )),
      (Kt.displayName = `Overview Card`),
      (Kt.defaultProps = { height: 150, width: 360 }),
      b(Kt, {
        variant: {
          options: [`oQ7_KK9Ry`, `KLt0rpAcj`, `S7K6hgRTk`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: I.Enum,
        },
        EzLGQv3FE: {
          __defaultAssetReference: `data:framer/asset-reference,9TgPFzikB5iacM06fvtpGu10.svg?originalFilename=icon-08.svg&width=21&height=20`,
          __vekterDefault: {
            alt: `Icon`,
            assetReference: `data:framer/asset-reference,9TgPFzikB5iacM06fvtpGu10.svg?originalFilename=icon-08.svg&width=21&height=20`,
          },
          title: `Icon`,
          type: I.ResponsiveImage,
        },
        RRYAQG22b: {
          defaultValue: `All Your Data in One Place Bring all your accounts, assets, and insights together in one clear, unified view.`,
          displayTextArea: !0,
          title: `Content`,
          type: I.String,
        },
        onRRYAQG22bChange: { changes: `RRYAQG22b`, type: I.ChangeHandler },
      }),
      S(
        Kt,
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
          ...B(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Jt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn = e(() => {
    (f(),
      w(),
      h(),
      t(),
      (Yt = [`cQ4sOwQSF`, `mi5BBpoBa`, `jGENgE00C`]),
      (Xt = `framer-Gx9ok`),
      (Zt = {
        cQ4sOwQSF: `framer-v-wpyfiq`,
        jGENgE00C: `framer-v-1grxdhc`,
        mi5BBpoBa: `framer-v-qri6z9`,
      }),
      (Qt = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      ($t = (e, t) => `translateX(-50%) ${t}`),
      (en = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (tn = { "01": `cQ4sOwQSF`, "02": `mi5BBpoBa`, "03": `jGENgE00C` }),
      (nn = p.create(r)),
      (rn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: tn[r.variant] ?? r.variant ?? `cQ4sOwQSF`,
      })),
      (an = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (on = M(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = te(),
            s = ce(),
            { style: f, className: m, layoutId: h, variant: v, ...y } = rn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = z({
              cycleOrder: Yt,
              defaultVariant: `cQ4sOwQSF`,
              ref: r,
              variant: v,
              variantClassNames: Zt,
            }),
            k = an(e, O),
            { activeVariantCallback: A, delay: j } = oe(b),
            M = A(async (...e) => {
              await j(() => D(`mi5BBpoBa`, !0), 3e3);
            }),
            P = A(async (...e) => {
              await j(() => D(`jGENgE00C`, !0), 3e3);
            });
          ae(b, {
            default: M,
            jGENgE00C: A(async (...e) => {
              await j(() => D(`cQ4sOwQSF`, !0), 3e3);
            }),
            mi5BBpoBa: P,
          });
          let F = g(Xt);
          return l(ee, {
            id: h ?? i,
            children: l(nn, {
              animate: O,
              initial: !1,
              children: l(en, {
                value: Qt,
                children: l(p.div, {
                  ...y,
                  ...C,
                  className: g(F, `framer-wpyfiq`, m, x),
                  "data-framer-name": `01`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `cQ4sOwQSF`,
                  ref: r,
                  style: { ...f },
                  ...Jt(
                    {
                      jGENgE00C: { "data-framer-name": `03` },
                      mi5BBpoBa: { "data-framer-name": `02` },
                    },
                    b,
                    w
                  ),
                  children: d(p.div, {
                    className: `framer-1qtq221`,
                    "data-framer-name": `Top`,
                    layoutDependency: k,
                    layoutId: `zzbZdY1g8`,
                    children: [
                      l(N, {
                        background: {
                          alt: `Dashboard`,
                          fit: `fit`,
                          intrinsicHeight: 70,
                          intrinsicWidth: 280,
                          loading: _((s?.y || 0) + 0 + 0 + 0 + 0),
                          pixelHeight: 70,
                          pixelWidth: 280,
                          positionX: `center`,
                          positionY: `center`,
                          sizes: `min(${s?.width || `100vw`}, 280px)`,
                          src: `../../assets/images/e7N84L0vlZQpYYqGdndB2EPeKk.svg`,
                        },
                        className: `framer-l0wo93`,
                        "data-border": !0,
                        "data-framer-name": `01`,
                        fitImageDimension: `height`,
                        layoutDependency: k,
                        layoutId: `PlcF9_ERO`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        ...Jt(
                          {
                            jGENgE00C: {
                              background: {
                                alt: `Dashboard`,
                                fit: `fit`,
                                intrinsicHeight: 70,
                                intrinsicWidth: 280,
                                loading: _((s?.y || 0) + 0 + 0 + 26),
                                pixelHeight: 70,
                                pixelWidth: 280,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc(min(${s?.width || `100vw`}, 280px) * 0.8607)`,
                                src: `../../assets/images/e7N84L0vlZQpYYqGdndB2EPeKk.svg`,
                              },
                              transformTemplate: $t,
                            },
                            mi5BBpoBa: {
                              background: {
                                alt: `Dashboard`,
                                fit: `fit`,
                                intrinsicHeight: 70,
                                intrinsicWidth: 280,
                                loading: _((s?.y || 0) + 0 + 0 + 52),
                                pixelHeight: 70,
                                pixelWidth: 280,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc(min(${s?.width || `100vw`}, 280px) * 0.7214)`,
                                src: `../../assets/images/e7N84L0vlZQpYYqGdndB2EPeKk.svg`,
                              },
                              transformTemplate: $t,
                            },
                          },
                          b,
                          w
                        ),
                      }),
                      l(N, {
                        background: {
                          alt: `Dashboard`,
                          fit: `fit`,
                          intrinsicHeight: 70,
                          intrinsicWidth: 280,
                          loading: _((s?.y || 0) + 0 + 0 + 26),
                          pixelHeight: 70,
                          pixelWidth: 280,
                          positionX: `center`,
                          positionY: `center`,
                          sizes: `calc(min(${s?.width || `100vw`}, 280px) * 0.8607)`,
                          src: `../../assets/images/qRR37bNghXttLizbZI0gYViJtDE.svg`,
                        },
                        className: `framer-1oijqd`,
                        "data-border": !0,
                        "data-framer-name": `02`,
                        fitImageDimension: `height`,
                        layoutDependency: k,
                        layoutId: `OOORmtCo7`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        transformTemplate: $t,
                        ...Jt(
                          {
                            jGENgE00C: {
                              background: {
                                alt: `Dashboard`,
                                fit: `fit`,
                                intrinsicHeight: 70,
                                intrinsicWidth: 280,
                                loading: _((s?.y || 0) + 0 + 0 + 52),
                                pixelHeight: 70,
                                pixelWidth: 280,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc(min(${s?.width || `100vw`}, 280px) * 0.7214)`,
                                src: `../../assets/images/qRR37bNghXttLizbZI0gYViJtDE.svg`,
                              },
                            },
                            mi5BBpoBa: {
                              background: {
                                alt: `Dashboard`,
                                fit: `fit`,
                                intrinsicHeight: 70,
                                intrinsicWidth: 280,
                                loading: _((s?.y || 0) + 0 + 0 + 0 + 0),
                                pixelHeight: 70,
                                pixelWidth: 280,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `min(${s?.width || `100vw`}, 280px)`,
                                src: `../../assets/images/qRR37bNghXttLizbZI0gYViJtDE.svg`,
                              },
                              transformTemplate: void 0,
                            },
                          },
                          b,
                          w
                        ),
                      }),
                      l(N, {
                        background: {
                          alt: `Dashboard`,
                          fit: `fit`,
                          intrinsicHeight: 70,
                          intrinsicWidth: 280,
                          loading: _((s?.y || 0) + 0 + 0 + 52),
                          pixelHeight: 70,
                          pixelWidth: 280,
                          positionX: `center`,
                          positionY: `center`,
                          sizes: `calc(min(${s?.width || `100vw`}, 280px) * 0.7214)`,
                          src: `../../assets/images/KeTabRzcIFVfk1ymsNMeghVPnM.svg`,
                        },
                        className: `framer-dtevcc`,
                        "data-border": !0,
                        "data-framer-name": `03`,
                        fitImageDimension: `height`,
                        layoutDependency: k,
                        layoutId: `NwsKeUEJL`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        transformTemplate: $t,
                        ...Jt(
                          {
                            jGENgE00C: {
                              background: {
                                alt: `Dashboard`,
                                fit: `fit`,
                                intrinsicHeight: 70,
                                intrinsicWidth: 280,
                                loading: _((s?.y || 0) + 0 + 0 + 0 + 0),
                                pixelHeight: 70,
                                pixelWidth: 280,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `min(${s?.width || `100vw`}, 280px)`,
                                src: `../../assets/images/KeTabRzcIFVfk1ymsNMeghVPnM.svg`,
                              },
                              transformTemplate: void 0,
                            },
                            mi5BBpoBa: {
                              background: {
                                alt: `Dashboard`,
                                fit: `fit`,
                                intrinsicHeight: 70,
                                intrinsicWidth: 280,
                                loading: _((s?.y || 0) + 0 + 0 + 26),
                                pixelHeight: 70,
                                pixelWidth: 280,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc(min(${s?.width || `100vw`}, 280px) * 0.8607)`,
                                src: `../../assets/images/KeTabRzcIFVfk1ymsNMeghVPnM.svg`,
                              },
                            },
                          },
                          b,
                          w
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Gx9ok.framer-1lsxw4z, .framer-Gx9ok .framer-1lsxw4z { display: block; }`,
          `.framer-Gx9ok.framer-wpyfiq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 280px; }`,
          `.framer-Gx9ok .framer-1qtq221 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100px; justify-content: flex-start; max-width: 280px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-Gx9ok .framer-l0wo93 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-Gx9ok .framer-1oijqd { flex: none; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 26px; width: 86%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Gx9ok .framer-dtevcc { flex: none; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 52px; width: 72%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-Gx9ok.framer-v-qri6z9 .framer-l0wo93 { left: 50%; position: absolute; top: 52px; width: 72%; z-index: 1; }`,
          `.framer-Gx9ok.framer-v-qri6z9 .framer-1oijqd, .framer-Gx9ok.framer-v-1grxdhc .framer-dtevcc { left: unset; position: relative; top: unset; width: 100%; z-index: 3; }`,
          `.framer-Gx9ok.framer-v-qri6z9 .framer-dtevcc { top: 26px; width: 86%; z-index: 2; }`,
          `.framer-Gx9ok.framer-v-1grxdhc .framer-l0wo93 { left: 50%; position: absolute; top: 26px; width: 86%; z-index: 2; }`,
          `.framer-Gx9ok.framer-v-1grxdhc .framer-1oijqd { top: 52px; width: 72%; z-index: 1; }`,
          `.framer-Gx9ok[data-border="true"]::after, .framer-Gx9ok [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Gx9ok`
      )),
      (on.displayName = `Alert Card`),
      (on.defaultProps = { height: 100, width: 280 }),
      b(on, {
        variant: {
          options: [`cQ4sOwQSF`, `mi5BBpoBa`, `jGENgE00C`],
          optionTitles: [`01`, `02`, `03`],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      S(on, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n = e(() => {
    (f(),
      w(),
      h(),
      t(),
      Ie(),
      Be(),
      (cn = `framer-bZA4Y`),
      (ln = { YtBnflGS7: `framer-v-12efp8d` }),
      (un = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (dn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (fn = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (pn = p.create(r)),
      (mn = ({ avatar: e, content: t, height: n, id: r, jobTitle: i, width: a, ...o }) => ({
        ...o,
        CMopBckjJ: i ?? o.CMopBckjJ ?? ` Founder & CEO`,
        mpFsFmNXl: e ??
          o.mpFsFmNXl ?? {
            alt: `Avatar`,
            pixelHeight: 920,
            pixelWidth: 800,
            src: `../../assets/images/7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg`,
            srcSet: `../../assets/images/7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg 800w`,
          },
        vnUC1BXtk:
          t ??
          o.vnUC1BXtk ??
          `"We built this platform to remove the guesswork from investing and give people clear, data-driven insights."`,
      })),
      (hn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (gn = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te(),
            f = ce(),
            {
              style: m,
              className: h,
              layoutId: y,
              variant: b,
              vnUC1BXtk: x,
              mpFsFmNXl: S,
              CMopBckjJ: C,
              ...w
            } = mn(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: M,
              variants: P,
            } = z({ defaultVariant: `YtBnflGS7`, ref: i, variant: b, variantClassNames: ln }),
            F = hn(e, P),
            ne = g(cn, ze, Ue);
          return l(ee, {
            id: y ?? a,
            children: l(pn, {
              animate: P,
              initial: !1,
              children: l(fn, {
                value: un,
                children: d(p.div, {
                  ...w,
                  ...O,
                  className: g(ne, `framer-12efp8d`, h, E),
                  "data-framer-name": `Desktop`,
                  layoutDependency: F,
                  layoutId: `YtBnflGS7`,
                  ref: i,
                  style: { ...m },
                  children: [
                    l(v, {
                      __fromCanvasComponent: !0,
                      children: l(r, {
                        children: l(p.p, {
                          className: `framer-styles-preset-n7iy3a`,
                          "data-styles-preset": `EpfgTb3LW`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                          },
                          children: `“We built this platform to remove guesswork from investing and give people clear, data-driven decisions.”`,
                        }),
                      }),
                      className: `framer-1uq7f1g`,
                      fonts: [`Inter`],
                      layoutDependency: F,
                      layoutId: `wsEJsa2Lc`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: x,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    d(p.div, {
                      className: `framer-1621ii7`,
                      "data-framer-name": `Bottom`,
                      layoutDependency: F,
                      layoutId: `h9go1lQZ4`,
                      children: [
                        l(N, {
                          background: {
                            alt: `Avatar`,
                            fit: `fill`,
                            intrinsicHeight: 150,
                            intrinsicWidth: 150,
                            loading: _((f?.y || 0) + 0 + 133 + 0),
                            pixelHeight: 920,
                            pixelWidth: 800,
                            sizes: `30px`,
                            ...dn(S),
                          },
                          className: `framer-1jm444d`,
                          "data-framer-name": `Avatar`,
                          layoutDependency: F,
                          layoutId: `c7bjN0I3c`,
                          style: {
                            borderBottomLeftRadius: `50%`,
                            borderBottomRightRadius: `50%`,
                            borderTopLeftRadius: `50%`,
                            borderTopRightRadius: `50%`,
                          },
                        }),
                        l(v, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(p.p, {
                              className: `framer-styles-preset-1bx7rqe`,
                              "data-styles-preset": `roK1lt6bc`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                              },
                              children: ` Founder & CEO`,
                            }),
                          }),
                          className: `framer-7m5ytl`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `FXXH5UYjw`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: C,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-bZA4Y.framer-gfjlw8, .framer-bZA4Y .framer-gfjlw8 { display: block; }`,
          `.framer-bZA4Y.framer-12efp8d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 400px; }`,
          `.framer-bZA4Y .framer-1uq7f1g { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-bZA4Y .framer-1621ii7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-bZA4Y .framer-1jm444d { flex: none; height: 30px; overflow: visible; position: relative; width: 30px; }`,
          `.framer-bZA4Y .framer-7m5ytl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Le,
          ...Ve,
        ],
        `framer-bZA4Y`
      )),
      (gn.displayName = `Founder Card`),
      (gn.defaultProps = { height: 116, width: 400 }),
      b(gn, {
        vnUC1BXtk: {
          defaultValue: `"We built this platform to remove the guesswork from investing and give people clear, data-driven insights."`,
          displayTextArea: !0,
          title: `Content`,
          type: I.String,
        },
        onvnUC1BXtkChange: { changes: `vnUC1BXtk`, type: I.ChangeHandler },
        mpFsFmNXl: {
          __defaultAssetReference: `data:framer/asset-reference,7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg?originalFilename=avatar-18.jpg&width=800&height=920`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg?originalFilename=avatar-18.jpg&width=800&height=920`,
          },
          title: `Avatar`,
          type: I.ResponsiveImage,
        },
        CMopBckjJ: {
          defaultValue: ` Founder & CEO`,
          displayTextArea: !0,
          title: `Job Title`,
          type: I.String,
        },
        onCMopBckjJChange: { changes: `CMopBckjJ`, type: I.ChangeHandler },
      }),
      S(
        gn,
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
          ...B(Re),
          ...B(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn = e(() => {
    (f(),
      w(),
      h(),
      t(),
      (vn = `framer-RBTR4`),
      (yn = { xbyECe97S: `framer-v-1c8lgu0` }),
      (bn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Sn = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Cn = p.create(r)),
      (wn = ({ height: e, id: t, image: n, width: r, ...i }) => ({
        ...i,
        YFcmLHcau: n ??
          i.YFcmLHcau ?? {
            alt: `Avatar`,
            pixelHeight: 120,
            pixelWidth: 120,
            src: `https://framerusercontent.com/images/rvVsRZjAKkiA0nvOxWWVXzG9L6s.jpg?width=120&height=120`,
          },
      })),
      (Tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (En = M(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = te(),
            s = ce(),
            { style: d, className: f, layoutId: m, variant: h, YFcmLHcau: v, ...y } = wn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = z({ defaultVariant: `xbyECe97S`, ref: r, variant: h, variantClassNames: yn }),
            k = Tn(e, O),
            A = g(vn);
          return l(ee, {
            id: m ?? i,
            children: l(Cn, {
              animate: O,
              initial: !1,
              children: l(Sn, {
                value: bn,
                children: l(p.div, {
                  ...y,
                  ...C,
                  className: g(A, `framer-1c8lgu0`, f, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: k,
                  layoutId: `xbyECe97S`,
                  ref: r,
                  style: { ...d },
                  children: l(p.div, {
                    className: `framer-1qgo8fd`,
                    "data-framer-name": `Avatar`,
                    layoutDependency: k,
                    layoutId: `GiCuWc_P0`,
                    style: {
                      borderBottomLeftRadius: `50%`,
                      borderBottomRightRadius: `50%`,
                      borderTopLeftRadius: `50%`,
                      borderTopRightRadius: `50%`,
                    },
                    children: l(N, {
                      background: {
                        alt: `Avatar`,
                        fit: `fill`,
                        loading: _((s?.y || 0) + 0 + 0 + 0),
                        pixelHeight: 120,
                        pixelWidth: 120,
                        sizes: `40px`,
                        ...xn(v),
                      },
                      className: `framer-35bqfv`,
                      layoutDependency: k,
                      layoutId: `OJRnoDZmP`,
                      style: {
                        borderBottomLeftRadius: `50%`,
                        borderBottomRightRadius: `50%`,
                        borderTopLeftRadius: `50%`,
                        borderTopRightRadius: `50%`,
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-RBTR4.framer-vx41zg, .framer-RBTR4 .framer-vx41zg { display: block; }`,
          `.framer-RBTR4.framer-1c8lgu0 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 30px; }`,
          `.framer-RBTR4 .framer-1qgo8fd { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 40px; }`,
          `.framer-RBTR4 .framer-35bqfv { flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-RBTR4`
      )),
      (En.displayName = `Avatar`),
      (En.defaultProps = { height: 40, width: 30 }),
      b(En, {
        YFcmLHcau: {
          __defaultAssetReference: `data:framer/asset-reference,rvVsRZjAKkiA0nvOxWWVXzG9L6s.jpg?originalFilename=avatar-02.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Avatar`,
            assetReference: `data:framer/asset-reference,rvVsRZjAKkiA0nvOxWWVXzG9L6s.jpg?originalFilename=avatar-02.jpg&preferredSize=auto`,
          },
          title: `Image`,
          type: I.ResponsiveImage,
        },
      }),
      S(En, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function On(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un = e(() => {
    (f(),
      w(),
      h(),
      t(),
      We(),
      Je(),
      me(),
      ve(),
      Qe(),
      Dn(),
      (kn = E(En)),
      (An = E($e)),
      (jn = [`iHfsxmz6E`, `U8Y65vmDF`]),
      (Mn = `framer-b0dGe`),
      (Nn = { iHfsxmz6E: `framer-v-nnkbo2`, U8Y65vmDF: `framer-v-1c04zlc` }),
      (Pn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Fn = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (In = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ln = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Rn = { Desktop: `iHfsxmz6E`, Phone: `U8Y65vmDF` }),
      (zn = p.create(r)),
      (Bn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Rn[r.variant] ?? r.variant ?? `iHfsxmz6E`,
      })),
      (Vn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Hn = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te(),
            f = ce(),
            { style: m, className: h, layoutId: _, variant: y, ...b } = Bn(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: j,
            } = z({
              cycleOrder: jn,
              defaultVariant: `iHfsxmz6E`,
              ref: i,
              variant: y,
              variantClassNames: Nn,
            }),
            M = Vn(e, j),
            N = g(Mn, xe, _e, qe, Ze);
          return (
            A(),
            l(ee, {
              id: _ ?? a,
              children: l(zn, {
                animate: j,
                initial: !1,
                children: l(Ln, {
                  value: Pn,
                  children: d(p.div, {
                    ...b,
                    ...w,
                    className: g(N, `framer-nnkbo2`, h, S),
                    "data-framer-name": `Desktop`,
                    layoutDependency: M,
                    layoutId: `iHfsxmz6E`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, rgb(237, 241, 244))`,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      ...m,
                    },
                    variants: {
                      U8Y65vmDF: {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                    },
                    ...On({ U8Y65vmDF: { "data-framer-name": `Phone` } }, x, T),
                    children: [
                      d(p.div, {
                        className: `framer-c9rxvc`,
                        "data-framer-name": `Top`,
                        layoutDependency: M,
                        layoutId: `ObKH51xbO`,
                        children: [
                          d(p.div, {
                            className: `framer-17itf2d`,
                            "data-framer-name": `List`,
                            layoutDependency: M,
                            layoutId: `tDexAwkoI`,
                            children: [
                              l(F, {
                                height: 40,
                                y: (f?.y || 0) + 40 + 0 + 0 + 0,
                                ...On({ U8Y65vmDF: { y: (f?.y || 0) + 20 + 0 + 0 + 0 } }, x, T),
                                children: l(fe, {
                                  className: `framer-6f96pm-container`,
                                  layoutDependency: M,
                                  layoutId: `xdpDxsZ2w-container`,
                                  nodeId: `xdpDxsZ2w`,
                                  rendersWithMotion: !0,
                                  scopeId: `FoYRHf33J`,
                                  children: l(En, {
                                    height: `100%`,
                                    id: `xdpDxsZ2w`,
                                    layoutId: `xdpDxsZ2w`,
                                    width: `100%`,
                                    YFcmLHcau: Fn(
                                      {
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: `../../assets/images/gDcaZH5xt6hqSU2VbK2snAw.jpg`,
                                      },
                                      ``
                                    ),
                                  }),
                                }),
                              }),
                              l(F, {
                                height: 40,
                                y: (f?.y || 0) + 40 + 0 + 0 + 0,
                                ...On({ U8Y65vmDF: { y: (f?.y || 0) + 20 + 0 + 0 + 0 } }, x, T),
                                children: l(fe, {
                                  className: `framer-50t9zl-container`,
                                  layoutDependency: M,
                                  layoutId: `tpPq4DQTy-container`,
                                  nodeId: `tpPq4DQTy`,
                                  rendersWithMotion: !0,
                                  scopeId: `FoYRHf33J`,
                                  children: l(En, {
                                    height: `100%`,
                                    id: `tpPq4DQTy`,
                                    layoutId: `tpPq4DQTy`,
                                    width: `100%`,
                                    YFcmLHcau: Fn(
                                      {
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: `../../assets/images/X0ECJ5xGgYrCVgHB8RYd3RABTQ.jpg`,
                                      },
                                      ``
                                    ),
                                  }),
                                }),
                              }),
                              l(F, {
                                height: 40,
                                y: (f?.y || 0) + 40 + 0 + 0 + 0,
                                ...On({ U8Y65vmDF: { y: (f?.y || 0) + 20 + 0 + 0 + 0 } }, x, T),
                                children: l(fe, {
                                  className: `framer-17ka6oc-container`,
                                  layoutDependency: M,
                                  layoutId: `sY0X3zTGO-container`,
                                  nodeId: `sY0X3zTGO`,
                                  rendersWithMotion: !0,
                                  scopeId: `FoYRHf33J`,
                                  children: l(En, {
                                    height: `100%`,
                                    id: `sY0X3zTGO`,
                                    layoutId: `sY0X3zTGO`,
                                    width: `100%`,
                                    YFcmLHcau: Fn(
                                      {
                                        pixelHeight: 150,
                                        pixelWidth: 150,
                                        src: `../../assets/images/622M5cyJBdKPIK1fPnBlo3qONk.jpg`,
                                      },
                                      ``
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          l(v, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-6b8cag`,
                                "data-styles-preset": `xDpw_VO59`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                },
                                children: `+`,
                              }),
                            }),
                            className: `framer-102siuj`,
                            fonts: [`Inter`],
                            layoutDependency: M,
                            layoutId: `jyPLENq4y`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(p.div, {
                            className: `framer-1mbtpdp`,
                            "data-framer-name": `Text`,
                            layoutDependency: M,
                            layoutId: `E0dT45HVH`,
                            style: {
                              background: `linear-gradient(312deg, var(--token-bddc6f23-9f6b-430c-b28d-50ac8b0b25ba, rgb(59, 130, 246)) 0%, var(--token-b78e610c-391a-4120-aa0e-c0769ee3dfd0, rgb(64, 106, 228)) 100%)`,
                              borderBottomLeftRadius: `50%`,
                              borderBottomRightRadius: `50%`,
                              borderTopLeftRadius: `50%`,
                              borderTopRightRadius: `50%`,
                            },
                            children: l(v, {
                              __fromCanvasComponent: !0,
                              children: l(r, {
                                children: l(p.p, {
                                  className: `framer-styles-preset-1mvqed6`,
                                  "data-styles-preset": `OKYo87J9J`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                  },
                                  children: `You`,
                                }),
                              }),
                              className: `framer-jct4z7`,
                              fonts: [`Inter`],
                              layoutDependency: M,
                              layoutId: `l4Q1kB8LT`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      d(p.div, {
                        className: `framer-12jzloo`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: M,
                        layoutId: `PhYlZG0eR`,
                        children: [
                          d(p.div, {
                            className: `framer-l7n555`,
                            "data-framer-name": `Top`,
                            layoutDependency: M,
                            layoutId: `zYn5DiIMV`,
                            children: [
                              l(v, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(p.h3, {
                                    className: `framer-styles-preset-1m8gun7`,
                                    "data-styles-preset": `k6zcj6FY_`,
                                    dir: `auto`,
                                    children: `Still have questions?`,
                                  }),
                                }),
                                className: `framer-1i88ih1`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `KfQmIDl3q`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(v, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-1couuo6`,
                                    "data-styles-preset": `Lb6ff2C_Q`,
                                    dir: `auto`,
                                    children: `Reach out, and our team will guide you.`,
                                  }),
                                }),
                                className: `framer-1n86fk4`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `RRIEKgMHp`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          l(D, {
                            links: [
                              { href: { webPageId: `fX4X9meU8` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fX4X9meU8` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              l(F, {
                                height: 59,
                                y: (f?.y || 0) + 40 + 60 + 0 + 152.8,
                                ...On(
                                  { U8Y65vmDF: { y: (f?.y || 0) + 20 + 60 + 0 + 152.8 } },
                                  x,
                                  T
                                ),
                                children: l(fe, {
                                  className: `framer-n1856u-container`,
                                  layoutDependency: M,
                                  layoutId: `ZGwPw08sG-container`,
                                  nodeId: `ZGwPw08sG`,
                                  rendersWithMotion: !0,
                                  scopeId: `FoYRHf33J`,
                                  children: l($e, {
                                    gayKxTIvB: e[0],
                                    height: `100%`,
                                    id: `ZGwPw08sG`,
                                    layoutId: `ZGwPw08sG`,
                                    uYcQ8rJi0: !1,
                                    variant: In(`KVSDvWZoH`),
                                    width: `100%`,
                                    ziCnPH11n: `Talk to our team`,
                                    ...On(
                                      { U8Y65vmDF: { gayKxTIvB: e[1], variant: In(`n9A7jxl3z`) } },
                                      x,
                                      T
                                    ),
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
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-b0dGe.framer-1xmrpz4, .framer-b0dGe .framer-1xmrpz4 { display: block; }`,
          `.framer-b0dGe.framer-nnkbo2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-b0dGe .framer-c9rxvc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-b0dGe .framer-17itf2d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 10px 0px 0px; position: relative; width: min-content; }`,
          `.framer-b0dGe .framer-6f96pm-container, .framer-b0dGe .framer-50t9zl-container, .framer-b0dGe .framer-17ka6oc-container, .framer-b0dGe .framer-n1856u-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-b0dGe .framer-102siuj, .framer-b0dGe .framer-jct4z7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-b0dGe .framer-1mbtpdp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 40px; }`,
          `.framer-b0dGe .framer-12jzloo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-b0dGe .framer-l7n555 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-b0dGe .framer-1i88ih1, .framer-b0dGe .framer-1n86fk4 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-b0dGe.framer-v-1c04zlc.framer-nnkbo2 { padding: 20px; }`,
          ...ye,
          ...he,
          ...Ge,
          ...Ye,
        ],
        `framer-b0dGe`
      )),
      (Hn.displayName = `FAQs CTA`),
      (Hn.defaultProps = { height: 269, width: 400 }),
      b(Hn, {
        variant: {
          options: [`iHfsxmz6E`, `U8Y65vmDF`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      S(
        Hn,
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
          ...kn,
          ...An,
          ...B(be),
          ...B(ge),
          ...B(Ke),
          ...B(Xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Hn.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([T(En, {}, t), T($e, {}, t)])),
      }));
  }),
  Wn,
  Gn,
  Kn,
  qn = e(() => {
    (w(),
      ne.loadFonts([
        `FR;InterDisplay-Bold`,
        `FR;InterDisplay-Black`,
        `FR;InterDisplay-BlackItalic`,
        `FR;InterDisplay-BoldItalic`,
      ]),
      (Wn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/EZSFVoaPWKnZ6GuVk5dlS5pk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/TMYuLEOqLWgunxD5qCFeADEgk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/EL4v8OG6t2XwHSJLO1YF25DNiDw.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/vSoBOmgqFUd0rVCgogjwL7jQI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/bIwBTbnyeAOa9wQIBagEdRDHXhE.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/x8eJ5VkmPMHVhVbF0E8JYFJmwc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/fmXYBApyDC604dR7g2aaACGvCk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/yHWoQPBZSEiCC3aW3JXtcoFby8o.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/UHqhq621TbUtspKtPKPA1Ne8qY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/6dsy2CbviAWDcszGLlgyaLpRMk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/TQqnntSFYYGDv7XtyT3ZhfvDA.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/nE03Xxh2GngsU8hDpg6CRGxqfoM.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/U1kEiQQO1ar9PuYJyyRkclmq8o.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/dWFiPjtJpfcxAIDV8RPyuCq04.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/MzumQQZJQBC6KM1omtmwOtsogtI.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Gn = [
        `.framer-7eWDj .framer-styles-preset-1bspl78:not(.rich-text-wrapper), .framer-7eWDj .framer-styles-preset-1bspl78.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", sans-serif; --framer-font-family-bold-italic: "Inter Display", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 86px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 0.72em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-7eWDj .framer-styles-preset-1bspl78:not(.rich-text-wrapper), .framer-7eWDj .framer-styles-preset-1bspl78.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", sans-serif; --framer-font-family-bold-italic: "Inter Display", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 0.72em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-7eWDj .framer-styles-preset-1bspl78:not(.rich-text-wrapper), .framer-7eWDj .framer-styles-preset-1bspl78.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", sans-serif; --framer-font-family-bold-italic: "Inter Display", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 0.72em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,
      ]),
      (Kn = `framer-7eWDj`));
  });
function Jn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur = e(() => {
    (f(),
      w(),
      h(),
      t(),
      qn(),
      (Yn = pe(O(v))),
      (Xn = pe(O(p.div))),
      (Zn = [`wz6TxFwg7`, `euvUjF5C3`, `NX_5sjqee`]),
      (Qn = `framer-SgX7a`),
      ($n = {
        euvUjF5C3: `framer-v-pojmm7`,
        NX_5sjqee: `framer-v-gcw8qp`,
        wz6TxFwg7: `framer-v-1ypf1y6`,
      }),
      (er = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (tr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
        x: 0,
        y: 0,
      }),
      (nr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -15,
      }),
      (rr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 15,
      }),
      (ir = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (ar = { "01": `wz6TxFwg7`, "02": `euvUjF5C3`, "03": `NX_5sjqee` }),
      (or = p.create(r)),
      (sr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ar[r.variant] ?? r.variant ?? `wz6TxFwg7`,
      })),
      (cr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (lr = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te();
          ce();
          let { style: f, className: m, layoutId: h, variant: _, ...y } = sr(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = z({
              cycleOrder: Zn,
              defaultVariant: `wz6TxFwg7`,
              ref: i,
              variant: _,
              variantClassNames: $n,
            }),
            k = cr(e, O),
            { activeVariantCallback: A, delay: j } = oe(b);
          ae(b, {
            default: A(async (...e) => {
              await j(() => D(`euvUjF5C3`, !0), 2e3);
            }),
            euvUjF5C3: A(async (...e) => {
              await j(() => D(`NX_5sjqee`, !0), 2e3);
            }),
            NX_5sjqee: A(async (...e) => {
              await j(() => D(`wz6TxFwg7`, !0), 2e3);
            }),
          });
          let M = g(Qn, Kn),
            N = () => ![`euvUjF5C3`, `NX_5sjqee`].includes(b),
            P = () => b === `euvUjF5C3`,
            F = () => b === `NX_5sjqee`;
          return l(ee, {
            id: h ?? a,
            children: l(or, {
              animate: O,
              initial: !1,
              children: l(ir, {
                value: er,
                children: d(p.div, {
                  ...y,
                  ...C,
                  className: g(M, `framer-1ypf1y6`, m, x),
                  "data-framer-name": `01`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `wz6TxFwg7`,
                  ref: i,
                  style: { ...f },
                  ...Jn(
                    {
                      euvUjF5C3: { "data-framer-name": `02` },
                      NX_5sjqee: { "data-framer-name": `03` },
                    },
                    b,
                    w
                  ),
                  children: [
                    N() &&
                      d(p.div, {
                        className: `framer-iimjga`,
                        "data-framer-name": `01`,
                        layoutDependency: k,
                        layoutId: `PNRT3yhj6`,
                        children: [
                          l(Yn, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: tr,
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-1bspl78`,
                                "data-styles-preset": `wJJlHAuBp`,
                                dir: `auto`,
                                children: l(p.span, {
                                  "data-text-fill": `true`,
                                  style: {
                                    backgroundImage: `linear-gradient(0deg, var(--token-5a4e4777-8abf-440c-b816-af317d987f6d, rgb(242, 135, 120)) 0%, var(--token-014f2a3f-947b-4963-813b-cb48c53d14f1, rgb(245, 28, 35)) 100%)`,
                                  },
                                  children: `Buy`,
                                }),
                              }),
                            }),
                            className: `framer-w9gujr`,
                            "data-framer-appear-id": `w9gujr`,
                            fonts: [`Inter`],
                            initial: nr,
                            layoutDependency: k,
                            layoutId: `GoDgIPZeI`,
                            optimized: !0,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          d(Xn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: tr,
                            className: `framer-7zxrib`,
                            "data-framer-appear-id": `7zxrib`,
                            "data-framer-name": `Botom`,
                            initial: rr,
                            layoutDependency: k,
                            layoutId: `X5bcioX1s`,
                            optimized: !0,
                            style: { filter: `blur(2px)`, WebkitFilter: `blur(2px)` },
                            children: [
                              l(p.div, {
                                className: `framer-yppb2m`,
                                "data-framer-name": `Overlay`,
                                layoutDependency: k,
                                layoutId: `UfCH3TzkK`,
                                style: {
                                  background: `linear-gradient(180deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.3)) 40%, var(--token-f02a5c8a-b667-414e-a18b-3b00bb922668, rgba(0, 0, 0, 0.8)) 68%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 100%)`,
                                },
                              }),
                              l(v, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-1bspl78`,
                                    "data-styles-preset": `wJJlHAuBp`,
                                    dir: `auto`,
                                    children: l(p.span, {
                                      "data-text-fill": `true`,
                                      style: {
                                        backgroundImage: `linear-gradient(0deg, var(--token-5a4e4777-8abf-440c-b816-af317d987f6d, rgb(242, 135, 120)) 0%, var(--token-014f2a3f-947b-4963-813b-cb48c53d14f1, rgb(245, 28, 35)) 100%)`,
                                      },
                                      children: `Buy`,
                                    }),
                                  }),
                                }),
                                className: `framer-wxt7op`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `LbHGHefSc`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.2,
                                  rotateX: -180,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    P() &&
                      d(p.div, {
                        className: `framer-1v7vwyq`,
                        "data-framer-name": `02`,
                        layoutDependency: k,
                        layoutId: `yX2phSy5x`,
                        children: [
                          l(Yn, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: tr,
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-1bspl78`,
                                "data-styles-preset": `wJJlHAuBp`,
                                dir: `auto`,
                                children: l(p.span, {
                                  "data-text-fill": `true`,
                                  style: {
                                    backgroundImage: `linear-gradient(0deg, var(--token-1d407f87-1145-4d70-b118-069910dbdacc, rgb(138, 227, 137)) 0%, var(--token-e16e43db-452f-46a8-b1c4-cc290f6b35d1, rgb(11, 207, 45)) 100%)`,
                                  },
                                  children: `Sell`,
                                }),
                              }),
                            }),
                            className: `framer-1e3d2m9`,
                            "data-framer-appear-id": `1e3d2m9`,
                            fonts: [`Inter`],
                            initial: nr,
                            layoutDependency: k,
                            layoutId: `HiExTgr1Q`,
                            optimized: !0,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          d(Xn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: tr,
                            className: `framer-3v9qmn`,
                            "data-framer-appear-id": `3v9qmn`,
                            "data-framer-name": `Botom`,
                            initial: rr,
                            layoutDependency: k,
                            layoutId: `BhufMZPOT`,
                            optimized: !0,
                            style: { filter: `blur(2px)`, WebkitFilter: `blur(2px)` },
                            children: [
                              l(p.div, {
                                className: `framer-1lawrnt`,
                                "data-framer-name": `Overlay`,
                                layoutDependency: k,
                                layoutId: `eHDZPW1Dg`,
                                style: {
                                  background: `linear-gradient(180deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.3)) 40%, var(--token-f02a5c8a-b667-414e-a18b-3b00bb922668, rgba(0, 0, 0, 0.8)) 68%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 100%)`,
                                },
                              }),
                              l(v, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-1bspl78`,
                                    "data-styles-preset": `wJJlHAuBp`,
                                    dir: `auto`,
                                    children: l(p.span, {
                                      "data-text-fill": `true`,
                                      style: {
                                        backgroundImage: `linear-gradient(0deg, var(--token-1d407f87-1145-4d70-b118-069910dbdacc, rgb(138, 227, 137)) 0%, var(--token-e16e43db-452f-46a8-b1c4-cc290f6b35d1, rgb(11, 207, 45)) 100%)`,
                                      },
                                      children: `Sell`,
                                    }),
                                  }),
                                }),
                                className: `framer-1vtu9dn`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `tCrI8jSmA`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.2,
                                  rotateX: -180,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    F() &&
                      d(p.div, {
                        className: `framer-azllil`,
                        "data-framer-name": `03`,
                        layoutDependency: k,
                        layoutId: `o3qxeSEcE`,
                        children: [
                          l(Yn, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: tr,
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-1bspl78`,
                                "data-styles-preset": `wJJlHAuBp`,
                                dir: `auto`,
                                children: l(p.span, {
                                  "data-text-fill": `true`,
                                  style: {
                                    backgroundImage: `linear-gradient(0deg, var(--token-9ac3fcd6-eb33-41e6-91d9-0d196055ba91, rgb(253, 187, 110)) 0%, var(--token-f56bc79b-27bf-46e1-9faa-c1587e0095c1, rgb(255, 139, 6)) 100%)`,
                                  },
                                  children: `hold`,
                                }),
                              }),
                            }),
                            className: `framer-zj9kkt`,
                            "data-framer-appear-id": `zj9kkt`,
                            fonts: [`Inter`],
                            initial: nr,
                            layoutDependency: k,
                            layoutId: `Mbak4iLJi`,
                            optimized: !0,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          d(Xn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: tr,
                            className: `framer-6jf12v`,
                            "data-framer-appear-id": `6jf12v`,
                            "data-framer-name": `Botom`,
                            initial: rr,
                            layoutDependency: k,
                            layoutId: `PqLbOAvWh`,
                            optimized: !0,
                            style: { filter: `blur(2px)`, WebkitFilter: `blur(2px)` },
                            children: [
                              l(p.div, {
                                className: `framer-q8425u`,
                                "data-framer-name": `Overlay`,
                                layoutDependency: k,
                                layoutId: `wzmHjyR54`,
                                style: {
                                  background: `linear-gradient(180deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.3)) 40%, var(--token-f02a5c8a-b667-414e-a18b-3b00bb922668, rgba(0, 0, 0, 0.8)) 68%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 100%)`,
                                },
                              }),
                              l(v, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-1bspl78`,
                                    "data-styles-preset": `wJJlHAuBp`,
                                    dir: `auto`,
                                    children: l(p.span, {
                                      "data-text-fill": `true`,
                                      style: {
                                        backgroundImage: `linear-gradient(0deg, var(--token-9ac3fcd6-eb33-41e6-91d9-0d196055ba91, rgb(253, 187, 110)) 0%, var(--token-f56bc79b-27bf-46e1-9faa-c1587e0095c1, rgb(255, 139, 6)) 100%)`,
                                      },
                                      children: `hold`,
                                    }),
                                  }),
                                }),
                                className: `framer-hbpzci`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `JVGcSaAW7`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.2,
                                  rotateX: -180,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SgX7a.framer-10g5kqx, .framer-SgX7a .framer-10g5kqx { display: block; }`,
          `.framer-SgX7a.framer-1ypf1y6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 50px 0px 50px 0px; position: relative; width: 280px; }`,
          `.framer-SgX7a .framer-iimjga, .framer-SgX7a .framer-1v7vwyq, .framer-SgX7a .framer-azllil { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SgX7a .framer-w9gujr, .framer-SgX7a .framer-1e3d2m9, .framer-SgX7a .framer-zj9kkt { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
          `.framer-SgX7a .framer-7zxrib, .framer-SgX7a .framer-3v9qmn, .framer-SgX7a .framer-6jf12v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SgX7a .framer-yppb2m, .framer-SgX7a .framer-1lawrnt, .framer-SgX7a .framer-q8425u { bottom: -10px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: -10px; z-index: 2; }`,
          `.framer-SgX7a .framer-wxt7op, .framer-SgX7a .framer-1vtu9dn, .framer-SgX7a .framer-hbpzci { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...Gn,
        ],
        `framer-SgX7a`
      )),
      (lr.displayName = `Feature Box Title`),
      (lr.defaultProps = { height: 224, width: 280 }),
      b(lr, {
        variant: {
          options: [`wz6TxFwg7`, `euvUjF5C3`, `NX_5sjqee`],
          optionTitles: [`01`, `02`, `03`],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      S(
        lr,
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
          ...B(Wn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  H,
  yr = e(() => {
    (f(),
      w(),
      h(),
      t(),
      (dr = `framer-NFwQ8`),
      (fr = { r2UkE55_v: `framer-v-121dedw` }),
      (pr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (hr = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (gr = p.create(r)),
      (_r = ({ height: e, icon: t, id: n, width: r, ...i }) => ({
        ...i,
        z6AwEa6gl: t ??
          i.z6AwEa6gl ?? {
            alt: `Icon`,
            pixelHeight: 18,
            pixelWidth: 19,
            src: `../../assets/images/DR5ESv57oR37TVFwEH7Mx1yI0.svg`,
          },
      })),
      (vr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = M(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = c(),
            { activeLocale: a, setLocale: o } = te(),
            s = ce(),
            { style: d, className: f, layoutId: m, variant: h, z6AwEa6gl: v, ...y } = _r(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = z({ defaultVariant: `r2UkE55_v`, ref: r, variant: h, variantClassNames: fr }),
            k = vr(e, O),
            A = g(dr);
          return l(ee, {
            id: m ?? i,
            children: l(gr, {
              animate: O,
              initial: !1,
              children: l(hr, {
                value: pr,
                children: l(p.div, {
                  ...y,
                  ...C,
                  className: g(A, `framer-121dedw`, f, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: k,
                  layoutId: `r2UkE55_v`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: `50%`,
                    borderBottomRightRadius: `50%`,
                    borderTopLeftRadius: `50%`,
                    borderTopRightRadius: `50%`,
                    ...d,
                  },
                  children: l(N, {
                    background: {
                      alt: `Icon`,
                      fit: `fit`,
                      intrinsicHeight: 18,
                      intrinsicWidth: 19,
                      loading: _((s?.y || 0) + (0 + ((s?.height || 80) - 0 - 32) / 2)),
                      pixelHeight: 18,
                      pixelWidth: 19,
                      sizes: `32px`,
                      ...mr(v),
                      positionX: `center`,
                      positionY: `center`,
                    },
                    className: `framer-1ql6zqh`,
                    layoutDependency: k,
                    layoutId: `XESc9sndH`,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-NFwQ8.framer-12wbgm7, .framer-NFwQ8 .framer-12wbgm7 { display: block; }`,
          `.framer-NFwQ8.framer-121dedw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 80px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NFwQ8 .framer-1ql6zqh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 32px; }`,
        ],
        `framer-NFwQ8`
      )),
      (H.displayName = `Integration Icon`),
      (H.defaultProps = { height: 80, width: 80 }),
      b(H, {
        z6AwEa6gl: {
          __defaultAssetReference: `data:framer/asset-reference,DR5ESv57oR37TVFwEH7Mx1yI0.svg?originalFilename=icon-03.svg&preferredSize=auto&width=19&height=18`,
          __vekterDefault: {
            alt: `Icon`,
            assetReference: `data:framer/asset-reference,DR5ESv57oR37TVFwEH7Mx1yI0.svg?originalFilename=icon-03.svg&preferredSize=auto&width=19&height=18`,
          },
          title: `Icon`,
          type: I.ResponsiveImage,
        },
      }),
      S(H, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function br(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr = e(() => {
    (f(),
      w(),
      h(),
      t(),
      Ie(),
      rt(),
      We(),
      Je(),
      (xr = [`Fc8g8ozL6`, `qWwjlyOdb`]),
      (Sr = `framer-ORY4m`),
      (Cr = { Fc8g8ozL6: `framer-v-sz2fn4`, qWwjlyOdb: `framer-v-1def38f` }),
      (wr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Tr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Er = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Dr = { Desktop: `Fc8g8ozL6`, Phone: `qWwjlyOdb` }),
      (Or = p.create(r)),
      (kr = ({
        bGImage: e,
        description: t,
        height: n,
        id: r,
        statsDescription: i,
        statsTitle: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        goAKBmqwK:
          t ??
          c.goAKBmqwK ??
          `Track your portfolio, get AI insights, and make smarter investment decisions without relying on guesswork.`,
        i8U_p183z: o ?? c.i8U_p183z ?? `Individual investors`,
        pef4eIOYP: i ?? c.pef4eIOYP ?? `Decision-making with AI insights`,
        srxxxv2SK: a ?? c.srxxxv2SK ?? `+32% Faster`,
        variant: Dr[c.variant] ?? c.variant ?? `Fc8g8ozL6`,
        yZD2OHuAO: e ??
          c.yZD2OHuAO ?? {
            alt: `BG Image`,
            pixelHeight: 1e3,
            pixelWidth: 800,
            src: `../../assets/images/l4todGvJ7jL3WhxngE8F0mr2mks.jpg`,
            srcSet: `../../assets/images/l4todGvJ7jL3WhxngE8F0mr2mks.jpg 800w`,
          },
      })),
      (Ar = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (jr = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te(),
            f = ce(),
            {
              style: m,
              className: h,
              layoutId: y,
              variant: b,
              i8U_p183z: x,
              goAKBmqwK: S,
              srxxxv2SK: C,
              pef4eIOYP: w,
              yZD2OHuAO: T,
              ...E
            } = kr(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: P,
              setVariant: F,
              variants: ne,
            } = z({
              cycleOrder: xr,
              defaultVariant: `Fc8g8ozL6`,
              ref: i,
              variant: b,
              variantClassNames: Cr,
            }),
            re = Ar(e, ne),
            ie = g(Sr, ot, ze, qe, Ze);
          return l(ee, {
            id: y ?? a,
            children: l(Or, {
              animate: ne,
              initial: !1,
              children: l(Er, {
                value: Tr,
                children: l(N, {
                  ...E,
                  ...A,
                  background: {
                    alt: `BG Image`,
                    fit: `fill`,
                    intrinsicHeight: 1e3,
                    intrinsicWidth: 800,
                    loading: _(f?.y || 0),
                    pixelHeight: 1e3,
                    pixelWidth: 800,
                    sizes: f?.width || `100vw`,
                    ...wr(T),
                  },
                  className: g(ie, `framer-sz2fn4`, h, O),
                  "data-framer-name": `Desktop`,
                  layoutDependency: re,
                  layoutId: `Fc8g8ozL6`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    ...m,
                  },
                  variants: {
                    qWwjlyOdb: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                  },
                  ...br({ qWwjlyOdb: { "data-framer-name": `Phone` } }, D, j),
                  children: d(p.div, {
                    className: `framer-3xt838`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    layoutDependency: re,
                    layoutId: `U1oWQDZsT`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-0a34df0a-701b-4bf9-bdf5-c1a9964dab0b, rgba(255, 255, 255, 0.3))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(20px)`,
                      backgroundColor: `var(--token-0a34df0a-701b-4bf9-bdf5-c1a9964dab0b, rgba(255, 255, 255, 0.3))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      WebkitBackdropFilter: `blur(20px)`,
                    },
                    variants: {
                      qWwjlyOdb: {
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                      },
                    },
                    children: [
                      d(p.div, {
                        className: `framer-as9z7k`,
                        "data-framer-name": `Top`,
                        layoutDependency: re,
                        layoutId: `Ijv7rufti`,
                        children: [
                          l(v, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(p.h3, {
                                className: `framer-styles-preset-8q1iyv`,
                                "data-styles-preset": `jUb4JLM3m`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                },
                                children: `Individual investors`,
                              }),
                            }),
                            className: `framer-3u7le5`,
                            fonts: [`Inter`],
                            layoutDependency: re,
                            layoutId: `Ndb36gVYK`,
                            style: {
                              "--extracted-a0htzi": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: x,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(v, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-n7iy3a`,
                                "data-styles-preset": `EpfgTb3LW`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                                },
                                children: `Track your portfolio, get AI insights, and make smarter investment decisions without relying on guesswork.`,
                              }),
                            }),
                            className: `framer-a005eo`,
                            fonts: [`Inter`],
                            layoutDependency: re,
                            layoutId: `ansMHpdnK`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      d(p.div, {
                        className: `framer-asbk07`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: re,
                        layoutId: `xYmotFbT2`,
                        children: [
                          l(v, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(p.h4, {
                                className: `framer-styles-preset-1m8gun7`,
                                "data-styles-preset": `k6zcj6FY_`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                },
                                children: `+32% Faster`,
                              }),
                            }),
                            className: `framer-1rndtk`,
                            fonts: [`Inter`],
                            layoutDependency: re,
                            layoutId: `GVhNa2ae3`,
                            style: {
                              "--extracted-1eung3n": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: C,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(v, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-1couuo6`,
                                "data-styles-preset": `Lb6ff2C_Q`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                },
                                children: `Decision-making with AI insights`,
                              }),
                            }),
                            className: `framer-p99j1g`,
                            fonts: [`Inter`],
                            layoutDependency: re,
                            layoutId: `gcnIeeIwQ`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: w,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ORY4m.framer-123hzgc, .framer-ORY4m .framer-123hzgc { display: block; }`,
          `.framer-ORY4m.framer-sz2fn4 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 380px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ORY4m .framer-3xt838 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 400px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ORY4m .framer-as9z7k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 30px 0px; position: relative; width: 100%; }`,
          `.framer-ORY4m .framer-3u7le5, .framer-ORY4m .framer-a005eo, .framer-ORY4m .framer-1rndtk, .framer-ORY4m .framer-p99j1g { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-ORY4m .framer-asbk07 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ORY4m.framer-v-1def38f .framer-3xt838 { gap: 30px; height: min-content; justify-content: center; padding: 20px; }`,
          `.framer-ORY4m.framer-v-1def38f .framer-as9z7k { max-width: 500px; padding: 0px; }`,
          `.framer-ORY4m.framer-v-1def38f .framer-asbk07 { max-width: 500px; }`,
          ...it,
          ...Le,
          ...Ge,
          ...Ye,
          `.framer-ORY4m[data-border="true"]::after, .framer-ORY4m [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-ORY4m`
      )),
      (jr.displayName = `Use Case Card`),
      (jr.defaultProps = { height: 420, width: 380 }),
      b(jr, {
        variant: {
          options: [`Fc8g8ozL6`, `qWwjlyOdb`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: I.Enum,
        },
        i8U_p183z: {
          defaultValue: `Individual investors`,
          displayTextArea: !0,
          title: `Title`,
          type: I.String,
        },
        oni8U_p183zChange: { changes: `i8U_p183z`, type: I.ChangeHandler },
        goAKBmqwK: {
          defaultValue: `Track your portfolio, get AI insights, and make smarter investment decisions without relying on guesswork.`,
          displayTextArea: !0,
          title: `Description`,
          type: I.String,
        },
        ongoAKBmqwKChange: { changes: `goAKBmqwK`, type: I.ChangeHandler },
        srxxxv2SK: {
          defaultValue: `+32% Faster`,
          displayTextArea: !0,
          title: `Stats Title`,
          type: I.String,
        },
        onsrxxxv2SKChange: { changes: `srxxxv2SK`, type: I.ChangeHandler },
        pef4eIOYP: {
          defaultValue: `Decision-making with AI insights`,
          displayTextArea: !0,
          title: `Stats Description`,
          type: I.String,
        },
        onpef4eIOYPChange: { changes: `pef4eIOYP`, type: I.ChangeHandler },
        yZD2OHuAO: {
          __defaultAssetReference: `data:framer/asset-reference,l4todGvJ7jL3WhxngE8F0mr2mks.jpg?originalFilename=use-case-02.jpg&width=800&height=1000`,
          __vekterDefault: {
            alt: `BG Image`,
            assetReference: `data:framer/asset-reference,l4todGvJ7jL3WhxngE8F0mr2mks.jpg?originalFilename=use-case-02.jpg&width=800&height=1000`,
          },
          title: `BG Image`,
          type: I.ResponsiveImage,
        },
      }),
      S(
        jr,
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
          ...B(at),
          ...B(Re),
          ...B(Ke),
          ...B(Xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Nr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr = e(() => {
    (f(),
      w(),
      h(),
      t(),
      ve(),
      (Pr = { CAzYV7KJv: { hover: !0 }, u67hFJtfB: { hover: !0 } }),
      (Fr = [`CAzYV7KJv`, `u67hFJtfB`, `OtPPGEvOS`, `eFw1AVBfv`]),
      (Ir = `framer-rVZkL`),
      (Lr = {
        CAzYV7KJv: `framer-v-izd065`,
        eFw1AVBfv: `framer-v-xd86s8`,
        OtPPGEvOS: `framer-v-1kjdydd`,
        u67hFJtfB: `framer-v-z5dw7n`,
      }),
      (Rr = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (zr = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Br = {
        "Dark - Phone": `eFw1AVBfv`,
        "Default - Phone": `OtPPGEvOS`,
        Dark: `u67hFJtfB`,
        Default: `CAzYV7KJv`,
      }),
      (Vr = p.create(r)),
      (Hr = ({ click: e, height: t, id: n, link: r, newTab: i, title: a, width: o, ...s }) => ({
        ...s,
        gayKxTIvB: r ?? s.gayKxTIvB,
        uo_mEDBYl: e ?? s.uo_mEDBYl,
        uYcQ8rJi0: i ?? s.uYcQ8rJi0,
        variant: Br[s.variant] ?? s.variant ?? `CAzYV7KJv`,
        ziCnPH11n: a ?? s.ziCnPH11n ?? `Button Title`,
      })),
      (Ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Wr = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te();
          ce();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: _,
              ziCnPH11n: y,
              gayKxTIvB: b,
              uYcQ8rJi0: x,
              uo_mEDBYl: S,
              ...C
            } = Hr(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = z({
              cycleOrder: Fr,
              defaultVariant: `CAzYV7KJv`,
              enabledGestures: Pr,
              ref: i,
              variant: _,
              variantClassNames: Lr,
            }),
            N = Ur(e, M),
            { activeVariantCallback: P, delay: F } = oe(w),
            ne = P(async (...e) => {
              if ((A({ isPressed: !1 }), S && (await S(...e)) === !1)) return !1;
            }),
            re = g(Ir, xe);
          return l(ee, {
            id: h ?? a,
            children: l(Vr, {
              animate: M,
              initial: !1,
              children: l(zr, {
                value: Rr,
                children: l(ie, {
                  href: b,
                  motionChild: !0,
                  nodeId: `CAzYV7KJv`,
                  openInNewTab: x,
                  scopeId: `m3lCP1m17`,
                  smoothScroll: !0,
                  children: l(p.a, {
                    ...C,
                    ...D,
                    className: `${g(re, `framer-izd065`, m, T)} framer-2agne6`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: N,
                    layoutId: `CAzYV7KJv`,
                    onTap: ne,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      ...f,
                    },
                    variants: {
                      "CAzYV7KJv-hover": {
                        backgroundColor: `var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0))`,
                      },
                      "u67hFJtfB-hover": {
                        backgroundColor: `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                      },
                      eFw1AVBfv: {
                        backgroundColor: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                      },
                      u67hFJtfB: {
                        backgroundColor: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                      },
                    },
                    ...Nr(
                      {
                        "CAzYV7KJv-hover": { "data-framer-name": void 0 },
                        "u67hFJtfB-hover": { "data-framer-name": void 0 },
                        eFw1AVBfv: { "data-framer-name": `Dark - Phone` },
                        OtPPGEvOS: { "data-framer-name": `Default - Phone` },
                        u67hFJtfB: { "data-framer-name": `Dark` },
                      },
                      w,
                      O
                    ),
                    children: d(p.div, {
                      className: `framer-7u26gy`,
                      "data-framer-name": `Title`,
                      layoutDependency: N,
                      layoutId: `PiELQP12B`,
                      children: [
                        l(v, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(p.p, {
                              className: `framer-styles-preset-6b8cag`,
                              "data-styles-preset": `xDpw_VO59`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                              },
                              children: `Button Title`,
                            }),
                          }),
                          className: `framer-nsm8bf`,
                          "data-framer-name": `Default Title`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `tvwWPOmeE`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          variants: {
                            "CAzYV7KJv-hover": {
                              "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                            },
                            "u67hFJtfB-hover": {
                              "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                            },
                            eFw1AVBfv: {
                              "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                            },
                            u67hFJtfB: {
                              "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Nr(
                            {
                              "CAzYV7KJv-hover": {
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-6b8cag`,
                                    "data-styles-preset": `xDpw_VO59`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                    },
                                    children: `Button Title`,
                                  }),
                                }),
                              },
                              "u67hFJtfB-hover": {
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-6b8cag`,
                                    "data-styles-preset": `xDpw_VO59`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                    },
                                    children: `Button Title`,
                                  }),
                                }),
                              },
                              eFw1AVBfv: {
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-6b8cag`,
                                    "data-styles-preset": `xDpw_VO59`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                    },
                                    children: `Button Title`,
                                  }),
                                }),
                              },
                              u67hFJtfB: {
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-6b8cag`,
                                    "data-styles-preset": `xDpw_VO59`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                    },
                                    children: `Button Title`,
                                  }),
                                }),
                              },
                            },
                            w,
                            O
                          ),
                        }),
                        l(v, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(p.p, {
                              className: `framer-styles-preset-6b8cag`,
                              "data-styles-preset": `xDpw_VO59`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                              },
                              children: `Button Title`,
                            }),
                          }),
                          className: `framer-qy8p6m`,
                          "data-framer-name": `Hover Title`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `xgQ6GgXf1`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          variants: {
                            eFw1AVBfv: {
                              "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                            },
                            u67hFJtfB: {
                              "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Nr(
                            {
                              eFw1AVBfv: {
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-6b8cag`,
                                    "data-styles-preset": `xDpw_VO59`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                    },
                                    children: `Button Title`,
                                  }),
                                }),
                              },
                              u67hFJtfB: {
                                children: l(r, {
                                  children: l(p.p, {
                                    className: `framer-styles-preset-6b8cag`,
                                    "data-styles-preset": `xDpw_VO59`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                    },
                                    children: `Button Title`,
                                  }),
                                }),
                              },
                            },
                            w,
                            O
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-rVZkL.framer-2agne6, .framer-rVZkL .framer-2agne6 { display: block; }`,
          `.framer-rVZkL.framer-izd065 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 44px 18px 44px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rVZkL .framer-7u26gy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 23px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-rVZkL .framer-nsm8bf, .framer-rVZkL .framer-qy8p6m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-rVZkL.framer-v-1kjdydd.framer-izd065 { padding: 13px 26px 13px 26px; }`,
          `.framer-rVZkL.framer-v-xd86s8.framer-izd065 { padding: 14px 26px 14px 26px; }`,
          ...ye,
        ],
        `framer-rVZkL`
      )),
      (Wr.displayName = `Button`),
      (Wr.defaultProps = { height: 59, width: 182 }),
      b(Wr, {
        variant: {
          options: [`CAzYV7KJv`, `u67hFJtfB`, `OtPPGEvOS`, `eFw1AVBfv`],
          optionTitles: [`Default`, `Dark`, `Default - Phone`, `Dark - Phone`],
          title: `Variant`,
          type: I.Enum,
        },
        ziCnPH11n: {
          defaultValue: `Button Title`,
          displayTextArea: !0,
          title: `Title`,
          type: I.String,
        },
        onziCnPH11nChange: { changes: `ziCnPH11n`, type: I.ChangeHandler },
        gayKxTIvB: { title: `Link`, type: I.Link },
        uYcQ8rJi0: { defaultValue: !1, title: `New Tab`, type: I.Boolean },
        onuYcQ8rJi0Change: { changes: `uYcQ8rJi0`, type: I.ChangeHandler },
        uo_mEDBYl: { title: `Click`, type: I.EventHandler },
      }),
      S(
        Wr,
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
          ...B(be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Kr,
  qr,
  Jr,
  Yr = e(() => {
    (w(),
      ne.loadFonts([`GF;Bricolage Grotesque-600`, `GF;Bricolage Grotesque-700`]),
      (Kr = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bricolage Grotesque`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `../../assets/fonts/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvcXlyMgvs-wJDtw.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Bricolage Grotesque`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `../../assets/fonts/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvfzlyMgvs-wJDtw.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (qr = [
        `.framer-bvqaW .framer-styles-preset-5gl4i8:not(.rich-text-wrapper), .framer-bvqaW .framer-styles-preset-5gl4i8.rich-text-wrapper h4 { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-bvqaW .framer-styles-preset-5gl4i8:not(.rich-text-wrapper), .framer-bvqaW .framer-styles-preset-5gl4i8.rich-text-wrapper h4 { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-bvqaW .framer-styles-preset-5gl4i8:not(.rich-text-wrapper), .framer-bvqaW .framer-styles-preset-5gl4i8.rich-text-wrapper h4 { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Jr = `framer-bvqaW`));
  });
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi = e(() => {
    (f(),
      w(),
      h(),
      t(),
      Yr(),
      Tt(),
      Se(),
      vt(),
      dt(),
      (Xr = E(ht)),
      (Zr = pe(O(fe))),
      (Qr = pe(O(p.div))),
      ($r = [`ajKQH7XfN`, `Gx64mbwEU`, `c3cl2ti1X`, `k0AZZXdz2`]),
      (ei = `framer-kIiXq`),
      (ti = {
        ajKQH7XfN: `framer-v-11dka1i`,
        c3cl2ti1X: `framer-v-n2tv11`,
        Gx64mbwEU: `framer-v-15ybzz1`,
        k0AZZXdz2: `framer-v-uyqu08`,
      }),
      (ni = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
      (ri = (e, t) => `translateX(-50%) ${t}`),
      (ii = {
        effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: -5, y: 0 },
        repeat: !1,
        startDelay: 0,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (ai = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.1, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (oi = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (si = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (ci = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (li = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.2, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ui = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.3, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (di = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.4, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (fi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.5, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (pi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.6, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (mi = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (hi = {
        "After - Phone": `k0AZZXdz2`,
        "Before - Phone": `c3cl2ti1X`,
        After: `Gx64mbwEU`,
        Before: `ajKQH7XfN`,
      }),
      (gi = p.create(r)),
      (_i = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: hi[r.variant] ?? r.variant ?? `ajKQH7XfN`,
      })),
      (vi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (yi = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te(),
            f = ce(),
            { style: m, className: h, layoutId: y, variant: b, ...x } = _i(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = z({
              cycleOrder: $r,
              defaultVariant: `ajKQH7XfN`,
              ref: i,
              variant: b,
              variantClassNames: ti,
            }),
            j = vi(e, A),
            M = g(ei, Te, gt, Jr, Ot),
            P = () => ![`Gx64mbwEU`, `k0AZZXdz2`].includes(S),
            ne = () => !![`Gx64mbwEU`, `k0AZZXdz2`].includes(S);
          return l(ee, {
            id: y ?? a,
            children: l(gi, {
              animate: A,
              initial: !1,
              children: l(mi, {
                value: ni,
                children: d(p.div, {
                  ...x,
                  ...T,
                  className: g(M, `framer-11dka1i`, h, C),
                  "data-framer-name": `Before`,
                  layoutDependency: j,
                  layoutId: `ajKQH7XfN`,
                  ref: i,
                  style: { ...m },
                  ...U(
                    {
                      c3cl2ti1X: { "data-framer-name": `Before - Phone` },
                      Gx64mbwEU: { "data-framer-name": `After` },
                      k0AZZXdz2: { "data-framer-name": `After - Phone` },
                    },
                    S,
                    E
                  ),
                  children: [
                    P() &&
                      d(p.div, {
                        className: `framer-yfig7u`,
                        "data-framer-name": `Before`,
                        layoutDependency: j,
                        layoutId: `nP7PM24g6`,
                        children: [
                          d(p.div, {
                            className: `framer-19e2aql`,
                            "data-framer-name": `Top`,
                            layoutDependency: j,
                            layoutId: `kEr1JcJPQ`,
                            children: [
                              l(p.div, {
                                className: `framer-1ycyxrt`,
                                "data-framer-name": `BG Overlay Top`,
                                layoutDependency: j,
                                layoutId: `Pc1d0P9wO`,
                                style: {
                                  background: `linear-gradient(180deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%)`,
                                },
                              }),
                              l(p.div, {
                                className: `framer-tgq5lc`,
                                "data-framer-name": `White Line`,
                                layoutDependency: j,
                                layoutId: `vgZJ2MenP`,
                                style: {
                                  backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                },
                              }),
                              l(p.div, {
                                className: `framer-1jccbc3`,
                                "data-border": !0,
                                "data-framer-name": `Before`,
                                layoutDependency: j,
                                layoutId: `k34K7jL1T`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  borderBottomRightRadius: 20,
                                },
                                children: l(v, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(p.p, {
                                      className: `framer-styles-preset-1couuo6`,
                                      "data-styles-preset": `Lb6ff2C_Q`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                      },
                                      children: `Before FintechX`,
                                    }),
                                  }),
                                  className: `framer-1hju70`,
                                  fonts: [`Inter`],
                                  layoutDependency: j,
                                  layoutId: `vQ2Ydwj7F`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      c3cl2ti1X: {
                                        children: l(r, {
                                          children: l(p.p, {
                                            className: `framer-styles-preset-1bx7rqe`,
                                            "data-styles-preset": `roK1lt6bc`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                            },
                                            children: `Before FintechX`,
                                          }),
                                        }),
                                      },
                                    },
                                    S,
                                    E
                                  ),
                                }),
                              }),
                              l(p.div, {
                                className: `framer-qhqole`,
                                "data-framer-name": `Center`,
                                layoutDependency: j,
                                layoutId: `gEYGFk3aR`,
                                children: l(N, {
                                  background: {
                                    alt: `Vector`,
                                    fit: `fit`,
                                    intrinsicHeight: 480,
                                    intrinsicWidth: 390,
                                    loading: _((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                    pixelHeight: 480,
                                    pixelWidth: 390,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `130px`,
                                    src: `../../assets/images/BepIwACX380EUEqBMK5sdcQgh3k.png`,
                                  },
                                  className: `framer-1at2t1b`,
                                  fitImageDimension: `height`,
                                  layoutDependency: j,
                                  layoutId: `Cg0TYkOGW`,
                                  style: {
                                    filter: `drop-shadow(0px 2px 2px var(--token-22e76413-54a7-49e7-b94c-fb66f119d431, rgba(0, 0, 0, 0.1)) /* {"name":"000000 10% Copy"} */) drop-shadow(0px 7px 9px var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.2)) /* {"name":"000000 20% Copy"} */)`,
                                    WebkitFilter: `drop-shadow(0px 2px 2px var(--token-22e76413-54a7-49e7-b94c-fb66f119d431, rgba(0, 0, 0, 0.1)) /* {"name":"000000 10% Copy"} */) drop-shadow(0px 7px 9px var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.2)) /* {"name":"000000 20% Copy"} */)`,
                                  },
                                  transformTemplate: ri,
                                  ...U(
                                    {
                                      c3cl2ti1X: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 480,
                                          intrinsicWidth: 390,
                                          loading: _((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                          pixelHeight: 480,
                                          pixelWidth: 390,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `80px`,
                                          src: `../../assets/images/BepIwACX380EUEqBMK5sdcQgh3k.png`,
                                        },
                                      },
                                    },
                                    S,
                                    E
                                  ),
                                }),
                              }),
                              l(p.div, {
                                className: `framer-b4qyba`,
                                "data-border": !0,
                                "data-framer-name": `After`,
                                layoutDependency: j,
                                layoutId: `iF9IqvE_I`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `0px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  borderBottomLeftRadius: 20,
                                },
                                children: l(v, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(p.p, {
                                      className: `framer-styles-preset-1couuo6`,
                                      "data-styles-preset": `Lb6ff2C_Q`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                      },
                                      children: `After FintechX`,
                                    }),
                                  }),
                                  className: `framer-1s06pl5`,
                                  fonts: [`Inter`],
                                  layoutDependency: j,
                                  layoutId: `Rab9PVFGa`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    opacity: 0.3,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      c3cl2ti1X: {
                                        children: l(r, {
                                          children: l(p.p, {
                                            className: `framer-styles-preset-1bx7rqe`,
                                            "data-styles-preset": `roK1lt6bc`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                            },
                                            children: `After FintechX`,
                                          }),
                                        }),
                                      },
                                    },
                                    S,
                                    E
                                  ),
                                }),
                              }),
                            ],
                          }),
                          l(p.div, {
                            className: `framer-qk3g14`,
                            "data-border": !0,
                            "data-framer-name": `Bottom`,
                            layoutDependency: j,
                            layoutId: `q5mA5DaiR`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              borderBottomLeftRadius: 30,
                              borderBottomRightRadius: 30,
                              borderTopLeftRadius: 30,
                              borderTopRightRadius: 30,
                            },
                            variants: {
                              c3cl2ti1X: {
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                              },
                            },
                            children: d(p.div, {
                              className: `framer-78u9z1`,
                              "data-framer-name": `Content`,
                              layoutDependency: j,
                              layoutId: `LhiTn32bR`,
                              style: {
                                backgroundColor: `var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, rgb(237, 241, 244))`,
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                              },
                              variants: {
                                c3cl2ti1X: {
                                  borderBottomLeftRadius: 6,
                                  borderBottomRightRadius: 6,
                                  borderTopLeftRadius: 6,
                                  borderTopRightRadius: 6,
                                },
                              },
                              children: [
                                d(p.div, {
                                  className: `framer-1vb1s4b`,
                                  "data-framer-name": `Title/Description`,
                                  layoutDependency: j,
                                  layoutId: `ODSRlA78l`,
                                  children: [
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(p.h3, {
                                          className: `framer-styles-preset-5gl4i8`,
                                          "data-styles-preset": `eaSVQg4j4`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                          },
                                          children: `Challenges of managing investments today`,
                                        }),
                                      }),
                                      className: `framer-1y44lzn`,
                                      effect: ii,
                                      fonts: [`Inter`],
                                      layoutDependency: j,
                                      layoutId: `RvqBHgQU1`,
                                      style: {
                                        "--extracted-a0htzi": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(p.div, {
                                      className: `framer-8w2cx5`,
                                      "data-framer-name": `List`,
                                      layoutDependency: j,
                                      layoutId: `WhWm9MeSM`,
                                      children: [
                                        l(F, {
                                          height: 22,
                                          width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            89 +
                                            0 +
                                            6 +
                                            0 +
                                            90 +
                                            0 +
                                            58.4 +
                                            0 +
                                            0,
                                          ...U(
                                            {
                                              c3cl2ti1X: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: ai,
                                            className: `framer-1131318-container`,
                                            "data-framer-appear-id": `1131318`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `g4exdMtxS-container`,
                                            nodeId: `g4exdMtxS`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Financial data is spread across platforms and is hard to understand`,
                                              height: `100%`,
                                              id: `g4exdMtxS`,
                                              layoutId: `g4exdMtxS`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 10,
                                                  pixelWidth: 10,
                                                  src: `../../assets/images/59eNALHIwT6GZ6JhLrrkTHE0f7Y.svg`,
                                                },
                                                `Icon`
                                              ),
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 22,
                                          width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            89 +
                                            0 +
                                            6 +
                                            0 +
                                            90 +
                                            0 +
                                            58.4 +
                                            0 +
                                            32,
                                          ...U(
                                            {
                                              c3cl2ti1X: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  32,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: li,
                                            className: `framer-1t3uqfr-container`,
                                            "data-framer-appear-id": `1t3uqfr`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `RwiKYNveT-container`,
                                            nodeId: `RwiKYNveT`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Lack of clear direction for buy, hold, or sell decisions`,
                                              height: `100%`,
                                              id: `RwiKYNveT`,
                                              layoutId: `RwiKYNveT`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 10,
                                                  pixelWidth: 10,
                                                  src: `../../assets/images/59eNALHIwT6GZ6JhLrrkTHE0f7Y.svg`,
                                                },
                                                `Icon`
                                              ),
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 22,
                                          width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            89 +
                                            0 +
                                            6 +
                                            0 +
                                            90 +
                                            0 +
                                            58.4 +
                                            0 +
                                            64,
                                          ...U(
                                            {
                                              c3cl2ti1X: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  64,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: ui,
                                            className: `framer-1jpe4dg-container`,
                                            "data-framer-appear-id": `1jpe4dg`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `GilLIh2Qk-container`,
                                            nodeId: `GilLIh2Qk`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Tracking investments manually takes time and effort`,
                                              height: `100%`,
                                              id: `GilLIh2Qk`,
                                              layoutId: `GilLIh2Qk`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 10,
                                                  pixelWidth: 10,
                                                  src: `../../assets/images/59eNALHIwT6GZ6JhLrrkTHE0f7Y.svg`,
                                                },
                                                `Icon`
                                              ),
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 22,
                                          width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            89 +
                                            0 +
                                            6 +
                                            0 +
                                            90 +
                                            0 +
                                            58.4 +
                                            0 +
                                            96,
                                          ...U(
                                            {
                                              c3cl2ti1X: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  96,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: di,
                                            className: `framer-1py1t8l-container`,
                                            "data-framer-appear-id": `1py1t8l`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `SifrdueA5-container`,
                                            nodeId: `SifrdueA5`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Decisions based on incomplete or outdated information`,
                                              height: `100%`,
                                              id: `SifrdueA5`,
                                              layoutId: `SifrdueA5`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 10,
                                                  pixelWidth: 10,
                                                  src: `../../assets/images/59eNALHIwT6GZ6JhLrrkTHE0f7Y.svg`,
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
                                d(p.div, {
                                  className: `framer-1n1r8s5`,
                                  "data-framer-name": `Bottom`,
                                  layoutDependency: j,
                                  layoutId: `bmw6DPcvf`,
                                  children: [
                                    d(Qr, {
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: fi,
                                      className: `framer-d62esb`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `d62esb`,
                                      "data-framer-name": `01`,
                                      initial: oi,
                                      layoutDependency: j,
                                      layoutId: `zRRZlFZ0W`,
                                      optimized: !0,
                                      style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-1b12818c-058c-4797-a04f-5ca5424b73cd, rgba(255, 13, 13, 0.3))`,
                                        "--border-left-width": `1px`,
                                        "--border-right-width": `1px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `1px`,
                                        backgroundColor: `var(--token-a545ebfd-5179-4ff0-bfb3-68703755a1be, rgba(255, 13, 13, 0.05))`,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                      },
                                      variants: {
                                        c3cl2ti1X: {
                                          borderBottomLeftRadius: 10,
                                          borderBottomRightRadius: 10,
                                          borderTopLeftRadius: 10,
                                          borderTopRightRadius: 10,
                                        },
                                      },
                                      children: [
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.h4, {
                                              className: `framer-styles-preset-8q1iyv`,
                                              "data-styles-preset": `jUb4JLM3m`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                              },
                                              children: `68%`,
                                            }),
                                          }),
                                          className: `framer-rxpftn`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `e2uHhspxm`,
                                          style: {
                                            "--extracted-1eung3n": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.p, {
                                              className: `framer-styles-preset-1couuo6`,
                                              "data-styles-preset": `Lb6ff2C_Q`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                                              },
                                              children: `Financial data confusion`,
                                            }),
                                          }),
                                          className: `framer-ez63d1`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `uuw8kKZwi`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(Qr, {
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: pi,
                                      className: `framer-17b8l7v`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `17b8l7v`,
                                      "data-framer-name": `02`,
                                      initial: oi,
                                      layoutDependency: j,
                                      layoutId: `GQPCA7TaX`,
                                      optimized: !0,
                                      style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-1b12818c-058c-4797-a04f-5ca5424b73cd, rgba(255, 13, 13, 0.3))`,
                                        "--border-left-width": `1px`,
                                        "--border-right-width": `1px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `1px`,
                                        backgroundColor: `var(--token-a545ebfd-5179-4ff0-bfb3-68703755a1be, rgba(255, 13, 13, 0.05))`,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                      },
                                      variants: {
                                        c3cl2ti1X: {
                                          borderBottomLeftRadius: 10,
                                          borderBottomRightRadius: 10,
                                          borderTopLeftRadius: 10,
                                          borderTopRightRadius: 10,
                                        },
                                      },
                                      children: [
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.h4, {
                                              className: `framer-styles-preset-8q1iyv`,
                                              "data-styles-preset": `jUb4JLM3m`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                              },
                                              children: `55%`,
                                            }),
                                          }),
                                          className: `framer-vahi6g`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `ji2vGBq7L`,
                                          style: {
                                            "--extracted-1eung3n": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.p, {
                                              className: `framer-styles-preset-1couuo6`,
                                              "data-styles-preset": `Lb6ff2C_Q`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                                              },
                                              children: `Poor data understanding`,
                                            }),
                                          }),
                                          className: `framer-1dy9w0h`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `DvLXyNAWF`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ne() &&
                      d(p.div, {
                        className: `framer-1n0rlr`,
                        "data-framer-name": `After`,
                        layoutDependency: j,
                        layoutId: `W3McMS627`,
                        children: [
                          d(p.div, {
                            className: `framer-146rly4`,
                            "data-framer-name": `Top`,
                            layoutDependency: j,
                            layoutId: `eHqCzu0Iq`,
                            children: [
                              l(p.div, {
                                className: `framer-1kgt6us`,
                                "data-framer-name": `BG Overlay Top`,
                                layoutDependency: j,
                                layoutId: `L_Nd8LJp0`,
                                style: {
                                  background: `linear-gradient(180deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%)`,
                                },
                              }),
                              l(p.div, {
                                className: `framer-hd2cf1`,
                                "data-framer-name": `White Line`,
                                layoutDependency: j,
                                layoutId: `Cf4_wiBqu`,
                                style: {
                                  backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                },
                              }),
                              l(p.div, {
                                className: `framer-itxcxi`,
                                "data-border": !0,
                                "data-framer-name": `Before`,
                                layoutDependency: j,
                                layoutId: `GM1c3Hjah`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  borderBottomRightRadius: 20,
                                },
                                children: l(v, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(p.p, {
                                      className: `framer-styles-preset-1couuo6`,
                                      "data-styles-preset": `Lb6ff2C_Q`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                      },
                                      children: `Before FintechX`,
                                    }),
                                  }),
                                  className: `framer-ub8o0f`,
                                  fonts: [`Inter`],
                                  layoutDependency: j,
                                  layoutId: `qolJ49A7I`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    opacity: 1,
                                  },
                                  variants: {
                                    Gx64mbwEU: { opacity: 0.3 },
                                    k0AZZXdz2: { opacity: 0.3 },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      k0AZZXdz2: {
                                        children: l(r, {
                                          children: l(p.p, {
                                            className: `framer-styles-preset-1bx7rqe`,
                                            "data-styles-preset": `roK1lt6bc`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                            },
                                            children: `Before FintechX`,
                                          }),
                                        }),
                                      },
                                    },
                                    S,
                                    E
                                  ),
                                }),
                              }),
                              l(p.div, {
                                className: `framer-ofa02r`,
                                "data-framer-name": `Center`,
                                layoutDependency: j,
                                layoutId: `u3IMi1yAH`,
                                children: l(N, {
                                  background: {
                                    alt: `Vector`,
                                    fit: `fit`,
                                    intrinsicHeight: 480,
                                    intrinsicWidth: 390,
                                    pixelHeight: 480,
                                    pixelWidth: 390,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `130px`,
                                    src: `../../assets/images/KVlQJuvBpDGKGjMPCFXDMbkUo.png`,
                                  },
                                  className: `framer-171nu64`,
                                  fitImageDimension: `height`,
                                  layoutDependency: j,
                                  layoutId: `gYaejJFYF`,
                                  style: {
                                    filter: `drop-shadow(0px 2px 2px var(--token-22e76413-54a7-49e7-b94c-fb66f119d431, rgba(0, 0, 0, 0.1)) /* {"name":"000000 10% Copy"} */) drop-shadow(0px 7px 9px var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.2)) /* {"name":"000000 20% Copy"} */)`,
                                    WebkitFilter: `drop-shadow(0px 2px 2px var(--token-22e76413-54a7-49e7-b94c-fb66f119d431, rgba(0, 0, 0, 0.1)) /* {"name":"000000 10% Copy"} */) drop-shadow(0px 7px 9px var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.2)) /* {"name":"000000 20% Copy"} */)`,
                                  },
                                  transformTemplate: ri,
                                  ...U(
                                    {
                                      Gx64mbwEU: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 480,
                                          intrinsicWidth: 390,
                                          loading: _((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                          pixelHeight: 480,
                                          pixelWidth: 390,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `130px`,
                                          src: `../../assets/images/KVlQJuvBpDGKGjMPCFXDMbkUo.png`,
                                        },
                                      },
                                      k0AZZXdz2: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 480,
                                          intrinsicWidth: 390,
                                          loading: _((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                          pixelHeight: 480,
                                          pixelWidth: 390,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `80px`,
                                          src: `../../assets/images/KVlQJuvBpDGKGjMPCFXDMbkUo.png`,
                                        },
                                      },
                                    },
                                    S,
                                    E
                                  ),
                                }),
                              }),
                              l(p.div, {
                                className: `framer-bfhhjn`,
                                "data-border": !0,
                                "data-framer-name": `After`,
                                layoutDependency: j,
                                layoutId: `VW9i8koy4`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `0px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  borderBottomLeftRadius: 20,
                                },
                                children: l(v, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(p.p, {
                                      className: `framer-styles-preset-1couuo6`,
                                      "data-styles-preset": `Lb6ff2C_Q`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                      },
                                      children: `After FintechX`,
                                    }),
                                  }),
                                  className: `framer-jjjuji`,
                                  fonts: [`Inter`],
                                  layoutDependency: j,
                                  layoutId: `YdKkdQkp6`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    opacity: 0.3,
                                  },
                                  variants: {
                                    Gx64mbwEU: { opacity: 1 },
                                    k0AZZXdz2: { opacity: 1 },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      k0AZZXdz2: {
                                        children: l(r, {
                                          children: l(p.p, {
                                            className: `framer-styles-preset-1bx7rqe`,
                                            "data-styles-preset": `roK1lt6bc`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                            },
                                            children: `After FintechX`,
                                          }),
                                        }),
                                      },
                                    },
                                    S,
                                    E
                                  ),
                                }),
                              }),
                            ],
                          }),
                          l(p.div, {
                            className: `framer-1mnqj84`,
                            "data-border": !0,
                            "data-framer-name": `Bottom`,
                            layoutDependency: j,
                            layoutId: `A2wb5cY_R`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              borderBottomLeftRadius: 30,
                              borderBottomRightRadius: 30,
                              borderTopLeftRadius: 30,
                              borderTopRightRadius: 30,
                            },
                            variants: {
                              k0AZZXdz2: {
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                              },
                            },
                            children: d(p.div, {
                              className: `framer-11eo6ss`,
                              "data-framer-name": `Content`,
                              layoutDependency: j,
                              layoutId: `S2krzqtUE`,
                              style: {
                                backgroundColor: `var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0))`,
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                              },
                              variants: {
                                k0AZZXdz2: {
                                  borderBottomLeftRadius: 6,
                                  borderBottomRightRadius: 6,
                                  borderTopLeftRadius: 6,
                                  borderTopRightRadius: 6,
                                },
                              },
                              children: [
                                d(p.div, {
                                  className: `framer-w2as3y`,
                                  "data-framer-name": `Title/Description`,
                                  layoutDependency: j,
                                  layoutId: `S80ZqKtdh`,
                                  children: [
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(p.h3, {
                                          className: `framer-styles-preset-5gl4i8`,
                                          "data-styles-preset": `eaSVQg4j4`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                          },
                                          children: `Smarter way to manage your investments`,
                                        }),
                                      }),
                                      className: `framer-oeftdz`,
                                      effect: ii,
                                      fonts: [`Inter`],
                                      layoutDependency: j,
                                      layoutId: `moR0zC37q`,
                                      style: {
                                        "--extracted-a0htzi": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(p.div, {
                                      className: `framer-1xaa6rf`,
                                      "data-framer-name": `List`,
                                      layoutDependency: j,
                                      layoutId: `tl3gCN8HT`,
                                      children: [
                                        l(F, {
                                          height: 22,
                                          ...U(
                                            {
                                              Gx64mbwEU: {
                                                width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  89 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  90 +
                                                  0 +
                                                  58.4 +
                                                  0 +
                                                  0,
                                              },
                                              k0AZZXdz2: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: ai,
                                            className: `framer-1ksobjp-container`,
                                            "data-framer-appear-id": `1ksobjp`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `PeblRLiSw-container`,
                                            nodeId: `PeblRLiSw`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Get clear recommendations based on real-time data`,
                                              height: `100%`,
                                              id: `PeblRLiSw`,
                                              layoutId: `PeblRLiSw`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 9,
                                                  pixelWidth: 12,
                                                  src: `../../assets/images/cU6Yacp6C42TCWSRq8qtycxvNeY.svg`,
                                                },
                                                `Icon`
                                              ),
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 22,
                                          ...U(
                                            {
                                              Gx64mbwEU: {
                                                width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  89 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  90 +
                                                  0 +
                                                  58.4 +
                                                  0 +
                                                  32,
                                              },
                                              k0AZZXdz2: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  32,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: li,
                                            className: `framer-d3lu58-container`,
                                            "data-framer-appear-id": `d3lu58`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `Drrtp0EMl-container`,
                                            nodeId: `Drrtp0EMl`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Understand risks before making investment decisions`,
                                              height: `100%`,
                                              id: `Drrtp0EMl`,
                                              layoutId: `Drrtp0EMl`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 9,
                                                  pixelWidth: 12,
                                                  src: `../../assets/images/cU6Yacp6C42TCWSRq8qtycxvNeY.svg`,
                                                },
                                                `Icon`
                                              ),
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 22,
                                          ...U(
                                            {
                                              Gx64mbwEU: {
                                                width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  89 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  90 +
                                                  0 +
                                                  58.4 +
                                                  0 +
                                                  64,
                                              },
                                              k0AZZXdz2: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  64,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: ui,
                                            className: `framer-ub3kie-container`,
                                            "data-framer-appear-id": `ub3kie`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `wJMvpYmUb-container`,
                                            nodeId: `wJMvpYmUb`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Monitor your portfolio in real time no manual effort required`,
                                              height: `100%`,
                                              id: `wJMvpYmUb`,
                                              layoutId: `wJMvpYmUb`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 9,
                                                  pixelWidth: 12,
                                                  src: `../../assets/images/cU6Yacp6C42TCWSRq8qtycxvNeY.svg`,
                                                },
                                                `Icon`
                                              ),
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 22,
                                          ...U(
                                            {
                                              Gx64mbwEU: {
                                                width: `max((${f?.width || `100vw`} - 102px) / 1.6, 1px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  89 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  90 +
                                                  0 +
                                                  58.4 +
                                                  0 +
                                                  96,
                                              },
                                              k0AZZXdz2: {
                                                width: `calc(${f?.width || `100vw`} - 52px)`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  69 +
                                                  0 +
                                                  6 +
                                                  0 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  48.4 +
                                                  0 +
                                                  96,
                                              },
                                            },
                                            S,
                                            E
                                          ),
                                          children: l(Zr, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: di,
                                            className: `framer-1iui4f6-container`,
                                            "data-framer-appear-id": `1iui4f6`,
                                            initial: oi,
                                            layoutDependency: j,
                                            layoutId: `z1WO1Wqjo-container`,
                                            nodeId: `z1WO1Wqjo`,
                                            optimized: !0,
                                            rendersWithMotion: !0,
                                            scopeId: `yxFOx3lsU`,
                                            children: l(ht, {
                                              GmSs_KKEi: `Make consistent and informed investment choices`,
                                              height: `100%`,
                                              id: `z1WO1Wqjo`,
                                              layoutId: `z1WO1Wqjo`,
                                              style: { width: `100%` },
                                              uoP_rcx83: `var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186))`,
                                              variant: ci(`rKahmK2tf`),
                                              width: `100%`,
                                              XMCDOSojK: si(
                                                {
                                                  pixelHeight: 9,
                                                  pixelWidth: 12,
                                                  src: `../../assets/images/cU6Yacp6C42TCWSRq8qtycxvNeY.svg`,
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
                                d(p.div, {
                                  className: `framer-ljme9z`,
                                  "data-framer-name": `Bottom`,
                                  layoutDependency: j,
                                  layoutId: `bYGw5CLTb`,
                                  children: [
                                    d(Qr, {
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: fi,
                                      className: `framer-t4b969`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `t4b969`,
                                      "data-framer-name": `01`,
                                      initial: oi,
                                      layoutDependency: j,
                                      layoutId: `CthWBEKre`,
                                      optimized: !0,
                                      style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-022f990a-67ab-4d66-bc58-1786ab5e6332, rgba(16, 185, 129, 0.3))`,
                                        "--border-left-width": `1px`,
                                        "--border-right-width": `1px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `1px`,
                                        backdropFilter: `blur(5px)`,
                                        backgroundColor: `var(--token-da6f8224-04a5-4d90-b1b5-5b6af8cdf88d, rgba(16, 185, 129, 0.1))`,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        WebkitBackdropFilter: `blur(5px)`,
                                      },
                                      variants: {
                                        k0AZZXdz2: {
                                          borderBottomLeftRadius: 10,
                                          borderBottomRightRadius: 10,
                                          borderTopLeftRadius: 10,
                                          borderTopRightRadius: 10,
                                        },
                                      },
                                      children: [
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.h4, {
                                              className: `framer-styles-preset-8q1iyv`,
                                              "data-styles-preset": `jUb4JLM3m`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                              },
                                              children: `3X Faster`,
                                            }),
                                          }),
                                          className: `framer-99aycz`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `KhgWCvcaP`,
                                          style: {
                                            "--extracted-1eung3n": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.p, {
                                              className: `framer-styles-preset-1couuo6`,
                                              "data-styles-preset": `Lb6ff2C_Q`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3434016c-2b1b-421d-a7a4-de1700e08024, rgba(221, 229, 237, 0.7)))`,
                                              },
                                              children: `Smart decisions`,
                                            }),
                                          }),
                                          className: `framer-d544fi`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `LEOOy8GBO`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-3434016c-2b1b-421d-a7a4-de1700e08024, rgba(221, 229, 237, 0.7))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(Qr, {
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: pi,
                                      className: `framer-q6xg8q`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `q6xg8q`,
                                      "data-framer-name": `02`,
                                      initial: oi,
                                      layoutDependency: j,
                                      layoutId: `yVMUO3aOG`,
                                      optimized: !0,
                                      style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-022f990a-67ab-4d66-bc58-1786ab5e6332, rgba(16, 185, 129, 0.3))`,
                                        "--border-left-width": `1px`,
                                        "--border-right-width": `1px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `1px`,
                                        backdropFilter: `blur(5px)`,
                                        backgroundColor: `var(--token-da6f8224-04a5-4d90-b1b5-5b6af8cdf88d, rgba(16, 185, 129, 0.1))`,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        WebkitBackdropFilter: `blur(5px)`,
                                      },
                                      variants: {
                                        k0AZZXdz2: {
                                          borderBottomLeftRadius: 10,
                                          borderBottomRightRadius: 10,
                                          borderTopLeftRadius: 10,
                                          borderTopRightRadius: 10,
                                        },
                                      },
                                      children: [
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.h4, {
                                              className: `framer-styles-preset-8q1iyv`,
                                              "data-styles-preset": `jUb4JLM3m`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                              },
                                              children: `24/7`,
                                            }),
                                          }),
                                          className: `framer-85qj7r`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `w7wVFxhsm`,
                                          style: {
                                            "--extracted-1eung3n": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(p.p, {
                                              className: `framer-styles-preset-1couuo6`,
                                              "data-styles-preset": `Lb6ff2C_Q`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3434016c-2b1b-421d-a7a4-de1700e08024, rgba(221, 229, 237, 0.7)))`,
                                              },
                                              children: `Real-time tracking`,
                                            }),
                                          }),
                                          className: `framer-1hh9juj`,
                                          fonts: [`Inter`],
                                          layoutDependency: j,
                                          layoutId: `dBDZe5FNm`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-3434016c-2b1b-421d-a7a4-de1700e08024, rgba(221, 229, 237, 0.7))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d(p.div, {
                                  className: `framer-1u148r3`,
                                  "data-framer-name": `BG Item`,
                                  layoutDependency: j,
                                  layoutId: `txR7gYqOp`,
                                  children: [
                                    l(p.div, {
                                      className: `framer-zgoizg`,
                                      "data-framer-name": `Overlay`,
                                      layoutDependency: j,
                                      layoutId: `nVEXAL22Y`,
                                      style: {
                                        background: `linear-gradient(180deg, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 0%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 0%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 60%, var(--token-f02a5c8a-b667-414e-a18b-3b00bb922668, rgba(0, 0, 0, 0.3)) 100%)`,
                                      },
                                    }),
                                    l(N, {
                                      background: {
                                        alt: `BG Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 1080,
                                        intrinsicWidth: 1920,
                                        pixelHeight: 1080,
                                        pixelWidth: 1920,
                                        positionX: `center`,
                                        positionY: `top`,
                                        src: `../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg`,
                                        srcSet: `../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg?scale-down-to=1024&width=1920&height=1080 1024w,../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg 1920w`,
                                      },
                                      className: `framer-vj0vu6`,
                                      "data-framer-name": `BG Image`,
                                      layoutDependency: j,
                                      layoutId: `WAF_JV1uw`,
                                      ...U(
                                        {
                                          Gx64mbwEU: {
                                            background: {
                                              alt: `BG Image`,
                                              fit: `fill`,
                                              intrinsicHeight: 1080,
                                              intrinsicWidth: 1920,
                                              loading: _(
                                                (f?.y || 0) + 0 + 0 + 89 + 0 + 6 + 0 + -6 + 0
                                              ),
                                              pixelHeight: 1080,
                                              pixelWidth: 1920,
                                              positionX: `center`,
                                              positionY: `top`,
                                              sizes: `max(${f?.width || `100vw`} - 0px, 1px)`,
                                              src: `../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg`,
                                              srcSet: `../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg?scale-down-to=1024&width=1920&height=1080 1024w,../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg 1920w`,
                                            },
                                          },
                                          k0AZZXdz2: {
                                            background: {
                                              alt: `BG Image`,
                                              fit: `fill`,
                                              intrinsicHeight: 1080,
                                              intrinsicWidth: 1920,
                                              loading: _(
                                                (f?.y || 0) + 0 + 0 + 69 + 0 + 6 + 0 + -6 + 0
                                              ),
                                              pixelHeight: 1080,
                                              pixelWidth: 1920,
                                              positionX: `center`,
                                              positionY: `top`,
                                              sizes: `max(${f?.width || `100vw`} - 0px, 1px)`,
                                              src: `../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg`,
                                              srcSet: `../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg?scale-down-to=1024&width=1920&height=1080 1024w,../../assets/images/Osh2UHQcarC8mZnL6oh6gwYnbA.jpg 1920w`,
                                            },
                                          },
                                        },
                                        S,
                                        E
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-kIiXq.framer-afq30q, .framer-kIiXq .framer-afq30q { display: block; }`,
          `.framer-kIiXq.framer-11dka1i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 750px; }`,
          `.framer-kIiXq .framer-yfig7u, .framer-kIiXq .framer-1n0rlr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 560px; justify-content: flex-start; overflow: visible; padding: 89px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-kIiXq .framer-19e2aql, .framer-kIiXq .framer-146rly4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 90px; justify-content: center; left: 50px; overflow: visible; padding: 0px; position: absolute; right: 50px; top: 0px; z-index: 1; }`,
          `.framer-kIiXq .framer-1ycyxrt, .framer-kIiXq .framer-1kgt6us { -webkit-user-select: none; flex: none; height: 50%; left: calc(50.00000000000002% - 50% / 2); overflow: visible; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 50%; z-index: 2; }`,
          `.framer-kIiXq .framer-tgq5lc, .framer-kIiXq .framer-hd2cf1 { -webkit-user-select: none; bottom: 0px; flex: none; height: 1px; left: 50px; overflow: visible; pointer-events: none; position: absolute; right: 50px; user-select: none; z-index: 0; }`,
          `.framer-kIiXq .framer-1jccbc3, .framer-kIiXq .framer-itxcxi { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-end; overflow: visible; padding: 0px 20px 20px 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-kIiXq .framer-1hju70, .framer-kIiXq .framer-1s06pl5, .framer-kIiXq .framer-ub8o0f, .framer-kIiXq .framer-jjjuji { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-kIiXq .framer-qhqole, .framer-kIiXq .framer-ofa02r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 130px; z-index: 3; }`,
          `.framer-kIiXq .framer-1at2t1b { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 0px; width: 130px; z-index: 1; }`,
          `.framer-kIiXq .framer-b4qyba, .framer-kIiXq .framer-bfhhjn { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 20px 20px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-kIiXq .framer-qk3g14, .framer-kIiXq .framer-1mnqj84 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 20px; height: 1px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 6px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-kIiXq .framer-78u9z1, .framer-kIiXq .framer-11eo6ss { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 1px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 90px 30px 30px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-kIiXq .framer-1vb1s4b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-kIiXq .framer-1y44lzn, .framer-kIiXq .framer-rxpftn, .framer-kIiXq .framer-ez63d1, .framer-kIiXq .framer-vahi6g, .framer-kIiXq .framer-1dy9w0h, .framer-kIiXq .framer-oeftdz, .framer-kIiXq .framer-99aycz, .framer-kIiXq .framer-d544fi, .framer-kIiXq .framer-85qj7r, .framer-kIiXq .framer-1hh9juj { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-kIiXq .framer-8w2cx5, .framer-kIiXq .framer-1xaa6rf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kIiXq .framer-1131318-container, .framer-kIiXq .framer-1t3uqfr-container, .framer-kIiXq .framer-1jpe4dg-container, .framer-kIiXq .framer-1py1t8l-container, .framer-kIiXq .framer-1ksobjp-container, .framer-kIiXq .framer-d3lu58-container, .framer-kIiXq .framer-ub3kie-container, .framer-kIiXq .framer-1iui4f6-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-kIiXq .framer-1n1r8s5 { display: grid; flex: 0.6 0 0px; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-kIiXq .framer-d62esb, .framer-kIiXq .framer-17b8l7v, .framer-kIiXq .framer-t4b969, .framer-kIiXq .framer-q6xg8q { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-kIiXq .framer-171nu64 { flex: none; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 130px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-kIiXq .framer-w2as3y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-kIiXq .framer-ljme9z { display: grid; flex: 0.6 0 0px; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-kIiXq .framer-1u148r3 { -webkit-user-select: none; align-content: center; align-items: center; bottom: -6px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: -6px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: absolute; right: -6px; top: -6px; user-select: none; z-index: 0; }`,
          `.framer-kIiXq .framer-zgoizg { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-kIiXq .framer-vj0vu6 { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-kIiXq.framer-v-n2tv11.framer-11dka1i, .framer-kIiXq.framer-v-uyqu08.framer-11dka1i { width: 360px; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-yfig7u, .framer-kIiXq.framer-v-uyqu08 .framer-1n0rlr { height: 510px; padding: 69px 0px 0px 0px; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-19e2aql, .framer-kIiXq.framer-v-uyqu08 .framer-146rly4 { height: 70px; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-qhqole, .framer-kIiXq.framer-v-n2tv11 .framer-1at2t1b, .framer-kIiXq.framer-v-uyqu08 .framer-ofa02r, .framer-kIiXq.framer-v-uyqu08 .framer-171nu64 { width: 80px; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-78u9z1, .framer-kIiXq.framer-v-uyqu08 .framer-11eo6ss { flex-direction: column; gap: 20px; padding: 40px 20px 20px 20px; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-1vb1s4b, .framer-kIiXq.framer-v-uyqu08 .framer-w2as3y { flex: none; gap: 10px; width: 100%; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-1n1r8s5, .framer-kIiXq.framer-v-uyqu08 .framer-ljme9z { flex: none; gap: 20px 20px; grid-template-columns: repeat(2, minmax(50px, 1fr)); width: 100%; }`,
          `.framer-kIiXq.framer-v-n2tv11 .framer-d62esb, .framer-kIiXq.framer-v-n2tv11 .framer-17b8l7v, .framer-kIiXq.framer-v-uyqu08 .framer-t4b969, .framer-kIiXq.framer-v-uyqu08 .framer-q6xg8q { padding: 10px; }`,
          ...Ce,
          ...ut,
          ...qr,
          ...Et,
          `.framer-kIiXq[data-border="true"]::after, .framer-kIiXq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-kIiXq`
      )),
      (yi.displayName = `Before/After`),
      (yi.defaultProps = { height: 560, width: 750 }),
      b(yi, {
        variant: {
          options: [`ajKQH7XfN`, `Gx64mbwEU`, `c3cl2ti1X`, `k0AZZXdz2`],
          optionTitles: [`Before`, `After`, `Before - Phone`, `After - Phone`],
          title: `Variant`,
          type: I.Enum,
        },
      }),
      S(
        yi,
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
          ...Xr,
          ...B(we),
          ...B(ft),
          ...B(Kr),
          ...B(Dt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (yi.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(ht, {}, t)])) }));
  });
function xi({ progressColor: e, timeAnimation: t }) {
  let [r, i] = o(0),
    a = u(null);
  return (
    n(() => {
      let e = performance.now(),
        n = (r) => {
          let o = Math.min(((r - e) / t) * 100, 100);
          (i(o), o < 100 && (a.current = requestAnimationFrame(n)));
        };
      return (
        (a.current = requestAnimationFrame(n)),
        () => {
          a.current && cancelAnimationFrame(a.current);
        }
      );
    }, [t]),
    l(`div`, {
      style: { width: `100%`, height: `100%`, position: `relative`, overflow: `hidden` },
      children: l(`div`, {
        style: {
          position: `absolute`,
          top: 0,
          left: 0,
          height: `100%`,
          width: `${r}%`,
          backgroundColor: e,
        },
      }),
    })
  );
}
var Si = e(() => {
  (f(),
    t(),
    w(),
    b(xi, {
      progressColor: { title: `Progress Color`, type: I.Color, defaultValue: `black` },
      timeAnimation: {
        title: `Animation Time (ms)`,
        type: I.Number,
        defaultValue: 2e3,
        min: 100,
        max: 1e4,
        step: 100,
      },
    }));
});
function Ci(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi = e(() => {
    (f(),
      w(),
      h(),
      t(),
      Si(),
      Be(),
      (wi = E(xi)),
      (Ti = [`xtuVO2nep`, `NyLvezC4P`, `A6PGQszr5`, `ToaAbRRpd`]),
      (Ei = `framer-CWsCN`),
      (Di = {
        A6PGQszr5: `framer-v-1p38u6t`,
        NyLvezC4P: `framer-v-ov95r`,
        ToaAbRRpd: `framer-v-1kskuri`,
        xtuVO2nep: `framer-v-1fkkxhl`,
      }),
      (Oi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ki = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Ai = {
        "Active - Phone": `ToaAbRRpd`,
        "Default - Phone": `A6PGQszr5`,
        Active: `NyLvezC4P`,
        Default: `xtuVO2nep`,
      }),
      (ji = p.create(r)),
      (Mi = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        oFGrAxJQm: e ?? a.oFGrAxJQm,
        PIAUSwZrL: r ?? a.PIAUSwZrL ?? `Step-01`,
        variant: Ai[a.variant] ?? a.variant ?? `xtuVO2nep`,
      })),
      (Ni = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pi = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te();
          ce();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: _,
              PIAUSwZrL: y,
              oFGrAxJQm: b,
              ...x
            } = Mi(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = z({
              cycleOrder: Ti,
              defaultVariant: `xtuVO2nep`,
              ref: i,
              variant: _,
              variantClassNames: Di,
            }),
            j = Ni(e, A),
            { activeVariantCallback: M, delay: N } = oe(S),
            P = M(async (...e) => {
              if ((O({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            ne = g(Ei, Ue),
            re = () => S === `NyLvezC4P`;
          return l(ee, {
            id: h ?? a,
            children: l(ji, {
              animate: A,
              initial: !1,
              children: l(ki, {
                value: Oi,
                children: d(p.div, {
                  ...x,
                  ...T,
                  className: g(ne, `framer-1fkkxhl`, m, C),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `xtuVO2nep`,
                  onTap: P,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, rgb(237, 241, 244))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...f,
                  },
                  variants: {
                    ToaAbRRpd: {
                      backgroundColor: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                    },
                  },
                  ...Ci(
                    {
                      A6PGQszr5: { "data-framer-name": `Default - Phone` },
                      NyLvezC4P: { "data-framer-name": `Active` },
                      ToaAbRRpd: { "data-framer-name": `Active - Phone` },
                    },
                    S,
                    E
                  ),
                  children: [
                    l(v, {
                      __fromCanvasComponent: !0,
                      children: l(r, {
                        children: l(p.p, {
                          className: `framer-styles-preset-1bx7rqe`,
                          "data-styles-preset": `roK1lt6bc`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                          },
                          children: `Step-01`,
                        }),
                      }),
                      className: `framer-7xo9lk`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `LH8CnQbk8`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: y,
                      variants: {
                        NyLvezC4P: {
                          "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                        },
                        ToaAbRRpd: {
                          "--extracted-r6o4lv": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ci(
                        {
                          NyLvezC4P: {
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-1bx7rqe`,
                                "data-styles-preset": `roK1lt6bc`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                },
                                children: `Step-01`,
                              }),
                            }),
                          },
                          ToaAbRRpd: {
                            children: l(r, {
                              children: l(p.p, {
                                className: `framer-styles-preset-1bx7rqe`,
                                "data-styles-preset": `roK1lt6bc`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)))`,
                                },
                                children: `Step-01`,
                              }),
                            }),
                          },
                        },
                        S,
                        E
                      ),
                    }),
                    re() &&
                      l(F, {
                        children: l(fe, {
                          className: `framer-1f3wi8d-container`,
                          "data-framer-name": `1`,
                          isAuthoredByUser: !0,
                          layoutDependency: j,
                          layoutId: `iK9ymnBfg-container`,
                          name: `1`,
                          nodeId: `iK9ymnBfg`,
                          rendersWithMotion: !0,
                          scopeId: `e_IqVOdYW`,
                          style: { opacity: 0 },
                          variants: { NyLvezC4P: { opacity: 1 } },
                          children: l(xi, {
                            height: `100%`,
                            id: `iK9ymnBfg`,
                            layoutId: `iK9ymnBfg`,
                            name: `1`,
                            progressColor: `var(--token-248e7a4f-d4d9-4222-8a30-29cdf689ac46, rgb(16, 15, 18))`,
                            style: { height: `100%`, width: `100%` },
                            timeAnimation: 7e3,
                            width: `100%`,
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
          `.framer-CWsCN.framer-1lnpcoz, .framer-CWsCN .framer-1lnpcoz { display: block; }`,
          `.framer-CWsCN.framer-1fkkxhl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-CWsCN .framer-7xo9lk { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-CWsCN .framer-1f3wi8d-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-CWsCN.framer-v-1p38u6t.framer-1fkkxhl, .framer-CWsCN.framer-v-1kskuri.framer-1fkkxhl { padding: 6px 12px 6px 12px; }`,
          `.framer-CWsCN.framer-v-1p38u6t .framer-7xo9lk, .framer-CWsCN.framer-v-1kskuri .framer-7xo9lk { mix-blend-mode: unset; }`,
          ...Ve,
        ],
        `framer-CWsCN`
      )),
      (Pi.displayName = `Step Switcher`),
      (Pi.defaultProps = { height: 38, width: 89 }),
      b(Pi, {
        variant: {
          options: [`xtuVO2nep`, `NyLvezC4P`, `A6PGQszr5`, `ToaAbRRpd`],
          optionTitles: [`Default`, `Active`, `Default - Phone`, `Active - Phone`],
          title: `Variant`,
          type: I.Enum,
        },
        PIAUSwZrL: { defaultValue: `Step-01`, displayTextArea: !0, title: `Title`, type: I.String },
        onPIAUSwZrLChange: { changes: `PIAUSwZrL`, type: I.ChangeHandler },
        oFGrAxJQm: { title: `Click`, type: I.EventHandler },
      }),
      S(
        Pi,
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
          ...wi,
          ...B(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ii(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  W,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta = e(() => {
    (f(),
      w(),
      h(),
      t(),
      Ie(),
      We(),
      Fi(),
      (Li = E(Pi)),
      (Ri = pe(O(N))),
      (zi = pe(O(v))),
      (Bi = [`G2gpcTDN5`, `IR4evHvHr`, `hWyeiIKlU`, `oDnc1XCyp`, `pwwTn94YZ`, `RmgyjJMHc`]),
      (Vi = `framer-zeatJ`),
      (Hi = {
        G2gpcTDN5: `framer-v-ha5tww`,
        hWyeiIKlU: `framer-v-11o1f3y`,
        IR4evHvHr: `framer-v-yh6o7m`,
        oDnc1XCyp: `framer-v-1v6nef7`,
        pwwTn94YZ: `framer-v-ogtdqb`,
        RmgyjJMHc: `framer-v-10fyay0`,
      }),
      (Ui = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Wi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Gi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.1, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ki = {
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
      (qi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.2, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ji = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.3, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Yi = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(m.Provider, { value: o, children: t });
      }),
      (Xi = {
        "01 - Phone": `oDnc1XCyp`,
        "01": `G2gpcTDN5`,
        "02 - Phone": `pwwTn94YZ`,
        "02": `IR4evHvHr`,
        "03 - Phone": `RmgyjJMHc`,
        "03": `hWyeiIKlU`,
      }),
      (Zi = p.create(r)),
      (Qi = ({
        _01Description: e,
        _01Image: t,
        _01Title: n,
        _02Description: r,
        _02Image: i,
        _02Title: a,
        _03Description: o,
        _03Image: s,
        _03Title: c,
        height: l,
        id: u,
        width: d,
        ...f
      }) => ({
        ...f,
        BvPCACdvF: c ?? f.BvPCACdvF ?? `Get smart insights`,
        EISrLVa3P: e ?? f.EISrLVa3P ?? `Securely link your bank, trading, and investment accounts.`,
        gLEnwvWoT: s ??
          f.gLEnwvWoT ?? {
            alt: `Vector`,
            pixelHeight: 600,
            pixelWidth: 1350,
            src: `https://framerusercontent.com/images/nDs3OgbLpR77rcn1GvmpOSivzdI.png?width=1350&height=600`,
            srcSet: `https://framerusercontent.com/images/nDs3OgbLpR77rcn1GvmpOSivzdI.png?scale-down-to=512&width=1350&height=600 512w,https://framerusercontent.com/images/nDs3OgbLpR77rcn1GvmpOSivzdI.png?scale-down-to=1024&width=1350&height=600 1024w,https://framerusercontent.com/images/nDs3OgbLpR77rcn1GvmpOSivzdI.png?width=1350&height=600 1350w`,
          },
        MY8r9rZB6: r ?? f.MY8r9rZB6 ?? `AI processes your data to generate clear insights.`,
        R3JTbJYVh: i ??
          f.R3JTbJYVh ?? {
            alt: `Vector`,
            pixelHeight: 600,
            pixelWidth: 1350,
            src: `../../assets/images/BRYQbNFP21XSdbOpg2tEs4MO0aY.png?width=1350&height=600`,
            srcSet: `../../assets/images/BRYQbNFP21XSdbOpg2tEs4MO0aY.png?scale-down-to=512&width=1350&height=600 512w,../../assets/images/BRYQbNFP21XSdbOpg2tEs4MO0aY.png 1024w,../../assets/images/BRYQbNFP21XSdbOpg2tEs4MO0aY.png?width=1350&height=600 1350w`,
          },
        r5DkSureW:
          o ?? f.r5DkSureW ?? `Receive real-time recommendations to optimize your portfolio.`,
        R7vsr7Eeu: a ?? f.R7vsr7Eeu ?? `Analyze your data`,
        uBpkNBsH_: t ??
          f.uBpkNBsH_ ?? {
            alt: `Vector`,
            pixelHeight: 600,
            pixelWidth: 1350,
            src: `../../assets/images/ykcQXfkRR4KTqMLXTbg0T9PB8zk.png?width=1350&height=600`,
            srcSet: `../../assets/images/ykcQXfkRR4KTqMLXTbg0T9PB8zk.png?scale-down-to=512&width=1350&height=600 512w,../../assets/images/ykcQXfkRR4KTqMLXTbg0T9PB8zk.png 1024w,../../assets/images/ykcQXfkRR4KTqMLXTbg0T9PB8zk.png?width=1350&height=600 1350w`,
          },
        variant: Xi[f.variant] ?? f.variant ?? `G2gpcTDN5`,
        ZQ4sDRdMd: n ?? f.ZQ4sDRdMd ?? `Connect your accounts`,
      })),
      ($i = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ea = M(
        s(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = te(),
            f = ce(),
            {
              style: m,
              className: h,
              layoutId: v,
              variant: y,
              uBpkNBsH_: b,
              ZQ4sDRdMd: x,
              EISrLVa3P: S,
              R3JTbJYVh: C,
              R7vsr7Eeu: w,
              MY8r9rZB6: T,
              gLEnwvWoT: E,
              BvPCACdvF: D,
              r5DkSureW: O,
              ...k
            } = Qi(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: ne,
              setGestureState: re,
              setVariant: ie,
              variants: I,
            } = z({
              cycleOrder: Bi,
              defaultVariant: `G2gpcTDN5`,
              ref: i,
              variant: y,
              variantClassNames: Hi,
            }),
            L = $i(e, I),
            { activeVariantCallback: se, delay: le } = oe(A),
            ue = se(async (...e) => {
              await le(() => ie(`IR4evHvHr`, !0), 7e3);
            }),
            de = se(async (...e) => {
              await le(() => ie(`hWyeiIKlU`, !0), 7e3);
            }),
            pe = se(async (...e) => {
              await le(() => ie(`G2gpcTDN5`, !0), 7e3);
            }),
            R = se(async (...e) => {
              ie(`G2gpcTDN5`);
            }),
            B = se(async (...e) => {
              ie(`oDnc1XCyp`);
            }),
            me = se(async (...e) => {
              ie(`IR4evHvHr`);
            }),
            he = se(async (...e) => {
              ie(`pwwTn94YZ`);
            }),
            ge = se(async (...e) => {
              ie(`hWyeiIKlU`);
            }),
            _e = se(async (...e) => {
              ie(`RmgyjJMHc`);
            });
          ae(A, {
            default: ue,
            hWyeiIKlU: pe,
            IR4evHvHr: de,
            oDnc1XCyp: void 0,
            pwwTn94YZ: void 0,
            RmgyjJMHc: void 0,
          });
          let ve = g(Vi, qe, ze),
            ye = () => ![`oDnc1XCyp`, `pwwTn94YZ`, `RmgyjJMHc`].includes(A),
            be = () => ![`IR4evHvHr`, `hWyeiIKlU`, `pwwTn94YZ`, `RmgyjJMHc`].includes(A),
            xe = () => !![`IR4evHvHr`, `pwwTn94YZ`].includes(A),
            Se = () => !![`hWyeiIKlU`, `RmgyjJMHc`].includes(A);
          return l(ee, {
            id: v ?? a,
            children: l(Zi, {
              animate: I,
              initial: !1,
              children: l(Yi, {
                value: Ui,
                children: d(p.div, {
                  ...k,
                  ...N,
                  className: g(ve, `framer-ha5tww`, h, j),
                  "data-framer-name": `01`,
                  "data-highlight": !0,
                  layoutDependency: L,
                  layoutId: `G2gpcTDN5`,
                  ref: i,
                  style: { ...m },
                  ...Ii(
                    {
                      hWyeiIKlU: { "data-framer-name": `03` },
                      IR4evHvHr: { "data-framer-name": `02` },
                      oDnc1XCyp: { "data-framer-name": `01 - Phone`, "data-highlight": void 0 },
                      pwwTn94YZ: { "data-framer-name": `02 - Phone`, "data-highlight": void 0 },
                      RmgyjJMHc: { "data-framer-name": `03 - Phone`, "data-highlight": void 0 },
                    },
                    A,
                    P
                  ),
                  children: [
                    d(p.div, {
                      className: `framer-1nzsiy7`,
                      "data-framer-name": `Top`,
                      layoutDependency: L,
                      layoutId: `mXRg3P5OL`,
                      children: [
                        l(F, {
                          height: 38,
                          y: (f?.y || 0) + 0 + 0 + 10,
                          ...Ii(
                            {
                              oDnc1XCyp: { y: (f?.y || 0) + 0 + 0 + 0 },
                              pwwTn94YZ: { y: (f?.y || 0) + 0 + 0 + 0 },
                              RmgyjJMHc: { y: (f?.y || 0) + 0 + 0 + 0 },
                            },
                            A,
                            P
                          ),
                          children: l(fe, {
                            className: `framer-1jseoo9-container`,
                            layoutDependency: L,
                            layoutId: `SLpo8FnIw-container`,
                            nodeId: `SLpo8FnIw`,
                            rendersWithMotion: !0,
                            scopeId: `zScnpT2mO`,
                            children: l(Pi, {
                              height: `100%`,
                              id: `SLpo8FnIw`,
                              layoutId: `SLpo8FnIw`,
                              PIAUSwZrL: `Step 01`,
                              variant: W(`NyLvezC4P`),
                              width: `100%`,
                              ...Ii(
                                {
                                  hWyeiIKlU: { oFGrAxJQm: R, variant: W(`xtuVO2nep`) },
                                  IR4evHvHr: { oFGrAxJQm: R, variant: W(`xtuVO2nep`) },
                                  oDnc1XCyp: { variant: W(`ToaAbRRpd`) },
                                  pwwTn94YZ: { oFGrAxJQm: B, variant: W(`A6PGQszr5`) },
                                  RmgyjJMHc: { oFGrAxJQm: B, variant: W(`A6PGQszr5`) },
                                },
                                A,
                                P
                              ),
                            }),
                          }),
                        }),
                        l(F, {
                          height: 38,
                          y: (f?.y || 0) + 0 + 0 + 10,
                          ...Ii(
                            {
                              oDnc1XCyp: { y: (f?.y || 0) + 0 + 0 + 0 },
                              pwwTn94YZ: { y: (f?.y || 0) + 0 + 0 + 0 },
                              RmgyjJMHc: { y: (f?.y || 0) + 0 + 0 + 0 },
                            },
                            A,
                            P
                          ),
                          children: l(fe, {
                            className: `framer-1wq2h77-container`,
                            layoutDependency: L,
                            layoutId: `D1MEkZtZe-container`,
                            nodeId: `D1MEkZtZe`,
                            rendersWithMotion: !0,
                            scopeId: `zScnpT2mO`,
                            children: l(Pi, {
                              height: `100%`,
                              id: `D1MEkZtZe`,
                              layoutId: `D1MEkZtZe`,
                              oFGrAxJQm: me,
                              PIAUSwZrL: `Step 02`,
                              variant: W(`xtuVO2nep`),
                              width: `100%`,
                              ...Ii(
                                {
                                  IR4evHvHr: { oFGrAxJQm: void 0, variant: W(`NyLvezC4P`) },
                                  oDnc1XCyp: { oFGrAxJQm: he, variant: W(`A6PGQszr5`) },
                                  pwwTn94YZ: { oFGrAxJQm: void 0, variant: W(`ToaAbRRpd`) },
                                  RmgyjJMHc: { oFGrAxJQm: he, variant: W(`A6PGQszr5`) },
                                },
                                A,
                                P
                              ),
                            }),
                          }),
                        }),
                        l(F, {
                          height: 38,
                          y: (f?.y || 0) + 0 + 0 + 10,
                          ...Ii(
                            {
                              oDnc1XCyp: { y: (f?.y || 0) + 0 + 0 + 0 },
                              pwwTn94YZ: { y: (f?.y || 0) + 0 + 0 + 0 },
                              RmgyjJMHc: { y: (f?.y || 0) + 0 + 0 + 0 },
                            },
                            A,
                            P
                          ),
                          children: l(fe, {
                            className: `framer-1ng2gfn-container`,
                            layoutDependency: L,
                            layoutId: `fxFlnTxwM-container`,
                            nodeId: `fxFlnTxwM`,
                            rendersWithMotion: !0,
                            scopeId: `zScnpT2mO`,
                            children: l(Pi, {
                              height: `100%`,
                              id: `fxFlnTxwM`,
                              layoutId: `fxFlnTxwM`,
                              oFGrAxJQm: ge,
                              PIAUSwZrL: `Step 03`,
                              variant: W(`xtuVO2nep`),
                              width: `100%`,
                              ...Ii(
                                {
                                  hWyeiIKlU: { oFGrAxJQm: void 0, variant: W(`NyLvezC4P`) },
                                  oDnc1XCyp: { oFGrAxJQm: _e, variant: W(`A6PGQszr5`) },
                                  pwwTn94YZ: { oFGrAxJQm: _e, variant: W(`A6PGQszr5`) },
                                  RmgyjJMHc: { oFGrAxJQm: void 0, variant: W(`ToaAbRRpd`) },
                                },
                                A,
                                P
                              ),
                            }),
                          }),
                        }),
                        ye() &&
                          l(p.div, {
                            className: `framer-410ls0`,
                            "data-framer-name": `Bottom Line`,
                            layoutDependency: L,
                            layoutId: `borxf8har`,
                            style: {
                              backgroundColor: `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                            },
                          }),
                        ye() &&
                          l(p.div, {
                            className: `framer-70o6b3`,
                            "data-border": !0,
                            "data-framer-name": `Left Line`,
                            layoutDependency: L,
                            layoutId: `cmG7B7WLG`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              borderBottomRightRadius: 20,
                            },
                          }),
                        ye() &&
                          l(p.div, {
                            className: `framer-mhvpu8`,
                            "data-border": !0,
                            "data-framer-name": `Right Line`,
                            layoutDependency: L,
                            layoutId: `Uy0pSfvsn`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              borderBottomLeftRadius: 20,
                            },
                          }),
                        ye() &&
                          l(p.div, {
                            className: `framer-1mveh27`,
                            "data-framer-name": `Grad Overlay`,
                            layoutDependency: L,
                            layoutId: `lskUXIKAe`,
                            style: {
                              background: `linear-gradient(180deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%)`,
                            },
                          }),
                      ],
                    }),
                    l(p.div, {
                      className: `framer-1l3kjeq`,
                      "data-border": !0,
                      "data-framer-name": `Bottom`,
                      layoutDependency: L,
                      layoutId: `rLWevaB5W`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                      },
                      variants: {
                        oDnc1XCyp: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        pwwTn94YZ: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        RmgyjJMHc: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      },
                      children: d(p.div, {
                        className: `framer-kp2e5c`,
                        "data-framer-name": `Content`,
                        layoutDependency: L,
                        layoutId: `T7Ijg5i7S`,
                        style: {
                          backgroundColor: `var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, rgb(237, 241, 244))`,
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                        },
                        variants: {
                          oDnc1XCyp: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          pwwTn94YZ: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                          RmgyjJMHc: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                          },
                        },
                        children: [
                          be() &&
                            d(p.div, {
                              className: `framer-1ma36wk`,
                              "data-framer-name": `01`,
                              layoutDependency: L,
                              layoutId: `i7CqkHK49`,
                              children: [
                                l(Ri, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Gi,
                                  background: {
                                    alt: `Vector`,
                                    fit: `fit`,
                                    intrinsicHeight: 574,
                                    intrinsicWidth: 1338,
                                    loading: _((f?.y || 0) + 0 + 58 + 6 + 0 + 40 + 0 + 0 + 0),
                                    pixelHeight: 600,
                                    pixelWidth: 1350,
                                    sizes: `calc(${f?.width || `100vw`} - 92px)`,
                                    ...Wi(b),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-23o207`,
                                  "data-framer-appear-id": `23o207`,
                                  fitImageDimension: `height`,
                                  initial: Ki,
                                  layoutDependency: L,
                                  layoutId: `ngW7AdkSH`,
                                  optimized: !0,
                                  ...Ii(
                                    {
                                      oDnc1XCyp: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 574,
                                          intrinsicWidth: 1338,
                                          loading: _((f?.y || 0) + 0 + 48 + 6 + 0 + 20 + 0 + 0 + 0),
                                          pixelHeight: 600,
                                          pixelWidth: 1350,
                                          sizes: `calc(${f?.width || `100vw`} - 52px)`,
                                          ...Wi(b),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    A,
                                    P
                                  ),
                                }),
                                d(p.div, {
                                  className: `framer-1lra4tf`,
                                  "data-framer-name": `Title/Description`,
                                  layoutDependency: L,
                                  layoutId: `nIRFtQG57`,
                                  children: [
                                    l(zi, {
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: qi,
                                      children: l(r, {
                                        children: l(p.h3, {
                                          className: `framer-styles-preset-1m8gun7`,
                                          "data-styles-preset": `k6zcj6FY_`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                          },
                                          children: `Connect your accounts`,
                                        }),
                                      }),
                                      className: `framer-pgahhp`,
                                      "data-framer-appear-id": `pgahhp`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      layoutDependency: L,
                                      layoutId: `oTGbrH4r9`,
                                      optimized: !0,
                                      style: {
                                        "--extracted-a0htzi": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: x,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(zi, {
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: Ji,
                                      children: l(r, {
                                        children: l(p.p, {
                                          className: `framer-styles-preset-n7iy3a`,
                                          "data-styles-preset": `EpfgTb3LW`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                                          },
                                          children: `Securely link your bank, trading, and investment accounts`,
                                        }),
                                      }),
                                      className: `framer-a1p8nd`,
                                      "data-framer-appear-id": `a1p8nd`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      layoutDependency: L,
                                      layoutId: `WBiQULunk`,
                                      optimized: !0,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: S,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          xe() &&
                            d(p.div, {
                              className: `framer-1of6ilk`,
                              "data-framer-name": `02`,
                              layoutDependency: L,
                              layoutId: `ytHyLiw_r`,
                              children: [
                                l(Ri, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Gi,
                                  background: {
                                    alt: `Vector`,
                                    fit: `fit`,
                                    intrinsicHeight: 658,
                                    intrinsicWidth: 1338,
                                    pixelHeight: 600,
                                    pixelWidth: 1350,
                                    ...Wi(C),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-uuy69g`,
                                  "data-framer-appear-id": `uuy69g`,
                                  fitImageDimension: `height`,
                                  initial: Ki,
                                  layoutDependency: L,
                                  layoutId: `SYSSLwPbR`,
                                  optimized: !0,
                                  ...Ii(
                                    {
                                      IR4evHvHr: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 658,
                                          intrinsicWidth: 1338,
                                          loading: _((f?.y || 0) + 0 + 58 + 6 + 0 + 40 + 0 + 0 + 0),
                                          pixelHeight: 600,
                                          pixelWidth: 1350,
                                          sizes: `calc(${f?.width || `100vw`} - 92px)`,
                                          ...Wi(C),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      pwwTn94YZ: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 658,
                                          intrinsicWidth: 1338,
                                          loading: _((f?.y || 0) + 0 + 48 + 6 + 0 + 20 + 0 + 0 + 0),
                                          pixelHeight: 600,
                                          pixelWidth: 1350,
                                          sizes: `calc(${f?.width || `100vw`} - 52px)`,
                                          ...Wi(C),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    A,
                                    P
                                  ),
                                }),
                                d(p.div, {
                                  className: `framer-pifol2`,
                                  "data-framer-name": `Title/Description`,
                                  layoutDependency: L,
                                  layoutId: `Yevsuj8V2`,
                                  children: [
                                    l(zi, {
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: qi,
                                      children: l(r, {
                                        children: l(p.h3, {
                                          className: `framer-styles-preset-1m8gun7`,
                                          "data-styles-preset": `k6zcj6FY_`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                          },
                                          children: `Analyze your data`,
                                        }),
                                      }),
                                      className: `framer-6hkwnh`,
                                      "data-framer-appear-id": `6hkwnh`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      layoutDependency: L,
                                      layoutId: `VqdLFKLCx`,
                                      optimized: !0,
                                      style: {
                                        "--extracted-a0htzi": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: w,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(zi, {
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: Ji,
                                      children: l(r, {
                                        children: l(p.p, {
                                          className: `framer-styles-preset-n7iy3a`,
                                          "data-styles-preset": `EpfgTb3LW`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                                          },
                                          children: `AI processes your data to generate clear insights.`,
                                        }),
                                      }),
                                      className: `framer-1i8hixs`,
                                      "data-framer-appear-id": `1i8hixs`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      layoutDependency: L,
                                      layoutId: `uWgKkj4gy`,
                                      optimized: !0,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: T,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          Se() &&
                            d(p.div, {
                              className: `framer-6d2luy`,
                              "data-framer-name": `03`,
                              layoutDependency: L,
                              layoutId: `JWUQGNYgR`,
                              children: [
                                l(Ri, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Gi,
                                  background: {
                                    alt: `Vector`,
                                    fit: `fit`,
                                    intrinsicHeight: 778,
                                    intrinsicWidth: 1262,
                                    pixelHeight: 600,
                                    pixelWidth: 1350,
                                    ...Wi(E),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-18n0s8t`,
                                  "data-framer-appear-id": `18n0s8t`,
                                  fitImageDimension: `height`,
                                  initial: Ki,
                                  layoutDependency: L,
                                  layoutId: `ZOID_E5kD`,
                                  optimized: !0,
                                  ...Ii(
                                    {
                                      hWyeiIKlU: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 778,
                                          intrinsicWidth: 1262,
                                          loading: _((f?.y || 0) + 0 + 58 + 6 + 0 + 40 + 0 + 0 + 0),
                                          pixelHeight: 600,
                                          pixelWidth: 1350,
                                          sizes: `calc(${f?.width || `100vw`} - 92px)`,
                                          ...Wi(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      RmgyjJMHc: {
                                        background: {
                                          alt: `Vector`,
                                          fit: `fit`,
                                          intrinsicHeight: 778,
                                          intrinsicWidth: 1262,
                                          loading: _((f?.y || 0) + 0 + 48 + 6 + 0 + 20 + 0 + 0 + 0),
                                          pixelHeight: 600,
                                          pixelWidth: 1350,
                                          sizes: `calc(${f?.width || `100vw`} - 52px)`,
                                          ...Wi(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    A,
                                    P
                                  ),
                                }),
                                d(p.div, {
                                  className: `framer-ophlbu`,
                                  "data-framer-name": `Title/Description`,
                                  layoutDependency: L,
                                  layoutId: `F_fib8F9S`,
                                  children: [
                                    l(zi, {
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: qi,
                                      children: l(r, {
                                        children: l(p.h3, {
                                          className: `framer-styles-preset-1m8gun7`,
                                          "data-styles-preset": `k6zcj6FY_`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29)))`,
                                          },
                                          children: `Get smart insights`,
                                        }),
                                      }),
                                      className: `framer-ifcofz`,
                                      "data-framer-appear-id": `ifcofz`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      layoutDependency: L,
                                      layoutId: `cE7btKRAn`,
                                      optimized: !0,
                                      style: {
                                        "--extracted-a0htzi": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: D,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(zi, {
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: Ji,
                                      children: l(r, {
                                        children: l(p.p, {
                                          className: `framer-styles-preset-n7iy3a`,
                                          "data-styles-preset": `EpfgTb3LW`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95)))`,
                                          },
                                          children: `Receive real-time recommendations to optimize your portfolio.`,
                                        }),
                                      }),
                                      className: `framer-10ta2zf`,
                                      "data-framer-appear-id": `10ta2zf`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      layoutDependency: L,
                                      layoutId: `X9PtF0Fdw`,
                                      optimized: !0,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: O,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
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
          `.framer-zeatJ.framer-s4vpg1, .framer-zeatJ .framer-s4vpg1 { display: block; }`,
          `.framer-zeatJ.framer-ha5tww { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-zeatJ .framer-1nzsiy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-zeatJ .framer-1jseoo9-container, .framer-zeatJ .framer-1wq2h77-container, .framer-zeatJ .framer-1ng2gfn-container { flex: none; height: auto; position: relative; width: auto; z-index: 3; }`,
          `.framer-zeatJ .framer-410ls0 { -webkit-user-select: none; bottom: -1px; flex: none; height: 1px; left: -39px; overflow: visible; pointer-events: none; position: absolute; right: -39px; user-select: none; z-index: 1; }`,
          `.framer-zeatJ .framer-70o6b3 { -webkit-user-select: none; bottom: -1px; flex: none; left: -39px; overflow: visible; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 40px; z-index: 2; }`,
          `.framer-zeatJ .framer-mhvpu8 { -webkit-user-select: none; bottom: -1px; flex: none; overflow: visible; pointer-events: none; position: absolute; right: -39px; top: 0px; user-select: none; width: 40px; z-index: 2; }`,
          `.framer-zeatJ .framer-1mveh27 { -webkit-user-select: none; bottom: -12px; flex: none; height: 121%; left: -2px; overflow: visible; pointer-events: none; position: absolute; right: -2px; user-select: none; z-index: 2; }`,
          `.framer-zeatJ .framer-1l3kjeq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 6px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-zeatJ .framer-kp2e5c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-zeatJ .framer-1ma36wk, .framer-zeatJ .framer-1of6ilk, .framer-zeatJ .framer-6d2luy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-zeatJ .framer-23o207, .framer-zeatJ .framer-uuy69g, .framer-zeatJ .framer-18n0s8t { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
          `.framer-zeatJ .framer-1lra4tf, .framer-zeatJ .framer-pifol2, .framer-zeatJ .framer-ophlbu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-zeatJ .framer-pgahhp, .framer-zeatJ .framer-6hkwnh, .framer-zeatJ .framer-ifcofz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-zeatJ .framer-a1p8nd, .framer-zeatJ .framer-1i8hixs, .framer-zeatJ .framer-10ta2zf { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-zeatJ.framer-v-1v6nef7.framer-ha5tww, .framer-zeatJ.framer-v-ogtdqb.framer-ha5tww, .framer-zeatJ.framer-v-10fyay0.framer-ha5tww { gap: 10px; width: 360px; }`,
          `.framer-zeatJ.framer-v-1v6nef7 .framer-1nzsiy7, .framer-zeatJ.framer-v-ogtdqb .framer-1nzsiy7, .framer-zeatJ.framer-v-10fyay0 .framer-1nzsiy7 { padding: 0px; }`,
          `.framer-zeatJ.framer-v-1v6nef7 .framer-kp2e5c, .framer-zeatJ.framer-v-ogtdqb .framer-kp2e5c, .framer-zeatJ.framer-v-10fyay0 .framer-kp2e5c { padding: 20px; }`,
          `.framer-zeatJ.framer-v-1v6nef7 .framer-1ma36wk, .framer-zeatJ.framer-v-ogtdqb .framer-1of6ilk, .framer-zeatJ.framer-v-10fyay0 .framer-6d2luy { gap: 20px; }`,
          ...Ge,
          ...Le,
          `.framer-zeatJ[data-border="true"]::after, .framer-zeatJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-zeatJ`
      )),
      (ea.displayName = `Workflow Steps`),
      (ea.defaultProps = { height: 474, width: 600 }),
      b(ea, {
        variant: {
          options: [`G2gpcTDN5`, `IR4evHvHr`, `hWyeiIKlU`, `oDnc1XCyp`, `pwwTn94YZ`, `RmgyjJMHc`],
          optionTitles: [`01`, `02`, `03`, `01 - Phone`, `02 - Phone`, `03 - Phone`],
          title: `Variant`,
          type: I.Enum,
        },
        uBpkNBsH_: {
          __defaultAssetReference: `data:framer/asset-reference,ykcQXfkRR4KTqMLXTbg0T9PB8zk.png?originalFilename=vector-02.png&width=1350&height=600`,
          __vekterDefault: {
            alt: `Vector`,
            assetReference: `data:framer/asset-reference,ykcQXfkRR4KTqMLXTbg0T9PB8zk.png?originalFilename=vector-02.png&width=1350&height=600`,
          },
          title: `01 Image`,
          type: I.ResponsiveImage,
        },
        ZQ4sDRdMd: {
          defaultValue: `Connect your accounts`,
          displayTextArea: !0,
          title: `01 Title`,
          type: I.String,
        },
        onZQ4sDRdMdChange: { changes: `ZQ4sDRdMd`, type: I.ChangeHandler },
        EISrLVa3P: {
          defaultValue: `Securely link your bank, trading, and investment accounts.`,
          displayTextArea: !0,
          title: `01 Description`,
          type: I.String,
        },
        onEISrLVa3PChange: { changes: `EISrLVa3P`, type: I.ChangeHandler },
        R3JTbJYVh: {
          __defaultAssetReference: `data:framer/asset-reference,BRYQbNFP21XSdbOpg2tEs4MO0aY.png?originalFilename=vector-03.png&width=1350&height=600`,
          __vekterDefault: {
            alt: `Vector`,
            assetReference: `data:framer/asset-reference,BRYQbNFP21XSdbOpg2tEs4MO0aY.png?originalFilename=vector-03.png&width=1350&height=600`,
          },
          title: `02 Image`,
          type: I.ResponsiveImage,
        },
        R7vsr7Eeu: {
          defaultValue: `Analyze your data`,
          displayTextArea: !0,
          title: `02 Title`,
          type: I.String,
        },
        onR7vsr7EeuChange: { changes: `R7vsr7Eeu`, type: I.ChangeHandler },
        MY8r9rZB6: {
          defaultValue: `AI processes your data to generate clear insights.`,
          displayTextArea: !0,
          title: `02 Description`,
          type: I.String,
        },
        onMY8r9rZB6Change: { changes: `MY8r9rZB6`, type: I.ChangeHandler },
        gLEnwvWoT: {
          __defaultAssetReference: `data:framer/asset-reference,nDs3OgbLpR77rcn1GvmpOSivzdI.png?originalFilename=vector-04.png&width=1350&height=600`,
          __vekterDefault: {
            alt: `Vector`,
            assetReference: `data:framer/asset-reference,nDs3OgbLpR77rcn1GvmpOSivzdI.png?originalFilename=vector-04.png&width=1350&height=600`,
          },
          title: `03 Image`,
          type: I.ResponsiveImage,
        },
        BvPCACdvF: {
          defaultValue: `Get smart insights`,
          displayTextArea: !1,
          title: `03 Title`,
          type: I.String,
        },
        onBvPCACdvFChange: { changes: `BvPCACdvF`, type: I.ChangeHandler },
        r5DkSureW: {
          defaultValue: `Receive real-time recommendations to optimize your portfolio.`,
          displayTextArea: !0,
          title: `03 Description`,
          type: I.String,
        },
        onr5DkSureWChange: { changes: `r5DkSureW`, type: I.ChangeHandler },
      }),
      S(
        ea,
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
          ...Li,
          ...B(Ke),
          ...B(Re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ea.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(Pi, {}, t)])) }));
  }),
  na,
  ra,
  ia,
  aa = e(() => {
    (w(),
      ne.loadFonts([`GF;Bricolage Grotesque-600`, `GF;Bricolage Grotesque-700`]),
      (na = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bricolage Grotesque`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `../../assets/fonts/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvcXlyMgvs-wJDtw.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Bricolage Grotesque`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `../../assets/fonts/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvfzlyMgvs-wJDtw.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (ra = [
        `.framer-BUMAA .framer-styles-preset-p5vncl:not(.rich-text-wrapper), .framer-BUMAA .framer-styles-preset-p5vncl.rich-text-wrapper h2 { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 100px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.4px; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-BUMAA .framer-styles-preset-p5vncl:not(.rich-text-wrapper), .framer-BUMAA .framer-styles-preset-p5vncl.rich-text-wrapper h2 { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.4px; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-BUMAA .framer-styles-preset-p5vncl:not(.rich-text-wrapper), .framer-BUMAA .framer-styles-preset-p5vncl.rich-text-wrapper h2 { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.4px; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (ia = `framer-BUMAA`));
  }),
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  G,
  _a,
  va,
  K,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  q,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  J,
  Xa,
  Y,
  Za,
  Qa,
  $a,
  eo,
  X,
  Z,
  to,
  no,
  Q,
  ro,
  io,
  $,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go;
e(() => {
  (f(),
    w(),
    h(),
    t(),
    Me(),
    je(),
    Pe(),
    qt(),
    sn(),
    _n(),
    Un(),
    ur(),
    Qe(),
    et(),
    tt(),
    yr(),
    Mr(),
    Gr(),
    st(),
    mt(),
    pt(),
    yt(),
    xt(),
    Ct(),
    bi(),
    ta(),
    Ie(),
    rt(),
    We(),
    Je(),
    Ee(),
    aa(),
    kt(),
    Pt(),
    (oa = pe(v)),
    (sa = pe(N)),
    (ca = E($e)),
    (la = E(Wr)),
    (ua = pe(p.div)),
    (da = E(ct)),
    (fa = O(N)),
    (pa = pe(O(p.div))),
    (ma = E(bt)),
    (ha = E(V)),
    (ga = C(p.div)),
    (G = O(p.div)),
    (_a = E(yi)),
    (va = x(yi)),
    (K = O(j)),
    (ya = E(nt)),
    (ba = E(lr)),
    (xa = E(on)),
    (Sa = E(Kt)),
    (Ca = E(St)),
    (wa = E(ea)),
    (Ta = E(jr)),
    (Ea = E(gn)),
    (Da = E(H)),
    (Oa = E(Fe)),
    (ka = E(lt)),
    (Aa = E(_t)),
    (ja = E(Hn)),
    (Ma = E(wt)),
    (Na = O(y(p.div))),
    (Pa = E(Ne)),
    (Fa = E(Ae)),
    (Ia = {
      ajgklN14M: `(min-width: 810px) and (max-width: 1199.98px)`,
      G3g83S3dk: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (La = () => typeof document < `u`),
    (Ra = []),
    (za = `framer-bdOkX`),
    (Ba = {
      ajgklN14M: `framer-v-sm4lii`,
      G3g83S3dk: `framer-v-naka4o`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Va = (e, t, n) => (e && t ? `position` : n)),
    (q = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (Ha = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 0,
    }),
    (Ua = {
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
    (Wa = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (Ga = {
      opacity: 1,
      rotate: -16,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Wa,
      x: 0,
      y: 0,
    }),
    (Ka = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (qa = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Ka,
      x: 0,
      y: 0,
    }),
    (Ja = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.4, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Ya = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.5, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Xa = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.6, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Y = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Za = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.2, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Qa = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    ($a = (e, t) => `translateX(-50%) ${t}`),
    (eo = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.7, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (X = {
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
    (Z = {
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
    (to = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Wa,
      x: 0,
      y: 20,
    }),
    (no = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Ka,
      x: 0,
      y: 20,
    }),
    (Q = { delay: 0, duration: 80, ease: [0, 0, 1, 1], type: `tween` }),
    (ro = {
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
    (io = (e, t) => `translate(-50%, -50%) ${t}`),
    ($ = {
      opacity: 1,
      rotate: -360,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (ao = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 100,
      y: 100,
    }),
    (oo = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (so = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -100,
      y: 100,
    }),
    (co = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -100,
      y: -100,
    }),
    (lo = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 50,
      y: -50,
    }),
    (uo = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 100,
      y: -100,
    }),
    (fo = { Desktop: `WQLkyLRf1`, Phone: `G3g83S3dk`, Tablet: `ajgklN14M` }),
    (po = ({ value: e }) =>
      re()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (mo = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: fo[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (ho = M(
      s(function (e, t) {
        let n = u(null),
          o = t ?? n,
          s = c(),
          { activeLocale: f, setLocale: h } = te(),
          _ = ce(),
          { style: y, className: b, layoutId: x, variant: S, ...C } = mo(e);
        se(a(() => Nt({}, f), [f]));
        let [w, T] = le(S, Ia, !1),
          E = g(za, ia, ke, Mt, ze, qe, Ze, ot),
          O = i(ue)?.isLayoutTemplate,
          M = !!i(m)?.transition?.layout,
          ne = Va(O, M),
          re = P(`WjDvxPmzM`),
          ie = u(null),
          ae = P(`gGm_H2dqe`),
          oe = u(null),
          I = P(`cJNkEibYK`),
          fe = u(null);
        A();
        let pe = P(`VvaPuX7Oi`),
          z = u(null),
          B = () => !La() || w !== `G3g83S3dk`,
          me = () => !La() || ![`ajgklN14M`, `G3g83S3dk`].includes(w),
          he = P(`IFP710qU3`),
          ge = de(),
          _e = u(null),
          ve = P(`dZygCm5P3`),
          ye = P(`CsIM_9uV3`),
          be = P(`hau0OUBRK`),
          xe = u(null),
          Se = P(`IoxYsjuT2`),
          Ce = P(`VlEuTsMiM`),
          we = u(null),
          Te = P(`y1bGKUbRm`),
          Ee = P(`qYaIIcLBc`),
          De = P(`QzBV1S8YN`),
          Oe = u(null),
          je = P(`JWWe7o8mf`),
          Me = u(null),
          Pe = P(`SqjXcPB78`),
          Ie = P(`H_cBp8W8Q`),
          Le = () => !La() || w === `G3g83S3dk`;
        return (
          L({}),
          l(ue.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: fo,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Ba,
            },
            children: d(ee, {
              id: x ?? s,
              children: [
                l(po, {
                  value: `html body { background: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)); }`,
                }),
                d(p.div, {
                  ...C,
                  className: g(E, `framer-72rtr7`, b),
                  ref: o,
                  style: { ...y },
                  children: [
                    d(p.main, {
                      className: `framer-m6f8sq`,
                      "data-framer-name": `Main`,
                      layout: ne,
                      children: [
                        d(`section`, {
                          className: `framer-k1k9dl`,
                          "data-framer-name": `Hero`,
                          children: [
                            l(`div`, {
                              className: `framer-1d3xmyh`,
                              "data-framer-name": `Container`,
                              children: d(`div`, {
                                className: `framer-1a2b6ll`,
                                "data-framer-name": `Content`,
                                id: re,
                                ref: ie,
                                children: [
                                  d(`div`, {
                                    className: `framer-clrt71`,
                                    "data-framer-name": `Top`,
                                    id: ae,
                                    ref: oe,
                                    children: [
                                      d(`div`, {
                                        className: `framer-1yiua1c`,
                                        "data-framer-name": `Title/Short Description`,
                                        children: [
                                          d(`div`, {
                                            className: `framer-126jbi7`,
                                            "data-framer-name": `Title`,
                                            children: [
                                              l(oa, {
                                                __fromCanvasComponent: !0,
                                                animate: Ha,
                                                children: l(r, {
                                                  children: l(`h1`, {
                                                    className: `framer-styles-preset-p5vncl`,
                                                    "data-styles-preset": `THVQgirlm`,
                                                    dir: `auto`,
                                                    children: `Finance`,
                                                  }),
                                                }),
                                                className: `framer-wc3kw0`,
                                                "data-framer-appear-id": `wc3kw0`,
                                                fonts: [`Inter`],
                                                initial: Ua,
                                                optimized: !0,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  ajgklN14M: {
                                                    background: {
                                                      alt: `Icon`,
                                                      fit: `fit`,
                                                      intrinsicHeight: 400,
                                                      intrinsicWidth: 400,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `60px`,
                                                      src: `../../assets/images/MvCoibXjquEPyTLgOctzXJU.png`,
                                                    },
                                                  },
                                                  G3g83S3dk: {
                                                    background: {
                                                      alt: `Icon`,
                                                      fit: `fit`,
                                                      intrinsicHeight: 400,
                                                      intrinsicWidth: 400,
                                                      pixelHeight: 400,
                                                      pixelWidth: 400,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `30px`,
                                                      src: `../../assets/images/MvCoibXjquEPyTLgOctzXJU.png`,
                                                    },
                                                  },
                                                },
                                                children: l(sa, {
                                                  animate: Ga,
                                                  background: {
                                                    alt: `Icon`,
                                                    fit: `fit`,
                                                    intrinsicHeight: 400,
                                                    intrinsicWidth: 400,
                                                    pixelHeight: 400,
                                                    pixelWidth: 400,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `100px`,
                                                    src: `../../assets/images/MvCoibXjquEPyTLgOctzXJU.png`,
                                                  },
                                                  className: `framer-1p41gx3`,
                                                  "data-framer-appear-id": `1p41gx3`,
                                                  initial: Ua,
                                                  optimized: !0,
                                                  style: { rotate: -16 },
                                                }),
                                              }),
                                              l(oa, {
                                                __fromCanvasComponent: !0,
                                                animate: qa,
                                                children: l(r, {
                                                  children: l(`h1`, {
                                                    className: `framer-styles-preset-p5vncl`,
                                                    "data-styles-preset": `THVQgirlm`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                    },
                                                    children: `Platform`,
                                                  }),
                                                }),
                                                className: `framer-dkzye`,
                                                "data-framer-appear-id": `dkzye`,
                                                fonts: [`Inter`],
                                                initial: Ua,
                                                optimized: !0,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              l(`div`, {
                                                className: `framer-ohtzn4`,
                                                "data-framer-name": `ID 02`,
                                                id: I,
                                                ref: fe,
                                              }),
                                            ],
                                          }),
                                          l(oa, {
                                            __fromCanvasComponent: !0,
                                            animate: Ja,
                                            children: l(r, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-13r4t6j`,
                                                "data-styles-preset": `NwDqOD0lC`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                },
                                                children: `Optimize your investments with AI-driven analysis, real-time tracking, and intelligent recommendations.`,
                                              }),
                                            }),
                                            className: `framer-1spbc6i`,
                                            "data-framer-appear-id": `1spbc6i`,
                                            fonts: [`Inter`],
                                            initial: Ua,
                                            optimized: !0,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      d(ua, {
                                        animate: Ya,
                                        className: `framer-f1qe15`,
                                        "data-framer-appear-id": `f1qe15`,
                                        "data-framer-name": `Buttons`,
                                        initial: Ua,
                                        optimized: !0,
                                        children: [
                                          l(D, {
                                            links: [
                                              {
                                                href: { webPageId: `TbHzfliLr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `TbHzfliLr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `TbHzfliLr` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                height: 59,
                                                children: l(j, {
                                                  className: `framer-ajmxgk-container`,
                                                  nodeId: `xZseY16a7`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      ajgklN14M: {
                                                        gayKxTIvB: e[1],
                                                        variant: J(`Rc5QmtPAI`),
                                                      },
                                                      G3g83S3dk: {
                                                        gayKxTIvB: e[2],
                                                        variant: J(`Rc5QmtPAI`),
                                                      },
                                                    },
                                                    children: l($e, {
                                                      gayKxTIvB: e[0],
                                                      height: `100%`,
                                                      id: `xZseY16a7`,
                                                      layoutId: `xZseY16a7`,
                                                      uYcQ8rJi0: !1,
                                                      variant: J(`Y5rxWmMw9`),
                                                      width: `100%`,
                                                      ziCnPH11n: `Get started now`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          l(D, {
                                            links: [
                                              {
                                                href: { webPageId: `NgxcsGEIz` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `NgxcsGEIz` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `NgxcsGEIz` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                height: 59,
                                                children: l(j, {
                                                  className: `framer-txa6ds-container`,
                                                  nodeId: `lJs9rFXjE`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      ajgklN14M: {
                                                        gayKxTIvB: e[1],
                                                        variant: J(`OtPPGEvOS`),
                                                      },
                                                      G3g83S3dk: {
                                                        gayKxTIvB: e[2],
                                                        variant: J(`OtPPGEvOS`),
                                                      },
                                                    },
                                                    children: l(Wr, {
                                                      gayKxTIvB: e[0],
                                                      height: `100%`,
                                                      id: `lJs9rFXjE`,
                                                      layoutId: `lJs9rFXjE`,
                                                      uYcQ8rJi0: !1,
                                                      variant: J(`CAzYV7KJv`),
                                                      width: `100%`,
                                                      ziCnPH11n: `View demo`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                      d(ua, {
                                        animate: Xa,
                                        className: `framer-19r2iw5`,
                                        "data-framer-appear-id": `19r2iw5`,
                                        "data-framer-name": `List`,
                                        initial: Ua,
                                        optimized: !0,
                                        children: [
                                          l(F, {
                                            height: 22,
                                            children: l(j, {
                                              className: `framer-1gchnln-container`,
                                              nodeId: `QZwRMxtvJ`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    uoP_rcx83: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  },
                                                },
                                                children: l(ct, {
                                                  GmSs_KKEi: `4.9/5 Rating`,
                                                  height: `100%`,
                                                  id: `QZwRMxtvJ`,
                                                  layoutId: `QZwRMxtvJ`,
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`GLuZpuSO3`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
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
                                          }),
                                          l(`div`, {
                                            className: `framer-12ovudb`,
                                            "data-framer-name": `Line`,
                                          }),
                                          l(F, {
                                            height: 22,
                                            children: l(j, {
                                              className: `framer-1uciv1k-container`,
                                              nodeId: `Gqnc8Tdd_`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    uoP_rcx83: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  },
                                                },
                                                children: l(ct, {
                                                  GmSs_KKEi: `Bank-level security`,
                                                  height: `100%`,
                                                  id: `Gqnc8Tdd_`,
                                                  layoutId: `Gqnc8Tdd_`,
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`GLuZpuSO3`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
                                                    {
                                                      pixelHeight: 18,
                                                      pixelWidth: 17,
                                                      src: `../../assets/images/TPz3R1Zrox75UYaGWia5OJWG0LY.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                          l(`div`, {
                                            className: `framer-xov8df`,
                                            "data-framer-name": `Line`,
                                          }),
                                          l(F, {
                                            height: 22,
                                            children: l(j, {
                                              className: `framer-bz8jzm-container`,
                                              nodeId: `g_KcNGJ18`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    uoP_rcx83: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  },
                                                },
                                                children: l(ct, {
                                                  GmSs_KKEi: `Real-time AI insights`,
                                                  height: `100%`,
                                                  id: `g_KcNGJ18`,
                                                  layoutId: `g_KcNGJ18`,
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`GLuZpuSO3`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
                                                    {
                                                      pixelHeight: 20,
                                                      pixelWidth: 13,
                                                      src: `../../assets/images/yMT4mMoFpKnWs2yU5HHxgRIdrc.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  l(ua, {
                                    animate: Za,
                                    className: `framer-h1rone`,
                                    "data-framer-appear-id": `h1rone`,
                                    "data-framer-name": `Bottom`,
                                    initial: Qa,
                                    optimized: !0,
                                    children: l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          __framer__styleTransformEffectEnabled: void 0,
                                          background: {
                                            alt: `Dashboard`,
                                            fit: `fill`,
                                            intrinsicHeight: 927,
                                            intrinsicWidth: 1600,
                                            pixelHeight: 927,
                                            pixelWidth: 1600,
                                            sizes: `max(min(min(${_?.width || `100vw`}, 1260px) - 40px, 1060px), 1px)`,
                                            src: `../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg`,
                                            srcSet: `../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg?scale-down-to=512&width=1600&height=927 512w,../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg?scale-down-to=1024&width=1600&height=927 1024w,../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg 1600w`,
                                          },
                                        },
                                        G3g83S3dk: {
                                          __framer__styleTransformEffectEnabled: void 0,
                                          background: {
                                            alt: `Dashboard`,
                                            fit: `fill`,
                                            intrinsicHeight: 927,
                                            intrinsicWidth: 1600,
                                            pixelHeight: 927,
                                            pixelWidth: 1600,
                                            sizes: `max(min(min(${_?.width || `100vw`}, 1260px) - 32px, 1060px), 1px)`,
                                            src: `../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg`,
                                            srcSet: `../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg?scale-down-to=512&width=1600&height=927 512w,../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg?scale-down-to=1024&width=1600&height=927 1024w,../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg 1600w`,
                                          },
                                        },
                                      },
                                      children: l(fa, {
                                        __framer__spring: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stagger: 0,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0.64,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: -190,
                                            },
                                          },
                                          {
                                            offset: 100,
                                            ref: oe,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: `Dashboard`,
                                          fit: `fill`,
                                          intrinsicHeight: 927,
                                          intrinsicWidth: 1600,
                                          pixelHeight: 927,
                                          pixelWidth: 1600,
                                          sizes: `max(min(min(${_?.width || `100vw`}, 1260px) - 60px, 1060px), 1px)`,
                                          src: `../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg`,
                                          srcSet: `../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg?scale-down-to=512&width=1600&height=927 512w,../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg?scale-down-to=1024&width=1600&height=927 1024w,../../assets/images/DyMdJq1T1QOvaqt7lS1v7R7bwI.jpg 1600w`,
                                        },
                                        className: `framer-1hw9hq1`,
                                        "data-border": !0,
                                        fitImageDimension: `height`,
                                        id: pe,
                                        ref: z,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            B() &&
                              l(N, {
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
                                className: `framer-8baswv hidden-naka4o`,
                                "data-framer-name": `Cloud 01`,
                                fitImageDimension: `width`,
                              }),
                            B() &&
                              l(N, {
                                background: {
                                  alt: `Cloud Image`,
                                  fit: `fit`,
                                  intrinsicHeight: 548,
                                  intrinsicWidth: 1186,
                                  pixelHeight: 548,
                                  pixelWidth: 1186,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `519.4161px`,
                                  src: `../../assets/images/fLN6Wx8BsWTV2MkQDeC8mB2BQKA.png?width=1186&height=548`,
                                  srcSet: `../../assets/images/fLN6Wx8BsWTV2MkQDeC8mB2BQKA.png?scale-down-to=512&width=1186&height=548 512w,../../assets/images/fLN6Wx8BsWTV2MkQDeC8mB2BQKA.png 1024w,../../assets/images/fLN6Wx8BsWTV2MkQDeC8mB2BQKA.png?width=1186&height=548 1186w`,
                                },
                                className: `framer-1cd8rv8 hidden-naka4o`,
                                "data-framer-name": `Cloud 02`,
                                fitImageDimension: `width`,
                                transformTemplate: $a,
                              }),
                            B() &&
                              l(N, {
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
                                className: `framer-bbhfkx hidden-naka4o`,
                                "data-framer-name": `Cloud 03`,
                                fitImageDimension: `width`,
                              }),
                            me() &&
                              l(pa, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: fe,
                                    target: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScrollTarget`,
                                __framer__transformViewportThreshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: eo,
                                className: `framer-hbxgbd hidden-sm4lii hidden-naka4o`,
                                "data-framer-appear-id": `hbxgbd`,
                                "data-framer-name": `Decoration Image`,
                                initial: Ua,
                                optimized: !0,
                                children: l(`div`, {
                                  className: `framer-1bp8hfh`,
                                  "data-framer-name": `Wrap`,
                                  children: l(fa, {
                                    __framer__spring: {
                                      damping: 60,
                                      delay: 0,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stagger: 0,
                                      stiffness: 500,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        offset: -150,
                                        ref: ie,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 2,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 1400,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: `Decoration Image`,
                                      fit: `fit`,
                                      intrinsicHeight: 767,
                                      intrinsicWidth: 1960,
                                      pixelHeight: 767,
                                      pixelWidth: 1960,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `max(${_?.width || `100vw`} + 20px, 1px)`,
                                      src: `../../assets/images/OH5Re0X1fnTabOLoEQYYNvYZWdQ.png`,
                                      srcSet: `../../assets/images/OH5Re0X1fnTabOLoEQYYNvYZWdQ.png?scale-down-to=512&width=1960&height=767 512w,../../assets/images/OH5Re0X1fnTabOLoEQYYNvYZWdQ.png?scale-down-to=1024&width=1960&height=767 1024w,../../assets/images/OH5Re0X1fnTabOLoEQYYNvYZWdQ.png 1960w`,
                                    },
                                    className: `framer-1j061rr`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              }),
                            l(`div`, {
                              className: `framer-au56yr`,
                              "data-framer-name": `BG Item`,
                              children: l(N, {
                                background: {
                                  alt: `BG Image`,
                                  fit: `fill`,
                                  intrinsicHeight: 1600,
                                  intrinsicWidth: 1920,
                                  pixelHeight: 1600,
                                  pixelWidth: 1920,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `max(${_?.width || `100vw`}, 1px)`,
                                  src: `../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg`,
                                  srcSet: `../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg?scale-down-to=512&width=1920&height=1600 512w,../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg?scale-down-to=1024&width=1920&height=1600 1024w,../../assets/images/QonQfzdUmEwRaww2TW9LW9ODvR0.jpg 1920w`,
                                },
                                className: `framer-1razf8m`,
                                "data-framer-name": `BG Image`,
                              }),
                            }),
                            l(`div`, {
                              className: `framer-1puayo5`,
                              "data-framer-name": `BG Bottom`,
                            }),
                          ],
                        }),
                        l(`section`, {
                          className: `framer-1y1d7p1`,
                          "data-framer-name": `Client`,
                          children: l(`div`, {
                            className: `framer-jpyqg6`,
                            "data-framer-name": `Container`,
                            children: d(G, {
                              __framer__animate: { transition: q },
                              __framer__animateOnce: !0,
                              __framer__enter: X,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-x497yh`,
                              "data-framer-name": `Content`,
                              children: [
                                l(`div`, {
                                  className: `framer-m4b5i1`,
                                  "data-framer-name": `Fade Left`,
                                }),
                                l(`div`, {
                                  className: `framer-1si1pk1`,
                                  "data-framer-name": `Fade Right`,
                                }),
                                d(`div`, {
                                  className: `framer-wzn7pk`,
                                  "data-framer-name": `Pre Title`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-1yjcc4r`,
                                      "data-framer-name": `Line`,
                                    }),
                                    l(F, {
                                      height: 38,
                                      children: l(j, {
                                        className: `framer-u9fuz-container`,
                                        nodeId: `oGbKlm7RG`,
                                        scopeId: `augiA20Il`,
                                        children: l(bt, {
                                          BSyxhptbW: `Trusted by investors and financial teams`,
                                          height: `100%`,
                                          id: `oGbKlm7RG`,
                                          layoutId: `oGbKlm7RG`,
                                          variant: J(`dVqc43eR9`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                l(R, {
                                  breakpoint: w,
                                  overrides: { G3g83S3dk: { tickerEffectGap: `30px` } },
                                  children: d(ga, {
                                    className: `framer-1by6xl6`,
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1klh6tf-container`,
                                            nodeId: `RWnD8GxPn`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `RWnD8GxPn`,
                                              layoutId: `RWnD8GxPn`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1xpfrd8-container`,
                                            nodeId: `FrDgwxZHI`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `FrDgwxZHI`,
                                              layoutId: `FrDgwxZHI`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1a7kes0-container`,
                                            nodeId: `isPthU6TA`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `isPthU6TA`,
                                              layoutId: `isPthU6TA`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1mk1x21-container`,
                                            nodeId: `Ur6ebFDuf`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `Ur6ebFDuf`,
                                              layoutId: `Ur6ebFDuf`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-p75x8t-container`,
                                            nodeId: `NfsdLAoRU`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `NfsdLAoRU`,
                                              layoutId: `NfsdLAoRU`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1fauekh-container`,
                                            nodeId: `pspJbdax2`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `pspJbdax2`,
                                              layoutId: `pspJbdax2`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1pj2ix4-container`,
                                            nodeId: `tcAJKfB_w`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `tcAJKfB_w`,
                                              layoutId: `tcAJKfB_w`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1gk657t-container`,
                                            nodeId: `PrYfN9Ah5`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `PrYfN9Ah5`,
                                              layoutId: `PrYfN9Ah5`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-1a5v9y5-container`,
                                            nodeId: `aKI5WXKGh`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `aKI5WXKGh`,
                                              layoutId: `aKI5WXKGh`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-rt6ke0-container`,
                                            nodeId: `Goxtt6IiG`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `Goxtt6IiG`,
                                              layoutId: `Goxtt6IiG`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                      l(k, {
                                        children: l(F, {
                                          height: 20,
                                          children: l(j, {
                                            className: `framer-lttu65-container`,
                                            nodeId: `Vt8tWq6gH`,
                                            scopeId: `augiA20Il`,
                                            children: l(V, {
                                              height: `100%`,
                                              id: `Vt8tWq6gH`,
                                              layoutId: `Vt8tWq6gH`,
                                              width: `100%`,
                                              zDJH8fw1b: Y(
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
                                }),
                                l(`div`, {
                                  className: `framer-1w4iiu6`,
                                  "data-framer-name": `Line`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        d(`section`, {
                          className: `framer-1rqiilw`,
                          "data-framer-name": `Comparison`,
                          id: he,
                          ref: ge(he),
                          children: [
                            l(`div`, {
                              className: `framer-1mtjf8r`,
                              "data-framer-name": `Container`,
                              children: d(`div`, {
                                className: `framer-nng3lh`,
                                "data-framer-name": `Content`,
                                children: [
                                  l(G, {
                                    __framer__animate: { transition: q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Z,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-m8ns6d`,
                                    "data-framer-name": `Top`,
                                    children: l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(`h2`, {
                                          className: `framer-styles-preset-140jh7d`,
                                          "data-styles-preset": `vxo9lP1tq`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                          },
                                          children: `Smarter decisions start with clear data`,
                                        }),
                                      }),
                                      className: `framer-va9ypv`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  l(R, {
                                    breakpoint: w,
                                    overrides: {
                                      ajgklN14M: {
                                        width: `calc(min(${_?.width || `100vw`}, 760px) - 40px)`,
                                      },
                                      G3g83S3dk: {
                                        width: `min(min(${_?.width || `100vw`}, 760px) - 32px, 360px)`,
                                      },
                                    },
                                    children: l(F, {
                                      height: 560,
                                      width: `calc(min(${_?.width || `100vw`}, 760px) - 60px)`,
                                      children: l(K, {
                                        __framer__animate: { transition: Wa },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__exit: to,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-rtxifa-container`,
                                        nodeId: `h2OZfKqOk`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            G3g83S3dk: {
                                              __framer__targets: [{ ref: _e, target: `k0AZZXdz2` }],
                                              style: { maxWidth: `100%`, width: `100%` },
                                              variant: J(`c3cl2ti1X`),
                                            },
                                          },
                                          children: l(va, {
                                            __framer__animateOnce: !1,
                                            __framer__targets: [{ ref: _e, target: `Gx64mbwEU` }],
                                            __framer__threshold: 1,
                                            __framer__variantAppearEffectEnabled: !0,
                                            height: `100%`,
                                            id: `h2OZfKqOk`,
                                            layoutId: `h2OZfKqOk`,
                                            style: { width: `100%` },
                                            variant: J(`ajKQH7XfN`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            l(`div`, {
                              className: `framer-1it3ea3`,
                              "data-framer-name": `ID`,
                              id: ve,
                              ref: _e,
                            }),
                          ],
                        }),
                        l(`section`, {
                          className: `framer-ie3zx4`,
                          "data-framer-name": `Features`,
                          id: ye,
                          ref: ge(ye),
                          children: l(`div`, {
                            className: `framer-1p35fyn`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-1nqcdkm`,
                              "data-framer-name": `Content`,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-4rb60z`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-kakt8u`,
                                      "data-framer-name": `Left`,
                                      children: [
                                        l(F, {
                                          height: 38,
                                          children: l(j, {
                                            className: `framer-1nz465r-container`,
                                            nodeId: `fmwfd3i8i`,
                                            scopeId: `augiA20Il`,
                                            children: l(bt, {
                                              BSyxhptbW: `Core features`,
                                              height: `100%`,
                                              id: `fmwfd3i8i`,
                                              layoutId: `fmwfd3i8i`,
                                              variant: J(`dVqc43eR9`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`h2`, {
                                              className: `framer-styles-preset-140jh7d`,
                                              "data-styles-preset": `vxo9lP1tq`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                              },
                                              children: `Everything you need to invest confidently`,
                                            }),
                                          }),
                                          className: `framer-1dnlptc`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-ln9274`,
                                      "data-framer-name": `Right`,
                                      children: [
                                        l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            G3g83S3dk: {
                                              children: l(r, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-n7iy3a`,
                                                  "data-styles-preset": `EpfgTb3LW`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  },
                                                  children: `Professional tools designed for active traders and long-term investors managing diverse portfolios.`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: l(v, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-n7iy3a`,
                                                "data-styles-preset": `EpfgTb3LW`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `right`,
                                                  "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                },
                                                children: `Professional tools designed for active traders and long-term investors managing diverse portfolios.`,
                                              }),
                                            }),
                                            className: `framer-d42xmu`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        l(D, {
                                          links: [
                                            {
                                              href: { webPageId: `imaylMxrx` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `imaylMxrx` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `imaylMxrx` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            l(F, {
                                              height: 59,
                                              children: l(j, {
                                                className: `framer-16jydmu-container`,
                                                nodeId: `nKAmA98BN`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: {
                                                      gayKxTIvB: e[1],
                                                      variant: J(`n9A7jxl3z`),
                                                    },
                                                    G3g83S3dk: {
                                                      gayKxTIvB: e[2],
                                                      variant: J(`n9A7jxl3z`),
                                                    },
                                                  },
                                                  children: l($e, {
                                                    gayKxTIvB: e[0],
                                                    height: `100%`,
                                                    id: `nKAmA98BN`,
                                                    layoutId: `nKAmA98BN`,
                                                    uYcQ8rJi0: !1,
                                                    variant: J(`KVSDvWZoH`),
                                                    width: `100%`,
                                                    ziCnPH11n: `View all features`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d(G, {
                                  __framer__animate: { transition: Wa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: to,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1dgpeyp`,
                                  "data-framer-name": `Bottom`,
                                  id: be,
                                  ref: xe,
                                  children: [
                                    d(`div`, {
                                      className: `framer-1oqhr5r`,
                                      "data-framer-name": `Left`,
                                      children: [
                                        d(`div`, {
                                          className: `framer-1s177ci`,
                                          "data-framer-name": `01`,
                                          children: [
                                            l(v, {
                                              __fromCanvasComponent: !0,
                                              children: l(r, {
                                                children: l(`div`, {
                                                  className: `framer-styles-preset-1m8gun7`,
                                                  "data-styles-preset": `k6zcj6FY_`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  },
                                                  children: `Advanced risk analysis`,
                                                }),
                                              }),
                                              className: `framer-682d1o`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  background: {
                                                    alt: `Vector`,
                                                    fit: `fit`,
                                                    intrinsicHeight: 650,
                                                    intrinsicWidth: 498,
                                                    pixelHeight: 650,
                                                    pixelWidth: 498,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `min(max((max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 50px) * 2 - 0px) / 2, 50px) - 80px, 150px)`,
                                                    src: `../../assets/images/wXWMCe97v6E9fhERLabXGgt0Go.png`,
                                                    srcSet: `../../assets/images/wXWMCe97v6E9fhERLabXGgt0Go.png 498w`,
                                                  },
                                                },
                                                G3g83S3dk: {
                                                  background: {
                                                    alt: `Vector`,
                                                    fit: `fit`,
                                                    intrinsicHeight: 650,
                                                    intrinsicWidth: 498,
                                                    pixelHeight: 650,
                                                    pixelWidth: 498,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `min(max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px) - 40px, 150px)`,
                                                    src: `../../assets/images/wXWMCe97v6E9fhERLabXGgt0Go.png`,
                                                    srcSet: `../../assets/images/wXWMCe97v6E9fhERLabXGgt0Go.png 498w`,
                                                  },
                                                },
                                              },
                                              children: l(N, {
                                                background: {
                                                  alt: `Vector`,
                                                  fit: `fit`,
                                                  intrinsicHeight: 650,
                                                  intrinsicWidth: 498,
                                                  pixelHeight: 650,
                                                  pixelWidth: 498,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `min(max((max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px) * 2 - 0px) / 2, 50px) - 80px, 150px)`,
                                                  src: `../../assets/images/wXWMCe97v6E9fhERLabXGgt0Go.png`,
                                                  srcSet: `../../assets/images/wXWMCe97v6E9fhERLabXGgt0Go.png 498w`,
                                                },
                                                className: `framer-15e48iu`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                            d(ga, {
                                              className: `framer-ft1k72`,
                                              "data-framer-name": `List`,
                                              tickerEffectAlign: `center`,
                                              tickerEffectDirectionModifier: `default`,
                                              tickerEffectDraggable: !1,
                                              tickerEffectEnabled: !0,
                                              tickerEffectGap: `20px`,
                                              tickerEffectHoverModifier: 100,
                                              tickerEffectOverflow: `visible`,
                                              tickerEffectPosition: `relative`,
                                              tickerEffectStackDirection: `row`,
                                              tickerEffectVelocity: 15,
                                              children: [
                                                l(k, {
                                                  children: l(F, {
                                                    height: 28,
                                                    children: l(j, {
                                                      className: `framer-31exsu-container`,
                                                      nodeId: `WBqTl76z0`,
                                                      scopeId: `augiA20Il`,
                                                      children: l(nt, {
                                                        h3thwb3uh: `Real-time risk scoring`,
                                                        height: `100%`,
                                                        id: `WBqTl76z0`,
                                                        layoutId: `WBqTl76z0`,
                                                        rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                        variant: J(`oBYzv67yH`),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                l(k, {
                                                  children: l(F, {
                                                    height: 28,
                                                    children: l(j, {
                                                      className: `framer-11x0hno-container`,
                                                      nodeId: `L4yeOZzs1`,
                                                      scopeId: `augiA20Il`,
                                                      children: l(nt, {
                                                        h3thwb3uh: `Portfolio volatility tracking`,
                                                        height: `100%`,
                                                        id: `L4yeOZzs1`,
                                                        layoutId: `L4yeOZzs1`,
                                                        rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                        variant: J(`oBYzv67yH`),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                l(k, {
                                                  children: l(F, {
                                                    height: 28,
                                                    children: l(j, {
                                                      className: `framer-1e6gdol-container`,
                                                      nodeId: `nKmwQJp9O`,
                                                      scopeId: `augiA20Il`,
                                                      children: l(nt, {
                                                        h3thwb3uh: `Predictive risk alerts`,
                                                        height: `100%`,
                                                        id: `nKmwQJp9O`,
                                                        layoutId: `nKmwQJp9O`,
                                                        rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                        variant: J(`oBYzv67yH`),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        d(`div`, {
                                          className: `framer-1xwju4i`,
                                          "data-framer-name": `02`,
                                          children: [
                                            l(v, {
                                              __fromCanvasComponent: !0,
                                              children: l(r, {
                                                children: l(`div`, {
                                                  className: `framer-styles-preset-1m8gun7`,
                                                  "data-styles-preset": `k6zcj6FY_`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  },
                                                  children: `Market insights`,
                                                }),
                                              }),
                                              className: `framer-azdf4j`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  background: {
                                                    alt: `Vector`,
                                                    fit: `fit`,
                                                    intrinsicHeight: 246,
                                                    intrinsicWidth: 303,
                                                    pixelHeight: 246,
                                                    pixelWidth: 303,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(max((max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 50px) * 2 - 0px) / 2, 50px) - 80px)`,
                                                    src: `../../assets/images/G7W3uXGEWJ2M7xixcWnVJPdzxEc.svg`,
                                                  },
                                                },
                                                G3g83S3dk: {
                                                  background: {
                                                    alt: `Vector`,
                                                    fit: `fit`,
                                                    intrinsicHeight: 246,
                                                    intrinsicWidth: 303,
                                                    pixelHeight: 246,
                                                    pixelWidth: 303,
                                                    positionX: `center`,
                                                    positionY: `center`,
                                                    sizes: `calc(max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px) - 40px)`,
                                                    src: `../../assets/images/G7W3uXGEWJ2M7xixcWnVJPdzxEc.svg`,
                                                  },
                                                },
                                              },
                                              children: l(N, {
                                                background: {
                                                  alt: `Vector`,
                                                  fit: `fit`,
                                                  intrinsicHeight: 246,
                                                  intrinsicWidth: 303,
                                                  pixelHeight: 246,
                                                  pixelWidth: 303,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `calc(max((max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px) * 2 - 0px) / 2, 50px) - 80px)`,
                                                  src: `../../assets/images/G7W3uXGEWJ2M7xixcWnVJPdzxEc.svg`,
                                                },
                                                className: `framer-1bo6oyu`,
                                                fitImageDimension: `height`,
                                              }),
                                            }),
                                            d(`div`, {
                                              className: `framer-1cxr09i`,
                                              "data-framer-name": `BG Item`,
                                              children: [
                                                l(`div`, {
                                                  className: `framer-7deerb`,
                                                  "data-framer-name": `Overlay`,
                                                }),
                                                l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: {
                                                      background: {
                                                        alt: `BG Image`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 800,
                                                        intrinsicWidth: 800,
                                                        pixelHeight: 800,
                                                        pixelWidth: 800,
                                                        positionX: `center`,
                                                        positionY: `top`,
                                                        sizes: `max(max((max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 50px) * 2 - 0px) / 2, 50px), 1px)`,
                                                        src: `../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg?width=800&height=800`,
                                                        srcSet: `../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg 512w,../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg?width=800&height=800 800w`,
                                                      },
                                                    },
                                                    G3g83S3dk: {
                                                      background: {
                                                        alt: `BG Image`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 800,
                                                        intrinsicWidth: 800,
                                                        pixelHeight: 800,
                                                        pixelWidth: 800,
                                                        positionX: `center`,
                                                        positionY: `top`,
                                                        sizes: `max(max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px), 1px)`,
                                                        src: `../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg?width=800&height=800`,
                                                        srcSet: `../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg 512w,../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg?width=800&height=800 800w`,
                                                      },
                                                    },
                                                  },
                                                  children: l(N, {
                                                    background: {
                                                      alt: `BG Image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 800,
                                                      intrinsicWidth: 800,
                                                      pixelHeight: 800,
                                                      pixelWidth: 800,
                                                      positionX: `center`,
                                                      positionY: `top`,
                                                      sizes: `max(max((max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px) * 2 - 0px) / 2, 50px), 1px)`,
                                                      src: `../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg?width=800&height=800`,
                                                      srcSet: `../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg 512w,../../assets/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg?width=800&height=800 800w`,
                                                    },
                                                    className: `framer-sn7t4m`,
                                                    "data-framer-name": `BG Image`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        d(`div`, {
                                          className: `framer-12vjpiy`,
                                          "data-framer-name": `03`,
                                          children: [
                                            d(`div`, {
                                              className: `framer-1nb751b`,
                                              "data-framer-name": `Top`,
                                              children: [
                                                l(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: l(r, {
                                                    children: l(`div`, {
                                                      className: `framer-styles-preset-1m8gun7`,
                                                      "data-styles-preset": `k6zcj6FY_`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                      },
                                                      children: `Portfolio tracking`,
                                                    }),
                                                  }),
                                                  className: `framer-5okc6k`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                l(v, {
                                                  __fromCanvasComponent: !0,
                                                  children: l(r, {
                                                    children: l(`p`, {
                                                      className: `framer-styles-preset-1couuo6`,
                                                      "data-styles-preset": `Lb6ff2C_Q`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                      },
                                                      children: `See your entire financial picture in one place with performance attribution and gain/loss analysis.`,
                                                    }),
                                                  }),
                                                  className: `framer-1wko4yx`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            d(`div`, {
                                              className: `framer-2hxm00`,
                                              "data-framer-name": `Bottom`,
                                              children: [
                                                l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      background: {
                                                        alt: `Vector`,
                                                        fit: `fit`,
                                                        intrinsicHeight: 235,
                                                        intrinsicWidth: 252,
                                                        pixelHeight: 235,
                                                        pixelWidth: 252,
                                                        positionX: `center`,
                                                        positionY: `center`,
                                                        sizes: `180px`,
                                                        src: `../../assets/images/LLeScfWulZWyA0jZhMBwmQgQHA.svg`,
                                                      },
                                                    },
                                                  },
                                                  children: l(fa, {
                                                    __framer__spring: {
                                                      damping: 60,
                                                      delay: 0,
                                                      duration: 0.3,
                                                      ease: [0.44, 0, 0.56, 1],
                                                      mass: 1,
                                                      stagger: 0,
                                                      stiffness: 500,
                                                      type: `spring`,
                                                    },
                                                    __framer__styleTransformEffectEnabled: !0,
                                                    __framer__transformTargets: [
                                                      {
                                                        target: {
                                                          opacity: 1,
                                                          rotate: 0,
                                                          rotateX: 0,
                                                          rotateY: 0,
                                                          scale: 1,
                                                          skewX: 0,
                                                          skewY: 0,
                                                          x: 20,
                                                          y: 40,
                                                        },
                                                      },
                                                      {
                                                        ref: xe,
                                                        target: {
                                                          opacity: 1,
                                                          rotate: 0,
                                                          rotateX: 0,
                                                          rotateY: 0,
                                                          scale: 1,
                                                          skewX: 0,
                                                          skewY: 0,
                                                          x: 0,
                                                          y: 0,
                                                        },
                                                      },
                                                    ],
                                                    __framer__transformTrigger: `onScrollTarget`,
                                                    __framer__transformViewportThreshold: 0.5,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                      alt: `Vector`,
                                                      fit: `fit`,
                                                      intrinsicHeight: 235,
                                                      intrinsicWidth: 252,
                                                      pixelHeight: 235,
                                                      pixelWidth: 252,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `250px`,
                                                      src: `../../assets/images/LLeScfWulZWyA0jZhMBwmQgQHA.svg`,
                                                    },
                                                    className: `framer-8feyv`,
                                                    fitImageDimension: `height`,
                                                    style: { rotate: -5 },
                                                  }),
                                                }),
                                                l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      background: {
                                                        alt: `Vector`,
                                                        fit: `fit`,
                                                        intrinsicHeight: 280,
                                                        intrinsicWidth: 304,
                                                        pixelHeight: 280,
                                                        pixelWidth: 304,
                                                        positionX: `center`,
                                                        positionY: `center`,
                                                        sizes: `200px`,
                                                        src: `../../assets/images/LP5Ny6NdFTClX39IhTGUIolDygE.svg`,
                                                      },
                                                    },
                                                  },
                                                  children: l(fa, {
                                                    __framer__spring: {
                                                      damping: 60,
                                                      delay: 0,
                                                      duration: 0.3,
                                                      ease: [0.44, 0, 0.56, 1],
                                                      mass: 1,
                                                      stagger: 0,
                                                      stiffness: 500,
                                                      type: `spring`,
                                                    },
                                                    __framer__styleTransformEffectEnabled: !0,
                                                    __framer__transformTargets: [
                                                      {
                                                        target: {
                                                          opacity: 1,
                                                          rotate: 0,
                                                          rotateX: 0,
                                                          rotateY: 0,
                                                          scale: 1,
                                                          skewX: 0,
                                                          skewY: 0,
                                                          x: -20,
                                                          y: 40,
                                                        },
                                                      },
                                                      {
                                                        ref: xe,
                                                        target: {
                                                          opacity: 1,
                                                          rotate: 0,
                                                          rotateX: 0,
                                                          rotateY: 0,
                                                          scale: 1,
                                                          skewX: 0,
                                                          skewY: 0,
                                                          x: 0,
                                                          y: 0,
                                                        },
                                                      },
                                                    ],
                                                    __framer__transformTrigger: `onScrollTarget`,
                                                    __framer__transformViewportThreshold: 0.5,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                      alt: `Vector`,
                                                      fit: `fit`,
                                                      intrinsicHeight: 280,
                                                      intrinsicWidth: 304,
                                                      pixelHeight: 280,
                                                      pixelWidth: 304,
                                                      positionX: `center`,
                                                      positionY: `center`,
                                                      sizes: `300px`,
                                                      src: `../../assets/images/LP5Ny6NdFTClX39IhTGUIolDygE.svg`,
                                                    },
                                                    className: `framer-asxrp6`,
                                                    fitImageDimension: `height`,
                                                    style: { rotate: 12 },
                                                  }),
                                                }),
                                              ],
                                            }),
                                            d(`div`, {
                                              className: `framer-fc200l`,
                                              "data-framer-name": `BG Item`,
                                              children: [
                                                l(`div`, {
                                                  className: `framer-qwj4un`,
                                                  "data-framer-name": `Overlay`,
                                                }),
                                                l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: {
                                                      background: {
                                                        alt: `BG Image`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 400,
                                                        intrinsicWidth: 800,
                                                        pixelHeight: 400,
                                                        pixelWidth: 800,
                                                        positionX: `center`,
                                                        positionY: `top`,
                                                        sizes: `max(max((max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 50px) * 2 - 0px) / 2, 50px) * 2 + 30px, 1px)`,
                                                        src: `../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg`,
                                                        srcSet: `../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg?scale-down-to=512&width=800&height=400 512w,../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg 800w`,
                                                      },
                                                    },
                                                    G3g83S3dk: {
                                                      background: {
                                                        alt: `BG Image`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 400,
                                                        intrinsicWidth: 800,
                                                        pixelHeight: 400,
                                                        pixelWidth: 800,
                                                        positionX: `center`,
                                                        positionY: `top`,
                                                        sizes: `max(max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px), 1px)`,
                                                        src: `../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg`,
                                                        srcSet: `../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg?scale-down-to=512&width=800&height=400 512w,../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg 800w`,
                                                      },
                                                    },
                                                  },
                                                  children: l(N, {
                                                    background: {
                                                      alt: `BG Image`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 400,
                                                      intrinsicWidth: 800,
                                                      pixelHeight: 400,
                                                      pixelWidth: 800,
                                                      positionX: `center`,
                                                      positionY: `top`,
                                                      sizes: `max(max((max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px) * 2 - 0px) / 2, 50px) * 2 + 30px, 1px)`,
                                                      src: `../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg`,
                                                      srcSet: `../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg?scale-down-to=512&width=800&height=400 512w,../../assets/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg 800w`,
                                                    },
                                                    className: `framer-1qzcxzq`,
                                                    "data-framer-name": `BG Image`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-105pa66`,
                                      "data-framer-name": `Right`,
                                      children: [
                                        d(`div`, {
                                          className: `framer-e58ijj`,
                                          "data-framer-name": `01`,
                                          children: [
                                            l(v, {
                                              __fromCanvasComponent: !0,
                                              children: l(r, {
                                                children: l(`div`, {
                                                  className: `framer-styles-preset-1m8gun7`,
                                                  "data-styles-preset": `k6zcj6FY_`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255))`,
                                                  },
                                                  children: `AI-powered insights`,
                                                }),
                                              }),
                                              className: `framer-17g1bb0`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  height: 224,
                                                  width: `calc(max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 50px) * 2 - 50px)`,
                                                },
                                                G3g83S3dk: {
                                                  height: 224,
                                                  width: `calc(max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px) - 40px)`,
                                                },
                                              },
                                              children: l(F, {
                                                height: 378,
                                                width: `calc(max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px) - 80px)`,
                                                children: l(j, {
                                                  className: `framer-o26z4t-container`,
                                                  nodeId: `zx8VLwJad`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      ajgklN14M: { style: { width: `100%` } },
                                                      G3g83S3dk: { style: { width: `100%` } },
                                                    },
                                                    children: l(lr, {
                                                      height: `100%`,
                                                      id: `zx8VLwJad`,
                                                      layoutId: `zx8VLwJad`,
                                                      style: { height: `100%`, width: `100%` },
                                                      variant: J(`wz6TxFwg7`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(v, {
                                              __fromCanvasComponent: !0,
                                              children: l(r, {
                                                children: l(`p`, {
                                                  className: `framer-styles-preset-1couuo6`,
                                                  "data-styles-preset": `Lb6ff2C_Q`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, rgb(186, 186, 186))`,
                                                  },
                                                  children: `Real-time market data and predictive analysis.`,
                                                }),
                                              }),
                                              className: `framer-101zxmm`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        d(`div`, {
                                          className: `framer-v7ecge`,
                                          "data-framer-name": `02`,
                                          children: [
                                            l(v, {
                                              __fromCanvasComponent: !0,
                                              children: l(r, {
                                                children: l(`div`, {
                                                  className: `framer-styles-preset-1m8gun7`,
                                                  "data-styles-preset": `k6zcj6FY_`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  },
                                                  children: `Smart alerts`,
                                                }),
                                              }),
                                              className: `framer-1cxk7kv`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  width: `calc(max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 50px) * 2 - 50px)`,
                                                },
                                                G3g83S3dk: {
                                                  width: `calc(max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px) - 40px)`,
                                                },
                                              },
                                              children: l(F, {
                                                height: 100,
                                                width: `calc(max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px) - 80px)`,
                                                children: l(j, {
                                                  className: `framer-ka4qtu-container`,
                                                  nodeId: `a3UuKV2Vg`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(on, {
                                                    height: `100%`,
                                                    id: `a3UuKV2Vg`,
                                                    layoutId: `a3UuKV2Vg`,
                                                    style: { width: `100%` },
                                                    variant: J(`cQ4sOwQSF`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(N, {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                intrinsicHeight: 148,
                                                intrinsicWidth: 175,
                                                pixelHeight: 148,
                                                pixelWidth: 175,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `60px`,
                                                src: `../../assets/images/dIhxLbN1GBZu7TFHjssn0JUI4kY.png`,
                                              },
                                              className: `framer-g1kd5s`,
                                              fitImageDimension: `height`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        d(`section`, {
                          className: `framer-17b639z`,
                          "data-framer-name": `Overview`,
                          id: Se,
                          ref: ge(Se),
                          children: [
                            l(`div`, {
                              className: `framer-3cvx69`,
                              "data-framer-name": `Container`,
                              children: d(`div`, {
                                className: `framer-83jbmx`,
                                "data-framer-name": `Content`,
                                children: [
                                  d(G, {
                                    __framer__animate: { transition: q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Z,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1bz4fz3`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      d(`div`, {
                                        className: `framer-o61hgx`,
                                        "data-framer-name": `Top`,
                                        children: [
                                          l(F, {
                                            height: 38,
                                            children: l(j, {
                                              className: `framer-1ru4rfp-container`,
                                              nodeId: `SEp3Eyxsw`,
                                              scopeId: `augiA20Il`,
                                              children: l(bt, {
                                                BSyxhptbW: `Platform overview`,
                                                height: `100%`,
                                                id: `SEp3Eyxsw`,
                                                layoutId: `SEp3Eyxsw`,
                                                variant: J(`dVqc43eR9`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          l(v, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`h2`, {
                                                className: `framer-styles-preset-140jh7d`,
                                                "data-styles-preset": `vxo9lP1tq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                },
                                                children: `See your financial intelligence in action`,
                                              }),
                                            }),
                                            className: `framer-13cjqyv`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          l(v, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-n7iy3a`,
                                                "data-styles-preset": `EpfgTb3LW`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                },
                                                children: `Explore a real-time dashboard that brings your portfolio, insights, and risk analysis together in one clear view.`,
                                              }),
                                            }),
                                            className: `framer-lltprk`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      d(`div`, {
                                        className: `framer-1kbyjce`,
                                        "data-framer-name": `Buttons`,
                                        children: [
                                          l(D, {
                                            links: [
                                              {
                                                href: { webPageId: `imaylMxrx` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `imaylMxrx` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `imaylMxrx` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                height: 59,
                                                children: l(j, {
                                                  className: `framer-x6nv6v-container`,
                                                  nodeId: `jRFWfMAZb`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      ajgklN14M: {
                                                        gayKxTIvB: e[1],
                                                        variant: J(`Rc5QmtPAI`),
                                                      },
                                                      G3g83S3dk: {
                                                        gayKxTIvB: e[2],
                                                        variant: J(`Rc5QmtPAI`),
                                                      },
                                                    },
                                                    children: l($e, {
                                                      gayKxTIvB: e[0],
                                                      height: `100%`,
                                                      id: `jRFWfMAZb`,
                                                      layoutId: `jRFWfMAZb`,
                                                      uYcQ8rJi0: !1,
                                                      variant: J(`Y5rxWmMw9`),
                                                      width: `100%`,
                                                      ziCnPH11n: `Explore features`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                          l(D, {
                                            links: [
                                              {
                                                href: { webPageId: `NgxcsGEIz` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `NgxcsGEIz` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `NgxcsGEIz` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                height: 59,
                                                children: l(j, {
                                                  className: `framer-azkkak-container`,
                                                  nodeId: `TjuABH_uO`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      ajgklN14M: {
                                                        gayKxTIvB: e[1],
                                                        variant: J(`eFw1AVBfv`),
                                                      },
                                                      G3g83S3dk: {
                                                        gayKxTIvB: e[2],
                                                        variant: J(`eFw1AVBfv`),
                                                      },
                                                    },
                                                    children: l(Wr, {
                                                      gayKxTIvB: e[0],
                                                      height: `100%`,
                                                      id: `TjuABH_uO`,
                                                      layoutId: `TjuABH_uO`,
                                                      uYcQ8rJi0: !1,
                                                      variant: J(`u67hFJtfB`),
                                                      width: `100%`,
                                                      ziCnPH11n: `Try the live demo`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(G, {
                                    __framer__animate: { transition: Wa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: to,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-8lksz5`,
                                    "data-framer-name": `Bottom`,
                                    children: [
                                      l(`div`, {
                                        className: `framer-zw6si2`,
                                        "data-framer-name": `Top`,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              background: {
                                                alt: `Dashboard Image`,
                                                fit: `fit`,
                                                intrinsicHeight: 928,
                                                intrinsicWidth: 1600,
                                                pixelHeight: 928,
                                                pixelWidth: 1600,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 52px)`,
                                                src: `../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg`,
                                                srcSet: `../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg?scale-down-to=512&width=1600&height=928 512w,../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg?scale-down-to=1024&width=1600&height=928 1024w,../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg 1600w`,
                                              },
                                            },
                                            G3g83S3dk: {
                                              background: {
                                                alt: `Dashboard Image`,
                                                fit: `fit`,
                                                intrinsicHeight: 928,
                                                intrinsicWidth: 1600,
                                                pixelHeight: 928,
                                                pixelWidth: 1600,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 44px)`,
                                                src: `../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg`,
                                                srcSet: `../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg?scale-down-to=512&width=1600&height=928 512w,../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg?scale-down-to=1024&width=1600&height=928 1024w,../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg 1600w`,
                                              },
                                            },
                                          },
                                          children: l(N, {
                                            background: {
                                              alt: `Dashboard Image`,
                                              fit: `fit`,
                                              intrinsicHeight: 928,
                                              intrinsicWidth: 1600,
                                              pixelHeight: 928,
                                              pixelWidth: 1600,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 72px)`,
                                              src: `../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg`,
                                              srcSet: `../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg?scale-down-to=512&width=1600&height=928 512w,../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg?scale-down-to=1024&width=1600&height=928 1024w,../../assets/images/AywdWt5A04h9qxUf1D6vjhKo.jpg 1600w`,
                                            },
                                            className: `framer-yyy2dn`,
                                            "data-border": !0,
                                            fitImageDimension: `height`,
                                          }),
                                        }),
                                      }),
                                      d(`div`, {
                                        className: `framer-1lsaiit`,
                                        "data-framer-name": `Bottom`,
                                        children: [
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 100px) / 3, 50px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 150,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                              children: l(j, {
                                                className: `framer-auh7s2-container`,
                                                nodeId: `a3OZKEx2x`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: { variant: J(`KLt0rpAcj`) },
                                                    G3g83S3dk: { variant: J(`S7K6hgRTk`) },
                                                  },
                                                  children: l(Kt, {
                                                    height: `100%`,
                                                    id: `a3OZKEx2x`,
                                                    layoutId: `a3OZKEx2x`,
                                                    RRYAQG22b: `All your work in one place:
Bring all your tasks, projects, and updates together in one clear, unified view.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`oQ7_KK9Ry`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 100px) / 3, 50px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 150,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                              children: l(j, {
                                                className: `framer-548ukw-container`,
                                                nodeId: `Z0HTCoAjn`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: { variant: J(`KLt0rpAcj`) },
                                                    G3g83S3dk: { variant: J(`S7K6hgRTk`) },
                                                  },
                                                  children: l(Kt, {
                                                    EzLGQv3FE: Y(
                                                      {
                                                        pixelHeight: 20,
                                                        pixelWidth: 12,
                                                        src: `../../assets/images/pRdU9KB8r1iwhd7rBdjtgbzG2k.svg`,
                                                      },
                                                      `Icon`
                                                    ),
                                                    height: `100%`,
                                                    id: `Z0HTCoAjn`,
                                                    layoutId: `Z0HTCoAjn`,
                                                    RRYAQG22b: `Make progress faster:
Access key insights instantly and act without delays or unnecessary steps.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`oQ7_KK9Ry`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 100px) / 3, 50px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `max(min(${_?.width || `100vw`}, 1260px) - 32px, 50px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 150,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 120px) / 3, 50px)`,
                                              children: l(j, {
                                                className: `framer-1uk08mg-container`,
                                                nodeId: `fQYWIvEh9`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: { variant: J(`KLt0rpAcj`) },
                                                    G3g83S3dk: { variant: J(`S7K6hgRTk`) },
                                                  },
                                                  children: l(Kt, {
                                                    EzLGQv3FE: Y(
                                                      {
                                                        pixelHeight: 20,
                                                        pixelWidth: 21,
                                                        src: `../../assets/images/G0m9o7lLo6sZqM2mtPuo6EgtA.svg`,
                                                      },
                                                      `Icon`
                                                    ),
                                                    height: `100%`,
                                                    id: `fQYWIvEh9`,
                                                    layoutId: `fQYWIvEh9`,
                                                    RRYAQG22b: `Built for better focus:
A clean interface that helps you stay focused and keep everything simple.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`oQ7_KK9Ry`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            d(`div`, {
                              className: `framer-xi1a99`,
                              "data-framer-name": `BG Item`,
                              children: [
                                l(`div`, {
                                  className: `framer-dvndcj`,
                                  "data-framer-name": `BG Top`,
                                }),
                                l(`div`, {
                                  className: `framer-kxjz8k`,
                                  "data-framer-name": `BG Bottom`,
                                }),
                                l(N, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    intrinsicHeight: 1800,
                                    intrinsicWidth: 1920,
                                    pixelHeight: 1800,
                                    pixelWidth: 1920,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `max(${_?.width || `100vw`}, 1px)`,
                                    src: `../../assets/images/sGvx8VOXGYVGBocxGp5Wy6GfeA.jpg`,
                                    srcSet: `../../assets/images/sGvx8VOXGYVGBocxGp5Wy6GfeA.jpg?scale-down-to=512&width=1920&height=1800 512w,../../assets/images/sGvx8VOXGYVGBocxGp5Wy6GfeA.jpg?scale-down-to=1024&width=1920&height=1800 1024w,../../assets/images/sGvx8VOXGYVGBocxGp5Wy6GfeA.jpg 1920w`,
                                  },
                                  className: `framer-11elwy7`,
                                  "data-framer-name": `BG Image`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`section`, {
                          className: `framer-1qqvc7o`,
                          "data-framer-name": `Step`,
                          id: Ce,
                          ref: we,
                          children: l(`div`, {
                            className: `framer-2y2d1p`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-fx2xnr`,
                              "data-framer-name": `Content`,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-42h65d`,
                                  "data-framer-name": `Left`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-1gz9ej2`,
                                      "data-framer-name": `Top`,
                                      children: [
                                        l(F, {
                                          height: 38,
                                          children: l(j, {
                                            className: `framer-1gf0lof-container`,
                                            nodeId: `v1q1_AI3i`,
                                            scopeId: `augiA20Il`,
                                            children: l(bt, {
                                              BSyxhptbW: `How it works`,
                                              height: `100%`,
                                              id: `v1q1_AI3i`,
                                              layoutId: `v1q1_AI3i`,
                                              variant: J(`dVqc43eR9`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`h2`, {
                                              className: `framer-styles-preset-140jh7d`,
                                              "data-styles-preset": `vxo9lP1tq`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                              },
                                              children: `Start investing in minutes`,
                                            }),
                                          }),
                                          className: `framer-1uk3rhr`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-n7iy3a`,
                                              "data-styles-preset": `EpfgTb3LW`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              },
                                              children: `Connect your accounts, let AI analyze your data, and get clear insights to invest with confidence.`,
                                            }),
                                          }),
                                          className: `framer-1kp193u`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-1hsur88`,
                                      "data-framer-name": `Bottom`,
                                      children: [
                                        l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              width: `max((max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 1px) - 20px) / 2, 50px)`,
                                            },
                                            G3g83S3dk: {
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 62px) / 2, 50px)`,
                                            },
                                          },
                                          children: l(F, {
                                            height: 86,
                                            width: `max((max((min(${_?.width || `100vw`}, 1260px) - 130px) / 2.25, 1px) - 30px) / 2, 50px)`,
                                            children: l(j, {
                                              className: `framer-17yha9r-container`,
                                              nodeId: `XIEHwv73o`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: { variant: J(`Jdu9Ol4Vu`) },
                                                },
                                                children: l(St, {
                                                  dISwWaRCD: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  E3Uhffy5v: `100%`,
                                                  height: `100%`,
                                                  id: `XIEHwv73o`,
                                                  JJcauvw8J: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  layoutId: `XIEHwv73o`,
                                                  MhtrAXupB: `Secure, encrypted data protection`,
                                                  style: { width: `100%` },
                                                  variant: J(`FqPx1kICC`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              width: `max((max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 1px) - 20px) / 2, 50px)`,
                                            },
                                            G3g83S3dk: {
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 62px) / 2, 50px)`,
                                            },
                                          },
                                          children: l(F, {
                                            height: 86,
                                            width: `max((max((min(${_?.width || `100vw`}, 1260px) - 130px) / 2.25, 1px) - 30px) / 2, 50px)`,
                                            children: l(j, {
                                              className: `framer-k3vfdw-container`,
                                              nodeId: `YbIHiOHto`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: { variant: J(`Jdu9Ol4Vu`) },
                                                },
                                                children: l(St, {
                                                  dISwWaRCD: `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                  E3Uhffy5v: `2 Minutes`,
                                                  height: `100%`,
                                                  id: `YbIHiOHto`,
                                                  JJcauvw8J: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  layoutId: `YbIHiOHto`,
                                                  MhtrAXupB: `Set up to connect and begin instantly`,
                                                  style: { width: `100%` },
                                                  variant: J(`FqPx1kICC`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(R, {
                                  breakpoint: w,
                                  overrides: {
                                    ajgklN14M: {
                                      width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2, 1px)`,
                                    },
                                    G3g83S3dk: {
                                      width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                    },
                                  },
                                  children: l(F, {
                                    height: 474,
                                    width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.8, 1px)`,
                                    children: l(K, {
                                      __framer__animate: { transition: Wa },
                                      __framer__animateOnce: !0,
                                      __framer__enter: X,
                                      __framer__exit: to,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1njqipj-container`,
                                      nodeId: `jluHIyYdk`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: l(R, {
                                        breakpoint: w,
                                        overrides: {
                                          ajgklN14M: { variant: J(`oDnc1XCyp`) },
                                          G3g83S3dk: { variant: J(`oDnc1XCyp`) },
                                        },
                                        children: l(ea, {
                                          BvPCACdvF: `Get smart insights`,
                                          EISrLVa3P: `Securely link your bank, trading, and investment accounts.`,
                                          height: `100%`,
                                          id: `jluHIyYdk`,
                                          layoutId: `jluHIyYdk`,
                                          MY8r9rZB6: `AI processes your data to generate clear insights.`,
                                          r5DkSureW: `Receive real-time recommendations to optimize your portfolio.`,
                                          R7vsr7Eeu: `Analyze your data`,
                                          style: { width: `100%` },
                                          variant: J(`G2gpcTDN5`),
                                          width: `100%`,
                                          ZQ4sDRdMd: `Connect your accounts`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        l(`section`, {
                          className: `framer-1huui5w`,
                          "data-framer-name": `Security`,
                          children: l(`div`, {
                            className: `framer-1fol1kb`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-6o3kdt`,
                              "data-framer-name": `Content`,
                              children: [
                                l(R, {
                                  breakpoint: w,
                                  overrides: {
                                    G3g83S3dk: {
                                      __framer__animate: { transition: Wa },
                                      __framer__exit: to,
                                    },
                                  },
                                  children: l(G, {
                                    __framer__animate: { transition: q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Z,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-24yj7d`,
                                    "data-framer-name": `Left`,
                                    children: l(`div`, {
                                      className: `framer-rm32nc`,
                                      "data-framer-name": `Image`,
                                      children: l(R, {
                                        breakpoint: w,
                                        overrides: {
                                          ajgklN14M: {
                                            background: {
                                              alt: `Vector`,
                                              fit: `fit`,
                                              intrinsicHeight: 1160,
                                              intrinsicWidth: 1480,
                                              pixelHeight: 1160,
                                              pixelWidth: 1480,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `calc(max((min(${_?.width || `100vw`}, 1260px) - 70px) / 1.8, 1px) - 40px)`,
                                              src: `../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?width=1480&height=1160`,
                                              srcSet: `../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png 512w,../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?scale-down-to=1024&width=1480&height=1160 1024w,../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?width=1480&height=1160 1480w`,
                                            },
                                          },
                                          G3g83S3dk: {
                                            background: {
                                              alt: `Vector`,
                                              fit: `fit`,
                                              intrinsicHeight: 1160,
                                              intrinsicWidth: 1480,
                                              pixelHeight: 1160,
                                              pixelWidth: 1480,
                                              positionX: `center`,
                                              positionY: `center`,
                                              sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 72px)`,
                                              src: `../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?width=1480&height=1160`,
                                              srcSet: `../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png 512w,../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?scale-down-to=1024&width=1480&height=1160 1024w,../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?width=1480&height=1160 1480w`,
                                            },
                                          },
                                        },
                                        children: l(N, {
                                          background: {
                                            alt: `Vector`,
                                            fit: `fit`,
                                            intrinsicHeight: 1160,
                                            intrinsicWidth: 1480,
                                            pixelHeight: 1160,
                                            pixelWidth: 1480,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.8, 1px) - 120px)`,
                                            src: `../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?width=1480&height=1160`,
                                            srcSet: `../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png 512w,../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?scale-down-to=1024&width=1480&height=1160 1024w,../../assets/images/ShWpChwHKJXjkAo8ZPOmvydAuFE.png?width=1480&height=1160 1480w`,
                                          },
                                          className: `framer-15nbnd`,
                                          fitImageDimension: `height`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                l(R, {
                                  breakpoint: w,
                                  overrides: {
                                    G3g83S3dk: {
                                      __framer__animate: { transition: q },
                                      __framer__exit: Z,
                                    },
                                  },
                                  children: d(G, {
                                    __framer__animate: { transition: Wa },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: to,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-u7zdba`,
                                    "data-framer-name": `Right`,
                                    children: [
                                      d(`div`, {
                                        className: `framer-od4qwv`,
                                        "data-framer-name": `Top`,
                                        children: [
                                          l(F, {
                                            height: 38,
                                            children: l(j, {
                                              className: `framer-1j211cn-container`,
                                              nodeId: `FM6M6fPbr`,
                                              scopeId: `augiA20Il`,
                                              children: l(bt, {
                                                BSyxhptbW: `Security & compliance`,
                                                height: `100%`,
                                                id: `FM6M6fPbr`,
                                                layoutId: `FM6M6fPbr`,
                                                variant: J(`dVqc43eR9`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          l(v, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`h2`, {
                                                className: `framer-styles-preset-140jh7d`,
                                                "data-styles-preset": `vxo9lP1tq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                },
                                                children: `Your data is protected at every level`,
                                              }),
                                            }),
                                            className: `framer-1iir7xn`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          l(D, {
                                            links: [
                                              {
                                                href: { webPageId: `TbHzfliLr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `TbHzfliLr` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `TbHzfliLr` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              l(F, {
                                                height: 59,
                                                children: l(j, {
                                                  className: `framer-10teoon-container`,
                                                  nodeId: `DXeD0EZgl`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      ajgklN14M: {
                                                        gayKxTIvB: e[1],
                                                        variant: J(`n9A7jxl3z`),
                                                      },
                                                      G3g83S3dk: {
                                                        gayKxTIvB: e[2],
                                                        variant: J(`n9A7jxl3z`),
                                                      },
                                                    },
                                                    children: l($e, {
                                                      gayKxTIvB: e[0],
                                                      height: `100%`,
                                                      id: `DXeD0EZgl`,
                                                      layoutId: `DXeD0EZgl`,
                                                      uYcQ8rJi0: !1,
                                                      variant: J(`KVSDvWZoH`),
                                                      width: `100%`,
                                                      ziCnPH11n: `Get started now`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                      d(`div`, {
                                        className: `framer-1wmfusi`,
                                        "data-framer-name": `Bottom`,
                                        children: [
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2.25, 1px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 22,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 2.25, 1px)`,
                                              children: l(j, {
                                                className: `framer-1y20tka-container`,
                                                nodeId: `HftCMvhUf`,
                                                scopeId: `augiA20Il`,
                                                children: l(ct, {
                                                  GmSs_KKEi: `End-to-end encryption`,
                                                  height: `100%`,
                                                  id: `HftCMvhUf`,
                                                  layoutId: `HftCMvhUf`,
                                                  style: { width: `100%` },
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`LWYwTVX6W`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
                                                    {
                                                      pixelHeight: 14,
                                                      pixelWidth: 9,
                                                      src: `../../assets/images/OXmFlFjSz1lrJp3vaL02MNthg.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2.25, 1px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 22,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 2.25, 1px)`,
                                              children: l(j, {
                                                className: `framer-v43x8e-container`,
                                                nodeId: `craYes6V8`,
                                                scopeId: `augiA20Il`,
                                                children: l(ct, {
                                                  GmSs_KKEi: `Secure data infrastructure`,
                                                  height: `100%`,
                                                  id: `craYes6V8`,
                                                  layoutId: `craYes6V8`,
                                                  style: { width: `100%` },
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`LWYwTVX6W`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
                                                    {
                                                      pixelHeight: 14,
                                                      pixelWidth: 9,
                                                      src: `../../assets/images/OXmFlFjSz1lrJp3vaL02MNthg.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2.25, 1px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 22,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 2.25, 1px)`,
                                              children: l(j, {
                                                className: `framer-110owuw-container`,
                                                nodeId: `wTPKuUcqu`,
                                                scopeId: `augiA20Il`,
                                                children: l(ct, {
                                                  GmSs_KKEi: `Privacy-first approach`,
                                                  height: `100%`,
                                                  id: `wTPKuUcqu`,
                                                  layoutId: `wTPKuUcqu`,
                                                  style: { width: `100%` },
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`LWYwTVX6W`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
                                                    {
                                                      pixelHeight: 14,
                                                      pixelWidth: 9,
                                                      src: `../../assets/images/OXmFlFjSz1lrJp3vaL02MNthg.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                          l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 2.25, 1px)`,
                                              },
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 22,
                                              width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 2.25, 1px)`,
                                              children: l(j, {
                                                className: `framer-ock2ch-container`,
                                                nodeId: `OycV6ovLC`,
                                                scopeId: `augiA20Il`,
                                                children: l(ct, {
                                                  GmSs_KKEi: `Compliance standards`,
                                                  height: `100%`,
                                                  id: `OycV6ovLC`,
                                                  layoutId: `OycV6ovLC`,
                                                  style: { width: `100%` },
                                                  uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                  variant: J(`LWYwTVX6W`),
                                                  width: `100%`,
                                                  XMCDOSojK: Y(
                                                    {
                                                      pixelHeight: 14,
                                                      pixelWidth: 9,
                                                      src: `../../assets/images/OXmFlFjSz1lrJp3vaL02MNthg.svg`,
                                                    },
                                                    `Icon`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        l(`section`, {
                          className: `framer-jl6skg`,
                          "data-framer-name": `Use Cases`,
                          id: Te,
                          ref: ge(Te),
                          children: l(`div`, {
                            className: `framer-ypzrl6`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-qkh27k`,
                              "data-framer-name": `Content`,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1nhlk9o`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    l(F, {
                                      height: 38,
                                      children: l(j, {
                                        className: `framer-o03tih-container`,
                                        nodeId: `rqR9xhHjb`,
                                        scopeId: `augiA20Il`,
                                        children: l(bt, {
                                          BSyxhptbW: `Use cases`,
                                          height: `100%`,
                                          id: `rqR9xhHjb`,
                                          layoutId: `rqR9xhHjb`,
                                          variant: J(`dVqc43eR9`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(`h2`, {
                                          className: `framer-styles-preset-140jh7d`,
                                          "data-styles-preset": `vxo9lP1tq`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                          },
                                          children: `Who this platform is built for`,
                                        }),
                                      }),
                                      className: `framer-e3w7iq`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                l(R, {
                                  breakpoint: w,
                                  overrides: { G3g83S3dk: { tickerEffectEnabled: void 0 } },
                                  children: d(ga, {
                                    className: `framer-1ry5w46`,
                                    "data-framer-name": `Ticker`,
                                    tickerEffectAlign: `center`,
                                    tickerEffectDirectionModifier: `default`,
                                    tickerEffectDraggable: !0,
                                    tickerEffectEnabled: !0,
                                    tickerEffectGap: 10,
                                    tickerEffectHoverModifier: 10,
                                    tickerEffectOverflow: `clip`,
                                    tickerEffectPosition: `relative`,
                                    tickerEffectStackDirection: `row`,
                                    tickerEffectVelocity: 25,
                                    children: [
                                      l(k, {
                                        children:
                                          B() &&
                                          l(N, {
                                            background: {
                                              alt: `Use Case Image`,
                                              fit: `fill`,
                                              intrinsicHeight: 1e3,
                                              intrinsicWidth: 800,
                                              pixelHeight: 1e3,
                                              pixelWidth: 800,
                                              sizes: `380px`,
                                              src: `../../assets/images/QJxW9eYj0OFH6UvNuY4WNkVNJ0.jpg`,
                                              srcSet: `../../assets/images/QJxW9eYj0OFH6UvNuY4WNkVNJ0.jpg 800w`,
                                            },
                                            className: `framer-tewlok hidden-naka4o`,
                                            draggable: `false`,
                                          }),
                                      }),
                                      l(k, {
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            G3g83S3dk: {
                                              width: `calc(${_?.width || `100vw`} - 32px)`,
                                            },
                                          },
                                          children: l(F, {
                                            height: 420,
                                            width: `380px`,
                                            children: l(j, {
                                              className: `framer-60lfqw-container`,
                                              nodeId: `q0Q3gc9VL`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    style: { width: `100%` },
                                                    variant: J(`qWwjlyOdb`),
                                                  },
                                                },
                                                children: l(jr, {
                                                  goAKBmqwK: `Track your portfolio, get AI insights, and make smarter investment decisions without relying on guesswork.`,
                                                  height: `100%`,
                                                  i8U_p183z: `Individual investors`,
                                                  id: `q0Q3gc9VL`,
                                                  layoutId: `q0Q3gc9VL`,
                                                  pef4eIOYP: `Decision-making with AI insights`,
                                                  srxxxv2SK: `+32% Faster`,
                                                  style: { height: `100%`, width: `100%` },
                                                  variant: J(`Fc8g8ozL6`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(k, {
                                        children:
                                          B() &&
                                          l(N, {
                                            background: {
                                              alt: `Use Case Image`,
                                              fit: `fill`,
                                              intrinsicHeight: 1e3,
                                              intrinsicWidth: 800,
                                              pixelHeight: 1e3,
                                              pixelWidth: 800,
                                              sizes: `380px`,
                                              src: `../../assets/images/ir92iMEO3JaF66SNrwrpEtYCY.jpg`,
                                              srcSet: `../../assets/images/ir92iMEO3JaF66SNrwrpEtYCY.jpg 800w`,
                                            },
                                            className: `framer-pgljmy hidden-naka4o`,
                                            draggable: `false`,
                                          }),
                                      }),
                                      l(k, {
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            G3g83S3dk: {
                                              width: `calc(${_?.width || `100vw`} - 32px)`,
                                            },
                                          },
                                          children: l(F, {
                                            height: 420,
                                            width: `380px`,
                                            children: l(j, {
                                              className: `framer-1fzeczs-container`,
                                              nodeId: `UBF3E3vXB`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    style: { width: `100%` },
                                                    variant: J(`qWwjlyOdb`),
                                                  },
                                                },
                                                children: l(jr, {
                                                  goAKBmqwK: `Collaborate on financial strategies, monitor investments, and make data-driven decisions at scale.`,
                                                  height: `100%`,
                                                  i8U_p183z: `Financial teams`,
                                                  id: `UBF3E3vXB`,
                                                  layoutId: `UBF3E3vXB`,
                                                  pef4eIOYP: `Collaboration across all investment data`,
                                                  srxxxv2SK: `Real-Time`,
                                                  style: { height: `100%`, width: `100%` },
                                                  variant: J(`Fc8g8ozL6`),
                                                  width: `100%`,
                                                  yZD2OHuAO: Y(
                                                    {
                                                      pixelHeight: 1e3,
                                                      pixelWidth: 800,
                                                      src: `../../assets/images/rF4nkbqTtccZBPQrR1TG1yKqD8.jpg`,
                                                      srcSet: `../../assets/images/rF4nkbqTtccZBPQrR1TG1yKqD8.jpg 800w`,
                                                    },
                                                    `BG Image`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(k, {
                                        children:
                                          B() &&
                                          l(N, {
                                            background: {
                                              alt: `Use Case Image`,
                                              fit: `fill`,
                                              intrinsicHeight: 1e3,
                                              intrinsicWidth: 800,
                                              pixelHeight: 1e3,
                                              pixelWidth: 800,
                                              sizes: `380px`,
                                              src: `../../assets/images/nkS8pAWPKcD8U7ncGVFOqXVV0o.jpg`,
                                              srcSet: `../../assets/images/nkS8pAWPKcD8U7ncGVFOqXVV0o.jpg 800w`,
                                            },
                                            className: `framer-1eag3u hidden-naka4o`,
                                            draggable: `false`,
                                          }),
                                      }),
                                      l(k, {
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            G3g83S3dk: {
                                              width: `calc(${_?.width || `100vw`} - 32px)`,
                                            },
                                          },
                                          children: l(F, {
                                            height: 420,
                                            width: `380px`,
                                            children: l(j, {
                                              className: `framer-fblnna-container`,
                                              nodeId: `b5Hqh34lp`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    style: { width: `100%` },
                                                    variant: J(`qWwjlyOdb`),
                                                  },
                                                },
                                                children: l(jr, {
                                                  goAKBmqwK: `Manage multiple client portfolios efficiently with real-time data, risk analysis, and performance tracking.`,
                                                  height: `100%`,
                                                  i8U_p183z: `Wealth managers`,
                                                  id: `b5Hqh34lp`,
                                                  layoutId: `b5Hqh34lp`,
                                                  pef4eIOYP: `Portfolios managed from a single dashboard`,
                                                  srxxxv2SK: `10+`,
                                                  style: { height: `100%`, width: `100%` },
                                                  variant: J(`Fc8g8ozL6`),
                                                  width: `100%`,
                                                  yZD2OHuAO: Y(
                                                    {
                                                      pixelHeight: 1e3,
                                                      pixelWidth: 800,
                                                      src: `../../assets/images/Rl52kJV49NxXXh2BR2NJhjJuN7I.jpg`,
                                                      srcSet: `../../assets/images/Rl52kJV49NxXXh2BR2NJhjJuN7I.jpg 800w`,
                                                    },
                                                    `BG Image`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(k, {
                                        children:
                                          B() &&
                                          l(N, {
                                            background: {
                                              alt: `Use Case Image`,
                                              fit: `fill`,
                                              intrinsicHeight: 1e3,
                                              intrinsicWidth: 800,
                                              pixelHeight: 1e3,
                                              pixelWidth: 800,
                                              sizes: `380px`,
                                              src: `../../assets/images/omPOmfMdMLLw0U7G41FgZY7Cfmg.jpg`,
                                              srcSet: `../../assets/images/omPOmfMdMLLw0U7G41FgZY7Cfmg.jpg 800w`,
                                            },
                                            className: `framer-1h2pux2 hidden-naka4o`,
                                            draggable: `false`,
                                          }),
                                      }),
                                      l(k, {
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            G3g83S3dk: {
                                              width: `calc(${_?.width || `100vw`} - 32px)`,
                                            },
                                          },
                                          children: l(F, {
                                            height: 420,
                                            width: `380px`,
                                            children: l(j, {
                                              className: `framer-2ng18x-container`,
                                              nodeId: `WdNK9LVok`,
                                              scopeId: `augiA20Il`,
                                              children: l(R, {
                                                breakpoint: w,
                                                overrides: {
                                                  G3g83S3dk: {
                                                    style: { width: `100%` },
                                                    variant: J(`qWwjlyOdb`),
                                                  },
                                                },
                                                children: l(jr, {
                                                  goAKBmqwK: `Stay ahead of market movements with real-time alerts and AI-powered signals for quick decisions.`,
                                                  height: `100%`,
                                                  i8U_p183z: `Active traders`,
                                                  id: `WdNK9LVok`,
                                                  layoutId: `WdNK9LVok`,
                                                  pef4eIOYP: `Better goal tracking and portfolio growth`,
                                                  srxxxv2SK: `Up to 2X`,
                                                  style: { height: `100%`, width: `100%` },
                                                  variant: J(`Fc8g8ozL6`),
                                                  width: `100%`,
                                                  yZD2OHuAO: Y(
                                                    {
                                                      pixelHeight: 1e3,
                                                      pixelWidth: 800,
                                                      src: `../../assets/images/nPSRrYomcOALmLPJavAfjBIboI.jpg`,
                                                      srcSet: `../../assets/images/nPSRrYomcOALmLPJavAfjBIboI.jpg 800w`,
                                                    },
                                                    `BG Image`
                                                  ),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                d(G, {
                                  __framer__animate: { transition: Wa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: to,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-kzuvgz`,
                                  "data-framer-name": `Bottom`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-bjm452`,
                                      "data-framer-name": `List`,
                                      children: [
                                        l(F, {
                                          height: 28,
                                          children: l(j, {
                                            className: `framer-ptrh04-container`,
                                            nodeId: `SPo5XvgU1`,
                                            scopeId: `augiA20Il`,
                                            children: l(nt, {
                                              h3thwb3uh: `10,000+ Users`,
                                              height: `100%`,
                                              id: `SPo5XvgU1`,
                                              layoutId: `SPo5XvgU1`,
                                              rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: J(`igdoTFQMz`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 28,
                                          children: l(j, {
                                            className: `framer-1bxykj2-container`,
                                            nodeId: `O5R_JrpLf`,
                                            scopeId: `augiA20Il`,
                                            children: l(nt, {
                                              h3thwb3uh: `4.9 Rating`,
                                              height: `100%`,
                                              id: `O5R_JrpLf`,
                                              layoutId: `O5R_JrpLf`,
                                              rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: J(`igdoTFQMz`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 28,
                                          children: l(j, {
                                            className: `framer-krh3ur-container`,
                                            nodeId: `Dzu9t77TW`,
                                            scopeId: `augiA20Il`,
                                            children: l(nt, {
                                              h3thwb3uh: `Real-time insights`,
                                              height: `100%`,
                                              id: `Dzu9t77TW`,
                                              layoutId: `Dzu9t77TW`,
                                              rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: J(`igdoTFQMz`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(F, {
                                          height: 28,
                                          children: l(j, {
                                            className: `framer-w8vwpx-container`,
                                            nodeId: `BTV5tvTXU`,
                                            scopeId: `augiA20Il`,
                                            children: l(nt, {
                                              h3thwb3uh: `Secure & compliant`,
                                              height: `100%`,
                                              id: `BTV5tvTXU`,
                                              layoutId: `BTV5tvTXU`,
                                              rhGiDGRBu: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              variant: J(`igdoTFQMz`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `min(min(${_?.width || `100vw`}, 860px) - 20px, 500px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `min(min(${_?.width || `100vw`} - 32px, 860px), 500px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 116,
                                        width: `min(min(${_?.width || `100vw`}, 860px) - 60px, 500px)`,
                                        children: l(j, {
                                          className: `framer-z2u2q0-container`,
                                          nodeId: `xRyV1pFMH`,
                                          scopeId: `augiA20Il`,
                                          children: l(gn, {
                                            CMopBckjJ: ` Founder & CEO`,
                                            height: `100%`,
                                            id: `xRyV1pFMH`,
                                            layoutId: `xRyV1pFMH`,
                                            style: { maxWidth: `100%`, width: `100%` },
                                            vnUC1BXtk: `"We built this platform to remove the guesswork from investing and give people clear, data-driven insights."`,
                                            width: `100%`,
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
                        l(`section`, {
                          className: `framer-1pvr7lo`,
                          "data-framer-name": `Integrations`,
                          id: Ee,
                          ref: ge(Ee),
                          children: l(`div`, {
                            className: `framer-1n20jqk`,
                            "data-framer-name": `Container`,
                            children: d(G, {
                              __framer__animate: { transition: q },
                              __framer__animateOnce: !0,
                              __framer__enter: X,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1wgq8fv`,
                              "data-framer-name": `Content`,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: Wa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: to,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-19n3qgv`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-ap8sbu`,
                                      "data-framer-name": `Top`,
                                      children: [
                                        l(F, {
                                          height: 38,
                                          children: l(j, {
                                            className: `framer-1lpktdo-container`,
                                            nodeId: `NkgOvxbkV`,
                                            scopeId: `augiA20Il`,
                                            children: l(bt, {
                                              BSyxhptbW: `Integrations`,
                                              height: `100%`,
                                              id: `NkgOvxbkV`,
                                              layoutId: `NkgOvxbkV`,
                                              variant: J(`uyNLry1D8`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`h2`, {
                                              className: `framer-styles-preset-140jh7d`,
                                              "data-styles-preset": `vxo9lP1tq`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                              },
                                              children: `Connect with the tools you already use`,
                                            }),
                                          }),
                                          className: `framer-1yw6ufn`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-n7iy3a`,
                                              "data-styles-preset": `EpfgTb3LW`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              },
                                              children: `Seamlessly integrate with your financial platforms, data sources, and tools to keep everything connected and up to date.`,
                                            }),
                                          }),
                                          className: `framer-1gsssu5`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(F, {
                                      height: 59,
                                      children: l(j, {
                                        className: `framer-1lk56uh-container`,
                                        nodeId: `f1YFi7u2i`,
                                        scopeId: `augiA20Il`,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: { variant: J(`Rc5QmtPAI`) },
                                            G3g83S3dk: { variant: J(`Rc5QmtPAI`) },
                                          },
                                          children: l($e, {
                                            gayKxTIvB: `https://www.framer.com/marketplace/plugins/`,
                                            height: `100%`,
                                            id: `f1YFi7u2i`,
                                            layoutId: `f1YFi7u2i`,
                                            uYcQ8rJi0: !0,
                                            variant: J(`Y5rxWmMw9`),
                                            width: `100%`,
                                            ziCnPH11n: `Explore all integrations`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                d(G, {
                                  __framer__animate: { transition: Ka },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: no,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1pzi2r6`,
                                  "data-framer-name": `Center`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-xgr2ft`,
                                      "data-framer-name": `Avatar List`,
                                      children: [
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-11nliif`,
                                          "data-framer-name": `01`,
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-25el78-container`,
                                                  nodeId: `pvHI5M22c`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `pvHI5M22c`,
                                                      layoutId: `pvHI5M22c`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 41,
                                                          src: `../../assets/images/6v4CjsDf4gvmPpf7ZtLW7G99Tc.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-h2adcy-container`,
                                                  nodeId: `TQ8BnuBYO`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `TQ8BnuBYO`,
                                                      layoutId: `TQ8BnuBYO`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 41,
                                                          src: `../../assets/images/6v4CjsDf4gvmPpf7ZtLW7G99Tc.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1hzr5jv`,
                                          "data-framer-name": `02`,
                                          style: { rotate: -22.5 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-f2d9r0-container`,
                                                  nodeId: `ocU9AuKpU`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 22.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `ocU9AuKpU`,
                                                      layoutId: `ocU9AuKpU`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 43,
                                                          src: `../../assets/images/iSF7qOzhCe2kHFtzp023A7Su5Y4.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-369vj0-container`,
                                                  nodeId: `jPIo4xzhW`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 22.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `jPIo4xzhW`,
                                                      layoutId: `jPIo4xzhW`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 43,
                                                          src: `../../assets/images/iSF7qOzhCe2kHFtzp023A7Su5Y4.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-y1qygm`,
                                          "data-framer-name": `03`,
                                          style: { rotate: -45 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-taollz-container`,
                                                  nodeId: `VuEXpnTSy`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 45 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `VuEXpnTSy`,
                                                      layoutId: `VuEXpnTSy`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 36,
                                                          pixelWidth: 43,
                                                          src: `../../assets/images/oCjXqTKPpfQHNzVG3RMACjYdDn4.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1ces20t-container`,
                                                  nodeId: `jUKjtJt_G`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 45 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `jUKjtJt_G`,
                                                      layoutId: `jUKjtJt_G`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 36,
                                                          pixelWidth: 43,
                                                          src: `../../assets/images/oCjXqTKPpfQHNzVG3RMACjYdDn4.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-5057qo`,
                                          "data-framer-name": `04`,
                                          style: { rotate: -67.5 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-7wqjjz-container`,
                                                  nodeId: `b30InMgPi`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 67.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `b30InMgPi`,
                                                      layoutId: `b30InMgPi`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 34,
                                                          pixelWidth: 40,
                                                          src: `../../assets/images/4cTZo2mECVaFc4LeLKFAjcOFZi0.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1mhoys6-container`,
                                                  nodeId: `nlQrJTrlv`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 67.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `nlQrJTrlv`,
                                                      layoutId: `nlQrJTrlv`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 34,
                                                          pixelWidth: 40,
                                                          src: `../../assets/images/4cTZo2mECVaFc4LeLKFAjcOFZi0.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1vwi6in`,
                                          "data-framer-name": `05`,
                                          style: { rotate: -90 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-qpz8oq-container`,
                                                  nodeId: `xNxFhQrxl`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 90 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `xNxFhQrxl`,
                                                      layoutId: `xNxFhQrxl`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 42,
                                                          pixelWidth: 44,
                                                          src: `../../assets/images/C9McjHMSQSnRTJJraeYy1FnTxk.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-61mc47-container`,
                                                  nodeId: `VCJ4KNlC4`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 90 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `VCJ4KNlC4`,
                                                      layoutId: `VCJ4KNlC4`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 42,
                                                          pixelWidth: 44,
                                                          src: `../../assets/images/C9McjHMSQSnRTJJraeYy1FnTxk.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-mp8lx1`,
                                          "data-framer-name": `06`,
                                          style: { rotate: -112.5 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1yep9c-container`,
                                                  nodeId: `oV4R1dqkZ`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 112.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `oV4R1dqkZ`,
                                                      layoutId: `oV4R1dqkZ`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 42,
                                                          pixelWidth: 37,
                                                          src: `../../assets/images/IKob6Rf6oNE2AA0Ljnrxy64qX8.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-13qhxar-container`,
                                                  nodeId: `H9v3VtIwA`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 112.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `H9v3VtIwA`,
                                                      layoutId: `H9v3VtIwA`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 42,
                                                          pixelWidth: 37,
                                                          src: `../../assets/images/IKob6Rf6oNE2AA0Ljnrxy64qX8.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-i1zzyo`,
                                          "data-framer-name": `07`,
                                          style: { rotate: -135 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1ngp7um-container`,
                                                  nodeId: `toKEPRqSk`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 135 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `toKEPRqSk`,
                                                      layoutId: `toKEPRqSk`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 42,
                                                          pixelWidth: 42,
                                                          src: `../../assets/images/y19UMvv1KCbNvFgwFlFjufnrRg.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-10t7wys-container`,
                                                  nodeId: `kYcIFsH_Z`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 135 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `kYcIFsH_Z`,
                                                      layoutId: `kYcIFsH_Z`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 42,
                                                          pixelWidth: 42,
                                                          src: `../../assets/images/y19UMvv1KCbNvFgwFlFjufnrRg.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(G, {
                                          __framer__loop: ro,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !1,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `loop`,
                                          __framer__loopTransition: Q,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-1oqmnjb`,
                                          "data-framer-name": `08`,
                                          style: { rotate: -157.5 },
                                          transformTemplate: io,
                                          children: [
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-11eokhe-container`,
                                                  nodeId: `ZDAhiCigN`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 157.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `ZDAhiCigN`,
                                                      layoutId: `ZDAhiCigN`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 38,
                                                          src: `../../assets/images/UoQUbbEaQZyR3CxLxoIhGhmYL3c.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                G3g83S3dk: { height: 60, width: `60px` },
                                              },
                                              children: l(F, {
                                                height: 80,
                                                children: l(K, {
                                                  __framer__loop: $,
                                                  __framer__loopEffectEnabled: !0,
                                                  __framer__loopPauseOffscreen: !1,
                                                  __framer__loopRepeatDelay: 0,
                                                  __framer__loopRepeatType: `loop`,
                                                  __framer__loopTransition: Q,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-a34liy-container`,
                                                  nodeId: `usV7B07sa`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  style: { rotate: 157.5 },
                                                  children: l(R, {
                                                    breakpoint: w,
                                                    overrides: {
                                                      G3g83S3dk: {
                                                        style: { height: `100%`, width: `100%` },
                                                      },
                                                    },
                                                    children: l(H, {
                                                      height: `100%`,
                                                      id: `usV7B07sa`,
                                                      layoutId: `usV7B07sa`,
                                                      width: `100%`,
                                                      z6AwEa6gl: Y(
                                                        {
                                                          pixelHeight: 40,
                                                          pixelWidth: 38,
                                                          src: `../../assets/images/UoQUbbEaQZyR3CxLxoIhGhmYL3c.svg`,
                                                        },
                                                        `Icon`
                                                      ),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    d(`div`, {
                                      className: `framer-1fm6rbu`,
                                      "data-framer-name": `Bottom`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-e03fbb`,
                                          "data-framer-name": `Integration Icon`,
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              ajgklN14M: {
                                                background: {
                                                  alt: `Icon`,
                                                  fit: `fit`,
                                                  intrinsicHeight: 63,
                                                  intrinsicWidth: 84,
                                                  pixelHeight: 63,
                                                  pixelWidth: 84,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `48px`,
                                                  src: `../../assets/images/4LS9gC9h4W4WbsmhQmoxQ7DsncQ.svg`,
                                                },
                                              },
                                              G3g83S3dk: {
                                                background: {
                                                  alt: `Icon`,
                                                  fit: `fit`,
                                                  intrinsicHeight: 63,
                                                  intrinsicWidth: 84,
                                                  pixelHeight: 63,
                                                  pixelWidth: 84,
                                                  positionX: `center`,
                                                  positionY: `center`,
                                                  sizes: `40px`,
                                                  src: `../../assets/images/4LS9gC9h4W4WbsmhQmoxQ7DsncQ.svg`,
                                                },
                                              },
                                            },
                                            children: l(N, {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fit`,
                                                intrinsicHeight: 63,
                                                intrinsicWidth: 84,
                                                pixelHeight: 63,
                                                pixelWidth: 84,
                                                positionX: `center`,
                                                positionY: `center`,
                                                sizes: `53.3333px`,
                                                src: `../../assets/images/4LS9gC9h4W4WbsmhQmoxQ7DsncQ.svg`,
                                              },
                                              className: `framer-bzwekd`,
                                              fitImageDimension: `width`,
                                            }),
                                          }),
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`h3`, {
                                              className: `framer-styles-preset-8q1iyv`,
                                              "data-styles-preset": `jUb4JLM3m`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                              },
                                              children: `100+ integrations available and growing`,
                                            }),
                                          }),
                                          className: `framer-1ud96oj`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(R, {
                                  breakpoint: w,
                                  overrides: {
                                    ajgklN14M: {
                                      background: {
                                        alt: `Decoration Image`,
                                        fit: `fit`,
                                        intrinsicHeight: 638,
                                        intrinsicWidth: 2422,
                                        pixelHeight: 638,
                                        pixelWidth: 2422,
                                        positionX: `center`,
                                        positionY: `top`,
                                        sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 20px)`,
                                        src: `../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?width=2422&height=638`,
                                        srcSet: `../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?scale-down-to=512&width=2422&height=638 512w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png 1024w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png 2048w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?width=2422&height=638 2422w`,
                                      },
                                    },
                                    G3g83S3dk: {
                                      background: {
                                        alt: `Decoration Image`,
                                        fit: `fit`,
                                        intrinsicHeight: 638,
                                        intrinsicWidth: 2422,
                                        pixelHeight: 638,
                                        pixelWidth: 2422,
                                        positionX: `center`,
                                        positionY: `top`,
                                        sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 12px)`,
                                        src: `../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?width=2422&height=638`,
                                        srcSet: `../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?scale-down-to=512&width=2422&height=638 512w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png 1024w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png 2048w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?width=2422&height=638 2422w`,
                                      },
                                    },
                                  },
                                  children: l(N, {
                                    background: {
                                      alt: `Decoration Image`,
                                      fit: `fit`,
                                      intrinsicHeight: 638,
                                      intrinsicWidth: 2422,
                                      pixelHeight: 638,
                                      pixelWidth: 2422,
                                      positionX: `center`,
                                      positionY: `top`,
                                      sizes: `calc(min(${_?.width || `100vw`}, 1260px) - 40px)`,
                                      src: `../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?width=2422&height=638`,
                                      srcSet: `../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?scale-down-to=512&width=2422&height=638 512w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png 1024w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png 2048w,../../assets/images/XlxsE037ei7LGhxYPQDC3jctO9A.png?width=2422&height=638 2422w`,
                                    },
                                    className: `framer-16xv2tp`,
                                    fitImageDimension: `height`,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        l(`section`, {
                          className: `framer-112ajpz`,
                          "data-framer-name": `Stats`,
                          children: l(`div`, {
                            className: `framer-1yuqn3k`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-9iq6xp`,
                              "data-framer-name": `Content`,
                              id: De,
                              ref: Oe,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1l5tzp4`,
                                  "data-framer-name": `Top`,
                                  id: je,
                                  ref: Me,
                                  children: [
                                    l(F, {
                                      height: 38,
                                      children: l(j, {
                                        className: `framer-soxn1k-container`,
                                        nodeId: `nkmFitJOa`,
                                        scopeId: `augiA20Il`,
                                        children: l(bt, {
                                          BSyxhptbW: `Platform stats`,
                                          height: `100%`,
                                          id: `nkmFitJOa`,
                                          layoutId: `nkmFitJOa`,
                                          variant: J(`dVqc43eR9`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(`h2`, {
                                          className: `framer-styles-preset-140jh7d`,
                                          "data-styles-preset": `vxo9lP1tq`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                          },
                                          children: `Powering smarter investment decisions`,
                                        }),
                                      }),
                                      className: `framer-fhge8r`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(`p`, {
                                          className: `framer-styles-preset-n7iy3a`,
                                          "data-styles-preset": `EpfgTb3LW`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                          },
                                          children: `Real-time insights, advanced analytics, and secure infrastructure working together.`,
                                        }),
                                      }),
                                      className: `framer-27vb7y`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                d(`div`, {
                                  className: `framer-1vnzp4c`,
                                  "data-framer-name": `List`,
                                  children: [
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 50px) / 2, 50px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 280,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              __framer__styleAppearEffectEnabled: void 0,
                                            },
                                          },
                                          children: l(K, {
                                            __framer__animate: { transition: oo },
                                            __framer__animateOnce: !0,
                                            __framer__enter: ao,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{ ref: Me, target: `animate` }],
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1ixz1so-container`,
                                            nodeId: `UGpGjRjzE`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                                G3g83S3dk: {
                                                  style: { width: `100%` },
                                                  variant: J(`ovN7hMSC0`),
                                                },
                                              },
                                              children: l(Fe, {
                                                height: `100%`,
                                                id: `UGpGjRjzE`,
                                                layoutId: `UGpGjRjzE`,
                                                NDcYsg5oi: `10,000+`,
                                                t_H7Fx64z: `Users managing portfolios with AI insights.`,
                                                V1x3EoHFX: `Active investors`,
                                                variant: J(`j9hJSBouZ`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 50px) / 2, 50px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 280,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              __framer__styleAppearEffectEnabled: void 0,
                                            },
                                          },
                                          children: l(K, {
                                            __framer__animate: { transition: oo },
                                            __framer__animateOnce: !0,
                                            __framer__enter: so,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{ ref: Me, target: `animate` }],
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1mjgo4z-container`,
                                            nodeId: `DjMVCiYqb`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                                G3g83S3dk: {
                                                  style: { width: `100%` },
                                                  variant: J(`E2kjGBypG`),
                                                },
                                              },
                                              children: l(Fe, {
                                                height: `100%`,
                                                id: `DjMVCiYqb`,
                                                layoutId: `DjMVCiYqb`,
                                                NDcYsg5oi: `$250M+`,
                                                t_H7Fx64z: `In investments monitored across the platform.`,
                                                V1x3EoHFX: `Assets tracked`,
                                                variant: J(`qxuYd46p_`),
                                                width: `100%`,
                                                XZfwo1a6Z: Y(
                                                  {
                                                    pixelHeight: 20,
                                                    pixelWidth: 18,
                                                    src: `../../assets/images/HVHGQkyxoQVs16N8JfQt5jzI.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 50px) / 2, 50px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 280,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              __framer__styleAppearEffectEnabled: void 0,
                                            },
                                          },
                                          children: l(K, {
                                            __framer__animate: { transition: oo },
                                            __framer__animateOnce: !0,
                                            __framer__enter: co,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{ ref: Me, target: `animate` }],
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-13259be-container`,
                                            nodeId: `JvXalsP_5`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                                G3g83S3dk: {
                                                  style: { width: `100%` },
                                                  variant: J(`ovN7hMSC0`),
                                                },
                                              },
                                              children: l(Fe, {
                                                height: `100%`,
                                                id: `JvXalsP_5`,
                                                layoutId: `JvXalsP_5`,
                                                NDcYsg5oi: `99.9%`,
                                                t_H7Fx64z: `Reliable access to your financial intelligence.`,
                                                V1x3EoHFX: `Platform uptime`,
                                                variant: J(`j9hJSBouZ`),
                                                width: `100%`,
                                                XZfwo1a6Z: Y(
                                                  {
                                                    pixelHeight: 20,
                                                    pixelWidth: 17,
                                                    src: `../../assets/images/cM86wDyqMYapxowGxtKW64TcFC4.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 50px) / 2, 50px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 280,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              __framer__styleAppearEffectEnabled: void 0,
                                              transformTemplate: void 0,
                                            },
                                            G3g83S3dk: { transformTemplate: void 0 },
                                          },
                                          children: l(K, {
                                            __framer__animate: { transition: oo },
                                            __framer__animateOnce: !0,
                                            __framer__enter: lo,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{ ref: Me, target: `animate` }],
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-9t3fm9-container`,
                                            nodeId: `kgFc5Yq9U`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            transformTemplate: $a,
                                            children: l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                                G3g83S3dk: {
                                                  style: { width: `100%` },
                                                  variant: J(`fdFmWW5Sj`),
                                                },
                                              },
                                              children: l(Fe, {
                                                height: `100%`,
                                                id: `kgFc5Yq9U`,
                                                layoutId: `kgFc5Yq9U`,
                                                NDcYsg5oi: `120+`,
                                                t_H7Fx64z: `Global financial markets are analyzed in real time.`,
                                                V1x3EoHFX: `Markets covered`,
                                                variant: J(`LAVyIFDuD`),
                                                width: `100%`,
                                                XZfwo1a6Z: Y(
                                                  {
                                                    pixelHeight: 20,
                                                    pixelWidth: 21,
                                                    src: `../../assets/images/QHWxFsQnPvlSmhvomNozoRBtSjk.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `calc(max((min(${_?.width || `100vw`}, 1260px) - 50px) / 2, 50px) * 2 + 10px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 280,
                                        children: l(R, {
                                          breakpoint: w,
                                          overrides: {
                                            ajgklN14M: {
                                              __framer__styleAppearEffectEnabled: void 0,
                                            },
                                          },
                                          children: l(K, {
                                            __framer__animate: { transition: oo },
                                            __framer__animateOnce: !0,
                                            __framer__enter: uo,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__targets: [{ ref: Me, target: `animate` }],
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-muii6w-container`,
                                            nodeId: `TsuM09xAN`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(R, {
                                              breakpoint: w,
                                              overrides: {
                                                ajgklN14M: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                                G3g83S3dk: {
                                                  style: { width: `100%` },
                                                  variant: J(`E2kjGBypG`),
                                                },
                                              },
                                              children: l(Fe, {
                                                height: `100%`,
                                                id: `TsuM09xAN`,
                                                layoutId: `TsuM09xAN`,
                                                NDcYsg5oi: `1M+`,
                                                t_H7Fx64z: `Data-driven signals delivered every month.`,
                                                V1x3EoHFX: `AI insights generated`,
                                                variant: J(`qxuYd46p_`),
                                                width: `100%`,
                                                XZfwo1a6Z: Y(
                                                  {
                                                    pixelHeight: 20,
                                                    pixelWidth: 16,
                                                    src: `../../assets/images/wiruZRRAYkGg8lZDZWNz9Puunw.svg`,
                                                  },
                                                  `Icon`
                                                ),
                                              }),
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
                        d(`section`, {
                          className: `framer-1vdjjwv`,
                          "data-framer-name": `Testimonial`,
                          children: [
                            l(`div`, {
                              className: `framer-1v9wxr1`,
                              "data-framer-name": `Container`,
                              children: d(`div`, {
                                className: `framer-6najnv`,
                                "data-framer-name": `Content`,
                                children: [
                                  d(G, {
                                    __framer__animate: { transition: q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Z,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-sjwnar`,
                                    "data-framer-name": `Top`,
                                    children: [
                                      d(`div`, {
                                        className: `framer-1kp8m6t`,
                                        "data-framer-name": `Left`,
                                        children: [
                                          l(v, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`h2`, {
                                                className: `framer-styles-preset-140jh7d`,
                                                "data-styles-preset": `vxo9lP1tq`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                                },
                                                children: `What investors say about the platform`,
                                              }),
                                            }),
                                            className: `framer-1iwonw5`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(`div`, {
                                            className: `framer-a8b10z`,
                                            "data-framer-name": `List`,
                                            children: [
                                              l(F, {
                                                height: 22,
                                                children: l(j, {
                                                  className: `framer-12djygv-container`,
                                                  nodeId: `MOFbu96k6`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(ct, {
                                                    GmSs_KKEi: `4.9/5 Rating`,
                                                    height: `100%`,
                                                    id: `MOFbu96k6`,
                                                    layoutId: `MOFbu96k6`,
                                                    uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                    variant: J(`GLuZpuSO3`),
                                                    width: `100%`,
                                                    XMCDOSojK: Y(
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
                                              l(`div`, {
                                                className: `framer-uwl3th`,
                                                "data-framer-name": `Line`,
                                              }),
                                              l(F, {
                                                height: 22,
                                                children: l(j, {
                                                  className: `framer-q6izyg-container`,
                                                  nodeId: `HblsxbxW2`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(ct, {
                                                    GmSs_KKEi: `75+ Testimonials`,
                                                    height: `100%`,
                                                    id: `HblsxbxW2`,
                                                    layoutId: `HblsxbxW2`,
                                                    uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                    variant: J(`GLuZpuSO3`),
                                                    width: `100%`,
                                                    XMCDOSojK: Y(
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
                                              l(`div`, {
                                                className: `framer-c90brh`,
                                                "data-framer-name": `Line`,
                                              }),
                                              l(F, {
                                                height: 22,
                                                children: l(j, {
                                                  className: `framer-f0h3hq-container`,
                                                  nodeId: `P7d5QH2_K`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(ct, {
                                                    GmSs_KKEi: `10K+ Growth community`,
                                                    height: `100%`,
                                                    id: `P7d5QH2_K`,
                                                    layoutId: `P7d5QH2_K`,
                                                    uoP_rcx83: `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                                    variant: J(`GLuZpuSO3`),
                                                    width: `100%`,
                                                    XMCDOSojK: Y(
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
                                      l(`div`, {
                                        className: `framer-1hh9hmn`,
                                        "data-framer-name": `Right`,
                                        children: l(D, {
                                          links: [
                                            {
                                              href: { webPageId: `TbHzfliLr` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TbHzfliLr` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TbHzfliLr` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            l(F, {
                                              height: 59,
                                              children: l(j, {
                                                className: `framer-o95dy0-container`,
                                                nodeId: `x2HEhRIb_`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    ajgklN14M: {
                                                      gayKxTIvB: e[1],
                                                      variant: J(`n9A7jxl3z`),
                                                    },
                                                    G3g83S3dk: {
                                                      gayKxTIvB: e[2],
                                                      variant: J(`n9A7jxl3z`),
                                                    },
                                                  },
                                                  children: l($e, {
                                                    gayKxTIvB: e[0],
                                                    height: `100%`,
                                                    id: `x2HEhRIb_`,
                                                    layoutId: `x2HEhRIb_`,
                                                    uYcQ8rJi0: !1,
                                                    variant: J(`KVSDvWZoH`),
                                                    width: `100%`,
                                                    ziCnPH11n: `Get started today`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  l(R, {
                                    breakpoint: w,
                                    overrides: {
                                      ajgklN14M: { tickerEffectGap: `20px` },
                                      G3g83S3dk: { tickerEffectEnabled: void 0 },
                                    },
                                    children: d(ga, {
                                      className: `framer-zjpppz`,
                                      "data-framer-name": `Ticker`,
                                      tickerEffectAlign: `end`,
                                      tickerEffectDirectionModifier: `default`,
                                      tickerEffectDraggable: !1,
                                      tickerEffectEnabled: !0,
                                      tickerEffectGap: `50px`,
                                      tickerEffectHoverModifier: 100,
                                      tickerEffectOverflow: `visible`,
                                      tickerEffectPosition: `relative`,
                                      tickerEffectStackDirection: `row`,
                                      tickerEffectVelocity: 20,
                                      children: [
                                        l(k, {
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 300,
                                              width: `400px`,
                                              children: l(j, {
                                                className: `framer-14gmwwe-container`,
                                                nodeId: `SKmQNjrq4`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      lP_2UgiNa: `20px`,
                                                      style: { width: `100%` },
                                                      variant: J(`qtUc6Oe2H`),
                                                    },
                                                  },
                                                  children: l(lt, {
                                                    c_6S1GWN5: Y(
                                                      {
                                                        pixelHeight: 920,
                                                        pixelWidth: 800,
                                                        src: `../../assets/images/7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg`,
                                                        srcSet: `../../assets/images/7Z2d6WeDiCpoz0B6ookMTPOFAU.jpg 800w`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `SKmQNjrq4`,
                                                    layoutId: `SKmQNjrq4`,
                                                    lP_2UgiNa: `40px`,
                                                    ltvSVWkDz: `David Miller`,
                                                    njvQGMtNX: `This platform helped me understand my portfolio in ways I couldn’t before. The insights are clear and actually useful.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`Vf9ggY25D`),
                                                    vG_YeqZ3L: `Individual Investor`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(k, {
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 300,
                                              width: `400px`,
                                              children: l(j, {
                                                className: `framer-i9h9qg-container`,
                                                nodeId: `i4G5r3c0U`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      lP_2UgiNa: `20px`,
                                                      style: { width: `100%` },
                                                      variant: J(`qtUc6Oe2H`),
                                                    },
                                                  },
                                                  children: l(lt, {
                                                    c_6S1GWN5: Y(
                                                      {
                                                        pixelHeight: 150,
                                                        pixelWidth: 150,
                                                        src: `../../assets/images/hYfCvJ3IVdEznEOwIQiiAxWOsPY.jpg`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `i4G5r3c0U`,
                                                    layoutId: `i4G5r3c0U`,
                                                    lP_2UgiNa: `40px`,
                                                    ltvSVWkDz: `Sarah Thompson`,
                                                    njvQGMtNX: `Managing multiple portfolios is much easier now. The risk analysis tools save us hours every week.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`Vf9ggY25D`),
                                                    vG_YeqZ3L: `Wealth Manager`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(k, {
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 300,
                                              width: `400px`,
                                              children: l(j, {
                                                className: `framer-10d548w-container`,
                                                nodeId: `BidXxSF6a`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      lP_2UgiNa: `20px`,
                                                      style: { width: `100%` },
                                                      variant: J(`qtUc6Oe2H`),
                                                    },
                                                  },
                                                  children: l(lt, {
                                                    c_6S1GWN5: Y(
                                                      {
                                                        pixelHeight: 150,
                                                        pixelWidth: 150,
                                                        src: `../../assets/images/622M5cyJBdKPIK1fPnBlo3qONk.jpg`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `BidXxSF6a`,
                                                    layoutId: `BidXxSF6a`,
                                                    lP_2UgiNa: `40px`,
                                                    ltvSVWkDz: `Michael Chen`,
                                                    njvQGMtNX: `The real-time insights and alerts help me react faster to market changes. It’s become part of my daily workflow.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`Vf9ggY25D`),
                                                    vG_YeqZ3L: `Active Trader`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(k, {
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 300,
                                              width: `400px`,
                                              children: l(j, {
                                                className: `framer-b8qo3e-container`,
                                                nodeId: `RopxYeitX`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      lP_2UgiNa: `20px`,
                                                      style: { width: `100%` },
                                                      variant: J(`qtUc6Oe2H`),
                                                    },
                                                  },
                                                  children: l(lt, {
                                                    c_6S1GWN5: Y(
                                                      {
                                                        pixelHeight: 150,
                                                        pixelWidth: 150,
                                                        src: `../../assets/images/W13V3WO2YwDah4yBxCcZc70Es.jpg`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `RopxYeitX`,
                                                    layoutId: `RopxYeitX`,
                                                    lP_2UgiNa: `40px`,
                                                    ltvSVWkDz: `Emily Rodriguez`,
                                                    njvQGMtNX: `The data visualization and analytics tools make complex financial information far easier to interpret.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`Vf9ggY25D`),
                                                    vG_YeqZ3L: `Financial Analyst`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l(k, {
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: {
                                              G3g83S3dk: {
                                                width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                              },
                                            },
                                            children: l(F, {
                                              height: 300,
                                              width: `400px`,
                                              children: l(j, {
                                                className: `framer-g5py5d-container`,
                                                nodeId: `IJgr1fG2r`,
                                                scopeId: `augiA20Il`,
                                                children: l(R, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    G3g83S3dk: {
                                                      lP_2UgiNa: `20px`,
                                                      style: { width: `100%` },
                                                      variant: J(`qtUc6Oe2H`),
                                                    },
                                                  },
                                                  children: l(lt, {
                                                    c_6S1GWN5: Y(
                                                      {
                                                        pixelHeight: 150,
                                                        pixelWidth: 150,
                                                        src: `../../assets/images/5O8P63EQwkFO1m5OTR4jsw7hI8.jpg`,
                                                      },
                                                      `Avatar`
                                                    ),
                                                    height: `100%`,
                                                    id: `IJgr1fG2r`,
                                                    layoutId: `IJgr1fG2r`,
                                                    lP_2UgiNa: `40px`,
                                                    ltvSVWkDz: `Daniel Carter`,
                                                    njvQGMtNX: `The insights are clear and actionable. It helps me track performance and make better investment decisions every day.`,
                                                    style: { height: `100%`, width: `100%` },
                                                    variant: J(`Vf9ggY25D`),
                                                    vG_YeqZ3L: `Portfolio Manager`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            d(`div`, {
                              className: `framer-1nigozh`,
                              "data-framer-name": `BG Item`,
                              children: [
                                l(`div`, {
                                  className: `framer-rt6spd`,
                                  "data-framer-name": `BG Top`,
                                }),
                                l(`div`, {
                                  className: `framer-1czyi0r`,
                                  "data-framer-name": `BG Bottom`,
                                }),
                                l(N, {
                                  background: {
                                    alt: `BG Image`,
                                    fit: `fill`,
                                    intrinsicHeight: 1080,
                                    intrinsicWidth: 1920,
                                    pixelHeight: 1080,
                                    pixelWidth: 1920,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `max(${_?.width || `100vw`}, 1px)`,
                                    src: `../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg`,
                                    srcSet: `../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg?scale-down-to=1024&width=1920&height=1080 1024w,../../assets/images/cQBpXWVe2IileA0HCzW5W4uvgY.jpg 1920w`,
                                  },
                                  className: `framer-rjpesb`,
                                  "data-framer-name": `BG Image`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`section`, {
                          className: `framer-1m5u4n7`,
                          "data-framer-name": `Pricing`,
                          id: Pe,
                          ref: ge(Pe),
                          children: l(`div`, {
                            className: `framer-1v9b1js`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-1qr793g`,
                              "data-framer-name": `Content`,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-xbt5fu`,
                                  "data-framer-name": `Top`,
                                  children: [
                                    l(F, {
                                      height: 38,
                                      children: l(j, {
                                        className: `framer-ij5lva-container`,
                                        nodeId: `gryMWNPf8`,
                                        scopeId: `augiA20Il`,
                                        children: l(bt, {
                                          BSyxhptbW: `Subscription plans`,
                                          height: `100%`,
                                          id: `gryMWNPf8`,
                                          layoutId: `gryMWNPf8`,
                                          variant: J(`dVqc43eR9`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    l(v, {
                                      __fromCanvasComponent: !0,
                                      children: l(r, {
                                        children: l(`h2`, {
                                          className: `framer-styles-preset-140jh7d`,
                                          "data-styles-preset": `vxo9lP1tq`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                          },
                                          children: `Transparent pricing without hidden fees`,
                                        }),
                                      }),
                                      className: `framer-1wa1tav`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                l(R, {
                                  breakpoint: w,
                                  overrides: {
                                    ajgklN14M: {
                                      width: `calc(min(${_?.width || `100vw`}, 860px) - 40px)`,
                                    },
                                    G3g83S3dk: {
                                      width: `calc(min(${_?.width || `100vw`}, 860px) - 32px)`,
                                    },
                                  },
                                  children: l(F, {
                                    height: 807,
                                    width: `calc(min(${_?.width || `100vw`}, 860px) - 60px)`,
                                    children: l(K, {
                                      __framer__animate: { transition: Wa },
                                      __framer__animateOnce: !0,
                                      __framer__enter: X,
                                      __framer__exit: to,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-rorgqi-container`,
                                      nodeId: `PrzUU8msD`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: l(R, {
                                        breakpoint: w,
                                        overrides: {
                                          ajgklN14M: { variant: J(`GgMHH0p4y`) },
                                          G3g83S3dk: { variant: J(`T4SQdc4EG`) },
                                        },
                                        children: l(_t, {
                                          height: `100%`,
                                          id: `PrzUU8msD`,
                                          layoutId: `PrzUU8msD`,
                                          style: { width: `100%` },
                                          variant: J(`UH10pDOG6`),
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
                        l(`section`, {
                          className: `framer-15he58p`,
                          "data-framer-name": `FAQs`,
                          id: Ie,
                          ref: ge(Ie),
                          children: l(`div`, {
                            className: `framer-7q86lk`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-jp528m`,
                              "data-framer-name": `Content`,
                              children: [
                                d(G, {
                                  __framer__animate: { transition: q },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: Z,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1v93whx`,
                                  "data-framer-name": `Left`,
                                  children: [
                                    d(`div`, {
                                      className: `framer-1r1ad9z`,
                                      "data-framer-name": `Top`,
                                      children: [
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`h2`, {
                                              className: `framer-styles-preset-140jh7d`,
                                              "data-styles-preset": `vxo9lP1tq`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, rgb(29, 29, 29))`,
                                              },
                                              children: `Frequently asked questions`,
                                            }),
                                          }),
                                          className: `framer-11hhnx4`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(v, {
                                          __fromCanvasComponent: !0,
                                          children: l(r, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-n7iy3a`,
                                              "data-styles-preset": `EpfgTb3LW`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-b923e1cb-cf6e-406c-a3d3-6c79738c4b54, rgb(77, 88, 95))`,
                                              },
                                              children: `Find quick answers to common questions about the platform, pricing, and security.`,
                                            }),
                                          }),
                                          className: `framer-173tw31`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    B() &&
                                      l(R, {
                                        breakpoint: w,
                                        overrides: {
                                          ajgklN14M: {
                                            width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) * 0.375, 1px)`,
                                          },
                                        },
                                        children: l(F, {
                                          height: 269,
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) * 0.375, 1px)`,
                                          children: l(j, {
                                            className: `framer-1cmltia-container hidden-naka4o`,
                                            nodeId: `qBG9PyMz3`,
                                            scopeId: `augiA20Il`,
                                            children: l(Hn, {
                                              height: `100%`,
                                              id: `qBG9PyMz3`,
                                              layoutId: `qBG9PyMz3`,
                                              style: { width: `100%` },
                                              variant: J(`iHfsxmz6E`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                                d(Na, {
                                  __framer__animate: { transition: Wa },
                                  __framer__animateOnce: !0,
                                  __framer__enter: X,
                                  __framer__exit: to,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1dmgtti`,
                                  "data-framer-name": `Accordion Wrapper`,
                                  flowEffectEnabled: !0,
                                  flowEffectTransition: oo,
                                  isNestedFlowEffect: !1,
                                  children: [
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 1.6, 1px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 70,
                                        width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.6, 1px)`,
                                        children: l(j, {
                                          className: `framer-1rids5c-container`,
                                          layout: `position`,
                                          nodeId: `ix1141A6B`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: { G3g83S3dk: { variant: J(`I6yIM5iJA`) } },
                                            children: l(wt, {
                                              Cem09IVM0: `How secure is my financial data?`,
                                              height: `100%`,
                                              id: `ix1141A6B`,
                                              layoutId: `ix1141A6B`,
                                              NV3c2dGIv: `Your data is protected with industry-standard encryption and secure infrastructure. We follow strict security practices to ensure your financial information remains private and safe.`,
                                              style: { width: `100%` },
                                              variant: J(`zSlT2gi2H`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 1.6, 1px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 70,
                                        width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.6, 1px)`,
                                        children: l(j, {
                                          className: `framer-9ug4n4-container`,
                                          layout: `position`,
                                          nodeId: `BhcsXqMeR`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: { G3g83S3dk: { variant: J(`ciPb55D8c`) } },
                                            children: l(wt, {
                                              Cem09IVM0: `Can I connect multiple investment accounts?`,
                                              height: `100%`,
                                              id: `BhcsXqMeR`,
                                              layoutId: `BhcsXqMeR`,
                                              NV3c2dGIv: `Yes. You can securely connect multiple bank, trading, and investment accounts to track everything in one unified dashboard.`,
                                              style: { width: `100%` },
                                              variant: J(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 1.6, 1px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 70,
                                        width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.6, 1px)`,
                                        children: l(j, {
                                          className: `framer-149qf91-container`,
                                          layout: `position`,
                                          nodeId: `oQKXPGp0Q`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: { G3g83S3dk: { variant: J(`ciPb55D8c`) } },
                                            children: l(wt, {
                                              Cem09IVM0: `How do the AI insights work?`,
                                              height: `100%`,
                                              id: `oQKXPGp0Q`,
                                              layoutId: `oQKXPGp0Q`,
                                              NV3c2dGIv: `Our AI analyzes market trends, portfolio performance, and risk signals to generate insights that help you make smarter investment decisions.`,
                                              style: { width: `100%` },
                                              variant: J(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 1.6, 1px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 70,
                                        width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.6, 1px)`,
                                        children: l(j, {
                                          className: `framer-418v9r-container`,
                                          layout: `position`,
                                          nodeId: `xjDA_zOeS`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: { G3g83S3dk: { variant: J(`ciPb55D8c`) } },
                                            children: l(wt, {
                                              Cem09IVM0: `Is a trial available before subscribing?`,
                                              height: `100%`,
                                              id: `xjDA_zOeS`,
                                              layoutId: `xjDA_zOeS`,
                                              NV3c2dGIv: `Yes. You can explore the platform with a trial period to understand how the features work before choosing a paid plan.`,
                                              style: { width: `100%` },
                                              variant: J(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    l(R, {
                                      breakpoint: w,
                                      overrides: {
                                        ajgklN14M: {
                                          width: `max((min(${_?.width || `100vw`}, 1260px) - 70px) / 1.6, 1px)`,
                                        },
                                        G3g83S3dk: {
                                          width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                        },
                                      },
                                      children: l(F, {
                                        height: 70,
                                        width: `max((min(${_?.width || `100vw`}, 1260px) - 130px) / 1.6, 1px)`,
                                        children: l(j, {
                                          className: `framer-17a6y3c-container`,
                                          layout: `position`,
                                          nodeId: `qFOQL2Th3`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: l(R, {
                                            breakpoint: w,
                                            overrides: { G3g83S3dk: { variant: J(`ciPb55D8c`) } },
                                            children: l(wt, {
                                              Cem09IVM0: `Do you offer plans for financial teams or organizations?`,
                                              height: `100%`,
                                              id: `qFOQL2Th3`,
                                              layoutId: `qFOQL2Th3`,
                                              NV3c2dGIv: `Yes. We offer enterprise solutions designed for financial teams and institutions. You can contact our sales team to discuss custom requirements.`,
                                              style: { width: `100%` },
                                              variant: J(`Z3V2APvoq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                Le() &&
                                  l(R, {
                                    breakpoint: w,
                                    overrides: {
                                      G3g83S3dk: {
                                        height: 269,
                                        width: `calc(min(${_?.width || `100vw`}, 1260px) - 32px)`,
                                      },
                                    },
                                    children: l(F, {
                                      children: l(j, {
                                        className: `framer-7p55yh-container hidden-72rtr7 hidden-sm4lii`,
                                        "data-framer-name": `CTA Phone`,
                                        name: `CTA Phone`,
                                        nodeId: `i0nXe3pl1`,
                                        scopeId: `augiA20Il`,
                                        children: l(Hn, {
                                          height: `100%`,
                                          id: `i0nXe3pl1`,
                                          layoutId: `i0nXe3pl1`,
                                          name: `CTA Phone`,
                                          style: { width: `100%` },
                                          variant: J(`U8Y65vmDF`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                          }),
                        }),
                        l(F, {
                          children: l(j, {
                            className: `framer-pnc1uf-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `KkbzBHtEP`,
                            scopeId: `augiA20Il`,
                            children: l(Ne, {
                              height: `100%`,
                              id: `KkbzBHtEP`,
                              intensity: 15,
                              layoutId: `KkbzBHtEP`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(F, {
                      children: l(j, {
                        className: `framer-1cbvfqs-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: ne,
                        layoutScroll: !0,
                        nodeId: `wfKtQkpAY`,
                        scopeId: `augiA20Il`,
                        children: l(Ae, {
                          blur: 10,
                          borderRadius: `0px`,
                          direction: `to top`,
                          height: `100%`,
                          id: `wfKtQkpAY`,
                          layoutId: `wfKtQkpAY`,
                          style: { height: `100%`, width: `100%` },
                          transition: { duration: 0, type: `tween` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-bdOkX.framer-lux5qc, .framer-bdOkX .framer-lux5qc { display: block; }`,
        `.framer-bdOkX.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-bdOkX .framer-m6f8sq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-k1k9dl { align-content: center; align-items: center; background-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 175vh; overflow: visible; padding: 194px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1d3xmyh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-bdOkX .framer-1a2b6ll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-clrt71 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; scroll-margin-top: 100px; width: 100%; }`,
        `.framer-bdOkX .framer-1yiua1c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-126jbi7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-wc3kw0, .framer-bdOkX .framer-dkzye { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bdOkX .framer-1p41gx3 { -webkit-filter: drop-shadow(0px 8px 6px var(--token-08dc1709-8178-4e8a-935e-cbadce9f78a4, rgba(0, 0, 0, 0.1)) /* {"name":"000000 10%"} */) drop-shadow(0px 3px 3px var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.3)) /* {"name":"000000 30%"} */); aspect-ratio: 1 / 1; filter: drop-shadow(0px 8px 6px var(--token-08dc1709-8178-4e8a-935e-cbadce9f78a4, rgba(0, 0, 0, 0.1)) /* {"name":"000000 10%"} */) drop-shadow(0px 3px 3px var(--token-1da6f336-7e27-4609-af93-da7817fb442b, rgba(0, 0, 0, 0.3)) /* {"name":"000000 30%"} */); flex: none; height: var(--framer-aspect-ratio-supported, 100px); overflow: visible; position: relative; width: 100px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bdOkX .framer-ohtzn4 { flex: none; height: 50px; left: calc(50.00000000000002% - 11px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 200px; width: 11px; }`,
        `.framer-bdOkX .framer-1spbc6i { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bdOkX .framer-f1qe15 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bdOkX .framer-ajmxgk-container, .framer-bdOkX .framer-txa6ds-container, .framer-bdOkX .framer-1gchnln-container, .framer-bdOkX .framer-1uciv1k-container, .framer-bdOkX .framer-bz8jzm-container, .framer-bdOkX .framer-1klh6tf-container, .framer-bdOkX .framer-1xpfrd8-container, .framer-bdOkX .framer-1a7kes0-container, .framer-bdOkX .framer-1mk1x21-container, .framer-bdOkX .framer-p75x8t-container, .framer-bdOkX .framer-1fauekh-container, .framer-bdOkX .framer-1pj2ix4-container, .framer-bdOkX .framer-1gk657t-container, .framer-bdOkX .framer-1a5v9y5-container, .framer-bdOkX .framer-rt6ke0-container, .framer-bdOkX .framer-lttu65-container, .framer-bdOkX .framer-1nz465r-container, .framer-bdOkX .framer-16jydmu-container, .framer-bdOkX .framer-31exsu-container, .framer-bdOkX .framer-11x0hno-container, .framer-bdOkX .framer-1e6gdol-container, .framer-bdOkX .framer-1ru4rfp-container, .framer-bdOkX .framer-x6nv6v-container, .framer-bdOkX .framer-azkkak-container, .framer-bdOkX .framer-1gf0lof-container, .framer-bdOkX .framer-1j211cn-container, .framer-bdOkX .framer-10teoon-container, .framer-bdOkX .framer-o03tih-container, .framer-bdOkX .framer-ptrh04-container, .framer-bdOkX .framer-1bxykj2-container, .framer-bdOkX .framer-krh3ur-container, .framer-bdOkX .framer-w8vwpx-container, .framer-bdOkX .framer-1lpktdo-container, .framer-bdOkX .framer-1lk56uh-container, .framer-bdOkX .framer-25el78-container, .framer-bdOkX .framer-h2adcy-container, .framer-bdOkX .framer-f2d9r0-container, .framer-bdOkX .framer-369vj0-container, .framer-bdOkX .framer-taollz-container, .framer-bdOkX .framer-1ces20t-container, .framer-bdOkX .framer-7wqjjz-container, .framer-bdOkX .framer-1mhoys6-container, .framer-bdOkX .framer-qpz8oq-container, .framer-bdOkX .framer-61mc47-container, .framer-bdOkX .framer-1yep9c-container, .framer-bdOkX .framer-13qhxar-container, .framer-bdOkX .framer-1ngp7um-container, .framer-bdOkX .framer-10t7wys-container, .framer-bdOkX .framer-11eokhe-container, .framer-bdOkX .framer-a34liy-container, .framer-bdOkX .framer-soxn1k-container, .framer-bdOkX .framer-12djygv-container, .framer-bdOkX .framer-q6izyg-container, .framer-bdOkX .framer-f0h3hq-container, .framer-bdOkX .framer-o95dy0-container, .framer-bdOkX .framer-ij5lva-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-bdOkX .framer-19r2iw5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bdOkX .framer-12ovudb, .framer-bdOkX .framer-xov8df { align-self: stretch; background-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); flex: none; height: auto; opacity: 0.2; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-h1rone { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1060px; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bdOkX .framer-1hw9hq1 { --border-bottom-width: 1px; --border-color: var(--token-51f94b53-bb42-43ec-9cc4-5f5eec0c08b0, #bababa); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-8baswv { -webkit-user-select: none; flex: none; height: 350px; left: -130px; overflow: visible; pointer-events: none; position: absolute; top: -40px; user-select: none; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-1cd8rv8 { -webkit-user-select: none; flex: none; height: 240px; left: 50%; overflow: visible; pointer-events: none; position: absolute; top: 50px; transform: translateX(-50%); user-select: none; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-bbhfkx { -webkit-user-select: none; flex: none; height: 350px; overflow: visible; pointer-events: none; position: absolute; right: -60px; top: 80px; user-select: none; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-hbxgbd { -webkit-user-select: none; align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: flex-start; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: absolute; right: -20px; top: 0px; user-select: none; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`,
        `.framer-bdOkX .framer-1bp8hfh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 98%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 200px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-bdOkX .framer-1j061rr { flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; z-index: 2; }`,
        `.framer-bdOkX .framer-au56yr, .framer-bdOkX .framer-1cxr09i, .framer-bdOkX .framer-fc200l, .framer-bdOkX .framer-xi1a99, .framer-bdOkX .framer-1nigozh { -webkit-user-select: none; align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-bdOkX .framer-1razf8m, .framer-bdOkX .framer-sn7t4m, .framer-bdOkX .framer-1qzcxzq, .framer-bdOkX .framer-11elwy7, .framer-bdOkX .framer-rjpesb { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-bdOkX .framer-1puayo5, .framer-bdOkX .framer-kxjz8k, .framer-bdOkX .framer-1czyi0r { background: linear-gradient(180deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-456a706a-3175-452e-a8be-f8b4e2e708c1, rgba(255, 255, 255, 0.7)) 25%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 50%); bottom: -1px; flex: none; height: 200px; left: -10px; overflow: visible; position: absolute; right: -10px; z-index: 2; }`,
        `.framer-bdOkX .framer-1y1d7p1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-jpyqg6, .framer-bdOkX .framer-2y2d1p, .framer-bdOkX .framer-1fol1kb, .framer-bdOkX .framer-1n20jqk, .framer-bdOkX .framer-1yuqn3k, .framer-bdOkX .framer-7q86lk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1260px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-x497yh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-m4b5i1 { -webkit-user-select: none; background: linear-gradient(90deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 10px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; top: 40px; user-select: none; width: 80px; z-index: 1; }`,
        `.framer-bdOkX .framer-1si1pk1 { -webkit-user-select: none; background: linear-gradient(270deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 10px; flex: none; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 40px; user-select: none; width: 80px; z-index: 1; }`,
        `.framer-bdOkX .framer-wzn7pk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1yjcc4r { -webkit-user-select: none; background: linear-gradient(90deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237)) 50%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: calc(50.00000000000002% - 1px / 2); user-select: none; z-index: 0; }`,
        `.framer-bdOkX .framer-u9fuz-container { flex: none; height: auto; position: relative; width: auto; z-index: 2; }`,
        `.framer-bdOkX .framer-1by6xl6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1w4iiu6 { -webkit-user-select: none; background: linear-gradient(90deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-3992e4b1-4934-4fc5-9122-067e1dd544fa, rgb(221, 229, 237)) 50%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 0px; flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; user-select: none; z-index: 0; }`,
        `.framer-bdOkX .framer-1rqiilw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 150px; height: min-content; justify-content: flex-start; overflow: visible; padding: 200px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1mtjf8r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 760px; overflow: visible; padding: 0px 30px 0px 30px; position: sticky; top: 80px; width: 100%; z-index: 1; }`,
        `.framer-bdOkX .framer-nng3lh, .framer-bdOkX .framer-83jbmx, .framer-bdOkX .framer-qkh27k, .framer-bdOkX .framer-1qr793g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-m8ns6d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-va9ypv, .framer-bdOkX .framer-1dnlptc, .framer-bdOkX .framer-d42xmu, .framer-bdOkX .framer-682d1o, .framer-bdOkX .framer-17g1bb0, .framer-bdOkX .framer-101zxmm, .framer-bdOkX .framer-13cjqyv, .framer-bdOkX .framer-lltprk, .framer-bdOkX .framer-1uk3rhr, .framer-bdOkX .framer-1kp193u, .framer-bdOkX .framer-1iir7xn, .framer-bdOkX .framer-e3w7iq, .framer-bdOkX .framer-1yw6ufn, .framer-bdOkX .framer-1gsssu5, .framer-bdOkX .framer-1ud96oj, .framer-bdOkX .framer-fhge8r, .framer-bdOkX .framer-27vb7y, .framer-bdOkX .framer-1iwonw5, .framer-bdOkX .framer-1wa1tav, .framer-bdOkX .framer-11hhnx4, .framer-bdOkX .framer-173tw31 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-rtxifa-container, .framer-bdOkX .framer-ka4qtu-container, .framer-bdOkX .framer-1y20tka-container, .framer-bdOkX .framer-v43x8e-container, .framer-bdOkX .framer-110owuw-container, .framer-bdOkX .framer-ock2ch-container, .framer-bdOkX .framer-rorgqi-container, .framer-bdOkX .framer-1cmltia-container, .framer-bdOkX .framer-1rids5c-container, .framer-bdOkX .framer-9ug4n4-container, .framer-bdOkX .framer-149qf91-container, .framer-bdOkX .framer-418v9r-container, .framer-bdOkX .framer-17a6y3c-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1it3ea3 { flex: none; height: 50vh; overflow: visible; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-ie3zx4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 200px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1p35fyn, .framer-bdOkX .framer-3cvx69, .framer-bdOkX .framer-1v9wxr1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-bdOkX .framer-1nqcdkm, .framer-bdOkX .framer-6najnv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-4rb60z, .framer-bdOkX .framer-sjwnar, .framer-bdOkX .framer-zjpppz { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-kakt8u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-ln9274 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-1dgpeyp, .framer-bdOkX .framer-1lsaiit { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1oqhr5r { align-self: start; display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-column: span 2; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1s177ci, .framer-bdOkX .framer-1xwju4i { align-content: center; align-items: center; align-self: start; background-color: var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, #edf1f4); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-15e48iu { flex: none; height: auto; max-width: 150px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-ft1k72 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-bdOkX .framer-azdf4j, .framer-bdOkX .framer-5okc6k, .framer-bdOkX .framer-1wko4yx, .framer-bdOkX .framer-1cxk7kv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-bdOkX .framer-1bo6oyu { flex: none; height: auto; overflow: visible; position: relative; width: 100%; z-index: 1; }`,
        `.framer-bdOkX .framer-7deerb { background: linear-gradient(180deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff) 0%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 0%, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 100%); bottom: 0px; flex: none; left: 0px; opacity: 0.8; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-bdOkX .framer-12vjpiy { align-content: center; align-items: center; align-self: start; background-color: var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, #edf1f4); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; grid-column: span 2; height: 100%; justify-content: space-between; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 40px 40px 0px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-1nb751b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-2hxm00 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: 220px; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-8feyv { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 250px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-bdOkX .framer-asxrp6 { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-bdOkX .framer-qwj4un { background: linear-gradient(180deg, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff) 0%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 0%, var(--token-0a34df0a-701b-4bf9-bdf5-c1a9964dab0b, rgba(255, 255, 255, 0.3)) 100%); bottom: 0px; flex: none; left: 0px; opacity: 0.9; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-bdOkX .framer-105pa66 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px 30px; height: 100%; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-e58ijj { align-content: center; align-items: center; background-color: var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, #000000); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-o26z4t-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-v7ecge { align-content: center; align-items: center; background-color: var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, #edf1f4); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-g1kd5s { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 20px; top: 80px; width: 60px; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }`,
        `.framer-bdOkX .framer-17b639z, .framer-bdOkX .framer-jl6skg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1bz4fz3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-o61hgx, .framer-bdOkX .framer-ap8sbu, .framer-bdOkX .framer-xbt5fu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1kbyjce { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-8lksz5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-zw6si2 { align-content: center; align-items: center; background-color: var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 6px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-yyy2dn { --border-bottom-width: 1px; --border-color: var(--token-08dc1709-8178-4e8a-935e-cbadce9f78a4, rgba(0, 0, 0, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-auh7s2-container, .framer-bdOkX .framer-548ukw-container, .framer-bdOkX .framer-1uk08mg-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-dvndcj, .framer-bdOkX .framer-rt6spd { background: linear-gradient(0deg, var(--token-1b8f888c-e7bb-4096-83cf-bc6a0a87c24d, rgba(255, 255, 255, 0)) 0%, var(--token-456a706a-3175-452e-a8be-f8b4e2e708c1, rgba(255, 255, 255, 0.7)) 25%, var(--token-260f9222-11bc-40e3-a74c-4f1dae7b4ffa, rgb(255, 255, 255)) 50%); flex: none; height: 200px; left: -10px; overflow: visible; position: absolute; right: -10px; top: -1px; z-index: 2; }`,
        `.framer-bdOkX .framer-1qqvc7o, .framer-bdOkX .framer-1m5u4n7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 200px 0px; position: relative; scroll-margin-top: 200px; width: 100%; }`,
        `.framer-bdOkX .framer-fx2xnr, .framer-bdOkX .framer-6o3kdt, .framer-bdOkX .framer-jp528m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-42h65d { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; overflow: visible; padding: 59px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-1gz9ej2, .framer-bdOkX .framer-od4qwv, .framer-bdOkX .framer-1wmfusi, .framer-bdOkX .framer-1r1ad9z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1hsur88 { display: grid; flex: none; gap: 30px 30px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-17yha9r-container, .framer-bdOkX .framer-k3vfdw-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1njqipj-container, .framer-bdOkX .framer-7p55yh-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-1huui5w, .framer-bdOkX .framer-1pvr7lo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-24yj7d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-rm32nc { align-content: flex-start; align-items: flex-start; background-color: var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, #edf1f4); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 30px 60px 30px 60px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-15nbnd { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-bdOkX .framer-u7zdba { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-ypzrl6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1nhlk9o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 860px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1ry5w46 { align-content: center; align-items: center; cursor: col-resize; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-tewlok, .framer-bdOkX .framer-pgljmy, .framer-bdOkX .framer-1eag3u, .framer-bdOkX .framer-1h2pux2 { border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; flex: none; height: 420px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 380px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-60lfqw-container, .framer-bdOkX .framer-1fzeczs-container, .framer-bdOkX .framer-fblnna-container, .framer-bdOkX .framer-2ng18x-container { flex: none; height: 420px; position: relative; width: 380px; }`,
        `.framer-bdOkX .framer-kzuvgz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 860px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-bjm452 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-z2u2q0-container { flex: none; height: auto; max-width: 500px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1wgq8fv { align-content: center; align-items: center; background-color: var(--token-8a16c1e0-9178-435f-8361-d83efd74d213, #edf1f4); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 100px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bdOkX .framer-19n3qgv, .framer-bdOkX .framer-1fm6rbu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 520px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-bdOkX .framer-1pzi2r6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 505px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-xgr2ft { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 940px); justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 0px; transform: translateX(-50%); width: 940px; z-index: 0; }`,
        `.framer-bdOkX .framer-11nliif, .framer-bdOkX .framer-1hzr5jv, .framer-bdOkX .framer-y1qygm, .framer-bdOkX .framer-5057qo, .framer-bdOkX .framer-1vwi6in, .framer-bdOkX .framer-mp8lx1, .framer-bdOkX .framer-i1zzyo, .framer-bdOkX .framer-1oqmnjb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: min-content; }`,
        `.framer-bdOkX .framer-e03fbb { align-content: center; align-items: center; aspect-ratio: 1 / 1; background: linear-gradient(135deg, var(--token-60bca774-6ba3-4c34-a431-2fd8d1ea1b8a, #323232) 0%, var(--token-a4ae1e21-2b71-445e-8792-31bd9220629a, rgb(0, 0, 0)) 100%); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; box-shadow: inset 4px 4px 8px 0px var(--token-0a34df0a-701b-4bf9-bdf5-c1a9964dab0b, rgba(255, 255, 255, 0.3)), inset -4px -4px 8px 0px var(--token-0a34df0a-701b-4bf9-bdf5-c1a9964dab0b, rgba(255, 255, 255, 0.3)), 0px 8px 16px 0px var(--token-3773b559-408e-44fa-b41c-14281b49a454, rgba(29, 29, 29, 0.5)); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 130px); justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 130px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-bdOkX .framer-bzwekd { flex: none; height: 40px; overflow: visible; position: relative; width: auto; }`,
        `.framer-bdOkX .framer-16xv2tp { -webkit-user-select: none; bottom: -80px; flex: none; height: auto; left: -10px; overflow: visible; pointer-events: none; position: absolute; right: -10px; user-select: none; z-index: 1; }`,
        `.framer-bdOkX .framer-112ajpz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-9iq6xp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; min-height: 120vh; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1l5tzp4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-bdOkX .framer-1vnzp4c { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-bdOkX .framer-1ixz1so-container { flex: none; height: auto; left: 50px; position: absolute; top: 130px; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-1mjgo4z-container { flex: none; height: auto; position: absolute; right: 0px; top: 120px; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-13259be-container { bottom: 90px; flex: none; height: auto; position: absolute; right: 0px; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-9t3fm9-container { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-muii6w-container { bottom: 60px; flex: none; height: auto; left: 20px; position: absolute; width: auto; z-index: 1; }`,
        `.framer-bdOkX .framer-1vdjjwv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 200px 0px 200px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1kp8m6t, .framer-bdOkX .framer-1dmgtti { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-a8b10z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-uwl3th, .framer-bdOkX .framer-c90brh { align-self: stretch; background-color: var(--token-0edc2e6a-5fd1-47c5-a905-c3de9f07cea3, #1d1d1d); flex: none; height: auto; opacity: 0.3; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-1hh9hmn { align-content: flex-end; align-items: flex-end; display: flex; flex: 0.6 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-14gmwwe-container, .framer-bdOkX .framer-i9h9qg-container, .framer-bdOkX .framer-10d548w-container, .framer-bdOkX .framer-b8qo3e-container, .framer-bdOkX .framer-g5py5d-container { flex: none; height: 300px; position: relative; width: 400px; }`,
        `.framer-bdOkX .framer-1v9b1js { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 860px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-15he58p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-bdOkX .framer-1v93whx { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.6 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-bdOkX .framer-pnc1uf-container { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; width: auto; }`,
        `.framer-bdOkX .framer-1cbvfqs-container { flex: none; height: 100px; left: 0px; pointer-events: auto; position: fixed; right: 0px; top: 0px; z-index: 8; }`,
        ...ra,
        ...De,
        ...At,
        ...Le,
        ...Ge,
        ...Ye,
        ...it,
        `.framer-bdOkX[data-border="true"]::after, .framer-bdOkX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bdOkX.framer-72rtr7 { width: 810px; } .framer-bdOkX .framer-k1k9dl { min-height: unset; padding: 158px 0px 160px 0px; } .framer-bdOkX .framer-1d3xmyh, .framer-bdOkX .framer-1mtjf8r, .framer-bdOkX .framer-1p35fyn, .framer-bdOkX .framer-3cvx69, .framer-bdOkX .framer-2y2d1p, .framer-bdOkX .framer-1fol1kb, .framer-bdOkX .framer-1nhlk9o, .framer-bdOkX .framer-1n20jqk, .framer-bdOkX .framer-1yuqn3k, .framer-bdOkX .framer-1v9wxr1, .framer-bdOkX .framer-1v9b1js, .framer-bdOkX .framer-7q86lk { padding: 0px 20px 0px 20px; } .framer-bdOkX .framer-1a2b6ll, .framer-bdOkX .framer-nng3lh, .framer-bdOkX .framer-83jbmx, .framer-bdOkX .framer-qkh27k, .framer-bdOkX .framer-1qr793g, .framer-bdOkX .framer-1v93whx { gap: 40px; } .framer-bdOkX .framer-1p41gx3 { height: var(--framer-aspect-ratio-supported, 60px); width: 60px; } .framer-bdOkX .framer-1puayo5, .framer-bdOkX .framer-dvndcj, .framer-bdOkX .framer-kxjz8k, .framer-bdOkX .framer-rt6spd, .framer-bdOkX .framer-1czyi0r { height: 160px; } .framer-bdOkX .framer-1rqiilw, .framer-bdOkX .framer-ie3zx4, .framer-bdOkX .framer-112ajpz { padding: 160px 0px 0px 0px; } .framer-bdOkX .framer-4rb60z, .framer-bdOkX .framer-fx2xnr, .framer-bdOkX .framer-6o3kdt, .framer-bdOkX .framer-jp528m { gap: 30px; } .framer-bdOkX .framer-1dgpeyp { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-bdOkX .framer-105pa66 { grid-column: span 2; height: min-content; } .framer-bdOkX .framer-e58ijj { flex: none; gap: 0px; height: min-content; justify-content: center; } .framer-bdOkX .framer-o26z4t-container { flex: none; height: auto; } .framer-bdOkX .framer-17b639z, .framer-bdOkX .framer-jl6skg, .framer-bdOkX .framer-1vdjjwv { padding: 160px 0px 160px 0px; } .framer-bdOkX .framer-1bz4fz3, .framer-bdOkX .framer-1fm6rbu, .framer-bdOkX .framer-zjpppz { gap: 20px; } .framer-bdOkX .framer-1qqvc7o, .framer-bdOkX .framer-1m5u4n7 { padding: 0px 0px 160px 0px; } .framer-bdOkX .framer-42h65d { flex: 1 0 0px; gap: 50px; padding: 40px 0px 0px 0px; } .framer-bdOkX .framer-1hsur88 { gap: 20px 20px; } .framer-bdOkX .framer-rm32nc { padding: 20px; } .framer-bdOkX .framer-kzuvgz { padding: 0px 20px 0px 0px; } .framer-bdOkX .framer-1wgq8fv { padding: 50px; } .framer-bdOkX .framer-1pzi2r6 { height: 400px; overflow: visible; } .framer-bdOkX .framer-e03fbb { height: var(--framer-aspect-ratio-supported, 100px); width: 100px; } .framer-bdOkX .framer-bzwekd { height: 36px; } .framer-bdOkX .framer-9iq6xp { gap: 40px; min-height: unset; } .framer-bdOkX .framer-1vnzp4c { align-content: unset; align-items: unset; bottom: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; left: unset; position: relative; right: unset; top: unset; width: 100%; } .framer-bdOkX .framer-1ixz1so-container { align-self: start; height: 100%; justify-self: start; left: unset; order: 0; position: relative; top: unset; width: 100%; } .framer-bdOkX .framer-1mjgo4z-container { align-self: start; height: 100%; justify-self: start; order: 1; position: relative; right: unset; top: unset; width: 100%; } .framer-bdOkX .framer-13259be-container { align-self: start; bottom: unset; height: 100%; justify-self: start; order: 3; position: relative; right: unset; width: 100%; } .framer-bdOkX .framer-9t3fm9-container { align-self: start; bottom: unset; height: 100%; justify-self: start; left: unset; order: 2; position: relative; transform: unset; width: 100%; } .framer-bdOkX .framer-muii6w-container { align-self: start; bottom: unset; grid-column: span 2; height: 100%; justify-self: start; left: unset; order: 4; position: relative; width: 100%; } .framer-bdOkX .framer-15he58p { padding: 0px 0px 60px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-bdOkX.framer-72rtr7 { width: 390px; } .framer-bdOkX .framer-k1k9dl { min-height: unset; padding: 128px 0px 100px 0px; } .framer-bdOkX .framer-1d3xmyh, .framer-bdOkX .framer-jpyqg6, .framer-bdOkX .framer-1mtjf8r, .framer-bdOkX .framer-1p35fyn, .framer-bdOkX .framer-3cvx69, .framer-bdOkX .framer-2y2d1p, .framer-bdOkX .framer-1fol1kb, .framer-bdOkX .framer-1n20jqk, .framer-bdOkX .framer-1yuqn3k, .framer-bdOkX .framer-1v9wxr1, .framer-bdOkX .framer-1v9b1js, .framer-bdOkX .framer-7q86lk { padding: 0px 16px 0px 16px; } .framer-bdOkX .framer-1a2b6ll, .framer-bdOkX .framer-clrt71, .framer-bdOkX .framer-1by6xl6, .framer-bdOkX .framer-nng3lh, .framer-bdOkX .framer-1nqcdkm, .framer-bdOkX .framer-83jbmx, .framer-bdOkX .framer-6najnv, .framer-bdOkX .framer-1qr793g { gap: 30px; } .framer-bdOkX .framer-126jbi7 { gap: 0px 10px; } .framer-bdOkX .framer-1p41gx3 { height: var(--framer-aspect-ratio-supported, 40px); width: 30px; } .framer-bdOkX .framer-f1qe15 { gap: 16px 16px; } .framer-bdOkX .framer-19r2iw5, .framer-bdOkX .framer-1kbyjce, .framer-bdOkX .framer-a8b10z { gap: 10px 10px; } .framer-bdOkX .framer-1hw9hq1, .framer-bdOkX .framer-zw6si2 { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; } .framer-bdOkX .framer-1puayo5, .framer-bdOkX .framer-dvndcj, .framer-bdOkX .framer-kxjz8k, .framer-bdOkX .framer-rt6spd, .framer-bdOkX .framer-1czyi0r { height: 100px; } .framer-bdOkX .framer-m4b5i1, .framer-bdOkX .framer-1si1pk1 { width: 50px; } .framer-bdOkX .framer-1rqiilw, .framer-bdOkX .framer-ie3zx4 { padding: 100px 0px 0px 0px; } .framer-bdOkX .framer-m8ns6d, .framer-bdOkX .framer-1nhlk9o { padding: 0px; } .framer-bdOkX .framer-rtxifa-container { max-width: 360px; } .framer-bdOkX .framer-4rb60z { flex-direction: column; gap: 10px; } .framer-bdOkX .framer-kakt8u, .framer-bdOkX .framer-1njqipj-container, .framer-bdOkX .framer-1kp8m6t, .framer-bdOkX .framer-7p55yh-container { flex: none; width: 100%; } .framer-bdOkX .framer-ln9274 { align-content: flex-start; align-items: flex-start; flex: none; gap: 16px; width: 100%; } .framer-bdOkX .framer-1dgpeyp, .framer-bdOkX .framer-1lsaiit { gap: 20px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-bdOkX .framer-1oqhr5r { gap: 20px 20px; grid-column: span 1; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-bdOkX .framer-1s177ci, .framer-bdOkX .framer-1xwju4i, .framer-bdOkX .framer-v7ecge { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; gap: 20px; padding: 20px; } .framer-bdOkX .framer-12vjpiy { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0px 0px 1px var(--token-08dc1709-8178-4e8a-935e-cbadce9f78a4, rgba(0, 0, 0, 0.1)); grid-column: span 1; padding: 20px 20px 0px 20px; } .framer-bdOkX .framer-1nb751b { padding: 0px 0px 10px 0px; } .framer-bdOkX .framer-2hxm00 { height: 150px; } .framer-bdOkX .framer-8feyv { width: 180px; } .framer-bdOkX .framer-asxrp6 { width: 200px; } .framer-bdOkX .framer-105pa66 { gap: 20px; height: min-content; } .framer-bdOkX .framer-e58ijj { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; gap: 0px; height: min-content; justify-content: center; padding: 20px; } .framer-bdOkX .framer-o26z4t-container { flex: none; height: auto; } .framer-bdOkX .framer-g1kd5s { top: 50px; } .framer-bdOkX .framer-17b639z, .framer-bdOkX .framer-jl6skg, .framer-bdOkX .framer-1vdjjwv { padding: 100px 0px 100px 0px; } .framer-bdOkX .framer-1bz4fz3, .framer-bdOkX .framer-8lksz5, .framer-bdOkX .framer-19n3qgv { gap: 20px; } .framer-bdOkX .framer-yyy2dn { border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; } .framer-bdOkX .framer-1qqvc7o, .framer-bdOkX .framer-1m5u4n7 { padding: 0px 0px 100px 0px; } .framer-bdOkX .framer-fx2xnr { flex-direction: column; gap: 40px; } .framer-bdOkX .framer-42h65d { flex: none; gap: 20px; padding: 0px; width: 100%; } .framer-bdOkX .framer-6o3kdt, .framer-bdOkX .framer-jp528m { flex-direction: column; gap: 30px; } .framer-bdOkX .framer-24yj7d { flex: none; order: 1; width: 100%; } .framer-bdOkX .framer-rm32nc, .framer-bdOkX .framer-1wgq8fv { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; padding: 20px; } .framer-bdOkX .framer-u7zdba { flex: none; gap: 20px; order: 0; width: 100%; } .framer-bdOkX .framer-qkh27k { gap: 30px; padding: 0px 16px 0px 16px; } .framer-bdOkX .framer-1ry5w46 { cursor: unset; flex-direction: column; overflow: visible; } .framer-bdOkX .framer-60lfqw-container, .framer-bdOkX .framer-1fzeczs-container, .framer-bdOkX .framer-fblnna-container, .framer-bdOkX .framer-2ng18x-container, .framer-bdOkX .framer-14gmwwe-container, .framer-bdOkX .framer-i9h9qg-container, .framer-bdOkX .framer-10d548w-container, .framer-bdOkX .framer-b8qo3e-container, .framer-bdOkX .framer-g5py5d-container { height: auto; width: 100%; } .framer-bdOkX .framer-kzuvgz { gap: 20px; padding: 0px; } .framer-bdOkX .framer-1pzi2r6 { height: 350px; overflow: visible; padding: 50px; } .framer-bdOkX .framer-xgr2ft { height: var(--framer-aspect-ratio-supported, 840px); width: 750px; } .framer-bdOkX .framer-25el78-container, .framer-bdOkX .framer-h2adcy-container, .framer-bdOkX .framer-f2d9r0-container, .framer-bdOkX .framer-369vj0-container, .framer-bdOkX .framer-taollz-container, .framer-bdOkX .framer-1ces20t-container, .framer-bdOkX .framer-7wqjjz-container, .framer-bdOkX .framer-1mhoys6-container, .framer-bdOkX .framer-qpz8oq-container, .framer-bdOkX .framer-61mc47-container, .framer-bdOkX .framer-1yep9c-container, .framer-bdOkX .framer-13qhxar-container, .framer-bdOkX .framer-1ngp7um-container, .framer-bdOkX .framer-10t7wys-container, .framer-bdOkX .framer-11eokhe-container, .framer-bdOkX .framer-a34liy-container { height: 60px; width: 60px; } .framer-bdOkX .framer-1fm6rbu { gap: 10px; max-width: 350px; } .framer-bdOkX .framer-e03fbb { height: var(--framer-aspect-ratio-supported, 131px); width: 80px; } .framer-bdOkX .framer-bzwekd { height: 30px; } .framer-bdOkX .framer-16xv2tp { bottom: -50px; } .framer-bdOkX .framer-9iq6xp { gap: 30px; min-height: unset; } .framer-bdOkX .framer-1vnzp4c { bottom: unset; gap: 20px; height: min-content; justify-content: flex-start; left: unset; position: relative; right: unset; top: unset; width: 100%; } .framer-bdOkX .framer-1ixz1so-container { left: unset; position: relative; top: unset; width: 100%; } .framer-bdOkX .framer-1mjgo4z-container { position: relative; right: unset; top: unset; width: 100%; } .framer-bdOkX .framer-13259be-container { bottom: unset; position: relative; right: unset; width: 100%; } .framer-bdOkX .framer-9t3fm9-container { bottom: unset; left: unset; position: relative; transform: unset; width: 100%; } .framer-bdOkX .framer-muii6w-container { bottom: unset; left: unset; position: relative; width: 100%; } .framer-bdOkX .framer-sjwnar { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; } .framer-bdOkX .framer-1hh9hmn { align-content: flex-start; align-items: flex-start; flex: none; width: 60%; } .framer-bdOkX .framer-zjpppz { align-content: center; align-items: center; flex-direction: column; gap: 20px; } .framer-bdOkX .framer-15he58p { padding: 0px 0px 30px 0px; } .framer-bdOkX .framer-1v93whx { flex: none; gap: 20px; width: 100%; } .framer-bdOkX .framer-1dmgtti { flex: none; gap: 16px; width: 100%; } .framer-bdOkX .framer-1cbvfqs-container { height: 60px; }}`,
      ],
      `framer-bdOkX`
    )),
    (ho.displayName = `Home`),
    (ho.defaultProps = { height: 14085, width: 1200 }),
    S(
      ho,
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
        ...ca,
        ...la,
        ...da,
        ...ma,
        ...ha,
        ..._a,
        ...ya,
        ...ba,
        ...xa,
        ...Sa,
        ...Ca,
        ...wa,
        ...Ta,
        ...Ea,
        ...Da,
        ...Oa,
        ...ka,
        ...Aa,
        ...ja,
        ...Ma,
        ...Pa,
        ...Fa,
        ...B(na),
        ...B(Oe),
        ...B(jt),
        ...B(Re),
        ...B(Ke),
        ...B(Xe),
        ...B(at),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ho.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          T($e, {}, t),
          T(Wr, {}, t),
          T(ct, {}, t),
          T(bt, {}, t),
          T(V, {}, t),
          T(yi, {}, t),
          T(nt, {}, t),
          T(lr, {}, t),
          T(on, {}, t),
          T(Kt, {}, t),
          T(St, {}, t),
          T(ea, {}, t),
          T(jr, {}, t),
          T(gn, {}, t),
          T(H, {}, t),
          T(Fe, {}, t),
          T(lt, {}, t),
          T(_t, {}, t),
          T(Hn, {}, t),
          T(wt, {}, t),
        ])
      ),
    }),
    (go = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ajgklN14M":{"layout":["fixed","fixed"]},"G3g83S3dk":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicHeight: `14085`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `{"WjDvxPmzM":{"pattern":":WjDvxPmzM","name":"image"},"gGm_H2dqe":{"pattern":":gGm_H2dqe","name":"content"},"cJNkEibYK":{"pattern":":cJNkEibYK","name":"image-hide"},"VvaPuX7Oi":{"pattern":":VvaPuX7Oi","name":"content-hide"},"IFP710qU3":{"pattern":":IFP710qU3","name":"products"},"dZygCm5P3":{"pattern":":dZygCm5P3","name":"before-after"},"CsIM_9uV3":{"pattern":":CsIM_9uV3","name":"features"},"hau0OUBRK":{"pattern":":hau0OUBRK","name":"item-move"},"IoxYsjuT2":{"pattern":":IoxYsjuT2","name":"overview"},"VlEuTsMiM":{"pattern":":VlEuTsMiM","name":"how-it-works"},"y1bGKUbRm":{"pattern":":y1bGKUbRm","name":"use-cases"},"qYaIIcLBc":{"pattern":":qYaIIcLBc","name":"integrations"},"QzBV1S8YN":{"pattern":":QzBV1S8YN","name":"counter"},"JWWe7o8mf":{"pattern":":JWWe7o8mf","name":"title"},"SqjXcPB78":{"pattern":":SqjXcPB78","name":"pricing"},"H_cBp8W8Q":{"pattern":":H_cBp8W8Q","name":"faqs"}}`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { go as __FramerMetadata__, ho as default, Ra as queryParamNames };
//# sourceMappingURL=JcTpvAKfRXcguygcdGmZv2goX21AwXQ2tSvcjP2Nlvs.CmU7Nz3T.mjs.map
