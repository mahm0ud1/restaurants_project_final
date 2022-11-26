for i in $(docker ps | awk '{print $1}' | grep -v 'CONTAINER'); do echo docker stop $i; done
for i in $(docker ps -a | awk '{print $1}' | grep -v 'CONTAINER'); do echo docker rm -f $i; done


docker build . -t dockerized-react

docker run -p 80:80 -d dockerized-react