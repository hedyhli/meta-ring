#!/usr/bin/env bash

set -e
name="$1"
colophon="$2"
url="$3"

if [ -z "$name" ]; then
    read -p "name: " name
    read -p "colophon: " colophon
    read -p "url: " url
fi

awk -v name="$name" -v colophon="$colophon" -v url="$url" \
    -f append.awk \
    _data/members.json | tee output.json | tail -n6

mv output.json _data/members.json
