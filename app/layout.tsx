import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#060709" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmudhasan.me"),
  title: "Mahmud Hasan — AI Engineer, Researcher & Builder",
  description:
    "Mahmud Hasan is an AI engineer, researcher, and builder working on AI systems, large language models, agentic AI, continual learning, and real-world technology products.",
  keywords: [
    "Mahmud Hasan",
    "AI Engineer",
    "AI Researcher",
    "Machine Learning",
    "Continual Learning",
    "Catastrophic Forgetting",
    "Agentic AI",
    "Large Language Models",
    "Craftly Robot",
    "Aeitron",
    "PyTorch",
    "CUDA",
  ],
  authors: [{ name: "Mahmud Hasan", url: "https://github.com/iammahmudhasan" }],
  creator: "Mahmud Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahmudhasan.me",
    siteName: "Mahmud Hasan Portfolio",
    title: "Mahmud Hasan — AI Engineer, Researcher & Builder",
    description:
      "AI Engineer building systems that learn, reason, and act. Researching continual learning, training LLMs from scratch, and architecting agent runtimes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmud Hasan — AI Engineer, Researcher & Builder",
    description:
      "AI Engineer building systems that learn, reason, and act. Researching continual learning, training LLMs from scratch, and architecting agent runtimes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mahmudhasan.me",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mahmud Hasan",
    jobTitle: "AI Engineer & Researcher",
    url: "https://mahmudhasan.me",
    sameAs: [
      "https://github.com/iammahmudhasan",
      "https://www.linkedin.com/in/mahmudhasan-ai-engineer/",
      "https://hello.craftlyrobot.com",
      "https://aeitron.com",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Continual Learning",
      "Catastrophic Forgetting",
      "Large Language Models",
      "Agentic AI",
      "Distributed Model Training",
      "PyTorch",
      "CUDA",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Craftly",
        url: "https://hello.craftlyrobot.com",
      },
      {
        "@type": "Organization",
        name: "Aeitron AI",
        url: "https://aeitron.com",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC: read localStorage immediately on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured Data: Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-black">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
