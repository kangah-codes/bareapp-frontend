import Head from "next/head";
import Layout from "../components/Layout";
import ImgCard from "../components/ImgCard";

const Images = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{[...Array(10).keys()].map((_items) => (
				<ImgCard />
			))}
		</div>
	);
};

export default function Home() {
	return <Layout children={<Images />} />;
}
