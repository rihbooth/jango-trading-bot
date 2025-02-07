#!/bin/bash

# Pull the latest changes from the repository
git pull origin main

# Install dependencies
npm install

# Restart the PM2 process
pm2 restart jango-bot