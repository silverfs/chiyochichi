FROM busybox
LABEL maintainer="SilverFS"
LABEL description="Forked from jeroenpardon/sui, this project exists as a personal continuation."

RUN useradd -ms /bin/sh otosan
WORKDIR /opt/html
COPY . /opt/html
RUN chown -R otosan:otosan /opt/html
USER otosan

EXPOSE 80
ENTRYPOINT [ "httpd", "-f", "-v", "-u", "1000" ]
