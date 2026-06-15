import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://neadyfilm-portfolio-demo-2.vercel.app"),
  title: {
    default: "NEADY FILM - Based in Korea",
    template: "%s | NEADY FILM",
  },
  description:
    "NEADY FILM은 실사 기반의 필름룩과 아트비디오의 감도를 중심으로 작업하는 Based in Korea film studio입니다.",
  keywords: [
    "NEADY FILM",
    "댄스필름",
    "미니 다큐멘터리",
    "인터뷰 영상",
    "공연 영상",
    "영상 제작",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "NEADY FILM",
    title: "NEADY FILM - Based in Korea",
    description:
      "실사 기반의 필름룩과 아트비디오의 감도로 댄스필름, 미니 다큐멘터리, 인터뷰, 공연 영상을 제작합니다.",
    images: [
      {
        url: "/assets/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "NEADY FILM showreel still",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEADY FILM - Based in Korea",
    description:
      "실사 기반의 필름룩과 아트비디오의 감도로 댄스필름, 미니 다큐멘터리, 인터뷰, 공연 영상을 제작합니다.",
    images: ["/assets/hero-poster.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
