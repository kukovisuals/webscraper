import requests
from bs4 import BeautifulSoup

URL = "https://ra.co/promoters/1362/events"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

results = soup.find(id="feature")

# job_elements = results.find_all("div", class_="Box-omzyfs-0 gExFDv")
print(results.prettify())