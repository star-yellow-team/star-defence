from twisted.internet import reactor
from autobahn.twisted.websocket import WebSocketServerFactory, WebSocketServerProtocol, listenWS
 
clients = []

class EchoServerProtocol(WebSocketServerProtocol):
 
    def onMessage(self, msg, binary):
        self.sendMessage(msg, binary)
 
    def onOpen(self):
        print "Opened"
        clients.append(self)
        print clients

class RAMSIWebSocketServerFactory(WebSocketServerFactory):
    protocol = EchoServerProtocol
  
    def __init__(self, url):
        WebSocketServerFactory.__init__(self, url,debug=False)
        self.clients = []
  
    def register(self, client):
        if not client in [c['client'] for c in self.clients]:
            for c in self.clients:
                c['active'] = ' '
  
            self.clients.append({
                'client': client,
                'id': str(uuid.uuid4()),
                'started': datetime.now(),
                'identifier': '',
                'active': '*'
             })
            print len(clients);  

    def unregister(self, client):
        if client in [c['client'] for c in self.clients]:
            self.clients = [c for c in self.clients if not c['client'] == client]
  
    def attach_server(self, bebop_server):
        self.bebop_server = bebop_server
  

 
if __name__ == '__main__': 
   factory = RAMSIWebSocketServerFactory("ws://localhost:9001")
   factory.protocol = EchoServerProtocol
   listenWS(factory)
   reactor.run()

