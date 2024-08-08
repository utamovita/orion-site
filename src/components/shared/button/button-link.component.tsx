import * as React from "react";
import cx from "classnames";
import { useLink } from "react-aria";
import styles from "./button.module.scss";
import Link from "next/link";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  newTab?: boolean;
} & typeof defaultProps;

const defaultProps = {
  variant: "primary",
  isDisabled: false,
  fullWidth: false,
};

function ButtonLink(props: ButtonLinkProps) {
  const ref = React.useRef(null);
  const { linkProps } = useLink(props, ref);
  const { children, variant, isDisabled, to, fullWidth, className, newTab } = props;

  const variantClass = styles[variant];
  const disabledClass = isDisabled ? styles.disabled : false;
  const fullWidthClass = fullWidth ? styles.fullWidth : false;
  const classNames = cx(styles.link, variantClass, disabledClass, fullWidthClass, className);

  if (isDisabled) {
    return (
      <span {...linkProps} className={classNames} ref={ref}>
        {children}
      </span>
    );
  }

  return (
    <Link href={to} className={classNames} ref={ref} {...(newTab && { target: "_blank", rel: "noopener" })}>
      {children}
    </Link>
  );
}

ButtonLink.defaultProps = defaultProps;

export { ButtonLink };
