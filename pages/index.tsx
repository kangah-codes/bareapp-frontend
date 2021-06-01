import Head from "next/head";
import Layout from "../components/Layout";
import ImgCardList, { ImgCard } from "../components/ImgCard";
import { gql, useQuery } from "@apollo/client";
import client from "../util/Apollo";
import { useEffect } from "react";

const QUERY = gql`
	query GetImages {
		images {
			id
			name
			url
		}
	}
`;

// export async function getStaticProps() {
// 	const { data, loading, error } = await client.query({
// 		query: ,
// 	});

// 	return {
// 		props: {
// 			images: data.images,
// 			loading: loading,
// 		},
// 	};
// }

export default function Home() {
	const { data, loading, error } = useQuery(QUERY);

	console.log(data, loading);

	return (
		<Layout
			active="dashboard"
			title="Dashboard"
			children={
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<ImgCardList items={data} loading={loading} />
				</div>
			}
		/>
	);
}
