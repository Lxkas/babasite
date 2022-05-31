import { useRouter } from "next/router";
import translation from "@/public/assets/translations/wisdom/soul.json";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SoulPage() {
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
					<div>
						<span>
							<p>{currentLocaleStrings[0].soul_body}</p>
						</span>
						<Image
							width={500}
							height={800}
							src="https://images.unsplash.com/photo-1653918193057-f2de2e7f60ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
							alt="asdad"
						/>
					</div>
				</div>

				<div>
					<h1>{currentLocaleStrings[0].personality}</h1>
					<div>
						<p>{currentLocaleStrings[0].personality_body}</p>
					</div>
				</div>

				<div>
					<h1>{currentLocaleStrings[0].caring}</h1>
					<div>
						<p>{currentLocaleStrings[0].caring_body}</p>
					</div>
				</div>

				<div>
					<h1>{currentLocaleStrings[0].implications}</h1>
					<div>
						<p>{currentLocaleStrings[0].implications_body}</p>
					</div>
				</div>
			</article>
		</div>
	);
}
