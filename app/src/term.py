from flask import Flask, render_template

server = Flask(__name__, static_folder='')

@server.route("/")
def term():
    return render_template('index.html')

if __name__ == "__main__":
    server.run()