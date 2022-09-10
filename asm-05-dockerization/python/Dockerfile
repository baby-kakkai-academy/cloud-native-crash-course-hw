FROM python:2.7-slim
WORKDIR /app
ADD . /app
RUN pip install --trusted-host pypi.python.org Flask
ENV NAME World

EXPOSE 8080
ENTRYPOINT ["python", "app.py"]
CMD ["--host=0.0.0.0"]
