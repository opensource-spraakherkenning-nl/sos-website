declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"bestuur": {
"golshid-shekoufandeh.md": {
	id: "golshid-shekoufandeh.md";
  slug: "golshid-shekoufandeh";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
"grzegorz-chrupala.md": {
	id: "grzegorz-chrupala.md";
  slug: "grzegorz-chrupala";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
"henk-van-den-heuvel.md": {
	id: "henk-van-den-heuvel.md";
  slug: "henk-van-den-heuvel";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
"khiet-truong.md": {
	id: "khiet-truong.md";
  slug: "khiet-truong";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
"matt-coler.md": {
	id: "matt-coler.md";
  slug: "matt-coler";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
"odette-scharenborg.md": {
	id: "odette-scharenborg.md";
  slug: "odette-scharenborg";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
"roeland-ordelman.md": {
	id: "roeland-ordelman.md";
  slug: "roeland-ordelman";
  body: string;
  collection: "bestuur";
  data: InferEntrySchema<"bestuur">
} & { render(): Render[".md"] };
};
"edities": {
"speechtechdag-2023.md": {
	id: "speechtechdag-2023.md";
  slug: "speechtechdag-2023";
  body: string;
  collection: "edities";
  data: InferEntrySchema<"edities">
} & { render(): Render[".md"] };
"speechtechdag-2024.md": {
	id: "speechtechdag-2024.md";
  slug: "speechtechdag-2024";
  body: string;
  collection: "edities";
  data: InferEntrySchema<"edities">
} & { render(): Render[".md"] };
"speechtechdag-2025.md": {
	id: "speechtechdag-2025.md";
  slug: "speechtechdag-2025";
  body: string;
  collection: "edities";
  data: InferEntrySchema<"edities">
} & { render(): Render[".md"] };
"speechtechdag-2026.md": {
	id: "speechtechdag-2026.md";
  slug: "speechtechdag-2026";
  body: string;
  collection: "edities";
  data: InferEntrySchema<"edities">
} & { render(): Render[".md"] };
};
"nieuws": {
"welkom.md": {
	id: "welkom.md";
  slug: "welkom";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
};
"projecten": {
"asr-nl-benchmark.md": {
	id: "asr-nl-benchmark.md";
  slug: "asr-nl-benchmark";
  body: string;
  collection: "projecten";
  data: InferEntrySchema<"projecten">
} & { render(): Render[".md"] };
"kaldi-nl.md": {
	id: "kaldi-nl.md";
  slug: "kaldi-nl";
  body: string;
  collection: "projecten";
  data: InferEntrySchema<"projecten">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
