import { Modal } from "@nextui-org/react";
import Header from "./Header";
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

NewModal.Header = Header;
NewModal.Body = Body;
NewModal.Footer = Footer;
NewModal.Content = Content;
