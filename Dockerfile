# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy only package files first (for caching)
COPY package*.json ./

# 4. Install only production dependencies
RUN npm install

# 5. Copy remaining files
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port
EXPOSE 3000

# 8. Start app
CMD ["npm", "start"]
