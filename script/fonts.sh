#!/bin/sh

if [ -t 1 ]; then
	target="fonts.js"
else
	target="/dev/stdout"
fi

(
	echo "export const fonts = {"
	for file in "$@"; do
		file=$1
		filename=$(basename $file)
		filecontent=$(base64 -b 0 $file)
		shift
		echo "\"${filename}\":\"${filecontent}\""
		if [ "$#" -gt 0 ]; then
			echo ","
		fi
	done
	echo "};"
) > "$target"
