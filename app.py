import flask
from flask_sockets import Sockets
import os
#import backend.echo_server
from twisted.internet   import reactor, threads
from twisted.web.wsgi   import WSGIResource
from twisted.web.server import Site
from datetime import datetime

app     = flask.Flask(__name__, template_folder=".")
sockets = Sockets(app)

@sockets.route('/wsi')
def send(ws):
    while True:
        message = ws.receive()
        if message is not None:
            message = 'Response from server: ' + message \
            + ' at time: ' + str(datetime.now())
        ws.send(message)

@app.template_filter()
def get_ws_address():
     return os.environ.get('WS_HOST')


@app.route('/')
def game_page():
    return flask.render_template('game.html')


@app.route('/ws')
def ws_test():
    return flask.render_template('hello_ws.html')

app.jinja_env.globals.update(ws_address=get_ws_address)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    #app.run(host='0.0.0.0', port=port, debug=False)
    #thread = EchoThread()
    #thread.start() 
    #backend.echo_server.start_echo_server()
    #resource = WSGIResource(reactor, reactor.getThreadPool(), app)
    #site = Site(resource)
    #reactor.listenTCP(port, site)
    #reactor.run()



