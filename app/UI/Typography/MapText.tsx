import { CourseMapType } from "@/interfaces/queries";
import React from "react";

function MapText({
  children,
  type,
  to,
}: {
  children: React.ReactNode;
  type: CourseMapType;
  to: string;
}) {
  return <div>MapText</div>;
}

export default MapText;
