import HomePage from "../components/HomePage";

export const metadata = {
  title: "NEADY FILM - Live-action films for movement and story",
  description:
    "NEADY FILM은 댄스필름, 미니 다큐멘터리, 인터뷰, 공연 영상을 실사 기반의 필름룩과 아트비디오의 감도로 제작하는 Korea-based film studio입니다.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEADY FILM - Live-action films for movement and story",
    description:
      "댄스필름, 미니 다큐멘터리, 인터뷰, 공연 영상을 중심으로 작업하는 Korea-based film studio.",
    url: "/",
    images: [
      {
        url: "/assets/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "NEADY FILM showreel still",
      },
    ],
  },
};

export default function Page() {
  return <HomePage />;
}
