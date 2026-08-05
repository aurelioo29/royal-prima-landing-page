export type AboutAwardKey =
  | "paripurna"
  | "bpjsTrustMark";

export type AboutAwardItem = Readonly<{
  key: AboutAwardKey;
  image: string;
}>;

export type AboutResolvedAwardItem =
  AboutAwardItem & {
    title: string;
    description: string;
    imageAlt: string;
  };

export type AboutCharterKey =
  | "boardCommissioners"
  | "boardDirectors"
  | "nominationRemuneration"
  | "auditCommittee";

export type AboutCharterItem = Readonly<{
  key: AboutCharterKey;
  file: string;
}>;

export type AboutResolvedCharterItem =
  AboutCharterItem & {
    title: string;
    description: string;
  };

export type AboutGalleryItem = Readonly<{
  id: string;
  image: string;
  imageAltKey: string;
}>;

export type AboutResolvedGalleryItem =
  AboutGalleryItem & {
    imageAlt: string;
  };

export type AboutIconName =
  | "hospital"
  | "vision"
  | "mission"
  | "award"
  | "document"
  | "arrow"
  | "external";

export type AboutIconProps = {
  name: AboutIconName;
  className?: string;
};

export type AboutProfileProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type AboutVisionMissionProps = {
  visionEyebrow: string;
  visionTitle: string;
  visionDescription: string;

  missionEyebrow: string;
  missionTitle: string;
  missionItems: readonly string[];
};

export type AboutAwardsProps = {
  eyebrow: string;
  title: string;
  description: string;
  awards: readonly AboutResolvedAwardItem[];
};

export type AboutChartersProps = {
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  items: readonly AboutResolvedCharterItem[];
};

export type AboutPosterProps = {
  image: string;
  imageAlt: string;
};

export type AboutFacilitiesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly AboutResolvedGalleryItem[];
};