import { $ } from "bun";

await $`rm -rf dist`;

await $`tsc`;
await $`tsc --outDir dist/types --declaration --emitDeclarationOnly --declarationMap`;