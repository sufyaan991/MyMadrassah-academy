import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-8 py-32">
        <Image
          src="/logo.png"
          alt="MyMadrassah"
          width={300}
          height={75}
          priority
        />
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
          Welcome to MyMadrassah
        </h1>
      </main>
    </div>
  );
}
