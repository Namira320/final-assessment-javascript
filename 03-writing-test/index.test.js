import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("harus menjumlahkan dua angka positif dengan benar", () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test("harus menangani angka negatif dengan benar", () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, -5);
});

test("harus mengembalikan hasil yang benar saat dijumlahkan dengan nol", () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5);
});
