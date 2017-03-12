
const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

const fetch = require('node-fetch');

function* createQuoteFetcher() {
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} -${quote.quoteAuthor}`;
}

const coroutine = (gen) => {
  const generator = gen()

  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value);

    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)));
  }
  return handle(generator.next());
}

// note: there is npm module that does the handler code for us --> the `co` package

// prettier code via writing handler that goes through all the manual back and forth between generator and promises
const quoteFetcher = coroutine(createQuoteFetcher);

quoteFetcher.then(quote => console.log(quote));

// old uglier code
// const quoteFetcher = createQuoteFetcher();

// quoteFetcher.next().value
//   .then(res => quoteFetcher.next(res).value)
//   .then(res => quoteFetcher.next(res).value)
//   .then(quote => console.log(quote))
//   .catch(err => console.log(err));

/*
generators pass back info with yield or with return
we pass info back to the generator using the generator.next() method

the example above, first we kick off generator
it stops at yield fetch(url) and gives us a promise
when promise resolves, we pass back result to generator
it then stops at yield response.json() which gives us another promise
again, when promise resolves, we pass back result to generator

it's basically back and forth between generator and various promises

note: we can wrap the code to make it much prettier and DRY
 */
