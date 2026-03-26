# /backend/Dockerfile

# 1. Use the official Node runtime
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your backend code
COPY . .

# 5. Expose the port (Assuming your Express app uses 5000, change if different)
EXPOSE 5000

# 6. Run the dev script for hot-reloading
CMD ["npm", "run", "dev"]