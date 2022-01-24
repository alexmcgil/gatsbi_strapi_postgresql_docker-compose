Чтобы запустить docker-compose:
docker-compose up --build


После останавливаем его:
docker-compose down (или Ctrl+C)


Появится ошибка с просьбой выполнить в gatsby npm install
cd gatsby && npm install

Возвращаемся в корень и запускаем контейнер заного
cd .. && docker-compose up --build