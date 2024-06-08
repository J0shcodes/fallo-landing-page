import Image from "next/image";
import Link from "next/link";

import FooterLine from "@/public/icons/FooterLine";

const Footer = () => {
  return (
    <div className="flex lg:justify-between lg:flex-row-reverse lg:pr-[10.3125rem] lg:pt-[3.5rem] lg:pb-[5.1875rem] lg:px-[7rem] p-[2.375rem] w-full flex-col justify-center items-center">
    {/* // <div className="pr-[10.3125rem] lg:pt-[3.5rem] lg:pb-[5.1875rem] lg:px-[7rem] p-[2.375rem] bg-red-500"> */}
      <div className="flex justify-between lg:w-[50%] md:w-[650px] w-full lg:mb-0 mb-6">
        <div className="lg:text-lg md:text-base text-xs">
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

        <div className="lg:text-lg md:text-base text-xs">
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

        <div className="lg:text-lg md:text-base text-xs">
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

      <div className="md:w-[650px] w-full lg:w-[40%]">
        <div className="mb-[1.155625rem]">
          <Image
            src="/images/Fallo-logo.png"
            alt="Logo"
            width={392}
            height={126}
            layout="responsive"
          />
          <div className="mt-6 lg:text-2xl lg:text-start text-center">The all in one productivity powerhouse</div>
        </div>
        {/* <FooterLine /> */}
        <Image
            src="/images/Line.png"
            alt="Logo"
            width={413}
            height={278}
            layout="responsive"
          />
        <p className="mt-4 lg:text-2xl lg:text-start text-center">© 2024 Fallo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
