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

    def add_notification(self, notif):
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
        return "<type Player: %s>" % self.name
 
    """
    @return Returns a representation of the player.
            Good for debugging
    """   
    def __repr__(self):
        return self.__str__() 

    def __iter__(self):
        return NotificationIterator(self)


class NotificationIterator:
	
	def __init__(self, player):
	    self.queue      = player.notifications 
            self.counter    = -1
	def __iter__(self):
	    return self

	def __next__(self):
            self.counter += 1

	    if self.counter >= len(self.queue):
                raise StopIteration
            else:
                return self.queue[self.counter]
				
	next = __next__


