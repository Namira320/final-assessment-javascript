import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("harus mengembalikan hasil penjumlahan yang benar jika diberikan dua angka positif", () => {
  const result = sum(5, 10);
  assert.strictEqual(result, 15);
});

test("harus mengembalikan nilai 0 jika parameter a bukan angka", () => {
  const result = sum("5", 10);
  assert.strictEqual(result, 0);
});

test("harus mengembalikan nilai 0 jika parameter b bukan angka", () => {
  const result = sum(5, "10");
  assert.strictEqual(result, 0);
});

test("harus mengembalikan nilai 0 jika kedua parameter bukan angka", () => {
  const result = sum("a", "b");
  assert.strictEqual(result, 0);
});

test("harus mengembalikan nilai 0 jika parameter a bernilai negatif", () => {
  const result = sum(-5, 10);
  assert.strictEqual(result, 0);
});

test("harus mengembalikan nilai 0 jika parameter b bernilai negatif", () => {
  const result = sum(5, -10);
  assert.strictEqual(result, 0);
});

test("harus mengembalikan nilai 0 jika kedua parameter bernilai negatif", () => {
  const result = sum(-5, -10);
  assert.strictEqual(result, 0);
});

test("harus mengembalikan hasil 0 jika diberikan angka nol", () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0);
});
