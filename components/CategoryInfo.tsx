"use client";

import { useAtom } from "jotai";
import { LucideIcon } from "lucide-react";
import { showCategoriesAtom } from "@/atoms/coeAtom";
import { cn } from "@/lib/utils";

interface CategoryInfoProps {
  icon: LucideIcon;
  category: string;
  description: string;
  canFilter?: boolean;
}

export const CategoryInfo = ({
  icon: Icon,
  category,
  description,
  canFilter = true,
}: CategoryInfoProps) => {
  const [categories, setCategories] = useAtom(showCategoriesAtom);

  const handleFilterCategories = () => {
    if (canFilter) {
      setCategories((categories) => ({
        ...categories,
        [category]: !categories[category],
      }));
    }
  };

  return (
    <div
      className={cn(
        "mb-4 flex cursor-not-allowed items-center gap-x-2 rounded-lg border border-transparent p-2",
        {
          "cursor-pointer": canFilter,
          "border-primary": categories[category],
        },
      )}
      onClick={handleFilterCategories}
    >
      <Icon className="h-6 w-6" />
      <div>
        <h4 className="font-semibold">{category}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
