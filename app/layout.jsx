import "./globals.css";

export const metadata = {
  title: "NEADY FILM - Based in Korea",
  description:
    "NEADY FILM은 실사 기반의 필름룩과 아트비디오의 감도를 중심으로 작업하는 Based in Korea film studio입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
