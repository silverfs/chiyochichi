FROM busybox
LABEL maintainer="SilverFS"
LABEL description="Forked from jeroenpardon/sui, this project exists as a personal continuation."

WORKDIR /opt/html
COPY . /opt/html

EXPOSE 80
ENTRYPOINT [ "httpd", "-f", "-v", "-u", "1234" ]
