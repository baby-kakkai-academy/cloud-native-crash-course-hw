Install Dependencies

npm init -y
npm install express

docker build -t mynodeweb .
docker run -d -p 8081:3000 mynodeweb
