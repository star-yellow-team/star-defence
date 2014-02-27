from rqueue import Queue
import json

"""
Class used to represent a notification
"""

class Notification(object):
    
    def __init__(self,  _data):
        self.data = _data

    def to_json(self):
        return json.dumps(self.data)

    def __getitem__(self, i):
        return self.data[i]

    def __setitem__(self, i, v):
        pass
    
    def __setattribute__(self, i, v):
        pass

    def __str__(self):
        s = '['
        for key, value in self.data.items():
            s += key + ':' + str(value)
            s += ', '

        s += ']'
        
        return s

    def __repr__(self):
        return self.__str__() 
