let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWord = story.split(' ');
console.log('There are ' + storyWord.length + ' words in the paragraph.');

const betterWords = storyWord.filter(word => {
  return !unnecessaryWords.includes(word);
});
//console.log(betterWords);

function overusageCount(){
  let dict = {};
  for (let i = 0; i < overusedWords.length; i++){
    for (let j = 0; j < betterWords.length; j++){
      if (overusedWords.includes(betterWords[j])) { 
        if (!(overusedWords[i] in dict)){
          dict[overusedWords[i]] = 0;
        } else {
          dict[overusedWords[i]] += 1;
        }
      }
   }  
  }
  return dict;
}
const dict = overusageCount();
console.log("\nThese are overused words in it: ");
const printOverUsedWords = Object.entries(dict).forEach(item => console.log(item[0] + ' appeared ' + item[1] + ' times.'));

const sentenceCounter = storyWord.reduce((total,word) => {
  let lastChar = word.length-1;
  if (word[lastChar] === '!' || word[lastChar] === '.'){
       total++;
  }
   return total;
}, 0);
console.log('\nIt has ' + sentenceCounter + ' sentences.\n');

const reducedBetterWords = betterWords.reduce((string, word) => {
  string += word + ' ';
  return string; }, '');

console.log("This is the paragraph without some unnecessary words: " + reducedBetterWords.replace(/\s+/g, ' ').trim());