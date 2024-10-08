"use client";

import { ResponsiveBar } from "@nivo/bar";
import useStore from "@/app/store";
import type { COEResult } from "@/types";

interface Props {
  data: COEResult[];
}

export const MonthlyResult = ({ data }: Props) => {
  const categories = useStore(({ categories }) => categories);
  const filteredData = data.filter(
    (item: COEResult) => categories[item.vehicle_class],
  );

  return (
    <div className="h-[600px]">
      <ResponsiveBar
        // @ts-ignore
        data={filteredData}
        keys={["bids_received", "bids_success", "quota"]}
        indexBy="vehicle_class"
        margin={{ top: 50, right: 0, bottom: 50, left: 30 }}
        groupMode="grouped"
        colors={{ scheme: "tableau10" }}
        label={({ id, value }) => `${id} (${value})`}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
