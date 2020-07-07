from flask import Flask, render_template
from cs50 import SQL

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')


