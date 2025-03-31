FROM node:20-slim 

RUN useradd -m -s /bin/bash appuser

WORKDIR /home/app
COPY package*.json ./

RUN npm install --omit=dev && npm install typescript

COPY . .

RUN npx tsc

RUN chown -R appuser:appuser /home/app
USER appuser

CMD ["node", "./build/index.js"]
