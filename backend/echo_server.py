from twisted.internet import reactor, threads
from autobahn.twisted.websocket import WebSocketServerFactory, WebSocketServerProtocol, listenWS
import threading
from threading import Thread
import time

clients = [] 


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
 
 
if __name__ == '__main__':
    factory = WebSocketServerFactory("ws://localhost:9000", debug = False)
    factory.protocol = EchoServerProtocol

    thread = EchoThread()    
    thread.start()

    listenWS(factory)
    reactor.run()

    

