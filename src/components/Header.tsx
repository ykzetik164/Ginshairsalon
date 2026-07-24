import Image from "next/image";
import { navigation } from "@/data/site";

export function Header() {
  return (
    <header className="siteHeader">
      <a className="brandMark" href="#top" aria-label="回到 GINS 首頁">
        <Image src="/images/gins-logo-transparent.png" alt="GINS Hair Salon" width={170} height={92} priority />
      </a>
      <nav className="mainNav" aria-label="主選單">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            <span className="navNumber">{item.number}</span>
            <span>
              <small>{item.english}</small>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
      <a className="headerAction" href="#reservation">
        預約諮詢
      </a>
    </header>
  );
}
