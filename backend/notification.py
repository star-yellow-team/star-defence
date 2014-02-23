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


