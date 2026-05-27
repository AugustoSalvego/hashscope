import type { Language } from "@/types/language";

export type AppContent = {
  header: {
    title: string;
    subtitle: string;
    liveStatus: string;
    languageLabel: string;
  };
  languageCodes: Record<Language, string>;
  languages: Record<Language, string>;
  controls: {
    formulaLabel: string;
    inputLabel: string;
    inputPlaceholder: string;
    insert: string;
    clear: string;
    strategy: string;
    separateChaining: string;
    openAddressing: string;
    enterHint: string;
  };
  flow: {
    key: string;
    hashFunction: string;
    bucket: string;
    result: string;
    idleKey: string;
    idleHash: string;
    idleBucket: string;
    idleResult: string;
    inserted: string;
    collision: string;
    resolved: string;
    tableFull: string;
    invalid: string;
    homeBucket: string;
    finalBucket: string;
  };
  board: {
    title: string;
    subtitle: string;
    empty: string;
    filled: string;
    collision: string;
    home: string;
    final: string;
    values: string;
    emptySlot: string;
    calculated: string;
    resolvedTo: string;
  };
  metrics: {
    loadFactor: string;
    elements: string;
    strategy: string;
    averageComplexity: string;
    collisionStatus: string;
    tableSize: string;
    noCollision: string;
    hasCollision: string;
    separateComplexity: string;
    openComplexity: string;
  };
  stepMessages: Record<string, string>;
};

export const content: Record<Language, AppContent> = {
  pt: {
    header: {
      title: "HashScope",
      subtitle: "Visual Hash Engineering Lab",
      liveStatus: "sistema ativo",
      languageLabel: "idioma",
    },
    languageCodes: {
      pt: "PT-BR",
      en: "EN",
      it: "IT",
    },
    languages: {
      pt: "Português",
      en: "Inglês",
      it: "Italiano",
    },
    controls: {
      formulaLabel: "Função fixa",
      inputLabel: "Chave inteira",
      inputPlaceholder: "Ex.: 15, 25, 35",
      insert: "Inserir",
      clear: "Limpar",
      strategy: "Estratégia",
      separateChaining: "Separate Chaining",
      openAddressing: "Open Addressing",
      enterHint: "Enter também insere",
    },
    flow: {
      key: "Chave",
      hashFunction: "Função hash",
      bucket: "Bucket calculado",
      result: "Resultado",
      idleKey: "aguardando",
      idleHash: "key % 10",
      idleBucket: "—",
      idleResult: "sem operação",
      inserted: "inserido",
      collision: "colisão",
      resolved: "resolvido",
      tableFull: "tabela cheia",
      invalid: "entrada inválida",
      homeBucket: "bucket original",
      finalBucket: "bucket final",
    },
    board: {
      title: "Memory Board",
      subtitle: "10 células fixas observando colisões em tempo real",
      empty: "EMPTY",
      filled: "FILLED",
      collision: "COLLISION",
      home: "HOME",
      final: "FINAL",
      values: "chaves",
      emptySlot: "slot vazio",
      calculated: "calculado",
      resolvedTo: "resolvido em",
    },
    metrics: {
      loadFactor: "load factor",
      elements: "elementos",
      strategy: "estratégia",
      averageComplexity: "complexidade média",
      collisionStatus: "estado de colisão",
      tableSize: "tamanho",
      noCollision: "sem colisão",
      hasCollision: "colisão detectada",
      separateComplexity: "Θ(1 + α)",
      openComplexity: "≈ Θ(1), pior O(n)",
    },
    stepMessages: {
      idle: "Insira 15, 25 e 35 para ver a colisão acontecer no bucket 5.",
      inserted: "A chave foi armazenada diretamente no bucket calculado.",
      "collision-chain": "Colisão detectada: a chave foi adicionada à lista do mesmo bucket.",
      "collision-probed": "Colisão detectada: o linear probing procurou o próximo bucket livre.",
      "table-full": "A tabela está cheia. Não existe bucket livre para resolver a colisão.",
      invalid: "Digite um número inteiro antes de inserir.",
    },
  },
  en: {
    header: {
      title: "HashScope",
      subtitle: "Visual Hash Engineering Lab",
      liveStatus: "system active",
      languageLabel: "language",
    },
    languageCodes: {
      pt: "PT-BR",
      en: "EN",
      it: "IT",
    },
    languages: {
      pt: "Portuguese",
      en: "English",
      it: "Italian",
    },
    controls: {
      formulaLabel: "Fixed function",
      inputLabel: "Integer key",
      inputPlaceholder: "E.g.: 15, 25, 35",
      insert: "Insert",
      clear: "Clear",
      strategy: "Strategy",
      separateChaining: "Separate Chaining",
      openAddressing: "Open Addressing",
      enterHint: "Enter also inserts",
    },
    flow: {
      key: "Key",
      hashFunction: "Hash function",
      bucket: "Calculated bucket",
      result: "Result",
      idleKey: "waiting",
      idleHash: "key % 10",
      idleBucket: "—",
      idleResult: "no operation",
      inserted: "inserted",
      collision: "collision",
      resolved: "resolved",
      tableFull: "table full",
      invalid: "invalid input",
      homeBucket: "home bucket",
      finalBucket: "final bucket",
    },
    board: {
      title: "Memory Board",
      subtitle: "10 fixed cells watching collisions in real time",
      empty: "EMPTY",
      filled: "FILLED",
      collision: "COLLISION",
      home: "HOME",
      final: "FINAL",
      values: "keys",
      emptySlot: "empty slot",
      calculated: "calculated",
      resolvedTo: "resolved to",
    },
    metrics: {
      loadFactor: "load factor",
      elements: "elements",
      strategy: "strategy",
      averageComplexity: "average complexity",
      collisionStatus: "collision status",
      tableSize: "size",
      noCollision: "no collision",
      hasCollision: "collision detected",
      separateComplexity: "Θ(1 + α)",
      openComplexity: "≈ Θ(1), worst O(n)",
    },
    stepMessages: {
      idle: "Insert 15, 25 and 35 to watch the collision happen in bucket 5.",
      inserted: "The key was stored directly in the calculated bucket.",
      "collision-chain": "Collision detected: the key was appended to the same bucket list.",
      "collision-probed": "Collision detected: linear probing searched for the next free bucket.",
      "table-full": "The table is full. There is no free bucket to resolve the collision.",
      invalid: "Type an integer number before inserting.",
    },
  },
  it: {
    header: {
      title: "HashScope",
      subtitle: "Visual Hash Engineering Lab",
      liveStatus: "sistema attivo",
      languageLabel: "lingua",
    },
    languageCodes: {
      pt: "PT-BR",
      en: "EN",
      it: "IT",
    },
    languages: {
      pt: "Portoghese",
      en: "Inglese",
      it: "Italiano",
    },
    controls: {
      formulaLabel: "Funzione fissa",
      inputLabel: "Chiave intera",
      inputPlaceholder: "Es.: 15, 25, 35",
      insert: "Inserisci",
      clear: "Pulisci",
      strategy: "Strategia",
      separateChaining: "Separate Chaining",
      openAddressing: "Open Addressing",
      enterHint: "Enter inserisce anche",
    },
    flow: {
      key: "Chiave",
      hashFunction: "Funzione hash",
      bucket: "Bucket calcolato",
      result: "Risultato",
      idleKey: "in attesa",
      idleHash: "key % 10",
      idleBucket: "—",
      idleResult: "nessuna operazione",
      inserted: "inserito",
      collision: "collisione",
      resolved: "risolto",
      tableFull: "tabella piena",
      invalid: "input non valido",
      homeBucket: "bucket originale",
      finalBucket: "bucket finale",
    },
    board: {
      title: "Memory Board",
      subtitle: "10 celle fisse osservano collisioni in tempo reale",
      empty: "EMPTY",
      filled: "FILLED",
      collision: "COLLISION",
      home: "HOME",
      final: "FINAL",
      values: "chiavi",
      emptySlot: "slot vuoto",
      calculated: "calcolato",
      resolvedTo: "risolto in",
    },
    metrics: {
      loadFactor: "load factor",
      elements: "elementi",
      strategy: "strategia",
      averageComplexity: "complessità media",
      collisionStatus: "stato collisione",
      tableSize: "dimensione",
      noCollision: "nessuna collisione",
      hasCollision: "collisione rilevata",
      separateComplexity: "Θ(1 + α)",
      openComplexity: "≈ Θ(1), peggiore O(n)",
    },
    stepMessages: {
      idle: "Inserisci 15, 25 e 35 per vedere la collisione nel bucket 5.",
      inserted: "La chiave è stata salvata direttamente nel bucket calcolato.",
      "collision-chain": "Collisione rilevata: la chiave è stata aggiunta alla lista dello stesso bucket.",
      "collision-probed": "Collisione rilevata: il linear probing ha cercato il prossimo bucket libero.",
      "table-full": "La tabella è piena. Non esiste un bucket libero per risolvere la collisione.",
      invalid: "Digita un numero intero prima di inserire.",
    },
  },
};
