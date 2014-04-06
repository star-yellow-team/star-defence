from player import Player
from threading import Thread
import db

# vector cu jucatori
players = []
# lock pentru jucatori
players_lock = threading.Lock()

# vectorulcu jocuri
games   = []
# lock pentru jocuri
games_lock = threading.Lock()


# returneaza un jucator dupa numele sau
def get_player_by_name(_name):
    with players_lock:
        for player in players:
            if player.name == _name:
                return player


# returneaza un jucator dupa socket
def get_player_by_socket(ws):
    with players_lock:
        for player in players:
            if player.ws is ws:
                return player

    return None


def get_players_by_game(game):
    with players_lock:
        _players = []

        for player in players:
            if player.game_id == game:

                _players.append(player)

        return _players

def create_player(ws):
    with players_lock:    
        p = Player(ws)
        players.append(p)


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

