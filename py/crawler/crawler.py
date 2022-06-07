from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from artist import artistFromText
from convertToJson import Person
import json

driver = webdriver.Chrome()

artist = artistFromText()

allArtist = []
for dj in artist: 
	def document_initialised(driver):
		newElement = ''
		elements = driver.find_elements(By.XPATH, "//li[@class='Column-sc-18hsrnn-0 kHUYAc']")
		

		newArtist = {dj:[] }
		for e in elements:

			if e.text != '':
				newElement = e.text
				
				svgElement = e.find_elements(By.TAG_NAME, 'svg')
	
				for e in svgElement:

					if e.get_attribute('name') == 'US':
						newLine = newElement.split('\n')

						p1 = Person(dj,newLine[0], newLine[1],newLine[2],newLine[3],newLine[4])
						newArtist[dj].append( p1.writeJson() )


		with open('api/' + dj + '.json', 'w+') as json_file:
			json.dump(newArtist, json_file)
		
		allArtist.append(newArtist)
		
		return newElement

	driver.get("https://ra.co/dj/" + dj +"/tour-dates")
	WebDriverWait(driver, timeout=10).until(document_initialised)

	
	with open('api/main.json', 'w+') as json_file:
		json.dump(allArtist, json_file)

driver.quit()