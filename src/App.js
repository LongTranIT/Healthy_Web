import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layout";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{publicRoutes.map((route, index) => {
						let Layout = DefaultLayout;
						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}
						const Page = route.component;
						if (route.children) {
							return (
								<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							>
								{route.children.map((childRoute, index) => {
									const childPage = childRoute.component;
									return (
										<Route
											path={childRoute.path}
											element={<childPage />}
											key={index}
										/>
									);
								})}
								
								</Route>
							)
						}
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
