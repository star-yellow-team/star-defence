import flask

app = flask.Flask(__name__, template_folder=".")

@app.route('/')
def game_page():
    return flask.render_template('game.html')

