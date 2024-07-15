
import { Inter,Open_Sans } from "next/font/google";
import "./globals.css";
import Form from "@/components/forms";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { AppWrapepr } from "@/context/userContext";


const inter = Inter({ subsets: ["latin"] });
const openSans=Open_Sans({
  subsets:["latin"]
})

export const metadata = {
  title: "Jonaren Technology Pvt. Ltd.",
  description: "Jonaren Technology’s Workforce Scheduling Software utilizes innovative artificial intelligence to optimize your scheduling process.",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={openSans.className}>
      <AppWrapepr>
        <Navigation />
        <main >{children}</main>
          <div
            className="wrapper form-container padding-block"
          >
            <h1
              style={{
                fontWeight: "600",
                lineHeight: "35px",
              }}
            >
              Talk To Our Experts
            </h1>
            <Form />
          </div>
        <Footer />
        </AppWrapepr>
      </body>
    </html>
  );
}
