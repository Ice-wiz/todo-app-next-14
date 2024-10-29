import { VWOScript } from 'next-smartcode'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <VWOScript 
          accountId="955578"
          // Optional configurations
          type="ASYNC"
          settingsTimeout={2000}
          hideElement="body"
          hideElementStyle="opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}