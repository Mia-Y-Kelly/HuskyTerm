# HuskyTerm
Custom method deploy a Linux terminal that communicates with a backend and a frontend.

## Dependencies
* `Docker` on your device
* `Flask 3.0.0` (installed in container)
* `xterm.js` (generated beforehand to ensure consistency)

## Git Commands
* **Clone the GitHub repository** <br>
`git clone https://github.com/Mia-Y-Kelly/HuskyTerm.git`
* **Check if it has remote connection** <br>
`git remote` should show "origin" or "main"
* **Create a branch** <br>
`git checkout -b [new branch name here]`
* **Switch to a different existing branch** <br>
`git checkout [branch name]`
* **Add changes** <br>
`git add [file_name] [file_name_1][etc]` or `git add -A` (adds all files modified)
* **Commit changes** <br>
`git commit` (this one will open an editor for a message) or `git commit -m [message here]`
* **Push changes to remote** <br>
`git push origin [remote branch name]` or `git push origin -u [name of new remote branch to be created]`
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