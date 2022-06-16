def Converter(str):
	li = list(str.strip().split("\n"))
	return li

def artistFromText():

	with open('api/py/crawler/artistName.txt') as f: 
		artistNames = f.read()

	return Converter(artistNames)

	