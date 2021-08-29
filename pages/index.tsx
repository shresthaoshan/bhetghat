import Header from "components/Header";
import Sidebar from "components/Sidebar";
import * as React from "react";

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<div className="flex flex-row gap-4 h-full justify-between">
				<div className="container p-2 flex justify-center items-center min-h-full shadow-lg bg-gray-400 rounded-md font-sans">
					<h2 className="font-semibold text-2xl text-gray-500">
						Video here
					</h2>
				</div>
				<Sidebar />
			</div>
		</>
	);
}
