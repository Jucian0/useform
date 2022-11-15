import { NextSeo } from "next-seo";
import Head from "next/head";
import { RiGithubFill } from "react-icons/ri";

export default {
  title: "UseForm",
  description: "Easily, and delightful documentation website generator!",
  rootDocs: "docs",
  repository: {
    url: "https://github.com/Jucian0/useform",
    branch: "main",
    author: "Jucian0",
  },
  nav: {
    logo: (
      <svg
        width="67"
        height="41"
        viewBox="0 0 957 831"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M539.52 510.16C581.76 510.16 621.44 526.8 651.52 556.88L669.44 574.16L766.08 478.16V128.08C766.08 58.32 708.48 0.719971 638.72 0.719971H127.36C56.96 0.719971 0 58.32 0 128.08V700.88C0 770.64 57.6 828.24 127.36 828.24C127.36 828.24 354.56 828.24 384 828.24C421.12 828.24 431.36 794.96 409.6 759.12C371.2 693.84 371.84 611.92 426.88 556.24C457.6 526.8 496.64 510.16 539.52 510.16ZM223.36 192.08H542.72C560.64 192.08 574.72 206.16 574.72 224.08C574.72 242 560.64 256.08 542.72 256.08H223.36C205.44 256.08 191.36 242 191.36 224.08C191.36 206.16 205.44 192.08 223.36 192.08ZM286.72 637.52H222.72C204.8 637.52 190.72 623.44 190.72 605.52C190.72 587.6 204.8 573.52 222.72 573.52H286.72C304.64 573.52 318.72 587.6 318.72 605.52C318.72 623.44 304.64 637.52 286.72 637.52ZM223.36 446.8C205.44 446.8 191.36 432.72 191.36 414.8C191.36 396.88 205.44 382.8 223.36 382.8H542.72C560.64 382.8 574.72 396.88 574.72 414.8C574.72 432.72 560.64 446.8 542.72 446.8H223.36ZM947.84 519.12C935.68 506.96 916.48 506.96 904.32 519.12L668.8 754L561.28 646.48C549.12 634.32 529.28 634.32 517.76 646.48C505.6 658.64 505.6 677.84 517.76 690L648.96 821.2C661.12 833.36 680.96 833.36 692.48 821.2C695.68 818 947.84 562.64 947.84 562.64C960 551.12 960 531.28 947.84 519.12Z"
          fill="#2EC4B6"
        />
      </svg>
    ),
    textLogo: "UseForm",
    links: [
      {
        title: "Docs",
        href: "/docs/introduction",
      },
    ],
    iconsLinks: [
      {
        icon: <RiGithubFill fill="var(--nextui-colors-accents6)" size={20} />,
        href: "https://github.com/Jucian0/useform",
        external: true,
      },
    ],
    search_bar: "Search",
  },
  footer: {
    text: "UseForm 2022",
    logo: (
      <svg
        width="47"
        height="21"
        viewBox="0 0 957 831"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M539.52 510.16C581.76 510.16 621.44 526.8 651.52 556.88L669.44 574.16L766.08 478.16V128.08C766.08 58.32 708.48 0.719971 638.72 0.719971H127.36C56.96 0.719971 0 58.32 0 128.08V700.88C0 770.64 57.6 828.24 127.36 828.24C127.36 828.24 354.56 828.24 384 828.24C421.12 828.24 431.36 794.96 409.6 759.12C371.2 693.84 371.84 611.92 426.88 556.24C457.6 526.8 496.64 510.16 539.52 510.16ZM223.36 192.08H542.72C560.64 192.08 574.72 206.16 574.72 224.08C574.72 242 560.64 256.08 542.72 256.08H223.36C205.44 256.08 191.36 242 191.36 224.08C191.36 206.16 205.44 192.08 223.36 192.08ZM286.72 637.52H222.72C204.8 637.52 190.72 623.44 190.72 605.52C190.72 587.6 204.8 573.52 222.72 573.52H286.72C304.64 573.52 318.72 587.6 318.72 605.52C318.72 623.44 304.64 637.52 286.72 637.52ZM223.36 446.8C205.44 446.8 191.36 432.72 191.36 414.8C191.36 396.88 205.44 382.8 223.36 382.8H542.72C560.64 382.8 574.72 396.88 574.72 414.8C574.72 432.72 560.64 446.8 542.72 446.8H223.36ZM947.84 519.12C935.68 506.96 916.48 506.96 904.32 519.12L668.8 754L561.28 646.48C549.12 634.32 529.28 634.32 517.76 646.48C505.6 658.64 505.6 677.84 517.76 690L648.96 821.2C661.12 833.36 680.96 833.36 692.48 821.2C695.68 818 947.84 562.64 947.84 562.64C960 551.12 960 531.28 947.84 519.12Z"
          fill="#2EC4B6"
        />
      </svg>
    ),
    textLogo: "",
  },
  head: ({ title, meta }) => (
    <>
      <NextSeo
        title={`${title} | ${meta.title}`}
        description={meta.description}
        canonical="https://useform.vercel.app"
        openGraph={{
          url: "https://useform.vercel.app",
          title: `${title} | ${meta.title}`,
          description: meta.description,
          images: [
            {
              url: meta.image ?? "https://useform.vercel.app/imgs/lib_logo.png",
            },
          ],
          siteName: "UseForm",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Head>
        {/* <link rel="sitemap" href="/sitemap.xml" /> */}
        <meta name="keywords" content={meta.tags} />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>
    </>
  ),
};
