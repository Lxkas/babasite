import { useRouter } from "next/router";
import translation from "@/public/assets/translations/wisdom/tree.json";
import React, { useEffect, useState } from "react";

export default function TreeInTimePage() {
	const { locale, locales } = useRouter();
	const [currentLocaleStrings, setCurrentLocaleStrings] = useState(
		translation.translation.filter((p) => p.locale === locale)
	);

	useEffect(() => {
		setCurrentLocaleStrings(
			translation.translation.filter((p) => p.locale === locale)
		);
	}, [locale]);

	return (
		<div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
			<article className="prose prose-h1:mb-0 prose-p:mt-2">
				<div>
					<h1>{currentLocaleStrings[0].title}</h1>
				</div>

				<div>
					<div>
						<p>{currentLocaleStrings[0].body}</p>
					</div>
				</div>
			</article>
		</div>
	);
}
