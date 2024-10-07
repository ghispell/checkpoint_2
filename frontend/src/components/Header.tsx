import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white flex justify-center items-center flex-col p-4 mb-10">
      <h1 className="text-xl font-bold pb-4">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
