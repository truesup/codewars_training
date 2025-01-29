async function sayJoke(apiUrl, jokeId){
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (!data.jokes || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }
    
    const joke = data.jokes.find(joke => joke.id === jokeId);
​
    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }
​
    return {
      saySetup() {
        return joke.setup;
      },
      sayPunchLine() {
        return joke.punchLine;
      }
    };
  } catch (error) {
    throw error;
  }
}