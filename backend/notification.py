from rqueue import Queue

"""
Class used to represent a notification
"""

class Notification(object):
    
    def __init__(self, _code, _data):
        self.code = _code
        self.data = _data


    def __getitem__(self, i):
        if i == 'code':
            return self.code
        else:
            return self.data[i]

    def __setitem__(self, i, v):
        pass
    
    def __setattribute__(self, i, v):
        pass


