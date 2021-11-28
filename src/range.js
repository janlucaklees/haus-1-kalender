
export default function ( end, start = 1 ) {
	console.assert(Number.isInteger(end));
	console.assert(Number.isInteger(start));

	return Array.from(
		{ length: end - start + 1 },
		( _, i) => i + start
	);
}
