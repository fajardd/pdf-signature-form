import "@/assets/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PDF Form</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="../assets/images/favicon.ico"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
