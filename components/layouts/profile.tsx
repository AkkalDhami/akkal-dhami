import Image from "next/image";
import Link from "next/link";

export function Profile() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center ring-1 ring-neutral-500/70">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={50}
        height={50}
        className="size-10 rounded-none object-cover object-left p-0.5"
      />
    </Link>
  );
}
