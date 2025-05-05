"use client";

import { categories } from "@/lib/definitions";
import { HorizontalDivider, PageSection } from "./LayoutComponents";
import { Accordion } from "./Accordion";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filters({ filters }: { filters: Filter[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [activeFilters, setActiveFilters] = useState(
    getActiveFilters(filters, searchParams)
  );
  const handleChange = (filter: string, option: string | number) => {
    const params = new URLSearchParams(searchParams);
    const active = activeFilters[filter];

    if (typeof option === "string" && !active.includes(option)) {
      active.push(option);
      params.set(filter, active.join(","));
    } else if (typeof option === "number") {
      params.set(filter, option.toString());
    } else {
      const activeIndex = active.findIndex((opt) => opt === option);
      params.set(
        filter,
        [
          ...active.slice(0, activeIndex),
          ...active.slice(activeIndex + 1),
        ].join(",")
      );
    }

    setActiveFilters(getActiveFilters(filters, params));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <PageSection>
      <Accordion title="Filters">
        <ul className="list-none flex flex-col gap-2 w-full mb-4">
          <FilterCheckbox
            option={filters[0].option}
            active={activeFilters[filters[0].filter]?.includes(
              filters[0].option
            )}
            onChange={() => handleChange(filters[0].filter, filters[0].option)}
          />
          <FilterCheckbox
            option={filters[1].option}
            active={activeFilters[filters[1].filter]?.includes(
              filters[1].option
            )}
            onChange={() => handleChange(filters[1].filter, filters[1].option)}
          />
          <FilterRange
            filter={filters[2].filter}
            active={Number(activeFilters[filters[2].filter][0]) || 1000}
            min={100}
            max={1000}
            step={100}
            onChange={(value: string) => {
              handleChange(filters[2].filter, Number(value));
            }}
          />
          <li className="w-full flex items-center justify-center" key="div-1">
            <HorizontalDivider text="Categories" />
          </li>
          {categories.map((category) => (
            <FilterCheckbox
              option={category}
              active={activeFilters[filters[3].filter].includes(category)}
              onChange={() => handleChange(filters[3].filter, category)}
              key={category}
            />
          ))}
        </ul>
      </Accordion>
    </PageSection>
  );
}

export type Filter = {
  filter: string;
  option: string;
};

export type FilterState = {
  [filter: string]: string[];
};

export function getActiveFilters(
  filters: Filter[],
  searchParams: URLSearchParams
) {
  const active: FilterState = {};
  filters.forEach((filter) => {
    const params = searchParams.get(filter.filter.toLowerCase());
    if (params) {
      active[filter.filter] = params.split(",");
    } else active[filter.filter] = [];
  });
  return active;
}

export function FilterCheckbox({
  option,
  active,
  onChange,
}: {
  option: string;
  active: boolean;
  onChange: () => void;
}) {
  return (
    <li
      className="w-full border-b border-white hover:border-neutral-300 transition-colors duration-1000 flex items-center justify-between"
      onClick={onChange}
    >
      <label htmlFor={option}>{option}</label>
      <input
        name={option}
        type="checkbox"
        value={option}
        onChange={() => {}}
        checked={active}
      />
    </li>
  );
}

export function FilterRange({
  filter,
  active,
  min,
  max,
  step,
  onChange,
}: {
  filter: string;
  active: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: string) => void;
}) {
  return (
    <li
      className="w-full flex flex-col items-center justify-between"
      key="price"
    >
      <HorizontalDivider text="Price" />
      <div className="text-2xl font-bold p-2 w-full flex justify-center">
        $ {active}
      </div>
      <input
        name="price"
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={active}
        onChange={(event) => onChange(event.target.value)}
      />
    </li>
  );
}
