type PageSelection = {
  isChecked: boolean;
  contents:
    | {
        content: string;
        type: string;
      }[]
    | undefined;
};

type Color = {
  main: string;
  sub: string;
};

type Contact = {
  type: "phoneNumber" | "email";
  content: string;
};

export type { PageSelection, Color, Contact }