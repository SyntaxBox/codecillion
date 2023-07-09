import { stroke } from "@/constants/elements/social";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function Owner() {
  return (
    <Link
      href="owner"
      className="flex gap-3 justify-center hover:text-primary-600 dark:hover:text-primary-alt-600"
    >
      <IconUser stroke={stroke} />
      <span>Owner</span>
    </Link>
  );
}

export default Owner;
