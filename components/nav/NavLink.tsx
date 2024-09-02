"use client"

import Link from "next/link";
import React from "react";
import {Page} from "@/components/nav/page";
import {usePathname} from "next/navigation";

const navStyles = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
const selectedNavStyles = "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"

export const NavLink: React.FC<{
  page: Page
}> = (props) => {

  const pathname = usePathname()

  return (
    <Link
      href={props.page.url}
      className={pathname === props.page.url ? selectedNavStyles : navStyles}
    >
      {props.page.icon}
      {props.page.label}
    </Link>
  )
}
