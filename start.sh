#!/usr/bin/env bash
cd frontend
yarn build

cd ..
sails lift
