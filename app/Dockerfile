# set base image (host OS)
FROM python:3.8-slim

# set the working directory in the container
WORKDIR /Code

# copy the dependencies file to the working directory
COPY requirements.txt /Code

# install dependencies
RUN pip install -r requirements.txt

# copy the content of the local src directory to the working directory
COPY . .

# Set environment variables
ENV FLASK_APP src/term.py
ENV FLASK_ENV development
ENV FLASK_RUN_PORT 5000
ENV FLASK_RUN_HOST 0.0.0.0

# command to run on container start
CMD [ "flask", "run" ] 
