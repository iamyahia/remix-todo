import { Button, useDisclosure } from "@nextui-org/react";
import NewModal from "./Modal";

export default function NewNote() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="primary">
        New Note
      </Button>
      <NewModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <NewModal.Content>
          <NewModal.Header>Modal title</NewModal.Header>
          <NewModal.Body>
            <form method="POST" className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="content"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Content:
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>

              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
          </NewModal.Body>
        </NewModal.Content>
      </NewModal>
    </>
  );
}
