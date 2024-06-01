import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
	{
		path: "/orders",
		element: <OrderLayout />,
		children: [
			//TODO
		],
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
