import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
	return (
		<>
			{/* <Sidebard/> */}

			<div>
				<div>Side Bar</div>
				<div>
					<Outlet />
				</div>
				<div>Footer</div>
			</div>
		</>
	);
}
