import Image from "next/image";

type LogoSvgProps = {
  className?: string;
  height?: number;
  /** Use empty string when parent provides the accessible name (e.g. nav link). */
  alt?: string;
  priority?: boolean;
};

export function LogoSvg({
  className,
  height = 42,
  alt = "ONYXX CLUB",
  priority,
}: LogoSvgProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={height}
      height={height}
      className={className}
      sizes={`${height}px`}
      priority={priority}
    />
  );
}
