import "./globals.css";
import ClientEffects from "@/components/ClientEffects";

export const metadata = {
  title: "Naga Harshitha Bhupathiraju | IT Student, Software Developer & Data Analyst",
  description: "Professional portfolio of Naga Harshitha Bhupathiraju, B.Tech IT student, Software Developer, and Data Analyst. Specialized in Python, Java, Power BI, SQL, and Cloud Associate (JNCIA-Cloud).",
  keywords: "Naga Harshitha Bhupathiraju, B.Tech IT, IT Student, Data Analyst, Power BI, SQL, Python, Java, JNCIA-Cloud, Portfolio, Hyderabad",
  authors: [{ name: "Naga Harshitha Bhupathiraju" }],
  openGraph: {
    title: "Naga Harshitha Bhupathiraju | IT Student, Software Developer & Data Analyst",
    description: "Professional portfolio of Naga Harshitha Bhupathiraju, B.Tech IT student, Software Developer, and Data Analyst.",
    url: "https://harshithab.dev",
    siteName: "Naga Harshitha Bhupathiraju Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
