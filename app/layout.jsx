import "./globals.css";

export const metadata = {
  title: "NEADY FILM - Portfolio Demo",
  description:
    "NEADY FILM 포트폴리오 데모 - 브랜드, 공간, 창작자의 이야기를 위한 영상 제작 스튜디오.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
