from twisted.internet import reactor, threads
from autobahn.twisted.websocket import WebSocketServerFactory, WebSocketServerProtocol, listenWS
from player import Player
from threading import Thread

# vector containing all players
players = []

def get_player_by_name(_name):
    for player in players:
        if player.name == _name:
            return player

def get_player_by_socket(ws):
    for player in players:
        if player.ws is ws:
            return player
   
    return None


def get_players_by_game(game):
    _players = []
    
    for player in players:
        if player.game_id == game:
            _players.append(player)
    
    return _players


def handle_notification(ws):
    player = get_player_by_socket(ws)
    # process notification
    # create notification
    # add player notification




class PlayerProtocol(WebSocketServerProtocol):
 
    def onOpen(self):
        players.append(Player(self))


    def onMessage(self, msg, binary):
        self.sendMessage(msg, binary)
        mess = json.loads(msg)

        notification = Notification(mess)

        # process notification for player accordingly


    def onClose(self, wasClean, code, reason):
        #check if player is playing, announce opponent
        #remove player
        player = get_player_by_socket(self)

        if player.is_playing:
            _players = get_players_by_game(player.game_id)

            if _players[0] is not player:
                _players[0].add_notification(Notification({'code':-6,'message':'Adversarul a iesit din joc'}))
            else:
               _players[0].add_notification(Notification({'code':-6,'message':'Adversarul a iesit din joc'}))
  
        players.remove(self)



class StatusUpdater(Thread):
    
    def run(self):
        while True:
            #reactor.deferToThread(...)

            for player in players:
                if len(player.notifications > 0):
                    reactor.deferToThread(player.ws.sendMessage, payload=player.notifications.pop().to_json())



 
if __name__ == '__main__':
    factory = WebSocketServerFactory("ws://localhost:9000", debug = False)
    factory.protocol = PlayerProtocol

    updater = StatusUpdater()
    updater.start()

    listenWS(factory)
    reactor.run()




