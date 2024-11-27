#!/bin/sh
git checkout main
git remote add upstream https://github.com/gpuweb/cts.git
git fetch upstream
git merge upstream/main
