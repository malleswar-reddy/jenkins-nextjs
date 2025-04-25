# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json only
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy only necessary source code (after pruning)
COPY . .

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
# Use a non-root user to run the app
# USER node
# CMD ["node", "server.js"]
# Use a non-root user to run the app
# USER node
# CMD ["node", "server.js"]
# Use a non-root user to run the app