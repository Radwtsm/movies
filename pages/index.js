import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col justify-center text-3xl  m-auto">
        <h1>Welcome to Netflix!</h1>
        <Link href="/Explore">
          <button className="hover:text-slate-700 text-white hover:bg-red-300 my-6 bg-red-700 rounded-3xl p-4 font-800">
            Start exploring
          </button>
        </Link>
      </div>
    </div>
  );
}
