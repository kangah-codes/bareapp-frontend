const ImgCard = () => {
	return (
		<div className="">
			<div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
				<img className="w-full" src="/test.jpg" alt="Image" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">
						The Coldest Sunset
					</div>
					<p className="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing
					</p>
				</div>
				<div className="px-6 py-4 space-y-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						#photography
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 mx-3 py-1 text-sm font-semibold text-gray-700">
						#travel
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						#winter
					</span>
				</div>
			</div>
		</div>
	);
};

export default ImgCard;
