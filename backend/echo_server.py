from twisted.internet import reactor, threads
from autobahn.twisted.websocket import WebSocketServerFactory, WebSocketServerProtocol, listenWS
import threading
from threading import Thread
import time

clients = [] 

def register(ws):
    for client in clients:
        if ws == client:
            return false

    clients.append(ws)
    return True


class EchoThread(Thread):
    def run(self):
        i = 0
        while True:
            for client in clients:
                print "Sending to client: " + str(client)
                message = 'Hello'+str(i)
                threads.deferToThread(client.sendMessage, payload=message)
            i += 1
            time.sleep(3);

class EchoServerProtocol(WebSocketServerProtocol):
 
    def onOpen(self):
        clients.append(self)

    def onMessage(self, msg, binary):
        self.sendMessage(msg, binary)

def start_echo_server():
    factory = WebSocketServerFactory('ws://0.0.0.0:9000',
                                     debug = False)
    factory.protocol = EchoServerProtocol

    thread = EchoThread()    
    thread.start()

    listenWS(factory)
    print 'listening'

 
if __name__ == '__main__':
    start_echo_server()

