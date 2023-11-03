"use client";

import { useState } from "react";
import { LineChart } from "@/components/LineChart";
import { ChartData, ChartOptions } from "chart.js";
import { generateUniqueRandomHexColours } from "@/lib/generateUniqueRandomHexColours";
import { transformDataToDatasets } from "@/lib/transformDataToDatasets";
import type { Car, ChartDataset, Dataset } from "@/types";

type InfographicProps = {
  electricVehicles: Car[];
};

export const Infographic = ({ electricVehicles }: InfographicProps) => {
  const datasetColour: string[] =
    generateUniqueRandomHexColours(electricVehicles);

  const initialDatasets: ChartDataset[] = transformDataToDatasets(
    electricVehicles,
  ).map((car: Dataset, i: number) => {
    const isPopular = car.data.some((item) => item >= 10);

    return {
      ...car,
      borderColor: datasetColour[i],
      checked: isPopular,
    };
  });

  const [datasets, setDatasets] = useState(initialDatasets);

  const data: ChartData<"line"> = {
    labels: [...new Set(electricVehicles.map(({ month }) => month))],
    datasets: datasets.filter(({ checked }) => checked),
  };

  const options: ChartOptions = {
    maintainAspectRatio: false,
  };

  const handleMakeChange = (index: number) => () => {
    const newDatasets = [...datasets];
    newDatasets[index].checked = !datasets[index].checked;
    setDatasets(newDatasets);
  };

  return (
    <>
      <div className="aspect-video w-full">
        <LineChart data={data} options={options} />
      </div>
      <fieldset className="prose dark:prose-invert prose-neutral flex flex-wrap gap-2">
        <legend>Make</legend>
        {datasets.map(({ label, checked }, index) => {
          const key = `make-${label}`;

          return (
            <>
              <input
                key={key}
                type="checkbox"
                id={key}
                value={label}
                defaultChecked={checked}
                onChange={handleMakeChange(index)}
              />
              <label htmlFor={key}>{label}</label>
            </>
          );
        })}
      </fieldset>
    </>
  );
};