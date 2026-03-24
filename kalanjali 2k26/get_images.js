const https = require('https');
const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Puneeth_Rajkumar|Yash_(actor)|Rajkumar_(actor)|S._P._Balasubrahmanyam|Shreya_Ghoshal|Sonu_Nigam&prop=pageimages&format=json&pithumbsize=800';
https.get(url, {headers: {'User-Agent':'Mozilla/5.0'}}, res => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => {
    const pages = JSON.parse(d).query.pages;
    for(let id in pages) {
      if(pages[id].thumbnail) console.log(pages[id].title + '=>' + pages[id].thumbnail.source);
    }
  });
});
