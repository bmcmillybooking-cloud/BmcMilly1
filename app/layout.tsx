export const metadata = {
  title: "BMC Milly",
  description: "Official BMC Milly site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
