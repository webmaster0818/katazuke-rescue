// 片付けレスキュー TOP 用のロゴマーク・依頼内容別アイコン（すべて自作の SVG。48×48 のグリッド）。
// アイコンは太線＋一部を塗り（お庭のミカタの B 系統と同じ描き方）。色は currentColor の単色。
// ロゴだけ2色（紺 KR_NAVY ＋ 段ボールの茶 KR_KRAFT）。2026-11-04 TOP 刷新（redesign-20261104）。

export type Shape = { d: string; solid?: boolean; thin?: boolean };
export type IconDef = { key: string; label: string; shapes: Shape[] };

const ring = (cx: number, cy: number, r: number) =>
  `M${cx + r} ${cy}a${r} ${r} 0 1 0 ${-2 * r} 0a${r} ${r} 0 1 0 ${2 * r} 0Z`;

export const TASK_ICONS: IconDef[] = [
  {
    key: "gomiyashiki",
    label: "ゴミ屋敷片付け",
    shapes: [
      { d: "M11 23C11 19.5 13.5 17 17 17H21C24.5 17 27 19.5 27 23L29.5 38.5C30 41.5 28 43.5 25 43.5H13C10 43.5 8 41.5 8.5 38.5Z", solid: true },
      { d: "M16 17L13.5 10.5M22 17L24.5 10.5M15 13.5C17.5 12 20.5 12 23 13.5" },
      { d: "M33 28C33 26 34.5 24.5 36.5 24.5H37.5C39.5 24.5 41 26 41 28L42.5 39.5C42.8 41.8 41.3 43.5 39 43.5H35C32.7 43.5 31.2 41.8 31.5 39.5Z" },
      { d: "M35 24.5L34 21M39 24.5L40 21" },
      { d: "M4 45.5H44", thin: true },
    ],
  },
  {
    key: "fuyohin",
    label: "不用品回収",
    shapes: [
      { d: "M4 12H28.5V32H4Z", solid: true },
      { d: "M28.5 18.5H37.5L44 26.5V32H28.5" },
      { d: "M31.5 21.5H36.5L40 26.5H31.5Z", thin: true },
      { d: "M4 32H44" },
      { d: ring(12, 37.5, 4) },
      { d: ring(36.5, 37.5, 4) },
    ],
  },
  {
    key: "ihinseiri",
    label: "遺品整理",
    shapes: [
      { d: "M5 6H29V31H5Z" },
      { d: ring(17, 15.5, 4), solid: true },
      { d: "M10 28C10 23.5 13 21.5 17 21.5C21 21.5 24 23.5 24 28Z", solid: true },
      { d: "M23 29.5H44V33.5H23Z", solid: true },
      { d: "M25 36H42V44H25Z", solid: true },
    ],
  },
  {
    key: "hikkoshi",
    label: "引っ越し前の片付け",
    shapes: [
      { d: "M5 27H23V43H5Z", solid: true },
      { d: "M25 27H43V43H25Z" },
      { d: "M34 27V32.5", thin: true },
      { d: "M15 11H33V27H15Z" },
      { d: "M24 11V16.5", thin: true },
    ],
  },
  {
    key: "katazuke-daikou",
    label: "片付け代行",
    shapes: [
      { d: "M31 4L21.5 25" },
      { d: "M15.5 23.5L26.5 28.5L23 39C22.2 41.2 20 42.2 17.8 41.4L9.5 38.2C7.4 37.4 6.5 35.2 7.4 33.2Z", solid: true },
      { d: "M27 43.5L31 33H43.5V43.5Z" },
      { d: "M37 33V27" },
    ],
  },
];

export const KR_NAVY = "#1F4673";
export const KR_KRAFT = "#B07B3E";

/** ロゴマーク「荷台に段ボールを積んだトラック」。a = 主色（車体）、b = 副色（荷物） */
export function logoSvg(a: string, b: string, cut = "#FFFFFF"): string {
  return (
    `<path d="M3 11.5H29V33H3Z" fill="${b}"/>` +
    `<path d="M16 11.5V19" stroke="${cut}" stroke-width="2.6" stroke-linecap="round" opacity=".55"/>` +
    `<path d="M29 18.5H38.5L45 26.5V33H29Z" fill="${a}"/>` +
    `<path d="M32 21.5H37.3L41.2 26.5H32Z" fill="${cut}"/>` +
    `<path d="M3 33H45V36.5H3Z" fill="${a}"/>` +
    `<circle cx="12" cy="38.5" r="5" fill="${a}" stroke="${cut}" stroke-width="2.2"/>` +
    `<circle cx="37" cy="38.5" r="5" fill="${a}" stroke="${cut}" stroke-width="2.2"/>`
  );
}

/** アイコン1つ分の SVG 内側（<svg> 要素の中身）を返す */
export function iconInner(def: IconDef): string {
  return def.shapes
    .map((s) => {
      const fill = s.solid ? "currentColor" : "none";
      const w = s.thin ? 2 : 3;
      return `<path d="${s.d}" fill="${fill}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    })
    .join("");
}
