import { Sora } from "next/font/google";
import Link from "next/link";

const sora = Sora({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-16">
          <div className="space-x-2 flex items-center px-6 py-3">
            <img
              className="size-14"
              src="/assets/logo.png"
              alt="frying-pan-logo"
            />
            <p className={`${sora.className} text-primary text-lg`}>
              Recipe Searcher
            </p>
          </div>
          <nav className="flex gap-16 font-bold">
            <Link href="">Home</Link>
            <Link href="">Discover</Link>
            <Link href="">Tips</Link>
          </nav>
        </div>
        <div className="flex gap-5">
          <button className="px-14 py-2 bg-primary rounded-full text-white hover:text-primary hover:bg-white border-2 border-primary">
            Sign up
          </button>
          <button className="px-14 py-2 bg-primary rounded-full text-white hover:text-primary hover:bg-white border-2 border-primary">
            Login
          </button>
        </div>
      </header>
    </>
  );
}
