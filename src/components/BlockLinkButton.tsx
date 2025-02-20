import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlockLinkButton {
  href: string;
  imgUrl: string;
  children: ReactNode;
}

export const BlockLinkButton: React.FC<BlockLinkButton> = ({ href, imgUrl, children }) => {
  return (
    <div>
      <Link
        href={href}
        className="btn btn-block"
      >
        <Image
          src={imgUrl}
          alt=""
          width={16}
          height={16}
        />
        {children}
      </Link>
    </div>
  );
};
