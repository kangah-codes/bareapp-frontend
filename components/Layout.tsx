import Navbar from "./Nav";

export default function Layout({ title = "Bareapp", children, active }) {
	return (
		<div>
			<Navbar children={children} active={active} title={title} />
		</div>
	);
}
