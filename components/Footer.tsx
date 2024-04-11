import Image from "next/image";
import Link from "next/link";

import FooterLine from "@/public/icons/FooterLine";

const Footer = () => {
  return (
    <div className="flex justify-between pr-[10.3125rem] pt-[3.5rem] pb-[5.1875rem] px-[7rem]">
      <div>
        <div className="mb-[1.155625rem]">
          <Image
            src="/images/Fallo-logo.png"
            alt="Logo"
            width={392.51}
            height={126.51}
          />
          <div className="mt-6 text-2xl">The all in one productivity powerhouse</div>
        </div>
        <FooterLine />
        <p className="mt-4 text-2xl">© 2024 Fallo. All rights reserved.</p>
      </div>
      <div className="flex justify-between w-[33.1875rem]">
        <div className="text-lg">
          <div className="font-semibold">Quick Links</div>
          <ul className="list-disc mt-4">
            <li className="mb-4">
              <Link href="/features">Features</Link>
            </li>
            <li className="mb-4">
              <Link href="/why-fallo">Why Fallo</Link>
            </li>
            <li className="mb-4">
              <Link href="pricing">Pricing</Link>
            </li>
            <li className="mb-4">
              <Link href="download">Download</Link>
            </li>
            <li className="mb-4">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mb-4">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="text-lg">
          <div className="font-semibold">Social Media</div>
          <ul className="list-disc mt-4">
            <li className="mb-4">
              <Link href="/">Facebook</Link>
            </li>
            <li className="mb-4">
              <Link href="/">Twitter</Link>
            </li>
            <li className="mb-4">
              <Link href="/">LinkedIn</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
          </ul>
        </div>

        <div className="text-lg">
          <div className="font-semibold">Legal</div>
          <ul className="list-disc mt-4">
            <li className="mb-4">
              <Link href="/">Terms of service</Link>
            </li>
            <li className="mb-4">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
