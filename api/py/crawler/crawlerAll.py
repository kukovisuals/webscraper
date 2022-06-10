from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
# from artist import artistFromText
from convertToJson import Person
import json

driver = webdriver.Chrome()

#artist = artistFromText()
artist = ['carlcox']
allArtist = []
for dj in artist: 
	def document_initialised(driver):
		newElement = ''
		elements = driver.find_elements(By.XPATH, "//li[@class='Column-sc-18hsrnn-0 kHUYAc']")

		newArtist = {'country': [], 'length': 1 }
		for e in elements:

			if e.text != '':
				newElement = e.text
				
				svgElement = e.find_elements(By.TAG_NAME, 'svg')
	
				for e in svgElement:

					newLine = newElement.split('\n')
					if e.get_attribute('name'):  
						p1 = Person(dj,newLine[0], newLine[1],newLine[2],newLine[3],newLine[4])
						# newArtist['events'].append( p1.writeJson() )
						newArtist['length'] = newArtist['length'] + 1
						newArtist['country'].append(e.get_attribute('name') )
						#add length of total results
						# print(e.get_attribute('name'))
						
		with open('all/' + dj + '2.json', 'w+') as json_file:
			json.dump(newArtist, json_file)
		
		allArtist.append(newArtist)
		
		return newElement

	driver.get("https://ra.co/dj/" + dj +"/tour-dates")
	WebDriverWait(driver, timeout=10).until(document_initialised)

	
	# with open('api/main2.json', 'w+') as json_file:
	# 	json.dump(allArtist, json_file)

driver.quit()