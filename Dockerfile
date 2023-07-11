# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the entire application to the working directory
COPY . .

# Build the React Vite application
RUN yarn build

# Expose the desired port (replace 3000 with your application's port if necessary)
EXPOSE 8100

# Start the application
CMD ["yarn", "run", "dev"]
