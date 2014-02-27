'''
File: queue.py
Author: Andrei Ro
Description: 
'''
import threading



class Queue(object):
	"""Simple Queue class"""


	def __init__(self):
		super(Queue, self).__init__()
		self.lock = threading.Lock()
		self._queue = []

	def top(self):
		"""returns the first item to be removed"""
		with self.lock:
			if len(self._queue) <= 0:
				raise ValueError("Queue is empty. Cannot call top()!")
			else:
				return self._queue[0]

	def pop(self):
		"""removes the element on top"""
	
		with self.lock:
			if len(self._queue) <= 0:
				raise ValueError("Queue is empty. Cannot call remove")
	
			element = self._queue[0]
			del self._queue[0]
		
			return element

	def push(self, element):
		"""adds an item"""

		with self.lock:
			self._queue.append(element)

	def __len__(self):
		with self.lock:
			return len(self._queue)

	
	def contains(self, element):
		with self.lock:
			return element in self._queue

	def __repr__(self):
		with self.lock:
			print '['
			for element in self._queue:
				print element, ', '

			print ']'

	def __str__(self):
		with self.lock:
			s =  '['
			for element in self._queue:
				s += str(element) +  ', '

			s +=  ']'

			return s

        def __getitem__(self, index):
                if index >= len(self._queue):
                        raise IndexError("Index out of bounds")
                elif type(index) != type(int()):
                        raise ValueError("Index must be an integer")                        
                else:
                        return self._queue[index]
