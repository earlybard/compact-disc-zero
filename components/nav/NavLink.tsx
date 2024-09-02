"use client"

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {Page} from "@/components/nav/Nav";


const navStyles = "flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
const selectedNavStyles = "flex items-center gap-3 rounded-lg bg-muted px-3 py-3 text-primary transition-all hover:text-primary"

/**
 * Navbar link with different styles if it is the active page.
 */
export const NavLink = (props: {page: Page}) => {

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
