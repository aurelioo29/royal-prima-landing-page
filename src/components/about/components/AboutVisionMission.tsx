import type { AboutVisionMissionProps } from "../types/about.types";

import AboutIcon from "./AboutIcon";

export default function AboutVisionMission({
  visionEyebrow,
  visionTitle,
  visionDescription,
  missionEyebrow,
  missionTitle,
  missionItems,
}: AboutVisionMissionProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-24">
          {/* VISION */}
          <div>
            <span className="flex size-12 items-center justify-center bg-[#0077B6] text-white">
              <AboutIcon name="vision" className="size-5" />
            </span>

            <p className="mt-6 mb-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {visionEyebrow}
            </p>

            <h2 className="mt-4 mb-0! text-[34px] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[42px]">
              {visionTitle}
            </h2>

            <p className="mt-6 mb-0! text-[18px] leading-9 font-medium text-[#315D76]">
              {visionDescription}
            </p>
          </div>

          {/* MISSION */}
          <div>
            <span className="flex size-12 items-center justify-center bg-[#E6F6FC] text-[#0077B6]">
              <AboutIcon name="mission" className="size-5" />
            </span>

            <p className="mt-6 mb-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {missionEyebrow}
            </p>

            <h2 className="mt-4 mb-0! text-[34px] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[42px]">
              {missionTitle}
            </h2>

            <div className="mt-8">
              {missionItems.map((item, index) => (
                <div
                  key={`${index}-${item}`}
                  className="grid grid-cols-[42px_minmax(0,1fr)] gap-4 border-t border-[#D7E7EE] py-5 first:border-t-0 first:pt-0"
                >
                  <span className="text-[13px] font-bold text-[#00A4E4]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="m-0! text-[15px] leading-7 text-[#4F6D80]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
