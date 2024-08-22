import { useCallback, useEffect, useState } from "react";
import { HTTP_METHOD } from "next/dist/server/web/http";
import { EmailTemplateProps } from "@/components/ContactForm/EmailTamplate";

interface Response {
	data: any;
	loading: boolean;
	error?: Error;
	sent?: boolean;
}

interface IQuery {
	method?: HTTP_METHOD;
	headers?: Headers;
}

const initialState: Response = { data: null, loading: false, sent: false, error: undefined };

const useSend = (init?: IQuery): [(data: EmailTemplateProps) => void, Response] => {
	const [state, setState] = useState<Response>(initialState);

	const fetchData = useCallback(
		async (data: EmailTemplateProps) => {
			setState((prev) => ({ ...prev, loading: true }));
			await fetch(`api/send`, {
				method: "POST",
				...init,
				body: JSON.stringify(data),
			})
				.then((data: any) => setState((prev) => ({ ...prev, data })))
				.then((data: any) => setTimeout(() => setState(initialState), 5000))
				.finally(() => setState((prev) => ({ ...prev, loading: false, sent: true })))
				.catch((e) => setState((prev) => ({ ...prev, error: e, loading: false })));
		},
		[init]
	);

	useEffect(() => {
		if (!state.error) return;
		throw Error(`Error: ${state.error}`);
	}, [state.error]);

	return [fetchData, state];
};

export default useSend;
