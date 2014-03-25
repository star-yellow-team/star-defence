import flask
import os

app = flask.Flask(__name__, template_folder=".")

@app.route('/')
def game_page():
    return flask.render_template('game.html')

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port, debug=False)
