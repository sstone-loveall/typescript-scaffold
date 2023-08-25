#!/bin/sh

# TODO: replace `typescript-scaffold` with name of implemented service
PROJECT_NAME="typescript-scaffold"
WORKING_DIRECTORY="$(pwd)"

DATA_DIRECTORY="$WORKING_DIRECTORY/dependency-check-data"
CACHE_DIRECTORY="$DATA_DIRECTORY/cache"
REPORT_DIRECTORY="$WORKING_DIRECTORY/reports/dependency-check"

if [ ! -d "$DATA_DIRECTORY" ]; then
    echo "Initially creating persistent directory: $DATA_DIRECTORY"
    mkdir -p "$DATA_DIRECTORY"
fi
if [ ! -d "$CACHE_DIRECTORY" ]; then
    echo "Initially creating persistent directory: $CACHE_DIRECTORY"
    mkdir -p "$CACHE_DIRECTORY"
fi
if [ ! -d "$REPORT_DIRECTORY" ]; then
    echo "Initially creating persistent directory: $REPORT_DIRECTORY"
    mkdir -p "$REPORT_DIRECTORY"
fi

# Make sure to use the latest version
docker pull owasp/dependency-check

docker run --rm \
    -e user=$USER \
    -u "$(id -u ${USER})":"$(id -g ${USER})" \
    --volume "$WORKING_DIRECTORY":/project-root:z \
    --volume "$DATA_DIRECTORY":/usr/share/dependency-check/data:z \
    --volume "$REPORT_DIRECTORY":/report:z \
    owasp/dependency-check \
    --scan '/project-root/*.json' \
    --format "HTML" \
    --format "JUNIT" \
    --format "JSON" \
    --project "$PROJECT_NAME" \
    --out /report