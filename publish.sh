#!/bin/sh

echo 'publishing to github pages'
echo "Are all files committed?"
read answer
if [ "$answer" != "${answer#[Yy]}" ] ;then 
    git checkout publish
	git merge draft
	git push
	git checkout draft
else
    echo No
fi

