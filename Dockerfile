# Use the official Node.js image
FROM node:18 AS build
 
# Set the working directory
WORKDIR /app
 
# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install
 
# Copy the rest of the application
COPY . .
 
# Build the Angular app
RUN npm run build -- --configuration=production
 
# Use Nginx to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/gen-ai /usr/share/nginx/html
 
# Expose port 80
EXPOSE 8080
 
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]