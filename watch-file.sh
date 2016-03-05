#!/bin/sh

file=$1

if [ -f "./src/client/$file.js" ]
then
    watchify ./src/client/$file.js -o "uglifyjs -cm > ./assets/script/modules/$file.min.js"
else
    echo "[$file]is not exist"
fi

