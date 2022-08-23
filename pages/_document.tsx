import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html className="dark">
      <Head></Head>
      <main>
        <body>
          <Main />
          <NextScript />
        </body>
      </main>
    </Html>
  );
}

export default Document;
