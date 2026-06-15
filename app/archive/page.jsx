import ArchivePage from "../../components/ArchivePage";

export const metadata = {
  title: "Archive - NEADY FILM",
  description:
    "NEADY FILM의 소셜미디어 콘텐츠, 브랜드 홍보영상, 공간 콘텐츠, 짧은 비주얼 작업을 모아둔 archive 페이지입니다.",
  alternates: {
    canonical: "/archive",
  },
  openGraph: {
    title: "Archive - NEADY FILM",
    description:
      "대표 작업 외의 소셜미디어 콘텐츠, 브랜드 홍보영상, 행사 기록, 공간 콘텐츠와 짧은 비주얼 작업.",
    url: "/archive",
    images: [
      {
        url: "/assets/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "NEADY FILM archive showreel still",
      },
    ],
  },
};

export default function Page() {
  return <ArchivePage />;
}
