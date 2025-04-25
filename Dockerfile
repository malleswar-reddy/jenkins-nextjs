# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json only
COPY package*.json ./
RUN npm install

# Copy all code
COPY . .

# Build Next.js app (requires tailwind/postcss)
RUN npm run build

# Prune devDependencies (optional but recommended for smaller image)
RUN npm prune --omit=dev

EXPOSE 3000

# Start app
CMD ["npm", "start"]
