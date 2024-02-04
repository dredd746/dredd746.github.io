import Image from "next/image";
import "./page.styles.css";
import Banner from "@/../public/img/main banner.jpg";
import FastForward from "@/../public/img/fast-forward.png";
import AppleLaptop from "@/../public/img/apple-laptop-computer.png";
import Logo from "@/../public/img/MAR_LOGO.png";
import SitePointsComponent from "@/components/site-points.component";

export default function Home() {
  return (
    <div className={"home-page"}>
      <div className={"main-banner"}>
        <Image src={Banner} alt={"main-banner"} priority />
      </div>

      {/*<div className={"line-text"}>*/}
      {/*  <p>MacAppsRepository</p>*/}
      {/*  <p>MacAppsRepository</p>*/}
      {/*  <p>MacAppsRepository</p>*/}
      {/*  <p>MacAppsRepository</p>*/}
      {/*</div>*/}

      <div className={"main-about"}>
        <p
          className={"about-text-1 fade-in-bottom"}
          style={{
            animationDelay: "1s",
          }}
        >
          Welcome to our community
        </p>
        <p
          className={"about-text-1 about-stroke-preset"}
          style={{
            WebkitTextStroke: "1px var(--main-color)",
            top: 0,
          }}
        >
          Welcome to our community
        </p>
        <p
          className={"about-text-2 fade-in-top"}
          style={{
            animationDelay: "1.2s",
          }}
        >
          we’re connecting all apps site in one
        </p>
        <p
          className={"about-text-2 about-stroke-preset"}
          style={{
            WebkitTextStroke: "1px var(--main-half)",
            bottom: 0,
          }}
        >
          we’re connecting all apps site in one
        </p>
      </div>

      <div className={"about-illustration"}>
        <Image
          src={AppleLaptop}
          alt={"macos user"}
          width={187}
          className={"fade-in-fwd"}
          style={{
            animationDelay: "3s",
          }}
        />

        <Image
          src={FastForward}
          alt={"forward"}
          width={94}
          className={"fade-in-left start-anim-hover"}
          style={{
            animationDelay: "3.5s",
          }}
        />

        <div
          className={"fade-in-bck"}
          style={{
            animationDelay: "4s",
          }}
        >
          <Image src={Logo} alt={"logo"} width={200} />
          <p className={"under-logo-text"}>
            An universal tool to find any type of apps for macos
          </p>
        </div>

        <Image
          src={FastForward}
          alt={"forward"}
          width={94}
          className={"fade-in-left start-anim-hover"}
          style={{
            animationDelay: "4.5s",
          }}
        />

        <p
          className={"fade-in-fwd"}
          style={{
            animationDelay: "5s",
          }}
        >
          www.MacAppPalace.com www.AppHavenMac.com www.MacAppMansion.com
          www.MacAppVault.com www.AppEmporiumMac.com www.MacAppShack.com
          www.AppNestMac.com www.MacAppShrine.com www.AppTreasureMac.com
        </p>
      </div>

      <SitePointsComponent />
    </div>
  );
}
