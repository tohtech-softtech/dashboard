import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkButtonProps {
  href: string;
  imgUrl: string;
  children: ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, imgUrl, children }) => {
  return (
    <div>
      <Link
        href={href}
        className="btn btn-block p-2 h-20 text-xs grid grid-cols-1 grid-rows-[auto-1fr] justify-items-center gap-0"
      >
        <Image
          src={imgUrl}
          alt=""
          width={32}
          height={32}
        />
        <span>{children}</span>
      </Link>
    </div>
  );
};
