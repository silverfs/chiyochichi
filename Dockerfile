FROM busybox
LABEL maintainer="SilverFS"
LABEL description="A simple startpage."

WORKDIR /opt/html
COPY . /opt/html

EXPOSE 80
ENTRYPOINT [ "httpd", "-f", "-v", "-u", "1234" ]
