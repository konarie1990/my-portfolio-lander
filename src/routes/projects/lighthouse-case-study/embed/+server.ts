import html from '../infographic.html?raw';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return new Response(html, {
		headers: {
			'content-type': 'text/html; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
