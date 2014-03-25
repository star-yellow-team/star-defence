import flask

app = flask.Flask(__name__, template_folder=".")

@app.route('/')
def game_page():
    return flask.render_template('game.html')

if __name__ == "__main__":
    app.run(debug=False)
