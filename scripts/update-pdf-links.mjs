import { readFileSync, writeFileSync } from 'node:fs';

const readmePath = 'README.md';
const currentYear = parseYear(process.argv[2], 'current year');
const repository = process.argv[3] ?? process.env.GITHUB_REPOSITORY;

if(repository === undefined || repository === '') {
	console.error('Usage: bun run update-pdf-links -- YYYY owner/repository');
	process.exit(1);
}

const nextYear = currentYear + 1;
const startMarker = '<!-- pdf-links:start -->';
const endMarker = '<!-- pdf-links:end -->';
const links = [
	`${startMarker}`,
	pdfLink(currentYear, repository),
	pdfLink(nextYear, repository),
	`${endMarker}`,
].join('\n');
const readme = readFileSync(readmePath, 'utf8');
const markerPattern = new RegExp(
	`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`,
);

if(!markerPattern.test(readme)) {
	console.error('README PDF link markers are missing.');
	process.exit(1);
}

writeFileSync(readmePath, readme.replace(markerPattern, links));

function parseYear(value, label) {
	if(!/^\d{4}$/.test(value ?? '')) {
		console.error(`Invalid ${label}: ${value}`);
		process.exit(1);
	}

	return parseInt(value, 10);
}

function pdfLink(year, repository) {
	const fileName = `haus-1-kalender-${year}.pdf`;
	const url = `https://github.com/${repository}/releases/download/${year}/${fileName}`;

	return `- [${year} PDF](${url})`;
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
