import type { HashCell, HashMode, HashStep } from "@/types/hash";

const cloneTable = (table: HashCell[]): HashCell[] =>
  table.map((cell) => ({
    ...cell,
    values: [...cell.values],
  }));

const buildStep = (
  key: number | null,
  homeIndex: number | null,
  finalIndex: number | null,
  hasCollision: boolean,
  isTableFull: boolean,
  message: string,
): HashStep => ({
  key,
  homeIndex,
  finalIndex,
  hasCollision,
  isTableFull,
  message,
});

export const createEmptyTable = (size: number): HashCell[] =>
  Array.from({ length: size }, (_, index) => ({
    index,
    values: [],
    status: "empty",
  }));

export const getHashIndex = (key: number, size: number): number =>
  Math.abs(key) % size;

export const countElements = (table: HashCell[]): number =>
  table.reduce((total, cell) => total + cell.values.length, 0);

export const calculateLoadFactor = (
  table: HashCell[],
  size: number,
): number => countElements(table) / size;

export const previewSeparateChaining = (
  table: HashCell[],
  key: number,
  size: number,
): HashStep => {
  const homeIndex = getHashIndex(key, size);
  const targetCell = table[homeIndex];
  const hasCollision = targetCell.values.length > 0;

  return buildStep(
    key,
    homeIndex,
    homeIndex,
    hasCollision,
    false,
    hasCollision ? "preview-chain" : "preview",
  );
};

export const previewOpenAddressing = (
  table: HashCell[],
  key: number,
  size: number,
): HashStep => {
  const homeIndex = getHashIndex(key, size);
  const hasCollision = table[homeIndex].values.length > 0;

  for (let offset = 0; offset < size; offset += 1) {
    const probeIndex = (homeIndex + offset) % size;
    const probeCell = table[probeIndex];

    if (probeCell.values.length === 0) {
      return buildStep(
        key,
        homeIndex,
        probeIndex,
        hasCollision,
        false,
        hasCollision ? "preview-probed" : "preview",
      );
    }
  }

  return buildStep(key, homeIndex, null, true, true, "table-full");
};

export const previewHashInsert = (
  table: HashCell[],
  key: number,
  size: number,
  mode: HashMode,
): HashStep =>
  mode === "separate-chaining"
    ? previewSeparateChaining(table, key, size)
    : previewOpenAddressing(table, key, size);

export const insertSeparateChaining = (
  table: HashCell[],
  key: number,
  size: number,
): { table: HashCell[]; step: HashStep } => {
  const nextTable = cloneTable(table);
  const homeIndex = getHashIndex(key, size);
  const targetCell = nextTable[homeIndex];
  const hasCollision = targetCell.values.length > 0;

  targetCell.values.push(key);
  targetCell.status = targetCell.values.length > 1 ? "collision" : "filled";

  return {
    table: nextTable,
    step: buildStep(
      key,
      homeIndex,
      homeIndex,
      hasCollision,
      false,
      hasCollision ? "collision-chain" : "inserted",
    ),
  };
};

export const insertOpenAddressing = (
  table: HashCell[],
  key: number,
  size: number,
): { table: HashCell[]; step: HashStep } => {
  const nextTable = cloneTable(table);
  const homeIndex = getHashIndex(key, size);
  const hasCollision = nextTable[homeIndex].values.length > 0;

  for (let offset = 0; offset < size; offset += 1) {
    const probeIndex = (homeIndex + offset) % size;
    const probeCell = nextTable[probeIndex];

    if (probeCell.values.length === 0) {
      probeCell.values = [key];
      probeCell.status = "filled";

      return {
        table: nextTable,
        step: buildStep(
          key,
          homeIndex,
          probeIndex,
          hasCollision,
          false,
          hasCollision ? "collision-probed" : "inserted",
        ),
      };
    }
  }

  return {
    table: nextTable,
    step: buildStep(key, homeIndex, null, true, true, "table-full"),
  };
};