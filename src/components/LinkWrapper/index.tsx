import Link from "next/link";
import { ReactNode } from "react";

import * as Styles from "./styles";

type LinkWrapperProps = {
  href: string;
  children: ReactNode;
};

const LinkWrapper = ({ children, href }: LinkWrapperProps) => (
  <Styles.Wrapper>
    <Link href={href}>{children}</Link>
  </Styles.Wrapper>
);

export default LinkWrapper;
