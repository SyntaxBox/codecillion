import { Container } from "@/app/UI";
import "../../../typography.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto">
      <Container>{children}</Container>;
    </main>
  );
}
