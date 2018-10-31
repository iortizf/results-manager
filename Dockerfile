FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

RUN mkdir /usr/share/nginx/html/pwa

COPY /dist/results-manager /usr/share/nginx/html/pwa

CMD ["nginx", "-g", "daemon off;"]
