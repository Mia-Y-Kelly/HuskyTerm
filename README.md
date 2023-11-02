# HuskyTerm
Custom method deploy a Linux terminal that communicates with a backend and a frontend.

## Dependencies
* `Docker` on your device
* `Flask 3.0.0` (installed in container)
* `xterm.js` (generated beforehand to ensure consistency)


## Docker commands
1. **Build the image**\
`docker build -t huskyterm .`

2. **Run the container**\
`docker run " -d -p 5000:5000 huskyterm` \

3. **Verify the container is running** (this will also show the `Name` field)\
`docker ps`

4. **Stop the container**\
`docker stop [Name]`

5. **Remove the container**\
`docker rm [Name]`

6. Repeat 2-5 to view the results of the changes. Your image should be viewable in `localhost:5000`.