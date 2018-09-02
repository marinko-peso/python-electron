import sys
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'This is from Flask app!'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
