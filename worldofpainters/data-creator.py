import random
import os

artists = ["Leonard", "Mustafa", "Van gogh", "Darlin", "Madison", "Johny", "Dommenic", "Eliot", "Mira"]
genres = ["classic", "modern", "realistic", "fantasy", "Romantic0", "Anime"]

yearsMin = 1500
yearsMax = 2023

sizeMin = 100
sizeMax = 10000

data = ''
for i in range(10):
    drawing = {
        "id": f'dr{i + 1}',
        "src": f'/images/temp drawings/{i}',
        "artist": artists[random.randint(0, len(artists) - 1)],
        "genre": genres[random.randint(0, len(genres) - 1 )],
        "year": random.randint(yearsMin, yearsMax),
        "size": random.randint(sizeMin, sizeMax)
    }
    data += f',\n{drawing}'

print(data)