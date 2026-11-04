import { logoSvg, KR_NAVY, KR_KRAFT } from "./marks";

// ヘッダー・フッター・ファビコン共通のロゴマーク（荷台に段ボールを積んだトラック）。
export default function LogoMark({ size = 36, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  const a = tone === "light" ? "#FFFFFF" : KR_NAVY;
  const b = tone === "light" ? "#D9B27E" : KR_KRAFT;
  const cut = tone === "light" ? "#0F172A" : "#FFFFFF";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{ __html: logoSvg(a, b, cut) }} />
  );
}
