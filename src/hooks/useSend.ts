import { useCallback, useEffect, useState } from "react";
import { HTTP_METHOD } from "next/dist/server/web/http";
import { EmailTemplateProps } from "@/components/ContactForm/EmailTamplate";

interface Response {
	data: any;
	loading: boolean;
	error?: Error;
}

interface IQuery {
	method?: HTTP_METHOD;
	headers?: Headers;
}

const useSend = (init?: IQuery): [(data: EmailTemplateProps) => void, Response] => {
	const [state, setState] = useState<Response>({ data: null, loading: false });

	const fetchData = useCallback((data: EmailTemplateProps) => {
		setState((prev) => ({ ...prev, loading: true }));
		fetch(`${process.env.NEXT_PUBLIC_HOST}/api/send`, {
			method: "POST",
			...init,
			body: JSON.stringify(data),
		})
			.then((data: any) => setState((prev) => ({ ...prev, data })))
			.finally(() => setState((prev) => ({ ...prev, loading: false })))
			.catch((e) => setState((prev) => ({ ...prev, error: e, loading: false })));
	}, []);

	useEffect(() => {
		if (!state.error) return;
		throw Error(`Error: ${state.error}`);
	}, [state.error]);

	return [fetchData, state];
};

export default useSend;
