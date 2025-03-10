# Build Stage
FROM node:18 AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build Angular
COPY . .
RUN npm run build --prod

# Nginx Stage
FROM nginx:alpine
COPY --from=builder /app/dist/my-angular-app /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
