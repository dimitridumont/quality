import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import eslintConfigPrettier from "eslint-config-prettier"
import perfectionist from "eslint-plugin-perfectionist"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import reactPlugin from "eslint-plugin-react"
import unusedImports from "eslint-plugin-unused-imports"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	eslintConfigPrettier,
	eslintPluginPrettier,
	{
		plugins: {
			react: reactPlugin,
		},
		rules: {
			"react/jsx-curly-brace-presence": [
				"error",
				{ children: "ignore", props: "never" },
			],
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		plugins: {
			"unused-imports": unusedImports,
		},
		rules: {
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"error",
				{
					args: "after-used",
					argsIgnorePattern: "^_",
					vars: "all",
					varsIgnorePattern: "^_",
				},
			],
		},
	},
	{
		plugins: {
			perfectionist,
		},
		rules: {
			"perfectionist/sort-imports": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						["parent", "sibling", "index"],
					],
					internalPattern: ["^@/.*"],
					newlinesBetween: 1,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-jsx-props": [
				"warn",
				{
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-named-imports": [
				"warn",
				{
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-objects": [
				"warn",
				{
					order: "asc",
					type: "natural",
				},
			],
		},
	},
	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"]),
])

export default eslintConfig
