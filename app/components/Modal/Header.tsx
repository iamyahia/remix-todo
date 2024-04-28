import { ModalHeader } from "@nextui-org/react";

export default function Header({ children, ...restProps }) {
  return <ModalHeader {...restProps}>{children}</ModalHeader>;
}
