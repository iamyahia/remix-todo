import { ModalHeader as ModalHeaderPrimitive } from "@nextui-org/react";

export default function ModalHeader({ children, ...restProps }) {
  return <ModalHeaderPrimitive {...restProps}>{children}</ModalHeaderPrimitive>;
}
