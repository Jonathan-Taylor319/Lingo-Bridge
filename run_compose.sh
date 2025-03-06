docker compose up --build -d
sleep 5
docker exec lingo_bridge-api-1 python /src/manage.py makemigrations 
docker exec lingo_bridge-api-api-1 python /src/manage.py migrate