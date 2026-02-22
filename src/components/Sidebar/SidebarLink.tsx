import React from "react";
import { NavLink } from "react-router-dom";

interface ISidebarLink {
  IconSVG?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href?: string;
  label: string;
}

const SidebarLink = ({ IconSVG, href, label }: ISidebarLink) => {
  if (!label) return null;

  return (
    <>
      {IconSVG && (
        <span>
          <IconSVG />
        </span>
      )}
      {href ? <NavLink to={href}>{label}</NavLink> : <a>{label}</a>}
    </>
  );
};

export default SidebarLink;
