
# Stage 1: Build the application


FROM node:16-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


RUN npm run build

# Stage 2: Create a minimal runtime image

FROM node:16-alpine


WORKDIR /app

COPY --from=build /app/build ./build

COPY --from=build /app/node_modules ./node_modules

# Uncomment the following line if you want to install only production dependencies
# RUN npm install --only=production
EXPOSE 3000

# Use ENTRYPOINT instead of CMD if you don't need to pass additional arguments to npm start
CMD ["npm", "start"]
