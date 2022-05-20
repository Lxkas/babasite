import { Menu } from "@headlessui/react";
import React from "react";

export default function Dropdown() {
	return (
		<div className="relative bg-gray-200">
			<Menu>
				<Menu.Button>DROPDOWN</Menu.Button>
				<div className="absolute w-max">
					<Menu.Items>
						<Menu.Item>
							{({ active }) => (
								<a className={`${active && "bg-blue-500"}`} href="/account-settings">
									Account settings
								</a>
							)}
						</Menu.Item>
					</Menu.Items>
				</div>
			</Menu>
		</div>
	);
}

// <Menu.Item>
// 					{({ active }) => (
// 						<a className={`${active && "bg-blue-500"}`} href="/account-settings">
// 							Account settings
// 						</a>
// 					)}
// 				</Menu.Item>
// 				<Menu.Item>
// 					{({ active }) => (
// 						<a className={`${active && "bg-blue-500"}`} href="/account-settings">
// 							Documentation
// 						</a>
// 					)}
// 				</Menu.Item>
// 				<Menu.Item disabled>
// 					<div>
// 						Invite a friend!
// 						{/* <span className="opacity-75">Invite a friend (coming soon!)</span> */}
// 					</div>
// 				</Menu.Item>
