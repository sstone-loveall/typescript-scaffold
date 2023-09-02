.PHONY: run test build check-vulnerabilities container-build container-run container-stop

run:
	npm run start

build:
	npm ci
	npm run build

check-vulnerabilities:
	npm run check

container-build:
	npm run container-build

container-run:
	npm run container-run

container-stop:
	npm run container-stop

test:
	npm run lint
	npm run test