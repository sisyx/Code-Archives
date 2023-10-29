import random
import os
# prefix = 'p'
type = 'cities'
photoList = os.listdir(f'/home/arxer/MyFiles/Programmnig/projects/wallpainter/src/images/wallpapers/{type.title()}')
result = ''

namesList = ['lux', 'Mani pe', 'Maria', 'Darlin', 'Saeid', 'Eliot', 'Madison']

for i in photoList:
    name = i
    index = photoList.index(i)
    object = {
        'id': f'w{type[0]}{index}',
        'src': f'./src/images/wallpapers/{type.title()}/{i}',
        'category': type,
        'artist': namesList[random.randint(0, len(namesList ) - 1)],
        'likes': random.randint(0, 125),
        'liked': 'false'
    }
    result = result + '\n,' + str(object)

print(result)
# for i in result:
#     print(i)