import type { CSSProperties } from "react";

import type {
  PartnerItem,
  PartnerMarqueeRowProps,
} from "../types/partners.types";

import PartnerCard from "./PartnerCard";

type PartnerMarqueeStyle = CSSProperties & {
  "--home-partners-duration": string;
};

export default function PartnerMarqueeRow({
  partners,
  direction,
  duration,
}: PartnerMarqueeRowProps) {
  const marqueeStyle: PartnerMarqueeStyle = {
    "--home-partners-duration": `${duration}s`,
  };

  return (
    <div className="home-partners-row">
      <div
        style={marqueeStyle}
        className={`
          home-partners-track
          ${
            direction === "right"
              ? "home-partners-track-right"
              : "home-partners-track-left"
          }
        `}
      >
        <PartnerGroup partners={partners} />

        {/* Duplikat agar pergerakan tidak terputus */}
        <PartnerGroup partners={partners} duplicate />
      </div>
    </div>
  );
}

type PartnerGroupProps = {
  partners: readonly PartnerItem[];

  duplicate?: boolean;
};

function PartnerGroup({ partners, duplicate = false }: PartnerGroupProps) {
  return (
    <div
      role={duplicate ? undefined : "list"}
      aria-hidden={duplicate ? true : undefined}
      className={`
        home-partners-group
        ${duplicate ? "home-partners-group-duplicate" : ""}
      `}
    >
      {partners.map((partner, index) => (
        <div
          key={`${duplicate ? "duplicate" : "original"}-${partner.id}-${index}`}
          role={duplicate ? undefined : "listitem"}
          className="home-partners-item"
        >
          <PartnerCard partner={partner} interactive={!duplicate} />
        </div>
      ))}
    </div>
  );
}
