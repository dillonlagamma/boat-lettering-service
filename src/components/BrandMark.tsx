import Image from "next/image";
import Link from "next/link";

export function BrandMark({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link href="/" className={`block min-w-0 ${className}`}>
      <Image
        src={tone === "light" ? "/brand/wordmark-white.png" : "/brand/wordmark.png"}
        alt="Boat Lettering Service"
        width={1022}
        height={142}
        className="h-9 w-auto max-w-[min(74vw,22rem)] sm:h-11 sm:max-w-[28rem] md:h-12 md:max-w-[32rem]"
        priority
      />
    </Link>
  );
}
