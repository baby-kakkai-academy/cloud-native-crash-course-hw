FROM golang:1.16-alpine
WORKDIR /app

# Download Go modules
COPY go.mod .
COPY go.sum .
RUN go mod download

# Copy the source code. Note the slash at the end, as explained in
COPY *.go ./

# Build
RUN go build -o /tmp-go
EXPOSE 8082

CMD [ "/tmp-go" ]
