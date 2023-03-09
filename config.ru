# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

# config.ru stands for rack-up and not ruby. Helps to spin up a web server.

run Rails.application
Rails.application.load_server
