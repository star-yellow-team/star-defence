from rqueue import Queue

"""
Class representing a player on the server.
"""

class Player(object):
    
    """
    Constructor function.
    """
    def  __init__(self, socket):
        self.notifications  = Queue()
        self.name           = ""
        self.is_playing     = False        
        self.game_id        = -240513
        self.ws             = socket

    def add_notification(notif):
        self.notifications.push(notif)

    """
    Called to update the player state and
    show that he/she is currently playing
    """
    def join_game(self, game):
        self.is_playing = True
        self.game_id    = game

    """
    Called to update the player state and
    show that he/she is currently not playing
    """
    def quit_game(self):
        self.is_playing = False

    """
    @return Returns a representation of the player.
            Good for debugging
    """
    def __str__(self):
        return "<class Player: %s>" % self.name
 
    """
    @return Returns a representation of the player.
            Good for debugging
    """   
    def __repr__(self):
        return self.__str__() 


