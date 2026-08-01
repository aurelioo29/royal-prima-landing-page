import { getImageProps, type StaticImageData } from "next/image";

import type { CSSProperties } from "react";

type ResponsiveHeroImageProps = {
  image: StaticImageData;

  mobileImage?: StaticImageData;

  alt: string;

  desktopObjectPosition?: string;

  mobileObjectPosition?: string;

  eager?: boolean;

  highPriority?: boolean;
};

type HeroImageStyle = CSSProperties & {
  "--hero-mobile-position": string;

  "--hero-desktop-position": string;
};

export default function ResponsiveHeroImage({
  image,
  mobileImage,
  alt,
  desktopObjectPosition = "center center",
  mobileObjectPosition = "center center",
  eager = false,
  highPriority = false,
}: ResponsiveHeroImageProps) {
  const hasDedicatedMobileImage = Boolean(mobileImage);

  const mobileSource = mobileImage ?? image;

  const loadingProps = eager
    ? {
        loading: "eager" as const,

        fetchPriority: highPriority ? ("high" as const) : ("auto" as const),
      }
    : {
        loading: "lazy" as const,

        fetchPriority: "auto" as const,
      };

  const { props: desktopImageProps } = getImageProps({
    src: image,

    alt,

    sizes: "(min-width: 768px) 100vw, 1px",

    quality: 90,

    ...loadingProps,
  });

  const { props: mobileImageProps } = getImageProps({
    src: mobileSource,

    alt,

    sizes: "(max-width: 767px) 100vw, 1px",

    quality: 90,

    ...loadingProps,
  });

  const imageStyle: HeroImageStyle = {
    "--hero-mobile-position": mobileObjectPosition,

    "--hero-desktop-position": desktopObjectPosition,
  };

  return (
    <div
      className={
        hasDedicatedMobileImage
          ? "relative aspect-[4/5] w-full overflow-hidden bg-[#EAF8FE] md:aspect-[1600/684]"
          : "relative aspect-[1600/684] w-full overflow-hidden bg-[#EAF8FE]"
      }
    >
      <picture className="block h-full w-full">
        <source media="(max-width: 767px)" srcSet={mobileImageProps.srcSet} />

        <source media="(min-width: 768px)" srcSet={desktopImageProps.srcSet} />

        <img
          {...desktopImageProps}
          src={desktopImageProps.src}
          srcSet={desktopImageProps.srcSet}
          alt={alt}
          data-has-mobile-image={hasDedicatedMobileImage ? "true" : "false"}
          style={imageStyle}
          className="hero-responsive-image block h-full w-full"
        />
      </picture>
    </div>
  );
}
