#!/usr/bin/env node

// import json
// - new with https://v8.dev/features/import-attributes
// - old assert https://v8.dev/features/import-assertions
import pkg from "./package.json" with { type: "json" };
import dependencies from "./dependencies.json" with { type: "json" };
import assert from "node:assert/strict"

for (const [key, value] of Object.entries(pkg.dependencies)) {
  assert(dependencies[key] === value, `Dependency "${key}" version mismatch "${dependencies[key]}" !== "${value}"`)
}

for (const [key, value] of Object.entries(dependencies)) {
  assert(pkg.dependencies[key] === value, `Dependency "${key}" version mismatch "${pkg.dependencies[key]}" !== "${value}"`)
}
