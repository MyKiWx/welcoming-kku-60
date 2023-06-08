// import ReduxProviders from "@/providers/redux.provider";
import ReduxProviders from "@/provider/redux.provider";
import "@/styles/globals.css";
import { Kanit } from "next/font/google";

const kanit_font = Kanit({
  subsets: ["thai", "latin"],
  weight: ["200", "400", "500", "600", "700"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="welcomekku60-logo.png" type="image/gif" sizes="16x16" />
      <title>ลงทะเบียนเข้าร่วมกิจกรรม</title>
      <body
        className={kanit_font.className}
        style={{
          margin: 0,
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('background.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
export default function RootLayoutWith({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
