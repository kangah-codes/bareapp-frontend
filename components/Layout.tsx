import Navbar from "./Nav";

export default function Layout({ title = "Bareapp", children }) {
	return (
		<div>
			<Navbar children={children} />
		</div>
	);
}
