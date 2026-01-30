import React, { type ReactNode } from "react";
import { Badge } from "../ui/badge";

interface Tech {
  name: string;
  icon: ReactNode;
}

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <Badge
      variant={"outline"}
      className="flex bg-linear-l items-center border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 gap-1.5 duration-200 font-normal px-3 py-1.5">
      {tech.icon && <tech.icon className="w-3 h-3" />}
      {tech.name}
    </Badge>
  );
}

export default TechBadge;
