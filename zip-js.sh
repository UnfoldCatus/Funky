#!/bin/sh

js_file_list=`ls -l ./src/client/*.js | awk '{print $9}'`

for file_path in $js_file_list
do
    file=$(basename "$file_path")
    extension="${file##*.}"
    filename="${file%.*}"

    watchify $file_path -o "uglifyjs -cm > ./assets/script/modules/$filename.min.$extension" &
    sleep 16
    PIDS=`ps -ef|grep watchify|grep -v grep|awk '{print $2}'`
    for pid in $PIDS
    do
        kill -9 $pid
    done
done
