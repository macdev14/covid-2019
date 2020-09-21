from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',  active="active", active2="")

@app.route('/graficos')
def graphics():
     return render_template('graphics.html', active="", active2="active")
