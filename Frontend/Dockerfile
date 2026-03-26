# /frontend/Dockerfile

# 1. Use the official Node runtime
FROM node:22-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy dependencies and install
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the code
COPY . .

# 5. Expose Vite's default port
EXPOSE 5173

# 6. Run Vite with the --host flag so your Windows browser can access it
CMD ["npm", "run", "dev", "--", "--host"]