FROM node:12.22.12

# Copy git repo
WORKDIR /app
COPY . .

# Install deps
RUN npm install

# Run scrip
RUN npm run full-build