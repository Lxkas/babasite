import { Disclosure } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DropdownNavItemOptions } from "@/types/NavigationBarTypes";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

function useOnClickOutside(ref: any, handler: any) {
	useEffect(
		() => {
			const listener = (event: any) => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}

				handler(event);
			};

			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);

			return () => {
				document.removeEventListener("mousedown", listener);
				document.removeEventListener("touchstart", listener);
			};
		},
		// Add ref and handler to effect dependencies
		// It's worth noting that because passed in handler is a new ...
		// ... function on every render that will cause this effect ...
		// ... callback/cleanup to run every render. It's not a big deal ...
		// ... but to optimize you can wrap handler in useCallback before ...
		// ... passing it into this hook.
		[ref, handler],
	);
}

function DropdownItem(props: {
	title: string;
	options: DropdownNavItemOptions[];
}) {
	const { title, options } = props;

	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="flex w-full justify-between p-2 text-left text-sm font-medium focus:outline-none">
						<div className="flex w-full flex-row">
							<span>{title}</span>

							<span className="ml-auto">
								<FontAwesomeIcon
									icon={open ? faCaretDown : faCaretRight}
									color="#999999"
								/>
							</span>
						</div>
					</Disclosure.Button>
					<Disclosure.Panel className="pl-4 text-sm text-gray-500">
						<div className="flex w-full flex-col pl-2">
							{options.map((option, i) => {
								return (
									<Link
										key={option.text + i}
										href={option.href}
										className="p-1"
										passHref
									>
										{option.text}
									</Link>
								);
							})}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export default function Dropdown(props: { text: string; data: any }) {
	const [forcedOpen, setForcedOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const { text, data } = props;

	const dropdownRef = useRef(null);

	const handleMouseEnter = () => {
		setDropdownOpen(true);
	};

	const handleMouseClick = () => {
		if (!dropdownOpen) {
			setForcedOpen(true);
			setDropdownOpen(true);
		}
	};

	useOnClickOutside(dropdownRef, () => {
		setForcedOpen(false);
		setDropdownOpen(false);
	});

	const handleMouseLeave = () => {
		if (!forcedOpen) {
			setDropdownOpen(false);
		}
	};

	return (
		<div
			ref={dropdownRef}
			className="relative flex h-full cursor-default items-center justify-center"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseClick}
		>
			{/* Text and icon */}
			<div className="flex flex-row">
				<span>{text}</span>
				<span className="ml-2">
					<FontAwesomeIcon icon={faCaretDown} color="#999999" />
				</span>
			</div>

			{/* Dropdown body */}
			<div
				className={classNames(
					dropdownOpen ? "" : "hidden",
					"absolute top-full left-0 h-min w-44 text-gray-700 shadow-lg",
				)}
			>
				<div className="flex flex-col bg-white">
					{data.map((item: any, i: number) => {
						switch (item.dropdownType) {
							case "normal":
								return (
									<Link
										className="p-2"
										key={item.text + i}
										href={item.href}
									>
										{item.text}
									</Link>
								);
							case "innerdropdown":
								return (
									<DropdownItem
										key={item.text + i}
										title={item.title}
										options={item.options}
									/>
								);
						}
					})}
				</div>
			</div>
		</div>
	);
}
