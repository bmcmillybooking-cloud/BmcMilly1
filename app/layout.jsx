import "./globals.css";

export const metadata = {
  title: "BMC Milly",
  description: "Underrated but never overlooked",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
