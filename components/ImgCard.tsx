import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface IImgCardProps {
	item?: string;
	loading?: boolean;
}

const ImgCardList = ({ items, loading }) => {
	if (loading) {
		return (
			<>
				{[Array(10).keys()].map((_items) => (
					<ImgCard loading={true} />
				))}
			</>
		);
	}

	return (
		<>
			{items.images.map((_item) => (
				<ImgCard item={_item} />
			))}
		</>
	);
};

export const ImgCard = ({ item, loading }: IImgCardProps) => {
	return (
		<div className="">
			{loading ? (
				<div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
					<div className="px-6">
						<img className="w-full" src="/placeholder.png" />

						<div className="py-4">
							<div className="font-bold text-xl mb-2">
								<Skeleton />
							</div>
							<p className="text-gray-700 text-base">
								<Skeleton count={3} />
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
					<img className="w-full" src="/test.jpg" alt="Image" />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							Example Image
						</div>
						<p className="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing
						</p>
					</div>
					<div className="px-6 py-4 space-y-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
							#tag
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 mx-3 py-1 text-sm font-semibold text-gray-700">
							#tag
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
							#tag
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImgCardList;
