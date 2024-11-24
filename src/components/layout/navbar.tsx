import React from "react";
import NavLink from "./nav-link";
import client from "@/base/tina/__generated__/client";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import { Icon } from "../icon";

async function Navbar() {
  const data = await client.queries.settings({
    relativePath: "settings.json",
  });
  const settings = data.data.settings;
  return (
    <nav className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link href={"/"} className="flex gap-2 items-center">
          <>
            <Icon data={settings.icon} className="size-8" />
            <span className="text-xl font-bold">{settings.title}</span>
          </>
        </Link>
        <div className="flex items-center gap-4">
          <menu className="flex items-center  ">
            {settings.navigation?.map((item, idx) => (
              <li key={idx}>
                <NavLink {...item} />
              </li>
            ))}
          </menu>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
