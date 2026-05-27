export type HashMode = "separate-chaining" | "open-addressing";

export type HashCellStatus = "empty" | "filled" | "collision";

export type HashCell = {
  index: number;
  values: number[];
  status: HashCellStatus;
};

export type HashStep = {
  key: number | null;
  homeIndex: number | null;
  finalIndex: number | null;
  hasCollision: boolean;
  isTableFull: boolean;
  message: string;
};
