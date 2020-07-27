import { useCallback, useEffect, useState } from "react";

function useHttp(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = useCallback(() => {
		setIsLoading(true);
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error("Failed to fetch...");
				}
				return response.json();
			})
			.then(result => {
				setData(result);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return [data, isLoading];
}

export { useHttp };
