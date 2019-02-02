// Time used to check if there was more information loaded after a scroll (ms)
const MAX_INFO_LOAD_TIME = 10000

function scrap() {
  // Variable used to store the results
  var results = []
  // Find all profiles
  var profiles = document.querySelectorAll('a._3cb8');
  // Save each profile to the results array
  profiles.forEach(function(profile) {
    results.push({
      'name': profile.innerText,
      'id': profile.getAttribute('href').replace('/', '')
    });
  });
  // Find the dates since each profile liked the page
  var dates = document.querySelectorAll('abbr.livetimestamp');
  // Add the dates to their corresponding results
  dates.forEach(function(element, index) {
    results[index]['liked_since'] = element.innerText;
  });

  return results;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollToBottomAndScrap() {
  // Scroll position
  var scrollTo = 0;
  // Scroll until the bottom is hit
  while (scrollTo < document.body.scrollHeight) {
    scrollTo = document.body.scrollHeight;
    window.scrollTo(0, scrollTo);
    // This gives time to the page to load more content if there is left
    await sleep(MAX_INFO_LOAD_TIME);
  }
  // Scrap and log the results into the console
  console.log(scrap());
}

scrollToBottomAndScrap();
