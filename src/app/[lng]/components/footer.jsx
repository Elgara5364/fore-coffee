import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo/Logo-2.png";
import Location from "/public/ico/location-marker-1.png";
import Whatsapp from "/public/ico/formkit_whatsapp-1.png";
import Youtube from "/public/ico/F_Youtube.png";
import Facebook from "/public/ico/F_Facebook.png";
import Instagram from "/public/ico/F_Instagram.png";
import Linkedin from "/public/ico/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="bg-[#e2edec] py-5 px-5">
      <div className="max-w-1200 mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <Link href={`/`}>
              <Image
                src={Logo}
                alt="Fore Coffee"
                width={150}
                className="mx-auto"
              />
            </Link>
          </div>
          <div className="">
            <p className="text-[#1e4a3c] text-sm font-bold mb-3">
              <strong>Customer Care</strong>
            </p>
            <div className="grid grid-cols-[10%_90%] gap-y-2">
              <Image
                src={Location}
                alt="Location"
                sizes="100%"
                style={{ width: 25 }}
                className="columns-auto"
              />
              <p className="text-[#1e4a3c] font-normal text-sm">
                Gedung Graha Ganesha
              </p>
              <p className="text-[#1e4a3c] font-normal text-sm text-start col-start-2">
                Lantai 1 Suite 120 & 130 Jl. Hayam Wuruk No.28, Kelurahan Kebon
                Klapa Kecamatan Gambir, Jakarta Pusat, DKI Jakarta
              </p>
              <Image
                src={Whatsapp}
                alt="Whatsapp"
                sizes="100%"
                style={{ width: 20 }}
              />
              <p className="text-[#1e4a3c] font-normal text-sm">
                0812-1111-8456
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#1e4a3c] text-sm font-bold ">
              <strong>Consumer Complaints Service Contact Information</strong>
            </p>
            <p className="text-[#1e4a3c] font-normal text-sm text-start col-start-2">
              Directorate General of Consumer Protection and Trade Compliance,
              Ministry of Trade of the Republic of Indonesia
            </p>
            <p className="text-[#1e4a3c] font-normal text-sm text-start col-start-2">
              WhatsApp Ditjen PKTN: 0853-1111-1010
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <h6 className="text-[1E4A3C] text-[13px] text-center mb-2.5 tracking-wider">
            © 2023 FORE COFFEE, All Rights Reserved
          </h6>
          <div className="flex gap-3 justify-center">
            <Image
              src={Youtube}
              alt="Youtube"
              sizes="100%"
              style={{ width: 40 }}
            />
            <Image
              src={Facebook}
              alt="Facebook"
              sizes="100%"
              style={{ width: 40 }}
            />
            <Image
              src={Instagram}
              alt="Instagram"
              sizes="100%"
              style={{ width: 40 }}
            />
            <Image
              src={Linkedin}
              alt="Linkedin"
              sizes="100%"
              style={{ width: 40 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
``;
