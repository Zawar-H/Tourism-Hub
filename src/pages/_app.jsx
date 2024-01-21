// all your stylesheet imports go here
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/landing.css";
import "@/styles/footer.css";
import "@/components/navbar.jsx"
import navbar from "@/components/navbar";
import "@/styles/checkout.css";
import "@/styles/eventcard.css"
import "@/styles/specificevents.css"
import "@/styles/sponsors.css"
import "@/styles/searchbar.css"
import Navbar from "@/components/navdynamic";
import Footer from "@/components/footer";
import "@/styles/signin.css";
import Link from "next/link";
import "@/styles/contact.css";
import "@/styles/makeyourownevent.css"
import "@/styles/eventmap.css"
import "@/styles/about.css"
import "@/styles/signin2.css"
import "@/styles/events.css"
import "@/styles/navdynamic.css"
import "@/styles/jobcard.css"
import "@/styles/lights.css"
import { useRouter } from 'next/router';


export default function App({
	Component,
	pageProps: { ...pageProps },
}) {
	const router = useRouter();
	const isSignInPage = router.pathname === '/signin2';
	return (
		<>
		<Navbar/>
		<Component {...pageProps} />
		{/* {!isSignInPage && <Footer />} */}
		</>
	);
}
