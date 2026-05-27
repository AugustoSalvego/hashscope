# HashScope

## Visual Hash Engineering Lab

Interactive educational laboratory for understanding hash tables, collisions and resolution strategies through real-time visualization.

---

## Live Demo

https://hashscope.vercel.app

---

## Overview

HashScope is an interactive web application designed to teach how hash tables work internally.

The project combines:

- visual feedback
- collision simulation
- real-time insertion preview
- practical experimentation
- multilingual educational content

The application demonstrates how keys are transformed into memory addresses and how collision resolution strategies behave.

---

## Features

- Interactive hash table simulation
- Separate Chaining visualization
- Open Addressing (Linear Probing)
- Real-time collision preview
- Dynamic insertion flow visualization
- Load factor monitoring
- Educational theory section
- Multilingual support
- Responsive cyber-inspired interface

---

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS

---

## Project Structure

```txt
app/
components/
data/
docs/
lib/
types/
```

---

## Collision Resolution Strategies

### Separate Chaining

When collisions occur, multiple values are stored inside the same bucket.

Example:

```txt
Bucket 5 → [15, 25, 35]
```

---

### Open Addressing (Linear Probing)

When a bucket is occupied, the algorithm searches for the next available position.

Example:

```txt
15 → 5
25 → 6
35 → 7
```

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/AugustoSalvego/hashscope.git
```

Enter the project folder:

```bash
cd hashscope
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

---

## Roadmap

- [x] Separate Chaining
- [x] Open Addressing
- [x] Real-time collision preview
- [x] Theory introduction section
- [x] Multilingual support
- [x] Responsive UI
- [ ] Dynamic table resizing
- [ ] Custom hash functions
- [ ] Animated insertion timeline

---

## Deployment

The project is deployed using Vercel.

---

## Author

Danilo Augusto Salvego

GitHub:
https://github.com/AugustoSalvego