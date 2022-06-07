# 1.	We need to know how to make object.
# 2.	create new keys in objects
# 3.	push object to arrays

class Person:
	def __init__(self, name, day, place, artist, city, club ):
		self.name= name
		self.day = day
		self.place = place
		self.artist = artist
		self.city = city
		self.club = club
		self.dj = {self.name: [] }
		self.djs = {}

	def writeJson(self):
		self.djs = {"day": "", "place": "", "artist": "", "city":"", "club":""}

		self.djs['day'] = self.day
		self.djs['place'] = self.place
		self.djs['artist'] = self.artist
		self.djs['city'] = self.city
		self.djs['club'] = self.club

		self.dj[self.name].append(self.djs)

		return self.dj

