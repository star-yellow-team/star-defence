from twisted.internet import reactor, threads
from autobahn.twisted.websocket import WebSocketServerFactory, WebSocketServerProtocol, listenWS
from player import Player

# vector containing all players
players = []


"""Called to send a notification to a player"""
def send_notifications(player):
    pass




class PlayerProtocol(WebSocketServerProtocol):
 
    def onOpen(self):
        players.append(self)

    def onMessage(self, msg, binary):
        self.sendMessage(msg, binary)

    def onClose(self, wasClean, code, reason):
        players.remove(self)
 
if __name__ == '__main__':
    factory = WebSocketServerFactory("ws://localhost:9000", debug = False)
    factory.protocol = PlayerProtocol

    listenWS(factory)
    reactor.run()




