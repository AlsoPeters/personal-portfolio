const InfoCard = (props: Props) => {
	const topic = props.topic;
	const githubUrl = props.githubUrl;
	const about = props.about;
	const icon = props.icon;

	return (
		<>
			<div className="flex flex-col text-left bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#666666] dark:hover:bg-neutral-600">
				<div className="flex flex-col w-full">
					<div className="flex p-4 gap-12">
						<div className="flex flex-col">
							<div className="text-8xl">{icon}</div>
							<h5 className="mb-2 text-3xl self-center font-Oswald text-gray-900 dark:text-gray-300">
								{topic}
							</h5>
						</div>
						<p className="mb-3 font-normal  self-center font-FiraCode text-gray-700 dark:text-gray-300">
							{about}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

type Props = {
	topic: string;
	githubUrl?: string;
	about: string;
	icon: any;
};

export default InfoCard;
