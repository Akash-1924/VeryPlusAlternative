const synonymsDB = {
  "very angry": [
    { synonym: "furious", meaning: "Extremely angry; filled with intense rage" },
    { synonym: "livid", meaning: "Furiously angry; so angry one is almost pale with rage" },
    { synonym: "irate", meaning: "Formally or noticeably angry; irritated to a high degree" }
  ],
  "very bad": [
    { synonym: "awful", meaning: "Extremely unpleasant or of very poor quality" },
    { synonym: "dreadful", meaning: "Causing great suffering or fear; terribly bad" },
    { synonym: "atrocious", meaning: "Shockingly bad; horrifyingly poor" }
  ],
  "very beautiful": [
    { synonym: "gorgeous", meaning: "Strikingly beautiful; dazzling to look at" },
    { synonym: "stunning", meaning: "So beautiful it shocks or overwhelms the senses" },
    { synonym: "exquisite", meaning: "Delicately and perfectly beautiful; refined" }
  ],
  "very big": [
    { synonym: "huge", meaning: "Extremely large in size or amount" },
    { synonym: "enormous", meaning: "Abnormally or exceedingly large" },
    { synonym: "gigantic", meaning: "Like a giant; vastly large" },
    { synonym: "immense", meaning: "Extremely large in scale or degree" }
  ],
  "very boring": [
    { synonym: "tedious", meaning: "Boring because it is long, slow, or repetitive" },
    { synonym: "monotonous", meaning: "Boring because it never changes; dull and repetitive" }
  ],
  "very bright": [
    { synonym: "dazzling", meaning: "So bright it hurts or blinds the eyes" },
    { synonym: "radiant", meaning: "Shining brightly; glowing with light or joy" }
  ],
  "very busy": [
    { synonym: "swamped", meaning: "Overwhelmed with work or tasks" },
    { synonym: "overwhelmed", meaning: "Buried under too much to do; unable to cope" }
  ],
  "very calm": [
    { synonym: "serene", meaning: "Peaceful and untroubled; calmly beautiful" },
    { synonym: "tranquil", meaning: "Free from disturbance; quiet and peaceful" }
  ],
  "very clean": [
    { synonym: "spotless", meaning: "Perfectly clean; without a single spot" },
    { synonym: "immaculate", meaning: "Flawlessly clean; perfectly tidy" },
    { synonym: "pristine", meaning: "Clean as if brand new; untouched" }
  ],
  "very cold": [
    { synonym: "freezing", meaning: "Extremely cold; at or below freezing point" },
    { synonym: "frigid", meaning: "Intensely cold; icy in temperature or manner" }
  ],
  "very confused": [
    { synonym: "bewildered", meaning: "Completely puzzled; unable to understand" },
    { synonym: "baffled", meaning: "Totally confused; unable to solve or grasp" },
    { synonym: "perplexed", meaning: "Puzzled and uncertain; mentally tangled" }
  ],
  "very crowded": [
    { synonym: "packed", meaning: "Filled tightly with people or things" },
    { synonym: "teeming", meaning: "Swarming; full of moving life or things" }
  ],
  "very dangerous": [
    { synonym: "perilous", meaning: "Full of serious risk or danger" },
    { synonym: "hazardous", meaning: "Risky to health or safety" },
    { synonym: "treacherous", meaning: "Dangerously unpredictable; deceitfully risky" }
  ],
  "very dark": [
    { synonym: "pitch-black", meaning: "Completely dark; no light at all" },
    { synonym: "gloomy", meaning: "Dark and depressing; poorly lit" }
  ],
  "very difficult": [
    { synonym: "arduous", meaning: "Requiring great effort; exhausting" },
    { synonym: "grueling", meaning: "Extremely tiring and demanding" },
    { synonym: "taxing", meaning: "Mentally or physically draining" }
  ],
  "very dirty": [
    { synonym: "filthy", meaning: "Disgustingly dirty" },
    { synonym: "grimy", meaning: "Covered with ingrained dirt or soot" },
    { synonym: "squalid", meaning: "Dirty and degraded; filthy from neglect" }
  ],
  "very dry": [
    { synonym: "parched", meaning: "Extremely dry; desperate for water" },
    { synonym: "arid", meaning: "Dry and barren; lacking rainfall" }
  ],
  "very easy": [
    { synonym: "effortless", meaning: "Done without any apparent effort" },
    { synonym: "straightforward", meaning: "Simple and clear; not complicated" }
  ],
  "very empty": [
    { synonym: "desolate", meaning: "Empty and bleak; deserted and lonely" },
    { synonym: "barren", meaning: "Empty of life or growth; unproductive" }
  ],
  "very expensive": [
    { synonym: "exorbitant", meaning: "Unreasonably high in price" },
    { synonym: "steep", meaning: "Informal; surprisingly high in cost" }
  ],
  "very fast": [
    { synonym: "rapid", meaning: "Happening or moving very quickly" },
    { synonym: "swift", meaning: "Quick and smooth in movement or action" },
    { synonym: "brisk", meaning: "Quick and energetic; lively" }
  ],
  "very friendly": [
    { synonym: "amiable", meaning: "Pleasant and good-natured; easy to like" },
    { synonym: "cordial", meaning: "Warm and polite; sincerely friendly" },
    { synonym: "genial", meaning: "Cheerful, kind, and warmly friendly" }
  ],
  "very funny": [
    { synonym: "hilarious", meaning: "Extremely funny; causing loud laughter" },
    { synonym: "hysterical", meaning: "So funny it is uncontrollable" }
  ],
  "very good": [
    { synonym: "excellent", meaning: "Extremely good; of the highest quality" },
    { synonym: "superb", meaning: "Magnificent; outstandingly good" },
    { synonym: "outstanding", meaning: "Exceptionally good; standing above the rest" }
  ],
  "very happy": [
    { synonym: "ecstatic", meaning: "Overwhelmingly happy; beyond joy" },
    { synonym: "elated", meaning: "Lifted up with joy; proudly happy" },
    { synonym: "thrilled", meaning: "Filled with sudden, exciting pleasure" },
    { synonym: "overjoyed", meaning: "Extremely happy; filled with joy" }
  ],
  "very hard": [
    { synonym: "arduous", meaning: "Demanding great effort" },
    { synonym: "rigorous", meaning: "Strict, thorough, and demanding" }
  ],
  "very hot": [
    { synonym: "scorching", meaning: "Burning hot; intense heat" },
    { synonym: "sweltering", meaning: "Oppressively hot and humid" },
    { synonym: "boiling", meaning: "Extremely hot; like boiling water" }
  ],
  "very hungry": [
    { synonym: "famished", meaning: "Extremely hungry; starving" },
    { synonym: "ravenous", meaning: "Furiously hungry; eager to eat" }
  ],
  "very important": [
    { synonym: "crucial", meaning: "Decisive; absolutely necessary" },
    { synonym: "vital", meaning: "Essential to life or success" },
    { synonym: "paramount", meaning: "Above all others in importance" },
    { synonym: "pivotal", meaning: "Central and decisive; turning-point important" }
  ],
  "very interesting": [
    { synonym: "fascinating", meaning: "Extremely interesting; captivating attention" },
    { synonym: "riveting", meaning: "So interesting you cannot look away" },
    { synonym: "intriguing", meaning: "Arousing curiosity; mysteriously interesting" }
  ],
  "very kind": [
    { synonym: "benevolent", meaning: "Kind and generous; wishing good for others" },
    { synonym: "compassionate", meaning: "Feeling and showing deep sympathy" }
  ],
  "very large": [
    { synonym: "colossal", meaning: "Enormous; like a giant statue" },
    { synonym: "mammoth", meaning: "Huge in size or scale" },
    { synonym: "vast", meaning: "Immensely wide or extensive" }
  ],
  "very little": [
    { synonym: "tiny", meaning: "Extremely small" },
    { synonym: "minuscule", meaning: "Extremely small; microscopic" },
    { synonym: "minute", meaning: "Exceptionally small; insignificant in size" }
  ],
  "very loud": [
    { synonym: "deafening", meaning: "So loud it overwhelms hearing" },
    { synonym: "thunderous", meaning: "Loud like thunder; booming" }
  ],
  "very mean": [
    { synonym: "cruel", meaning: "Willfully causing pain or suffering" },
    { synonym: "vicious", meaning: "Brutally mean; savage" },
    { synonym: "malicious", meaning: "Intending to harm; spiteful" }
  ],
  "very messy": [
    { synonym: "cluttered", meaning: "Filled with disorderly things" },
    { synonym: "disheveled", meaning: "Untidy; rumpled in appearance" }
  ],
  "very old": [
    { synonym: "ancient", meaning: "Belonging to the very distant past" },
    { synonym: "antiquated", meaning: "Old-fashioned; outdated" },
    { synonym: "archaic", meaning: "Very old; no longer in current use" }
  ],
  "very old (person)": [
    { synonym: "elderly", meaning: "Old; advanced in years (polite)" },
    { synonym: "aged", meaning: "Having lived many years" }
  ],
  "very pale": [
    { synonym: "ashen", meaning: "Pale like ash; gray-faced" },
    { synonym: "pallid", meaning: "Unnaturally pale; lacking color" }
  ],
  "very poor": [
    { synonym: "destitute", meaning: "Extremely poor; lacking basic needs" },
    { synonym: "impoverished", meaning: "Made poor; reduced to poverty" },
    { synonym: "penniless", meaning: "Having no money at all" }
  ],
  "very pretty": [
    { synonym: "lovely", meaning: "Delightfully pretty; charming" },
    { synonym: "picturesque", meaning: "Pretty like a picture; scenic" }
  ],
  "very quiet": [
    { synonym: "silent", meaning: "Absolutely no sound" },
    { synonym: "hushed", meaning: "Quiet and still; softened in sound" }
  ],
  "very rich": [
    { synonym: "wealthy", meaning: "Having great wealth; affluent" },
    { synonym: "affluent", meaning: "Prosperous; having plenty of money" },
    { synonym: "opulent", meaning: "Rich and luxurious; lavish" }
  ],
  "very sad": [
    { synonym: "sorrowful", meaning: "Full of deep sadness" },
    { synonym: "heartbroken", meaning: "Devastated by grief or loss" },
    { synonym: "despondent", meaning: "Low in spirit; hopelessly sad" }
  ],
  "very scared": [
    { synonym: "terrified", meaning: "Extremely frightened" },
    { synonym: "petrified", meaning: "Frozen with fear; paralyzed by terror" },
    { synonym: "horrified", meaning: "Filled with horror and shock" }
  ],
  "very sharp": [
    { synonym: "keen", meaning: "Finely sharp; able to cut easily" },
    { synonym: "razor-sharp", meaning: "Extremely sharp; like a razor" }
  ],
  "very shiny": [
    { synonym: "gleaming", meaning: "Shining brightly, often with reflected light" },
    { synonym: "glossy", meaning: "Smooth and shiny on the surface" }
  ],
  "very short": [
    { synonym: "brief", meaning: "Short in duration" },
    { synonym: "concise", meaning: "Short and clear; saying much in few words" },
    { synonym: "fleeting", meaning: "Passing quickly; momentary" }
  ],
  "very shy": [
    { synonym: "timid", meaning: "Lacking confidence; easily frightened" },
    { synonym: "bashful", meaning: "Shy and easily embarrassed" },
    { synonym: "reserved", meaning: "Keeping to oneself; not outgoing" }
  ],
  "very silly": [
    { synonym: "ridiculous", meaning: "Absurd; deserving mockery" },
    { synonym: "absurd", meaning: "Wildly unreasonable; nonsensical" },
    { synonym: "preposterous", meaning: "Completely absurd; contrary to reason" }
  ],
  "very sleepy": [
    { synonym: "drowsy", meaning: "Half-asleep; sleepy" },
    { synonym: "lethargic", meaning: "Sluggish and lacking energy" }
  ],
  "very slow": [
    { synonym: "sluggish", meaning: "Moving slowly; lacking speed" },
    { synonym: "plodding", meaning: "Slow and heavy; laborious" }
  ],
  "very small": [
    { synonym: "tiny", meaning: "Extremely small" },
    { synonym: "miniature", meaning: "Small-scale; reduced in size" }
  ],
  "very smart": [
    { synonym: "brilliant", meaning: "Exceptionally intelligent" },
    { synonym: "astute", meaning: "Sharply perceptive; clever" },
    { synonym: "shrewd", meaning: "Practically clever; sharp in judgment" }
  ],
  "very smooth": [
    { synonym: "sleek", meaning: "Smooth and elegant in form" },
    { synonym: "silky", meaning: "Smooth like silk; soft and even" }
  ],
  "very soft": [
    { synonym: "velvety", meaning: "Soft like velvet; smooth to touch" },
    { synonym: "plush", meaning: "Luxuriously soft and rich" },
    { synonym: "downy", meaning: "Soft and fluffy like down feathers" }
  ],
  "very strong": [
    { synonym: "powerful", meaning: "Having great force or strength" },
    { synonym: "sturdy", meaning: "Solidly built; strongly constructed" },
    { synonym: "robust", meaning: "Strong, healthy, and vigorous" }
  ],
  "very stupid": [
    { synonym: "idiotic", meaning: "Extremely stupid; foolish" },
    { synonym: "foolish", meaning: "Lacking good sense" },
    { synonym: "moronic", meaning: "Very stupid; like a moron" }
  ],
  "very sure": [
    { synonym: "certain", meaning: "Completely sure; having no doubt" },
    { synonym: "convinced", meaning: "Firmly persuaded" }
  ],
  "very sweet": [
    { synonym: "saccharine", meaning: "Excessively sweet; sickly sweet" },
    { synonym: "cloying", meaning: "So sweet it becomes sickening" }
  ],
  "very tall": [
    { synonym: "towering", meaning: "Very tall; rising high above" }
  ],
  "very tasty": [
    { synonym: "delicious", meaning: "Highly pleasant in taste" },
    { synonym: "delectable", meaning: "Delightfully tasty; highly enjoyable" },
    { synonym: "scrumptious", meaning: "Informal; extremely delicious" }
  ],
  "very thirsty": [
    { synonym: "parched", meaning: "Extremely thirsty; dried out" },
    { synonym: "dehydrated", meaning: "Lacking water; medically thirsty" }
  ],
  "very tired": [
    { synonym: "exhausted", meaning: "Completely drained of energy" },
    { synonym: "fatigued", meaning: "Tired from effort or stress" },
    { synonym: "weary", meaning: "Tired and worn down, often emotionally" }
  ],
  "very ugly": [
    { synonym: "hideous", meaning: "Extremely ugly; horrifying to look at" },
    { synonym: "grotesque", meaning: "Ugly in a distorted, unnatural way" },
    { synonym: "unsightly", meaning: "Ugly and unpleasant to see" }
  ],
  "very unhappy": [
    { synonym: "miserable", meaning: "Deeply unhappy; wretched" },
    { synonym: "dejected", meaning: "Low in spirits; disheartened" },
    { synonym: "forlorn", meaning: "Sad and lonely; abandoned" }
  ],
  "very warm": [
    { synonym: "balmy", meaning: "Pleasantly warm; mild" },
    { synonym: "toasty", meaning: "Comfortably warm" }
  ],
  "very weak": [
    { synonym: "feeble", meaning: "Very weak; lacking strength" },
    { synonym: "frail", meaning: "Physically weak and delicate" },
    { synonym: "fragile", meaning: "Easily broken; delicate" }
  ],
  "very wet": [
    { synonym: "soaked", meaning: "Completely wet; saturated" },
    { synonym: "drenched", meaning: "Thoroughly wet; soaked through" },
    { synonym: "saturated", meaning: "Holding as much water as possible" }
  ],
  "very wide": [
    { synonym: "expansive", meaning: "Covering a wide area" },
    { synonym: "broad", meaning: "Wide in extent" }
  ],
  "very wise": [
    { synonym: "sage", meaning: "Deeply wise; showing profound judgment" },
    { synonym: "shrewd", meaning: "Clever and practical in judgment" },
    { synonym: "discerning", meaning: "Able to judge well; perceptive" }
  ],
  "very worried": [
    { synonym: "anxious", meaning: "Worried and uneasy" },
    { synonym: "distressed", meaning: "Suffering from worry or pain" },
    { synonym: "frantic", meaning: "Wild with worry or fear" }
  ]
};

const input = document.getElementById('userInput');
const resultDiv = document.getElementById('result');

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') findSynonyms();
});

function findSynonyms() {
  const raw = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
  resultDiv.innerHTML = '';

  if (!raw) {
    resultDiv.innerHTML = `
      <div class="error">Please type something like "very angry" or "very big".</div>`;
    return;
  }
  let query = raw;
  if (!query.startsWith('very ')) query = 'very ' + query;

  const matches = synonymsDB[query];
  if (!matches) {
    // Try to find partial matches for helpful suggestions
    const partial = Object.keys(synonymsDB).filter(k => k.includes(raw) || raw.includes(k.replace('very ','')));
    let hint = '';
    if (partial.length) {
      hint = `<p style="margin-top:10px;color:#718096;">Did you mean: 
        ${partial.slice(0,5).map(p => `<strong>${p}</strong>`).join(', ')}?</p>`;
    }
    resultDiv.innerHTML = `
      <div class="error">
        No synonyms found for "<strong>${raw}</strong>".<br>
        Try one of the suggested chips above.
        ${hint}
      </div>`;
    return;
  }

  resultDiv.innerHTML = `<div class="count">Found ${matches.length} synonym${matches.length>1?'s':''} for "<strong>${query}</strong>"</div>`;

  matches.forEach(m => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <div class="origina text-white">Instead of: ${query}</div>
      <div class="synonym text-white">${m.synonym}</div>
      <div class="meaning text-white">${m.meaning}</div>
    `;
    resultDiv.appendChild(card);
  });
}



