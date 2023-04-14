# !/usr/bin/env bash
# exit on error
set -o errexit

# frontend build commands
# rm -rf public
# npm install --prefix client && npm run build --prefix client
# cp -a client/build. public/

# Backend build commmands

bundle install
bundle exec rake db:migrate db:seed:replant