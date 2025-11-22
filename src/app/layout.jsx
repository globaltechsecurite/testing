import { Bricolage_Grotesque } from "next/font/google";
import "../styles/globals.scss";
import SmoothScroll from "../components/SmoothScroll";
import WhatsAppButton from "../components/whatsAppButton";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "800", "600"], // Specify weights you want to use
  subsets: ["latin"], // Add subsets if necessary
});

export const metadata = {
  title: "Mirasaka - Leader en Menuiserie Aluminium",
  description:
    "Découvrez l'expertise de Mirasaka dans les solutions de vitrage, menuiserie aluminium, décoration intérieure et produits publicitaires. Transformez vos projets avec nos innovations sur mesure.",
  keywords:
    "Mirasaka, menuiserie aluminium, solutions de vitrage, décoration intérieure, produits publicitaires, vitrage innovant, garde corps en vitrage, vitrage acoustique, vitrage thermique, design intérieur, installations sur mesure, Agadir, matériaux durables, solutions sur mesure",
  authors: ["Mirasaka"],
  icons: {
    icon: "/logo-two-letters.svg",
  },
  openGraph: {
    title: "Mirasaka - Leader en Menuiserie Aluminium",
    description:
      "Découvrez l'expertise de Mirasaka dans les solutions de vitrage, menuiserie aluminium, décoration intérieure et produits publicitaires.",
    type: "website",
    url: "https://mirasaka.ma",
    image: "/assets/logo-two-letters.svg", // Update this to the relevant image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
