updatable-priority-queue
===

A generic priority queue implementation based on a binary heap, with an efficient `updateKey` operation.

It was made first to support the pathfinding algorithms of my [jKstra](https://github.com/bbecquet/jKstra) graph library, but it can probably serves other purposes.

```bash
$> npm install updatable-priority-queue
```

API
---

Property | Type | Description
---|---|---
count | `Integer` | Number of items stored in the queue.

Method | Returns | Description
---|---|---
`insert(item, key)`| `Vertex` | Adds an item to the queue, with a key used as sorting value.
`pop()` | `{item, key}` | Removes and returns the first item of the queue, with its associated key, or `null` if the queue is empty.
`peek()` | `{item, key}` | Reads the first item of the queue, with its associated key, without removing it, or `null` if the queue is empty.
`updateKey(item, newKey)` | - | Updates the key associated with an element.
