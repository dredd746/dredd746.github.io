"use client";

import "./menu.styles.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/img/MAR_LOGO.png";

export default function MenuComponent() {
  return (
    <div className={"main-menu"}>
      <div className={"menu"}>
        <Link href={"/"} className={"menu-btn"}>
          home
        </Link>

        <Link href={"/"} className={"menu-btn"}>
          apps
        </Link>

        <Image
          src={Logo}
          alt={"logo"}
          width={150}
          height={150}
          className={"menu-logo"}
        />

        <Link href={"/"} className={"menu-btn"}>
          about
        </Link>

        <Link href={"/"} className={"menu-btn"}>
          report
        </Link>
      </div>
    </div>
  );
}
