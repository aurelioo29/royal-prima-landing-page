import {
  Link,
} from "@/i18n/navigation";

import type {
  DoctorPaginationProps,
} from "../types/doctors.types";

import DoctorIcon from "./DoctorIcon";

type PaginationItem =
  | number
  | "ellipsis";

function createPages(
  currentPage: number,
  totalPages: number,
): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from(
      {
        length:
          totalPages,
      },
      (_, index) =>
        index + 1,
    );
  }

  if (
    currentPage <= 4
  ) {
    return [
      1,
      2,
      3,
      4,
      5,
      "ellipsis",
      totalPages,
    ];
  }

  if (
    currentPage >=
    totalPages - 3
  ) {
    return [
      1,
      "ellipsis",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

function createHref({
  page,
  clinic,
  view,
}: {
  page: number;

  clinic:
    DoctorPaginationProps["activeClinic"];

  view:
    DoctorPaginationProps["view"];
}) {
  const params =
    new URLSearchParams();

  if (page > 1) {
    params.set(
      "page",
      String(page),
    );
  }

  if (
    clinic !== "all"
  ) {
    params.set(
      "clinic",
      clinic,
    );
  }

  if (
    view !== "card"
  ) {
    params.set(
      "view",
      view,
    );
  }

  const query =
    params.toString();

  return `/doctors${
    query
      ? `?${query}`
      : ""
  }#doctor-list`;
}

export default function DoctorPagination({
  currentPage,
  totalPages,
  activeClinic,
  view,
  previousLabel,
  nextLabel,
}: DoctorPaginationProps) {
  if (
    totalPages <= 1
  ) {
    return null;
  }

  const pages =
    createPages(
      currentPage,
      totalPages,
    );

  return (
    <nav
      aria-label="Pagination dokter"
      className="mt-16 flex items-center justify-center gap-2"
    >
      {currentPage >
      1 ? (
        <Link
          href={createHref({
            page:
              currentPage -
              1,

            clinic:
              activeClinic,

            view,
          })}
          aria-label={
            previousLabel
          }
          className="flex size-10 items-center justify-center text-[#0077B6]! no-underline! transition-colors hover:bg-[#EDF8FD]"
        >
          <DoctorIcon
            name="arrowLeft"
            className="size-[18px]"
          />
        </Link>
      ) : (
        <span className="flex size-10 items-center justify-center text-[#C7D6DE]">
          <DoctorIcon
            name="arrowLeft"
            className="size-[18px]"
          />
        </span>
      )}

      {pages.map(
        (item, index) => {
          if (
            item ===
            "ellipsis"
          ) {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex size-10 items-center justify-center text-[#8AA1AF]"
              >
                …
              </span>
            );
          }

          const active =
            item ===
            currentPage;

          return (
            <Link
              key={item}
              href={createHref({
                page: item,

                clinic:
                  activeClinic,

                view,
              })}
              aria-current={
                active
                  ? "page"
                  : undefined
              }
              className={`flex size-10 items-center justify-center text-sm font-semibold no-underline! transition-colors ${
                active
                  ? "bg-[#0077B6] text-white!"
                  : "text-[#57778C]! hover:bg-[#EDF8FD] hover:text-[#0077B6]!"
              }`}
            >
              {item}
            </Link>
          );
        },
      )}

      {currentPage <
      totalPages ? (
        <Link
          href={createHref({
            page:
              currentPage +
              1,

            clinic:
              activeClinic,

            view,
          })}
          aria-label={
            nextLabel
          }
          className="flex size-10 items-center justify-center text-[#0077B6]! no-underline! transition-colors hover:bg-[#EDF8FD]"
        >
          <DoctorIcon
            name="arrowRight"
            className="size-[18px]"
          />
        </Link>
      ) : (
        <span className="flex size-10 items-center justify-center text-[#C7D6DE]">
          <DoctorIcon
            name="arrowRight"
            className="size-[18px]"
          />
        </span>
      )}
    </nav>
  );
}