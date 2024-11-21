import { DropdownNavItemOptions } from "@/types/NavigationBarTypes";
import {
	faCaretDown,
	faCaretRight,
	faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { MutableRefObject } from "react";

function MobileDropdownItem(props: {
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

export default function MobileDropDown(props: {
	text: string;
	data: any;
	closeFunction?: (
		focusableElement?:
			| HTMLElement
			| MutableRefObject<HTMLElement | null>
			| undefined,
	) => void;
}) {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="block border-l-4 border-transparent bg-white py-2 pl-2 pr-4 text-base font-medium text-gray-700">
						<span>{props.text}</span>
						<FontAwesomeIcon
							icon={faCaretUp}
							className={`${
								open ? "rotate-180 transform" : ""
							} ml-4 h-5 w-5 text-gray-500`}
						/>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
						<div className="flex flex-col">
							{props?.data?.map((item: any, i: number) => {
								switch (item.dropdownType) {
									case "normal":
										return (
											<Link
												key={item.text + i}
												href={item.href}
												className="p-2"
												onClick={() => {
													console.log("???");

													if (props.closeFunction) {
														props.closeFunction();
													}
												}}
											>
												{item.text}
											</Link>
										);
									case "innerdropdown":
										return (
											// <DropdownItem
											// 	key={item.text + i}
											// 	title={item.title}
											// 	options={item.options}
											// />
											<MobileDropdownItem
												key={item.text + i}
												title={item.title}
												options={item.options}
											/>
										);
								}
							})}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
