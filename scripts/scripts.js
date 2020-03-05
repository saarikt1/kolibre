const KOLIBRE_ID = 9321674;

fetch('https://api.songkick.com/api/3.0/artists/190740/calendar.json?apikey=hynKk019PMWTRsXP')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.resultsPage.results.event[0].start.date);
    console.log(data.resultsPage.results.event[0].venue.displayName);
  });