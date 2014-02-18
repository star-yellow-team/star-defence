import sys
 
from twisted.python import log
from twisted.internet import reactor
from twisted.web.server import Site
from twisted.web.static import File
 
from autobahn.twisted.websocket import listenWS
from autobahn.wamp1 import WampServerFactory, \
                          WampServerProtocol
 
 
class PubSubServer1(WampServerProtocol):
 
   def onSessionOpen(self):
 
      ## register a single, fixed URI as PubSub topic
      self.registerForPubSub("http://example.com/simple")
 
      ## register a URI and all URIs having the string as prefix as PubSub topic
      self.registerForPubSub("http://example.com/event#", True)
 
 
if __name__ == '__main__':
 
   log.startLogging(sys.stdout)
   debug = len(sys.argv) > 1 and sys.argv[1] == 'debug'
 
   factory = WampServerFactory("ws://localhost:9000", debugWamp = debug)
   factory.protocol = PubSubServer1
   factory.setProtocolOptions(allowHixie76 = True)
   listenWS(factory)
 
   webdir = File(".")
   web = Site(webdir)
   reactor.listenTCP(8080, web)
 
   reactor.run()
