export type DropdownNavItemOptions = {
	text: string;
	href: string;
};

export type NavItemPropType = {
	text: string;
	href: string;
	navType?: "dropdown";
	data?: {}[];
};
