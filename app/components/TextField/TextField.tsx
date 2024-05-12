import { InputHTMLAttributes, ReactElement, forwardRef } from "react";

import classNames from "classnames";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  endElement?: ReactElement;
  startElement?: ReactElement;
  labelClassName?: string;
  inputClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { endElement, startElement, labelClassName, inputClassName, ...restProps },
    ref
  ) => {
    return (
      <Label
        className={classNames(
          { "cursor-not-allowed opacity-40": restProps.disabled },
          labelClassName
        )}
      >
        {startElement}
        <Input ref={ref} {...restProps} className={inputClassName} />
        {endElement}
      </Label>
    );
  }
);
TextField.displayName = "Input";

export { TextField };
