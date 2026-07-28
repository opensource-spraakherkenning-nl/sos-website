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
		"agenda": {
"school-2026.md": {
	id: "school-2026.md";
  slug: "school-2026";
  body: string;
  collection: "agenda";
  data: InferEntrySchema<"agenda">
} & { render(): Render[".md"] };
"school-2027.md": {
	id: "school-2027.md";
  slug: "school-2027";
  body: string;
  collection: "agenda";
  data: InferEntrySchema<"agenda">
} & { render(): Render[".md"] };
"speech-tech-day-2026.md": {
	id: "speech-tech-day-2026.md";
  slug: "speech-tech-day-2026";
  body: string;
  collection: "agenda";
  data: InferEntrySchema<"agenda">
} & { render(): Render[".md"] };
"speech-tech-day-2027.md": {
	id: "speech-tech-day-2027.md";
  slug: "speech-tech-day-2027";
  body: string;
  collection: "agenda";
  data: InferEntrySchema<"agenda">
} & { render(): Render[".md"] };
"workshop-2026.md": {
	id: "workshop-2026.md";
  slug: "workshop-2026";
  body: string;
  collection: "agenda";
  data: InferEntrySchema<"agenda">
} & { render(): Render[".md"] };
"workshop-2027.md": {
	id: "workshop-2027.md";
  slug: "workshop-2027";
  body: string;
  collection: "agenda";
  data: InferEntrySchema<"agenda">
} & { render(): Render[".md"] };
};
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
"dixit": {
"dixit-2003-1.md": {
	id: "dixit-2003-1.md";
  slug: "dixit-2003-1";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2004-1.md": {
	id: "dixit-2004-1.md";
  slug: "dixit-2004-1";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2004-2.md": {
	id: "dixit-2004-2.md";
  slug: "dixit-2004-2";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2004-3.md": {
	id: "dixit-2004-3.md";
  slug: "dixit-2004-3";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2004-4.md": {
	id: "dixit-2004-4.md";
  slug: "dixit-2004-4";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2005-1.md": {
	id: "dixit-2005-1.md";
  slug: "dixit-2005-1";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2005-2.md": {
	id: "dixit-2005-2.md";
  slug: "dixit-2005-2";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2005-3.md": {
	id: "dixit-2005-3.md";
  slug: "dixit-2005-3";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2005-4.md": {
	id: "dixit-2005-4.md";
  slug: "dixit-2005-4";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2006-1.md": {
	id: "dixit-2006-1.md";
  slug: "dixit-2006-1";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2006-2.md": {
	id: "dixit-2006-2.md";
  slug: "dixit-2006-2";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2008-1.md": {
	id: "dixit-2008-1.md";
  slug: "dixit-2008-1";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2008-2.md": {
	id: "dixit-2008-2.md";
  slug: "dixit-2008-2";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2009.md": {
	id: "dixit-2009.md";
  slug: "dixit-2009";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2010.md": {
	id: "dixit-2010.md";
  slug: "dixit-2010";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2011.md": {
	id: "dixit-2011.md";
  slug: "dixit-2011";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2012.md": {
	id: "dixit-2012.md";
  slug: "dixit-2012";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2013.md": {
	id: "dixit-2013.md";
  slug: "dixit-2013";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2014.md": {
	id: "dixit-2014.md";
  slug: "dixit-2014";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2015.md": {
	id: "dixit-2015.md";
  slug: "dixit-2015";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2016.md": {
	id: "dixit-2016.md";
  slug: "dixit-2016";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2017.md": {
	id: "dixit-2017.md";
  slug: "dixit-2017";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2018.md": {
	id: "dixit-2018.md";
  slug: "dixit-2018";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2019.md": {
	id: "dixit-2019.md";
  slug: "dixit-2019";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2020.md": {
	id: "dixit-2020.md";
  slug: "dixit-2020";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2021.md": {
	id: "dixit-2021.md";
  slug: "dixit-2021";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2022.md": {
	id: "dixit-2022.md";
  slug: "dixit-2022";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2023.md": {
	id: "dixit-2023.md";
  slug: "dixit-2023";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
} & { render(): Render[".md"] };
"dixit-2024.md": {
	id: "dixit-2024.md";
  slug: "dixit-2024";
  body: string;
  collection: "dixit";
  data: InferEntrySchema<"dixit">
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
"speechtechdag-2027.md": {
	id: "speechtechdag-2027.md";
  slug: "speechtechdag-2027";
  body: string;
  collection: "edities";
  data: InferEntrySchema<"edities">
} & { render(): Render[".md"] };
};
"nieuws": {
"45-jaar-teletekst-ondertiteling.md": {
	id: "45-jaar-teletekst-ondertiteling.md";
  slug: "45-jaar-teletekst-ondertiteling";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"STD2026.md": {
	id: "STD2026.md";
  slug: "std2026";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"ai-depressie-spraak.md": {
	id: "ai-depressie-spraak.md";
  slug: "ai-depressie-spraak";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"ai-stemmen-beter-verstaanbaar.md": {
	id: "ai-stemmen-beter-verstaanbaar.md";
  slug: "ai-stemmen-beter-verstaanbaar";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"ai-tolken-gebarentaal.md": {
	id: "ai-tolken-gebarentaal.md";
  slug: "ai-tolken-gebarentaal";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"eu-ai-act-voice-ai.md": {
	id: "eu-ai-act-voice-ai.md";
  slug: "eu-ai-act-voice-ai";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"gemini-flash-tts-nederlands.md": {
	id: "gemini-flash-tts-nederlands.md";
  slug: "gemini-flash-tts-nederlands";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"hersengestuurd-hoortoestel.md": {
	id: "hersengestuurd-hoortoestel.md";
  slug: "hersengestuurd-hoortoestel";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"hosan-ondertekening.md": {
	id: "hosan-ondertekening.md";
  slug: "hosan-ondertekening";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"kabinetsplannen-ngt.md": {
	id: "kabinetsplannen-ngt.md";
  slug: "kabinetsplannen-ngt";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"kaldi-nl-gehoortest.md": {
	id: "kaldi-nl-gehoortest.md";
  slug: "kaldi-nl-gehoortest";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"kalplat-limburgs-notulist.md": {
	id: "kalplat-limburgs-notulist.md";
  slug: "kalplat-limburgs-notulist";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"microsoft-mai-transcribe-1.md": {
	id: "microsoft-mai-transcribe-1.md";
  slug: "microsoft-mai-transcribe-1";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"msc-speech-technology-spring-school.md": {
	id: "msc-speech-technology-spring-school.md";
  slug: "msc-speech-technology-spring-school";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"murmel-nederlandstalig-spraakmodel.md": {
	id: "murmel-nederlandstalig-spraakmodel.md";
  slug: "murmel-nederlandstalig-spraakmodel";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"odette-scharenborg-nwo-profiel.md": {
	id: "odette-scharenborg-nwo-profiel.md";
  slug: "odette-scharenborg-nwo-profiel";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"praoten-nl-nedersaksisch.md": {
	id: "praoten-nl-nedersaksisch.md";
  slug: "praoten-nl-nedersaksisch";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"rug-gronings-spraaktechnologie.md": {
	id: "rug-gronings-spraaktechnologie.md";
  slug: "rug-gronings-spraaktechnologie";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"spraakherkenning-2026-overzicht.md": {
	id: "spraakherkenning-2026-overzicht.md";
  slug: "spraakherkenning-2026-overzicht";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"spraakherkenning-dysartrie.md": {
	id: "spraakherkenning-dysartrie.md";
  slug: "spraakherkenning-dysartrie";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"stotteren-spraaktech-eindgebruikers.md": {
	id: "stotteren-spraaktech-eindgebruikers.md";
  slug: "stotteren-spraaktech-eindgebruikers";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"tss-acquireert-spraaklab.md": {
	id: "tss-acquireert-spraaklab.md";
  slug: "tss-acquireert-spraaklab";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"voxtral-transcribe-2.md": {
	id: "voxtral-transcribe-2.md";
  slug: "voxtral-transcribe-2";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"welkom.md": {
	id: "welkom.md";
  slug: "welkom";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"workshop-evaluatie-interpreteerbaarheid-2026.md": {
	id: "workshop-evaluatie-interpreteerbaarheid-2026.md";
  slug: "workshop-evaluatie-interpreteerbaarheid-2026";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
"zuyderland-ai-avatar-spraakherkenning.md": {
	id: "zuyderland-ai-avatar-spraakherkenning.md";
  slug: "zuyderland-ai-avatar-spraakherkenning";
  body: string;
  collection: "nieuws";
  data: InferEntrySchema<"nieuws">
} & { render(): Render[".md"] };
};
"projecten": {
"hosan-fase-1.md": {
	id: "hosan-fase-1.md";
  slug: "hosan-fase-1";
  body: string;
  collection: "projecten";
  data: InferEntrySchema<"projecten">
} & { render(): Render[".md"] };
"hosan-fase-2.md": {
	id: "hosan-fase-2.md";
  slug: "hosan-fase-2";
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
