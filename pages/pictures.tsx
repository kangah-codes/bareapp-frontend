import Head from "next/head";
import Layout from "../components/Layout";
import ImgCardList, { ImgCard } from "../components/ImgCard";
import { gql, useMutation, useQuery } from "@apollo/client";
import client from "../util/Apollo";
import { useEffect, useState } from "react";

const CREATE_IMAGE = gql`
	mutation ($name: String!, $img64: String!) {
		createImage(name: $name, img64: $img64) {
			ok
			image {
				name
				url
			}
		}
	}
`;

export default function Home() {
	const [name, setName] = useState("");
	const [b64, setb64] = useState("");
	const [addImage] = useMutation(CREATE_IMAGE);

	function onImgChange(event) {
		var file = event.target.files[0];
		var reader = new FileReader();
		reader.onload = function (event) {
			console.log(event.target.result);
			setb64(event.target.result as any);
		};

		reader.readAsDataURL(file);
	}

	const handleSubmit = () => {
		addImage({ variables: { name: name, img64: b64 } });
	};

	return (
		<Layout
			title="Upload picture"
			active="pictures"
			children={
				<div>
					<div className="">
						<div className="mt-5 md:mt-0 md:col-span-2">
							<form
								action="#"
								method="POST"
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmit();
								}}
							>
								<div className="shadow sm:rounded-md sm:overflow-hidden">
									<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
										<div>
											<label className="block text-sm font-medium text-gray-700">
												Image Name
											</label>
											<div className="mt-1 flex items-center">
												<input
													type="text"
													onChange={(e) =>
														setName(e.target.value)
													}
													className="py-2 px-3 border border-gray-300 w-full rounded-md"
													required={true}
												/>
											</div>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700">
												Photo
											</label>
											<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
												<div className="space-y-1 text-center">
													{b64 !== "" ? (
														<img src={b64} />
													) : (
														<svg
															className="mx-auto h-12 w-12 text-gray-400"
															stroke="currentColor"
															fill="none"
															viewBox="0 0 48 48"
															aria-hidden="true"
														>
															<path
																d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
													)}

													<div className="flex text-sm text-gray-600">
														<label
															htmlFor="file-upload"
															className="relative cursor-pointer bg-white rounded-md font-medium text-bareapp focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
														>
															<span>
																Upload a file
															</span>
															<input
																id="file-upload"
																name="file-upload"
																type="file"
																className="sr-only"
																required={true}
																onChange={
																	onImgChange
																}
															/>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
										<button
											type="submit"
											onClick={handleSubmit}
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bareapp focus:outline-none"
										>
											Save
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			}
		/>
	);
}
