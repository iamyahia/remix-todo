type TPerson = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  enrollNumber: string;
  dateOfAdmission: string;
};

type TColumn = {
  id?: string;
  accessorKey?: string;
  accessorFn?: (row: TPerson) => string;
  cell: (info: TCellInfo<TPerson>) => string | JSX.Element;
  header: string;
};

type TCellInfo<T> = {
  row: T;
  column: {
    columnDef: TColumn;
  };
  getValue: () => string;
};

export type { TPerson, TColumn, TCellInfo };
