
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/clients/0032733359_10.svg" | "/images/clients/19a25029a4d8593911a4fd6fd6d11e731ea87f17-200x50 (1).svg" | "/images/clients/19a25029a4d8593911a4fd6fd6d11e731ea87f17-200x50.svg" | "/images/clients/326072849_1321835728608082_4574022861760785364_n_1.svg" | "/images/clients/471b1908f8be05a15066e0ba99c88310710090af-100x76.svg" | "/images/clients/487085639_1053057990184363_7928410686965824621_n.svg" | "/images/clients/4thefans.svg" | "/images/clients/519fa61dc4a6bd8280b6e815c00f3e1313c15995-200x36.svg" | "/images/clients/6a016ab44066429d504191605bcc4e4e89b11d9d-200x82.svg" | "/images/clients/71fbe8eaae260646d123abdf77292c35c3679143-200x66.svg" | "/images/clients/77.svg" | "/images/clients/80af85517c8872a80c72966d0599f81733a6f69d-200x48.svg" | "/images/clients/8508ba9d584bb1231a37c23908a210e9be1d4f10-200x32.svg" | "/images/clients/9502f3f4b4e5bf5e605086334ac6e985099d201b-300x34.svg" | "/images/clients/EASTENDERZ-Just-Text-black.svg" | "/images/clients/Screenshot_2026-02-20_at_22_57_23.svg" | "/images/clients/WAH-2024-Logo-w1-480x272.svg" | "/images/clients/a1f9fcfadb337f8ee178874c79499a99a5a1f53f-200x54.svg" | "/images/clients/a362491fe74dec8c2f5328951e5516ff40f33f70-151x100.svg" | "/images/clients/a3bf207a4728e98a64b49f632e40ea5af96dcacd-100x98.svg" | "/images/clients/anyma.svg" | "/images/clients/b2ab75eb584e47cda8a339594a8522c6386bec28-200x42.svg" | "/images/clients/bf42576dbe9a4e918692361279aa18053a1c8a37-100x52.svg" | "/images/clients/boudica.svg" | "/images/clients/boundary.svg" | "/images/clients/broadwick-live-presents.svg" | "/images/clients/bwl-presents.svg" | "/images/clients/c906d795d311514f1b68664e3bb8b31f79a78761-200x76.svg" | "/images/clients/datatonic.svg" | "/images/clients/day-zero.svg" | "/images/clients/defected.svg" | "/images/clients/dhb.svg" | "/images/clients/drumsheds.svg" | "/images/clients/e1.svg" | "/images/clients/e1fb714b2801b72a6de8e53676b122f50d018d76-300x30.svg" | "/images/clients/eastenderz.svg" | "/images/clients/ee.svg" | "/images/clients/ffea9a7936c7ecaf9cf9561a87d86a788bd87978-200x34.svg" | "/images/clients/google.svg" | "/images/clients/high-lights.svg" | "/images/clients/jackies.svg" | "/images/clients/live-nation.svg" | "/images/clients/live_nation.svg" | "/images/clients/louder.svg" | "/images/clients/lwe.svg" | "/images/clients/maiden-voyage.svg" | "/images/clients/mos.svg" | "/images/clients/nexup.svg" | "/images/clients/one-life.svg" | "/images/clients/origins.svg" | "/images/clients/paradise.svg" | "/images/clients/perplex.svg" | "/images/clients/prospect.svg" | "/images/clients/seventy-seven-72.svg" | "/images/clients/silverfish-live.svg" | "/images/clients/silverworks-island.svg" | "/images/clients/soulection-logo-white.svg" | "/images/clients/soulection.svg" | "/images/clients/swi.svg" | "/images/clients/terminal-v.svg" | "/images/clients/tokyonights.svg" | "/images/clients/uk-highlights_1.svg" | "/images/clients/wah.svg" | "/images/matas.svg" | "/images/sarah.svg" | string & {};
	}
}