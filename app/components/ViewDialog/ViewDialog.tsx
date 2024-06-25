import { Label } from "@radix-ui/react-label";
import { Eye } from "iconsax-react";

import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type ViewDialogProps = {
  row: any;
};

function ViewDialog({ row }: ViewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Eye size="20" color="#FEAF00" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Details</DialogTitle>
        </DialogHeader>
        <div className="text-justify gap-4 py-4 text-nowrap">
          <div className="flex flex-wrap">
            {row.getAllCells().map((cell, index) => {
              if (cell.column.id === "actions") return null;
              return (
                // <div className="w-1/2 gap-4 mb-4" key={index}>
                <div
                  className="w-full sm:w-1/2 items-center gap-4  mb-4"
                  key={index}
                >
                  <Label htmlFor="name" className="w-1/2 font-medium">
                    {cell.column.columnDef.header}
                  </Label>
                  <p className="w-1/2 ">{cell.getValue()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { ViewDialog };
