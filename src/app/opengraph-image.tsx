import { ImageResponse } from "next/og";

export const alt = "Anirudh Kulkarni — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f3ed",
          color: "#20201d",
        }}
      >
        <div style={{ fontSize: 32, color: "#5c5b55" }}>anirudh-kulkarni.vercel.app</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 600, letterSpacing: -4, lineHeight: 1.05 }}>
            Anirudh Kulkarni<span style={{ color: "#c95335" }}>.</span>
          </div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#5c5b55" }}>
            Software engineer · Bengaluru, India
          </div>
        </div>
      </div>
    ),
    size
  );
}
