# Stage 1: Install dependencies & build
FROM node:18-alpine AS builder

WORKDIR /app

# Install only production dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy only the necessary app files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create production image
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production deps (no devDeps needed)
COPY package*.json ./
RUN npm install --omit=dev

# Copy built app from builder
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/pm2.config.js ./  # optional, if you use PM2

# Expose the app port
EXPOSE 3000

# Use PM2 to run the app (see pm2.config.js below)
RUN npm install pm2 -g
CMD ["pm2-runtime", "pm2.config.js"]
