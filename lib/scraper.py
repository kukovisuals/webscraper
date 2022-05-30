from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()

artist = [
	'ninakraviz', 'deborahdeluca', 'recondite', 'richiehawtin', 'stevelawler','lane8',
	'yotto','elifur','nto','ness','kwartz','wooyork','solee'
	]

for dj in artist: 
	textFile = open('djs/' + dj +".txt","w+",  encoding="utf8")

	def document_initialised(driver):
		newElement = ''
	    # Get all the elements available with tag name 'p'
		elements = driver.find_elements(By.TAG_NAME, 'span')

		for e in elements:

			if e.text != '':
	  			newElement = e.text
	  			textFile.write(newElement + '\n')
	  			print(newElement) 

		return newElement

	driver.get("https://ra.co/dj/" + dj +"/tour-dates")
	WebDriverWait(driver, timeout=10).until(document_initialised)

textFile.close()
driver.quit()