#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Starting deployment..."

# Example deployment steps:
# 1. Build the project (if necessary)
# npm run build

# 2. Copy files to the server
# scp -r ./build user@server:/path/to/deployment

# 3. SSH into the server and restart the application (if necessary)
# ssh user@server 'pm2 restart all'

echo "Deployment completed successfully!"