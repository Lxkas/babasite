import { MutableRefObject } from "react";

export type DropdownNavItemOptions = {
	text: string;
	href: string;
	closeFunction?: (
		focusableElement?:
			| HTMLElement
			| MutableRefObject<HTMLElement | null>
			| undefined
	) => void;
};

export type NavItemPropType = {
	text: string;
	href: string;
	navType?: "dropdown";
	data?: {}[];
	closeFunction?: (
		focusableElement?:
			| HTMLElement
			| MutableRefObject<HTMLElement | null>
			| undefined
	) => void;
};
