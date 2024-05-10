import { Modal } from "@nextui-org/react";
import ModalHeader from "./ModalHeader";
import Body from "./Body";
import Footer from "./Footer";
import Content from "./Content";

export default function NewModal({ children, ...restProps }) {
  return (
    <>
      <Modal {...restProps}>{children}</Modal>
    </>
  );
}

NewModal.ModalHeader = ModalHeader;
NewModal.Body = Body;
NewModal.Footer = Footer;
NewModal.Content = Content;
