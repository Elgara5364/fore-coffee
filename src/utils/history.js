"use client";

import { usePathname } from "next/navigation";

const History = () => {
  const pathname = usePathname();
  const result = pathname.slice(5);
  return result;
};

export default History;
