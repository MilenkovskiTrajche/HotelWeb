import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "solid" | "outline" | "text";
  icon?: "arrow" | "external";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, to, href, variant="solid", icon, className="", onClick }: Props) {
  const cls = `button button--${variant} ${className}`;
  const content = <>{children}{icon && <Icon name={icon} size={17} />}</>;
  if (to) return <Link className={cls} to={to}>{content}</Link>;
  if (href) return <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button className={cls} onClick={onClick}>{content}</button>;
}