import urllib.request
import re

html = urllib.request.urlopen(urllib.request.Request('https://en.wikipedia.org/wiki/Rajkumar_(actor)', headers={'User-Agent':'Mozilla'})).read().decode('utf-8')
m = re.search(r'class="infobox[^>]+>.*?<img.*?src="//upload\.wikimedia\.org/wikipedia/commons/thumb/([^"]+)"', html, re.DOTALL)
if m:
    with open('w2.txt', 'w') as f:
        f.write('https://upload.wikimedia.org/wikipedia/commons/thumb/'+m.group(1))
else:
    with open('w2.txt', 'w') as f:
        f.write('not found')
