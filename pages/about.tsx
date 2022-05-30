import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import translation from "../public/assets/translations/about_page.json";

export default function About() {
	const { locale, locales } = useRouter();

	return (
		<div>
			{translation.translation
				.filter((p) => p.locale === locale)
				.map((translation, i) => {
					return <div key={"trans" + i}>{translation.text}</div>;
				})}
		</div>
	);
}
