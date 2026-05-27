# HashScope Architecture

## Overview

HashScope is divided into two main experiences:

- Theory Experience
- Practical Laboratory

The architecture separates educational presentation from simulation logic to keep the project modular and maintainable.

---

## Main Structure

```txt
HashScopeExperience
├── TheorySection
└── HashScopeApp
```

---

## TheorySection

Responsible for:

- educational introduction
- theoretical explanation
- collision examples
- strategy comparison
- complexity explanation
- navigation to the laboratory

This section works as an onboarding experience before the practical simulation.

---

## HashScopeApp

Main interactive laboratory.

Responsible for:

- table state
- insertion flow
- collision handling
- metrics
- language synchronization
- live preview system

---

## Component Structure

```txt
HashScopeApp
├── ControlStrip
├── ExecutionFlow
├── MetricsStrip
└── MemoryBoard
```

---

## ControlStrip

Handles:

- user input
- insertion
- clearing
- strategy switching

---

## ExecutionFlow

Responsible for visualizing:

```txt
key
→ hash function
→ calculated bucket
→ final result
```

Supports:

- idle state
- preview state
- collision state
- probing state

---

## MetricsStrip

Displays:

- load factor
- number of elements
- strategy
- complexity behavior
- collision status

---

## MemoryBoard

Visual representation of the hash table.

Features:

- bucket visualization
- collision highlighting
- preview highlighting
- chained lists
- probing resolution

---

## Data Layer

### data/content.ts

Centralized multilingual content system.

Supported languages:

- Portuguese
- English
- Italian

This approach avoids hardcoded UI text inside components.

---

## Algorithm Layer

### lib/hash.ts

Contains:

- hash calculation
- collision handling
- probing logic
- preview simulation
- load factor calculation

The UI does not directly implement hash logic.

---

## State Management

Main states:

```txt
language
table
mode
inputValue
step
```

State is managed locally using React hooks.

---

## Design Philosophy

The project prioritizes:

- educational clarity
- visual feedback
- modular architecture
- maintainability
- readability
- engineering-oriented organization

---

## Future Expansion Possibilities

Possible future features:

- animated insertion timeline
- dynamic table resizing
- custom hash functions
- benchmark mode
- additional collision strategies
- educational quizzes