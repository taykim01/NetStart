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

export type { PageSelection, Color };
