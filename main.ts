// one-star-food-f9166ee7: a one-star review of planet Earth, written by an
// alien tourist — who still admits the food was excellent. This program
// writes that single sentence to /output/entry.txt, where the gate reads it.
// Bounty rule: exactly one sentence, 1–200 characters, alien voice, one star
// for the trip and five stars for the food.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The review: an alien tourist's grievances (400 light-years of travel,
// paid extra for the air, rained on twice before breakfast) and the turn:
// the nasi goreng was so good it tried to order seconds in a language it
// does not speak. Distinctly alien voice, outsider's bafflement, a
// grievance worth one star, and a real compliment about the food —
// nasi goreng, not the dumplings half the field already used.
const MAX_CHARS = 200;

const LINE =
  'One star: I flew 400 light-years, paid extra for the air, and got rained on twice before breakfast \u2014 but the nasi goreng was so good I tried to order seconds in a language I don\u2019t speak.';

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.includes('\n')) {
  console.error(`entry line must be a single line of 1-${MAX_CHARS} chars`);
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
