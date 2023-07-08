"use client";
import { stroke, size } from "@/constants/elements/social";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const handelToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsRotated(!isRotated);
  };

  return (
    <div
      title="toggle dark mode"
      className={`cursor-pointer social-icon-container ${
        isRotated && "rotate"
      }`}
      onClick={handelToggle}
    >
      {theme === "dark" ? (
        <IconMoon stroke={stroke} size={size} />
      ) : (
        <IconSun stroke={stroke} size={size} />
      )}
    </div>
  );
}

export default DarkMode;
