/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Action, ActionReturn } from 'svelte/action';

type SomeBuilder<Element, Param, Attributes extends Record<string, any>> = Record<string, any> & {
	action: Action<Element, Param, Attributes>;
};

type GetActionAttributes<Builder> = Builder extends Record<string, any> & {
	action: Action<any, any, infer Attr>;
}
	? Attr
	: never;

/**
 * A special action for Melt UI's preprocessor `@melt-ui/pp`.
 *
 * @see https://www.melt-ui.com/docs/preprocessor
 *
 * @example
 * ```svelte
 * <script>
 * 	const { builder, melt } = createBuilder();
 * </script>
 *
 * <div use:melt={$builder} />
 * ```
 */
export function melt<
	A extends Record<string, any>,
	Builder extends SomeBuilder<Element, Param, A>,
	Element extends HTMLElement,
	Attributes extends GetActionAttributes<Builder>,
	Param = never
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
>(node: Element, params: Builder): ActionReturn<Builder, Attributes> {
	return {};
}
