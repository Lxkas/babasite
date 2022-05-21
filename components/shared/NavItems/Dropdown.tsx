import { Menu } from "@headlessui/react";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { DropdownNavItemOptions } from "@/types/NavigationBarTypes";

function DropdownItem(props: { text: string; href: string }) {
	const { text, href } = props;

	return (
		<Menu.Item>
			{({ active }) => (
				<a className={`w-full pr-2 pt-2 transition-all duration-100 ${active && "translate-x-2 underline"}`} href={href}>
					{text}
				</a>
			)}
		</Menu.Item>
	);
}

export default function Dropdown(props: { text: string; options: DropdownNavItemOptions[] }) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { text, options } = props;

	return (
		// TODO: make it work on mobile
		<div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} onClick={() => setDropdownOpen(true)}>
			<Menu>
				<Menu.Button className={"font-roboto"}>
					{text}
					<span className="ml-1">
						<FontAwesomeIcon icon={faCaretDown} color="#999999" />
					</span>
				</Menu.Button>
				<div className="absolute w-full font-roboto">
					<Menu.Items static>
						{dropdownOpen && (
							<div className="flex flex-col items-start w-full">
								{options.map((option) => {
									return <DropdownItem key={"dropdownitem" + option.href} text={option.text} href={option.href} />;
								})}
							</div>
						)}
					</Menu.Items>
				</div>
			</Menu>
		</div>
	);
}
