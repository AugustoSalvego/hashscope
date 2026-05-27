import type { Language } from "@/types/language";

type TheoryPathStep = {
  label: string;
  value: string;
  description: string;
};

type TheoryBlock = {
  title: string;
  description: string;
};

type TheoryStrategy = {
  title: string;
  description: string;
  example: string;
};

type TheoryComplexityItem = {
  label: string;
  value: string;
  description: string;
};

export type AppContent = {
  header: {
    title: string;
    subtitle: string;
    liveStatus: string;
    languageLabel: string;
  };
  languageCodes: Record<Language, string>;
  languages: Record<Language, string>;
  theory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
    pathTitle: string;
    pathSubtitle: string;
    pathSteps: TheoryPathStep[];
    collisionTitle: string;
    collisionExample: string[];
    collisionConclusion: string;
    sections: TheoryBlock[];
    strategiesTitle: string;
    strategies: TheoryStrategy[];
    complexityTitle: string;
    complexityIntro: string;
    complexityItems: TheoryComplexityItem[];
    finalTitle: string;
    finalDescription: string;
  };
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
    preview: string;
    willCollide: string;
    willResolve: string;
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
    preview: string;
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
    theory: {
      eyebrow: "HashScope Theory",
      title: "Antes da simulação: como uma chave vira endereço de memória",
      subtitle:
        "Uma tabela hash usa uma função para transformar uma chave em um índice. Quando duas chaves apontam para o mesmo lugar, acontece uma colisão. O HashScope mostra esse caminho de forma visual.",
      primaryCta: "Ir para o laboratório",
      secondaryCta: "Ler teoria",
      scrollHint:
        "Role a página para entender a ideia e depois teste 15, 25 e 35 no laboratório.",
      pathTitle: "O caminho da chave",
      pathSubtitle:
        "A estrutura não procura item por item. Ela calcula onde o valor deveria ficar.",
      pathSteps: [
        {
          label: "chave",
          value: "key = 25",
          description:
            "A chave é o valor usado como entrada para decidir a posição na tabela.",
        },
        {
          label: "função",
          value: "hash(key) = Math.abs(key) % 10",
          description:
            "A função hash converte a chave em um índice dentro do tamanho da tabela.",
        },
        {
          label: "bucket",
          value: "25 % 10 = 5",
          description:
            "O resultado indica o bucket calculado, ou seja, a célula de memória provável.",
        },
      ],
      collisionTitle: "Por que colisões acontecem?",
      collisionExample: ["15 % 10 = 5", "25 % 10 = 5", "35 % 10 = 5"],
      collisionConclusion:
        "As três chaves apontam para o bucket 5. Como elas querem ocupar o mesmo endereço, a tabela precisa usar uma estratégia de resolução.",
      sections: [
        {
          title: "Tabela hash",
          description:
            "É uma estrutura de dados que tenta acessar valores de forma direta usando um cálculo de índice. Em vez de percorrer tudo, ela usa a função hash para chegar perto do destino.",
        },
        {
          title: "Buckets",
          description:
            "Buckets são as posições da tabela. No HashScope, existem 10 buckets fixos, de 0 até 9, para deixar o comportamento fácil de visualizar.",
        },
        {
          title: "Colisão",
          description:
            "Uma colisão acontece quando chaves diferentes geram o mesmo índice. Isso é normal em tabelas hash e precisa ser tratado pela estratégia escolhida.",
        },
      ],
      strategiesTitle: "Estratégia",
      strategies: [
        {
          title: "Separate Chaining",
          description:
            "Quando ocorre colisão, o bucket guarda uma lista de valores. Assim, vários elementos podem viver no mesmo endereço calculado.",
          example: "Bucket 5 → [15, 25, 35]",
        },
        {
          title: "Open Addressing",
          description:
            "Cada bucket guarda apenas um valor. Se o bucket calculado está ocupado, o linear probing procura o próximo bucket livre.",
          example: "15 → 5\n25 → 6\n35 → 7",
        },
      ],
      complexityTitle: "Complexidade",
      complexityIntro:
        "Tabelas hash costumam ser rápidas, mas a eficiência depende da função hash, da quantidade de colisões e do load factor.",
      complexityItems: [
        {
          label: "melhor caso",
          value: "Θ(1)",
          description:
            "A chave cai diretamente no bucket esperado e o acesso é praticamente constante.",
        },
        {
          label: "caso médio",
          value: "Θ(1 + α)",
          description:
            "No encadeamento, o custo médio cresce com o load factor α.",
        },
        {
          label: "pior caso",
          value: "O(n)",
          description:
            "Pode acontecer quando muitas chaves colidem ou ficam concentradas.",
        },
      ],
      finalTitle: "Agora veja a teoria acontecendo",
      finalDescription:
        "No laboratório, digite 15, 25 e 35. Primeiro observe a prévia, depois insira os valores e compare Separate Chaining com Open Addressing.",
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
      preview: "prévia",
      willCollide: "vai colidir",
      willResolve: "vai resolver",
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
      preview: "PREVIEW",
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
      preview:
        "Prévia: a chave será armazenada diretamente no bucket calculado.",
      "preview-chain":
        "Prévia: essa chave cairá em um bucket ocupado e formará uma colisão por encadeamento.",
      "preview-probed":
        "Prévia: essa chave colidirá no bucket original e será resolvida por linear probing.",
      "collision-chain":
        "Colisão detectada: a chave foi adicionada à lista do mesmo bucket.",
      "collision-probed":
        "Colisão detectada: o linear probing procurou o próximo bucket livre.",
      "table-full":
        "A tabela está cheia. Não existe bucket livre para resolver a colisão.",
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
    theory: {
      eyebrow: "HashScope Theory",
      title: "Before the simulation: how a key becomes a memory address",
      subtitle:
        "A hash table uses a function to transform a key into an index. When two keys point to the same place, a collision happens. HashScope makes that path visual.",
      primaryCta: "Go to lab",
      secondaryCta: "Read theory",
      scrollHint:
        "Scroll to understand the idea, then test 15, 25 and 35 in the lab.",
      pathTitle: "The key path",
      pathSubtitle:
        "The structure does not search item by item. It calculates where the value should be stored.",
      pathSteps: [
        {
          label: "key",
          value: "key = 25",
          description:
            "The key is the input value used to decide the position in the table.",
        },
        {
          label: "function",
          value: "hash(key) = Math.abs(key) % 10",
          description:
            "The hash function converts the key into an index inside the table size.",
        },
        {
          label: "bucket",
          value: "25 % 10 = 5",
          description:
            "The result points to the calculated bucket, the likely memory cell.",
        },
      ],
      collisionTitle: "Why do collisions happen?",
      collisionExample: ["15 % 10 = 5", "25 % 10 = 5", "35 % 10 = 5"],
      collisionConclusion:
        "All three keys point to bucket 5. Since they want the same address, the table needs a collision resolution strategy.",
      sections: [
        {
          title: "Hash table",
          description:
            "A data structure that tries to access values directly through an index calculation. Instead of scanning everything, it uses a hash function to approach the target.",
        },
        {
          title: "Buckets",
          description:
            "Buckets are the positions in the table. In HashScope, there are 10 fixed buckets, from 0 to 9, to make the behavior easier to see.",
        },
        {
          title: "Collision",
          description:
            "A collision happens when different keys generate the same index. This is normal in hash tables and must be handled by the chosen strategy.",
        },
      ],
      strategiesTitle: "Strategy",
      strategies: [
        {
          title: "Separate Chaining",
          description:
            "When a collision happens, the bucket stores a list of values. Multiple elements can live in the same calculated address.",
          example: "Bucket 5 → [15, 25, 35]",
        },
        {
          title: "Open Addressing",
          description:
            "Each bucket stores only one value. If the calculated bucket is occupied, linear probing searches for the next free bucket.",
          example: "15 → 5\n25 → 6\n35 → 7",
        },
      ],
      complexityTitle: "Complexity",
      complexityIntro:
        "Hash tables are usually fast, but efficiency depends on the hash function, the number of collisions and the load factor.",
      complexityItems: [
        {
          label: "best case",
          value: "Θ(1)",
          description:
            "The key goes directly to the expected bucket and access is practically constant.",
        },
        {
          label: "average case",
          value: "Θ(1 + α)",
          description:
            "In chaining, the average cost grows with the load factor α.",
        },
        {
          label: "worst case",
          value: "O(n)",
          description:
            "This may happen when many keys collide or become concentrated.",
        },
      ],
      finalTitle: "Now watch the theory happen",
      finalDescription:
        "In the lab, type 15, 25 and 35. First observe the preview, then insert the values and compare Separate Chaining with Open Addressing.",
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
      preview: "preview",
      willCollide: "will collide",
      willResolve: "will resolve",
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
      preview: "PREVIEW",
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
      preview:
        "Preview: the key will be stored directly in the calculated bucket.",
      "preview-chain":
        "Preview: this key will hit an occupied bucket and create a chaining collision.",
      "preview-probed":
        "Preview: this key will collide at the home bucket and be resolved by linear probing.",
      "collision-chain":
        "Collision detected: the key was appended to the same bucket list.",
      "collision-probed":
        "Collision detected: linear probing searched for the next free bucket.",
      "table-full":
        "The table is full. There is no free bucket to resolve the collision.",
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
    theory: {
      eyebrow: "HashScope Theory",
      title:
        "Prima della simulazione: come una chiave diventa un indirizzo di memoria",
      subtitle:
        "Una tabella hash usa una funzione per trasformare una chiave in un indice. Quando due chiavi puntano allo stesso posto, avviene una collisione. HashScope rende visivo questo percorso.",
      primaryCta: "Vai al laboratorio",
      secondaryCta: "Leggi la teoria",
      scrollHint:
        "Scorri per capire l'idea, poi prova 15, 25 e 35 nel laboratorio.",
      pathTitle: "Il percorso della chiave",
      pathSubtitle:
        "La struttura non cerca elemento per elemento. Calcola dove il valore dovrebbe essere salvato.",
      pathSteps: [
        {
          label: "chiave",
          value: "key = 25",
          description:
            "La chiave è il valore di ingresso usato per decidere la posizione nella tabella.",
        },
        {
          label: "funzione",
          value: "hash(key) = Math.abs(key) % 10",
          description:
            "La funzione hash converte la chiave in un indice dentro la dimensione della tabella.",
        },
        {
          label: "bucket",
          value: "25 % 10 = 5",
          description:
            "Il risultato indica il bucket calcolato, cioè la probabile cella di memoria.",
        },
      ],
      collisionTitle: "Perché avvengono le collisioni?",
      collisionExample: ["15 % 10 = 5", "25 % 10 = 5", "35 % 10 = 5"],
      collisionConclusion:
        "Le tre chiavi puntano al bucket 5. Siccome vogliono occupare lo stesso indirizzo, la tabella deve usare una strategia di risoluzione.",
      sections: [
        {
          title: "Tabella hash",
          description:
            "È una struttura dati che prova ad accedere ai valori in modo diretto usando un calcolo di indice. Invece di scorrere tutto, usa una funzione hash per avvicinarsi alla destinazione.",
        },
        {
          title: "Bucket",
          description:
            "I bucket sono le posizioni della tabella. In HashScope ci sono 10 bucket fissi, da 0 a 9, per rendere il comportamento più facile da vedere.",
        },
        {
          title: "Collisione",
          description:
            "Una collisione avviene quando chiavi diverse generano lo stesso indice. È normale nelle tabelle hash e deve essere gestita dalla strategia scelta.",
        },
      ],
      strategiesTitle: "Strategia",
      strategies: [
        {
          title: "Separate Chaining",
          description:
            "Quando avviene una collisione, il bucket salva una lista di valori. Più elementi possono vivere nello stesso indirizzo calcolato.",
          example: "Bucket 5 → [15, 25, 35]",
        },
        {
          title: "Open Addressing",
          description:
            "Ogni bucket salva un solo valore. Se il bucket calcolato è occupato, il linear probing cerca il prossimo bucket libero.",
          example: "15 → 5\n25 → 6\n35 → 7",
        },
      ],
      complexityTitle: "Complessità",
      complexityIntro:
        "Le tabelle hash sono di solito veloci, ma l'efficienza dipende dalla funzione hash, dal numero di collisioni e dal load factor.",
      complexityItems: [
        {
          label: "caso migliore",
          value: "Θ(1)",
          description:
            "La chiave va direttamente nel bucket previsto e l'accesso è praticamente costante.",
        },
        {
          label: "caso medio",
          value: "Θ(1 + α)",
          description:
            "Nel concatenamento, il costo medio cresce con il load factor α.",
        },
        {
          label: "caso peggiore",
          value: "O(n)",
          description:
            "Può succedere quando molte chiavi collidono o restano concentrate.",
        },
      ],
      finalTitle: "Ora guarda la teoria in azione",
      finalDescription:
        "Nel laboratorio, digita 15, 25 e 35. Prima osserva l'anteprima, poi inserisci i valori e confronta Separate Chaining con Open Addressing.",
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
      preview: "anteprima",
      willCollide: "colliderà",
      willResolve: "sarà risolto",
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
      preview: "PREVIEW",
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
      preview:
        "Anteprima: la chiave sarà salvata direttamente nel bucket calcolato.",
      "preview-chain":
        "Anteprima: questa chiave finirà in un bucket occupato e creerà una collisione con concatenamento.",
      "preview-probed":
        "Anteprima: questa chiave colliderebbe nel bucket originale e sarà risolta con linear probing.",
      "collision-chain":
        "Collisione rilevata: la chiave è stata aggiunta alla lista dello stesso bucket.",
      "collision-probed":
        "Collisione rilevata: il linear probing ha cercato il prossimo bucket libero.",
      "table-full":
        "La tabella è piena. Non esiste un bucket libero per risolvere la collisione.",
      invalid: "Digita un numero intero prima di inserire.",
    },
  },
};