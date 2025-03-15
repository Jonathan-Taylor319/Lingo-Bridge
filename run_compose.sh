docker compose up --build -d
sleep 5
docker exec lingo-bridge-api-1 python /src/manage.py makemigrations 
docker exec lingo-bridge-api-1 python /src/manage.py migrate
sleep 5
docker exec lingo-bridge-api-1 python /src/manage.py fetch_slang