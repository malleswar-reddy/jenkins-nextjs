# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Build the Next.js app
RUN npm run build

# Start the Next.js app
CMD ["npm", "start"]
