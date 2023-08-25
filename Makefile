.PHONY: run test build check-vulnerabilities

run:
	npm run start

build:
	npm ci
	npm run build

check-vulnerabilities:
	npm run check

test:
	npm run lint
	npm run test