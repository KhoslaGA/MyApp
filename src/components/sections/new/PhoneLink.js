"use client";
import { BUSINESS, telHref } from "@/lib/business";
import { track } from "@/lib/analytics";

/** Clickable business phone that fires the call_click conversion event.
 *  Renders nothing if no phone is configured. */
const PhoneLink = ({ source = "site", className, children }) => {
  const href = telHref(BUSINESS.phone);
  if (!href) return null;
  return (
    <a
      href={href}
      className={className}
      onClick={() => track("call_click", { source })}
    >
      {children || BUSINESS.phone}
    </a>
  );
};

export default PhoneLink;
