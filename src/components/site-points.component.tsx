"use client";

import useIsVisible from "@/hooks/use-is-visible.hook";
import { useEffect, useRef } from "react";

export default function SitePointsComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (!isVisible) return;

    ref.current!.className = "site-points fade-in-top";
  }, [isVisible]);

  return (
    <div className={"site-points"} ref={ref}>
      <div>
        <div
          style={{
            position: "relative",
          }}
        >
          <h1
            style={{
              paddingRight: "1rem",
              color: "var(--main-color)",
              zIndex: 1,
              transform: "translate(-3px,-2px)",
            }}
          >
            1
          </h1>
          <h1
            style={{
              color: "var(--main-half)",
              position: "absolute",
              left: 0,
              transform: "translate(3px,2px)",
            }}
            className={"text-sh-soft"}
          >
            1
          </h1>
        </div>
        <h3>
          absolute
          <br />
          free
        </h3>
      </div>

      <div>
        <div
          style={{
            position: "relative",
          }}
        >
          <h1
            style={{
              paddingRight: "1rem",
              color: "var(--main-color)",
              zIndex: 1,
              transform: "translate(-3px,-2px)",
            }}
          >
            2
          </h1>
          <h1
            style={{
              color: "var(--main-half)",
              position: "absolute",
              left: 0,
              transform: "translate(3px,2px)",
            }}
            className={"text-sh-soft"}
          >
            2
          </h1>
        </div>
        <h3>
          paid
          <br />
          soft
        </h3>
      </div>

      <div>
        <div
          style={{
            position: "relative",
          }}
        >
          <h1
            style={{
              paddingRight: "1rem",
              color: "var(--main-color)",
              zIndex: 1,
              transform: "translate(-3px,-2px)",
            }}
          >
            3
          </h1>
          <h1
            style={{
              color: "var(--main-half)",
              position: "absolute",
              left: 0,
              transform: "translate(3px,2px)",
            }}
            className={"text-sh-soft"}
          >
            3
          </h1>
        </div>
        <h3>
          torrent
          <br />
          files
        </h3>
      </div>

      <div>
        <div
          style={{
            position: "relative",
          }}
        >
          <h1
            style={{
              paddingRight: "1rem",
              color: "var(--main-color)",
              zIndex: 1,
              transform: "translate(-3px,-2px)",
            }}
          >
            4
          </h1>
          <h1
            style={{
              color: "var(--main-half)",
              position: "absolute",
              left: 0,
              transform: "translate(3px,2px)",
            }}
            className={"text-sh-soft"}
          >
            4
          </h1>
        </div>
        <h3>
          all apps
          <br />
          tested
        </h3>
      </div>
    </div>
  );
}
