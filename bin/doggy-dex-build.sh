<<<<<<< HEAD
<<<<<<< HEAD
# !/usr/bin/env bash
# exit on error
set -o errexit

# frontend build commands
=======
#!/usr/bin/en bash
# exit on error
set -o errexit

# front end build commands
>>>>>>> deployment2
# rm -rf public
# npm install --prefix client && npm run build --prefix client
# cp -a client/build. public/

<<<<<<< HEAD
# Backend build commmands

bundle install
bundle exec rake db:migrate 
bundle exec rake db:seed:replant
=======
#backend build commands
bundle install
bundle exec rake db:migrate db:seed:replant
>>>>>>> deployment2
=======
#!/usr/bin/env bash
    # exit on error
     set -o errexit

# front end build commands 
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# backend build commands
bundle install
bundle exec rake db:migrate db:seed:replant
>>>>>>> deployment3
