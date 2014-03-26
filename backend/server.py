from twisted.internet import reactor, threads
from autobahn.twisted.websocket import WebSocketServerFactory,\
    WebSocketServerProtocol, listenWS
from player import Player
from threading import Thread
import db

# vector containing all players
players = []


# returneaza un jucator dupa numele sau
def get_player_by_name(_name):
    for player in players:
        if player.name == _name:
            return player


# returneaza un jucator dupa socket
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


def handle_notification(ws, notification):
    player = get_player_by_socket(ws)

    # TODO -> proceseaza notificatia corespunzator
    # TODO -> trimite cerere daca e cazul

    if notification['code'] == 0:
        # clientul cere sa preia notificarile
        # de la server
        # nu se intampla nimic pentru ca
        # server-ul automat trimite
        # notificarile
        pass

    elif notification['code'] == 1:
        # user requested sign up
        ok = db.sign_up_user(notification['user'], notification['password'])

        if ok:
            player.add_notification(Notification({'code': -1,\
                 'success': True, 'message': 'no errors'}))
        else:
            player.add_notification(Notification({'code': -1,\
                'success': False, 'message': 'Error while signing up'}))

    elif notification['code'] == 2:
       # sign in user
        ok = db.sign_in_user(notification['user'], notification['passowrd'])

        if ok:
            player.add_notification(Notification({'code':-1, 'success':True,\
                'message':'no errors'}))
        else:
            player.add_notification(Notification({'code':-1, 'success':False,\
                'message':'Error while signing up'}))    

    elif notification['code'] == 3:
        name = db.get_guest_name()
        ok = sign_up_user(name, 'guest')

        if ok:
            player.add_notification(Notification({'code':-1, 'success':True, \
                'message':'no errors'}))

        else:
            player.add_notification(Notification({'code':-1, 'success':False, \
                'message':'Error while signing up'}))
                 

    elif notification['code'] == 4:
        # trimitere cerere joc
        pass
    elif notification['code'] == 5:
        # primire cerere joc
        pass
    elif notification['code'] == 6:
        # alegere harta
        
        pass
    elif notification['code'] == 7:
        # trimitere modificare harta

        pass
    elif notification['code'] == 8:
        # trimite mesaj
        pass
    else:
        # iesire jucator din joc
        pass


class PlayerProtocol(WebSocketServerProtocol):
 
    def onOpen(self):
        # creeaza un nou jucator
        players.append(Player(self))


    def onMessage(self, msg, binary):
        _msg = json.loads(msg)
        notification = Notification(_msg)
        handle_notification(self, notification)


    # DONE. TODO -- TEST
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

            for player in players:
                # if sau while?!
                if len(player.notifications > 0):
                    reactor.deferToThread(player.ws.sendMessage,\
                    payload=player.notifications.pop().to_json())



 
if __name__ == '__main__':
    factory = WebSocketServerFactory("ws://localhost:9000", debug = False)
    factory.protocol = PlayerProtocol

    updater = StatusUpdater()
    updater.start()

    listenWS(factory)
    reactor.run()




