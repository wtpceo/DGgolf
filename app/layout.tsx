import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DG골프레슨스튜디오 - Dream Golf in 광주",
  description: "성별, 나이, 근력, 정신력, 목표에 따른 맞춤레슨과 멘탈클리닉",
  keywords: "골프레슨, 광주골프, DG골프, 골프스튜디오, 맞춤레슨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}