FROM debian

# This is a shell trick to allow nvm to work
SHELL [ "/bin/bash", "-l", "-c" ]

# Copy git repo
WORKDIR /app
COPY . .

# Install node (via version manager)
RUN apt-get update && apt-get install -y curl
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
RUN nvm install
RUN nvm use 12

# Install deps
RUN npm install

# Run scrip
RUN npm run full-build