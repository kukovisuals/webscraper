from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()

def Converter(str):
	li = list(str.strip().split("\n"))
	return li

artistNames = " "
with open('api/artistNames.txt') as f: 
	artistNames = f.read()


artist = Converter(artistNames)
# artist = ['deborahdeluca']

for dj in artist: 
	textFile = open('djs/' + dj +"2.txt","w+",  encoding="utf8")

	def document_initialised(driver):
		newElement = ''
	  # Get all the elements available with tag name 'span'
		# elements = driver.find_elements(By.TAG_NAME, 'span')
		elements = driver.find_elements(By.XPATH, "//li[@class='Column-sc-18hsrnn-0 kHUYAc']")
		
		for e in elements:

			if e.text != '':
				newElement = e.text
				
				svgElement = e.find_elements(By.TAG_NAME, 'svg')
				usArtist = ''
				for e in svgElement:

					if e.get_attribute('name') == 'US':

						textFile.write(newElement + '\n')
						print( dj + ' is coming to the US \n' )
						print(newElement)
					else: 
						textFile.write('-' + '\n')						

		return newElement

	driver.get("https://ra.co/dj/" + dj +"/tour-dates")
	WebDriverWait(driver, timeout=10).until(document_initialised)

textFile.close()
driver.quit()