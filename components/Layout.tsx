import NavigationBar from "./shared/NavigationBar";

export default function Layout({ children }: any) {
	return (
		<>
			<NavigationBar />
			<div className="block h-32 mb-2"></div>
			<main>{children}</main>
		</>
	);
}
