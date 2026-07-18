import { Cinzel, Inter } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";

const headingFont = Cinzel({
  variable: "--tj-ff-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--tj-ff-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "MSSN A-Zone – Uniting Muslim Students Since 1954",
  description:
    "Official website of the Muslim Students' Society of Nigeria (MSSN) A-Zone. Dedicated to the spiritual, educational, and social development of the Ummah through faith, knowledge, and brotherhood.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" dir="ltr">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <style>
          {`
            :root {
              --mssn-green: #0A4D3C;
              --mssn-gold: #C59D5F;
              --mssn-gold-light: #E8D2A6;
              --mssn-cream: #FDFBF8;
            }

            .page-wrapper { position: relative; overflow-x: hidden; }
            .main-content { position: relative; z-index: 1; }

            /* ==================== PROGRESS BAR ==================== */
            .scroll-progress-container {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 4px; /* Increased height for better diamond visibility */
              z-index: 1040;
              pointer-events: none;
            }
            .scroll-progress-bar {
              height: 100%;
              border-radius: 0 2px 2px 0;
              transition: width 0.1s ease-out;
              position: relative;
            }
            /* The Gold Diamond at the tip */
            .scroll-progress-diamond {
              position: absolute;
              right: -7px;
              top: 50%;
              transform: translateY(-50%) rotate(45deg);
              width: 10px;
              height: 10px;
              background-color: #C59D5F; /* Matches the inline style */
              border-radius: 2px;
              box-shadow: 0 0 6px rgba(197, 157, 95, 0.5);
            }

            /* ==================== REVEAL ANIMATION ==================== */
            .reveal-section {
              opacity: 0;
              transform: translateY(20px) scale(0.96);
              transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            .reveal-section.revealed {
              opacity: 1;
              transform: translateY(0) scale(1);
            }

            /* ==================== CUSTOM SCROLLBAR ==================== */
            html::-webkit-scrollbar, body::-webkit-scrollbar {
              width: 8px !important;
              height: 8px !important;
            }
            html::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
              background: #FDFBF8 !important;
            }
            html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
              background: #C59D5F !important;
              border-radius: 6px !important;
            }
            html::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover {
              background: #0A4D3C !important;
            }
            * {
              scrollbar-width: thin !important;
              scrollbar-color: #C59D5F #FDFBF8 !important;
            }
          `}
        </style>
        {children}
      </body>
    </html>
  );
}