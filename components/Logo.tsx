import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="BioHAK Wellness"
      width={1835}
      height={599}
      priority
      className="w-[260px] sm:w-[320px] md:w-[400px] h-auto"
    />
  );
}
